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
 *  2. For every route in src/data/site/seo.json, renders the REAL React page to
 *     HTML (React 19 `prerenderToNodeStream`, waits for lazy pages) and writes
 *     build/<route>/index.html with that page's full content and its own
 *     <title>, description, canonical, Open Graph/Twitter tags and JSON-LD.
 *  3. Writes build/404.html (served with HTTP 404 by vercel.json / .htaccess).
 *  4. Regenerates sitemap.xml (indexable routes only) and robots.txt (with
 *     explicit permission for AI search / answer-engine crawlers).
 *  5. Writes /llms.txt (brand summary + key pages with short answers) and
 *     /llms-full.txt (the full text of every page as Markdown) — the emerging
 *     standard that helps ChatGPT, Claude, Perplexity & co. read the site.
 *
 * The browser app then boots on top of the static HTML as usual.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const CACHE = path.join(ROOT, 'node_modules', '.cache', 'orizova-ssr');
const seo = require('../src/data/site/seo.json');

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

/** Read an optional setting from the environment or .env.production. */
const readEnv = (name) => {
  if (process.env[name]) return process.env[name].trim();
  const envFile = path.join(ROOT, '.env.production');
  if (fs.existsSync(envFile)) {
    const m = fs.readFileSync(envFile, 'utf8').match(new RegExp(`^${name}=(.*)$`, 'm'));
    if (m && m[1].trim()) return m[1].trim();
  }
  return '';
};
const esc = (v) => v.replace(/[&"<>]/g, (c) => ({ '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' }[c]));
// Search-engine ownership verification (optional). DNS verification in
// Search Console needs no code; these are for the "HTML tag" method.
const VERIFY_TAGS = [
  ['google-site-verification', readEnv('GOOGLE_SITE_VERIFICATION')],
  ['msvalidate.01', readEnv('BING_SITE_VERIFICATION')],
].filter(([, v]) => v).map(([n, v]) => `<meta name="${n}" content="${esc(v)}"/>`).join('');
// IndexNow (Bing, Yandex, Seznam, Naver): key file served from the site root.
const INDEXNOW_KEY = readEnv('INDEXNOW_KEY');

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

/** framer-motion renders "before animation" styles (opacity:0, translate) on
 *  the server. In static HTML that would hide content until JavaScript runs,
 *  so make every animated element visible in the pre-rendered page. */
const unhideAnimated = (html) =>
  html.replace(/style="([^"]*)"/g, (full, css) => {
    if (!/opacity:\s*0(?![.\d])/.test(css)) return full;
    const cleaned = css
      .replace(/opacity:\s*0(?![.\d]);?/g, '')
      .replace(/transform:[^;]*;?/g, '')
      .trim();
    return cleaned ? `style="${cleaned}"` : '';
  });

const markRh = (tag) => tag.replace(/^<(title|meta|link)\b/i, '<$1 data-rh="true"');

