/* eslint-disable no-console */
/**
 * Post-build SEO step (runs automatically after `npm run build`).
 *
 * The site is a React single-page app. Without this step every URL would ship
 * the same nearly-empty index.html, so Google's first pass, Bing, AI crawlers
 * and WhatsApp/LinkedIn previews would see almost no content.
 *
 * What it does:
 *  1. Bundles src/ssr-entry.jsx with esbuild (Node target).
 *  2. For every route in src/data/seo.json, renders the REAL React page to
 *     HTML (React 19 `prerenderToNodeStream`, waits for lazy pages) and writes
 *     build/<route>/index.html with that page's full content and its own
 *     <title>, description, canonical, Open Graph/Twitter tags and JSON-LD.
 *  3. Writes build/404.html (served with HTTP 404 by vercel.json / .htaccess).
 *  4. Regenerates sitemap.xml (indexable routes only) and robots.txt.
 *
 * The browser app then boots on top of the static HTML as usual.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const CACHE = path.join(ROOT, 'node_modules', '.cache', 'orizova-ssr');
const seo = require('../src/data/seo.json');

const readEnvUrl = () => {
  if (process.env.REACT_APP_SITE_URL) return process.env.REACT_APP_SITE_URL;
  const envFile = path.join(ROOT, '.env.production');
  if (fs.existsSync(envFile)) {
    const m = fs.readFileSync(envFile, 'utf8').match(/^REACT_APP_SITE_URL=(.+)$/m);
    if (m) return m[1].trim();
  }
  return seo.defaultSiteUrl;
};
const SITE_URL = readEnvUrl().replace(/\/$/, '');

// ---------- 1. bundle the SSR entry ----------
const MEDIA_EXT = /\.(png|jpe?g|gif|webp|avif|svg|ico|mp4|webm|mov)$/i;

const buildSsrBundle = async () => {
  const esbuild = require('esbuild');
  const manifest = JSON.parse(fs.readFileSync(path.join(BUILD, 'asset-manifest.json'), 'utf8')).files;
  // CRA hashes media files: map "static/media/<name>.<ext>" -> hashed URL so
  // pre-rendered <img>/<video> point at the same files the browser build uses.
  const mediaByName = {};
  Object.entries(manifest).forEach(([key, url]) => {
    if (key.startsWith('static/media/')) mediaByName[key.replace('static/media/', '')] = url;
  });

  const mediaPlugin = {
    name: 'cra-media',
    setup(build) {
      build.onResolve({ filter: MEDIA_EXT }, (args) => ({
        path: path.resolve(args.resolveDir, args.path),
        namespace: 'cra-media',
      }));
      build.onLoad({ filter: /.*/, namespace: 'cra-media' }, (args) => {
        const base = path.basename(args.path);
        let url = mediaByName[base];
        if (!url) {
          // Small images are inlined by CRA as data URLs.
          const buf = fs.readFileSync(args.path);
          const ext = path.extname(base).slice(1).toLowerCase();
          const mime = { jpg: 'image/jpeg', jpeg: 'image/jpeg', svg: 'image/svg+xml', ico: 'image/x-icon', mp4: 'video/mp4' }[ext] || `image/${ext}`;
          url = `data:${mime};base64,${buf.toString('base64')}`;
        }
        return { contents: `module.exports = ${JSON.stringify(url)};`, loader: 'js' };
      });
    },
  };

  fs.mkdirSync(CACHE, { recursive: true });
  const outfile = path.join(CACHE, 'ssr-entry.cjs');
  await esbuild.build({
    entryPoints: [path.join(ROOT, 'src', 'ssr-entry.jsx')],
    bundle: true,
    platform: 'node',
    format: 'cjs',
    target: 'node18',
    outfile,
    jsx: 'automatic',
    loader: { '.js': 'jsx', '.css': 'empty' },
    packages: 'external',
    plugins: [mediaPlugin],
    define: {
      'process.env.NODE_ENV': '"production"',
      'process.env.REACT_APP_SITE_URL': JSON.stringify(SITE_URL),
    },
    logLevel: 'warning',
  });
  delete require.cache[outfile];
  return require(outfile);
};