let MAIN_CSS = null;
const loadMainCss = (template) => {
  const m = template.match(/<link href="(\/static\/css\/main\.[a-f0-9]+\.css)" rel="stylesheet">/);
  if (!m) return null;
  const css = fs.readFileSync(path.join(BUILD, m[1]), 'utf8').replace(/\/\*# sourceMappingURL=.*?\*\//g, '');
  if (css.length > 150000 || /<\/style/i.test(css)) return null; // too big / unsafe to inline
  return { tag: m[0], css };
};

const buildPage = (template, html) => {
  const { tags, body: rawBody } = splitHead(html);
  const body = unhideAnimated(rawBody);
  let out = template;
  // Remove the template's own placeholder SEO tags (all marked data-rh).
  out = out.replace(/<title data-rh="true">[\s\S]*?<\/title>/gi, '');
  out = out.replace(/<meta data-rh="true"[^>]*>/gi, '');
  out = out.replace(/<link data-rh="true"[^>]*>/gi, '');
  out = out.replace(/<script data-rh="true" type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
  out = out.replace('</head>', `${VERIFY_TAGS}${tags.map(markRh).join('')}</head>`);
  // Inline the main stylesheet (≈14 KB gzipped): removes the render-blocking
  // CSS request, so text paints sooner on slow mobile connections.
  if (MAIN_CSS) out = out.replace(MAIN_CSS.tag, `<style>${MAIN_CSS.css}</style>`);
  out = out.replace(/<div id="root">[\s\S]*?<\/div>(?=\s*<!--\s*Meta Pixel|\s*<script)/i, `<div id="root">${body}</div>`);
  return out;
};


// ---------- AEO / GEO helpers ----------
// AI crawlers that power ChatGPT, Claude, Perplexity, Gemini, Copilot, Apple
// Intelligence, Meta AI etc. A site has to be crawlable by them to be cited.
const AI_BOTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot', 'Applebot-Extended',
  'Bingbot', 'DuckAssistBot', 'meta-externalagent', 'MistralAI-User', 'CCBot',
];

const robotsTxt = () => `# Search engines and AI assistants are welcome to crawl this site.
# Orizova Digital wants to be found in Google, Bing, Google AI Overviews,
# ChatGPT, Claude, Perplexity, Gemini and Copilot answers.

${AI_BOTS.map((b) => `User-agent: ${b}`).join('\n')}
Allow: /

User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
# Plain-text summary for AI assistants: ${SITE_URL}/llms.txt
`;

const decode = (t) => t
  .replace(/&nbsp;|&#160;|&#xA0;/gi, ' ')
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
  .replace(/&#x([0-9a-f]+);/gi, (m, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&#(\d+);/g, (m, d) => String.fromCodePoint(Number(d)));

/** Very small HTML → Markdown for the <main> of a pre-rendered page. */
const mainToMarkdown = (html) => {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  let t = m ? m[1] : '';
  t = t
    .replace(/<(script|style|svg|noscript|video|picture)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<nav\b[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<span[^>]*aria-hidden="true"[^>]*>[^<]*<\/span>/gi, ' ')
    .replace(/<h1[^>]*>/gi, '\n\n# ').replace(/<h2[^>]*>/gi, '\n\n## ').replace(/<h3[^>]*>/gi, '\n\n### ').replace(/<h4[^>]*>/gi, '\n\n#### ')
    .replace(/<\/h[1-4]>/gi, '\n\n')
    .replace(/<li[^>]*>/gi, '\n- ')
    .replace(/<dt[^>]*>/gi, '\n- **').replace(/<\/dt>/gi, '**: ')
    .replace(/<(p|div|section|ul|ol|dl|article|aside|br)\b[^>]*>/gi, '\n')
    .replace(/<[^>]+>/g, ' ');
  return decode(t)
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .filter((line, i, arr) => line && line !== '-' && !(line.startsWith('#') && line === arr[i - 1]))
    .join('\n')
    .replace(/\n(#{1,4} )/g, '\n\n$1')
    .replace(/(#{1,4} [^\n]+)\n/g, '$1\n\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
};

const SECTIONS = [
  ['Company', (r) => ['home', 'about', 'contact', 'faq'].includes(r.key)],
  ['Services', (r) => r.key === 'services' || r.key.startsWith('service:')],
  ['Locations', (r) => r.key === 'locations' || r.key.startsWith('city:') || r.key.startsWith('cityservice:')],
  ['Industries', (r) => r.key === 'industries' || r.key.startsWith('industry:')],
  ['Work', (r) => ['portfolio', 'creativeWork'].includes(r.key) || r.key.startsWith('project:')],
  ['Guides', (r) => r.key === 'blog' || r.key.startsWith('post:')],
];

const llmsTxt = ({ answers, facts, contact }, routes) => {
  const url = (p) => `${SITE_URL}${p === '/' ? '/' : p}`;
  const line = (r) => {
    const a = answers[r.path];
    const desc = a ? a.a.replace(/^Yes\. /, '') : r.description;
    return `- [${r.h1 || r.title}](${url(r.path)}): ${desc}`;
  };
  const used = new Set();
  const groups = SECTIONS.map(([name, test]) => {
    const items = routes.filter((r) => !used.has(r.path) && test(r));
    items.forEach((r) => used.add(r.path));
    return items.length ? `## ${name}\n\n${items.map(line).join('\n')}` : '';
  }).filter(Boolean);
  const rest = routes.filter((r) => !used.has(r.path));
  if (rest.length) groups.push(`## Optional\n\n${rest.map(line).join('\n')}`);

  const factLines = [
    `- Name: ${facts.name}${facts.alsoKnownAs.length ? ` (also: ${facts.alsoKnownAs.join(', ')})` : ''}`,
    `- What it is: ${facts.type}`,
    `- Based in: ${facts.basedIn}`,
    facts.founded && `- Founded: ${facts.founded}`,
    facts.founders.length && `- Founder(s): ${facts.founders.join(', ')}`,
    `- Serves: ${facts.serves.join(', ')}`,
    `- Services: ${facts.services.join('; ')}`,
    `- Industries: ${facts.industries.join('; ')}`,
    `- Languages: ${facts.languages.join(', ')}`,
    `- How it works: ${facts.workingPrinciples.join('; ')}`,
    `- Website portfolio: ${facts.notableWork.join('; ')}`,
    `- Contact: phone/WhatsApp ${facts.phone}, email ${facts.email}, Instagram ${facts.instagram}, contact page ${url('/contact')}`,
    contact.sameAs.length > 1 && `- Official profiles: ${contact.sameAs.join(', ')}`,
  ].filter(Boolean);

  return `# ${facts.name}

> ${answers['/'].a}

This file summarises ${facts.name}'s website for AI assistants and answer engines. Every page below is also available as plain HTML; the full text of all pages is in ${SITE_URL}/llms-full.txt.

## Key facts

${factLines.join('\n')}

${groups.join('\n\n')}
`;
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
  MAIN_CSS = loadMainCss(template);
  if (MAIN_CSS) console.log(`  ✓ main CSS inlined (${Math.round(MAIN_CSS.css.length / 1024)} KB)`);

  const ssr = await buildSsrBundle();
  const { render } = ssr;
  const fullText = [];
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
      if (!route.noindex) {
        const loc = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
        fullText.push(`<page url="${loc}">\n\n${mainToMarkdown(page)}\n\n</page>`);
      }
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
  fs.writeFileSync(path.join(BUILD, 'robots.txt'), robotsTxt());

  // llms.txt + llms-full.txt for AI assistants (GEO).
  fs.writeFileSync(path.join(BUILD, 'llms.txt'), llmsTxt(ssr, indexable));
  fs.writeFileSync(
    path.join(BUILD, 'llms-full.txt'),
    `# ${ssr.facts.name} — full site text\n\n> Plain-text copy of every page on ${SITE_URL}, for AI assistants. Summary: ${SITE_URL}/llms.txt\n\n${fullText.join('\n\n')}\n`
  );
  console.log('  ✓ robots.txt (AI crawlers allowed), llms.txt, llms-full.txt');

  if (INDEXNOW_KEY) {
    if (!/^[a-zA-Z0-9-]{8,128}$/.test(INDEXNOW_KEY)) throw new Error('INDEXNOW_KEY must be 8-128 letters, digits or dashes');
    fs.writeFileSync(path.join(BUILD, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY);
    console.log(`  ✓ IndexNow key file /${INDEXNOW_KEY}.txt`);
  }
  if (VERIFY_TAGS) console.log('  ✓ search-engine verification meta tags added');

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