// ---------- 2. helpers ----------
const HEAD_TAG = /<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>/gi;

/** React 19 emits <title>/<meta>/<link> from react-helmet-async at the start
 *  of the stream. Pull them out so they can go into <head>. */
const splitHead = (html) => {
  const tags = [];
  let body = html;
  // Only take the leading run of head tags (before the first real element).
  const lead = html.match(/^(\s*(?:<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>))+/i);
  if (lead) {
    const chunk = lead[0];
    tags.push(...(chunk.match(HEAD_TAG) || []));
    body = html.slice(chunk.length);
  }
  return { tags, body };
};

const markRh = (tag) => tag.replace(/^<(title|meta|link)\b/i, '<$1 data-rh="true"');

const buildPage = (template, html) => {
  const { tags, body } = splitHead(html);
  let out = template;
  // Remove the template's own placeholder SEO tags (all marked data-rh).
  out = out.replace(/<title data-rh="true">[\s\S]*?<\/title>/gi, '');
  out = out.replace(/<meta data-rh="true"[^>]*>/gi, '');
  out = out.replace(/<link data-rh="true"[^>]*>/gi, '');
  out = out.replace(/<script data-rh="true" type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
  out = out.replace('</head>', `${tags.map(markRh).join('')}</head>`);
  out = out.replace(/<div id="root">[\s\S]*?<\/div>(?=\s*<!--\s*Meta Pixel|\s*<script)/i, `<div id="root">${body}</div>`);
  return out;
};

// ---------- 3. main ----------
const main = async () => {
  const templatePath = path.join(BUILD, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('prerender: build/index.html not found — run react-scripts build first.');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf8');
  if (!/<div id="root">/.test(template)) throw new Error('prerender: #root not found in template');

  const { render } = await buildSsrBundle();
  let failures = 0;

  // Warm-up pass: the first render of each lazy page suspends while its module
  // loads, so React would stream it as a hidden placeholder. Rendering every
  // route once resolves all React.lazy() components; the real pass below then
  // outputs plain inline HTML.
  for (const route of seo.routes) {
    try { await render(route.path); } catch (e) { /* reported below */ }
  }
  await render('/__not-found__');

  for (const route of seo.routes) {
    try {
      const html = await render(route.path);
      const page = buildPage(template, html);
      const outDir = route.path === '/' ? BUILD : path.join(BUILD, route.path);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), page);
      const words = body2words(page);
      console.log(`  ✓ ${route.path}  (${words} words)`);
    } catch (err) {
      failures += 1;
      console.error(`  ✗ ${route.path}: ${err.stack || err}`);
    }
  }

  // 404 page — rendered from the app's NotFound route.
  const notFound = buildPage(template, await render('/__not-found__'));
  fs.writeFileSync(path.join(BUILD, '404.html'), notFound);
  console.log('  ✓ 404.html');

  // Sitemap — indexable routes only.
  const indexable = seo.routes.filter((r) => !r.noindex);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map((r) => {
    const loc = `${SITE_URL}${r.path === '/' ? '/' : r.path}`;
    const lastmod = r.lastmod ? `<lastmod>${r.lastmod}</lastmod>` : '';
    return `  <url><loc>${loc}</loc>${lastmod}<priority>${r.priority || '0.6'}</priority></url>`;
  })
  .join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(BUILD, 'sitemap.xml'), sitemap);
  fs.writeFileSync(
    path.join(BUILD, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
  );

  console.log(`prerender: ${seo.routes.length} pages + 404.html + sitemap.xml (${indexable.length} URLs) for ${SITE_URL}`);
  if (failures) {
    console.error(`prerender: ${failures} page(s) failed`);
    process.exit(1);
  }
};

function body2words(html) {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const text = (m ? m[1] : html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ');
  return text.split(/\s+/).filter(Boolean).length;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
