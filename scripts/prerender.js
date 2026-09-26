/* eslint-disable no-console */
/**
 * Post-build SEO step (runs automatically after `npm run build`).
 *
 * This is a single-page React app, so every URL is served the same
 * build/index.html. That means Google's first look, WhatsApp/Facebook link
 * previews and many SEO tools saw the HOME title & description on every page.
 *
 * This script writes a copy of index.html for each route in src/data/seo.json
 * (e.g. build/locations/noida/index.html) with that page's own <title>,
 * description, canonical, Open Graph tags and a crawlable H1 + intro + links.
 * React then boots normally on top of it. It also regenerates sitemap.xml.
 *
 * No extra dependencies — plain Node.
 */
const fs = require('fs');
const path = require('path');

const BUILD = path.join(__dirname, '..', 'build');
const seo = require('../src/data/seo.json');

const readEnvUrl = () => {
  if (process.env.REACT_APP_SITE_URL) return process.env.REACT_APP_SITE_URL;
  const envFile = path.join(__dirname, '..', '.env.production');
  if (fs.existsSync(envFile)) {
    const m = fs.readFileSync(envFile, 'utf8').match(/^REACT_APP_SITE_URL=(.+)$/m);
    if (m) return m[1].trim();
  }
  return seo.defaultSiteUrl;
};

const SITE_URL = readEnvUrl().replace(/\/$/, '');

const esc = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const setMeta = (html, attr, key, value) => {
  const re = new RegExp(`(<meta[^>]*${attr}="${key}"[^>]*content=")[^"]*(")`, 'i');
  if (!re.test(html)) console.warn(`  ! meta ${attr}=${key} not found in template`);
  return html.replace(re, `$1${esc(value)}$2`);
};

const navLinks = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/services/website-development', 'Website Development'],
  ['/services/digital-marketing', 'Digital Marketing'],
  ['/services/seo', 'SEO Services'],
  ['/services/app-development', 'App Development'],
  ['/services/branding-designing', 'Branding & Design'],
  ['/services/ecommerce-solutions', 'E-commerce'],
  ['/locations/ghaziabad', 'Ghaziabad'],
  ['/locations/noida', 'Noida'],
  ['/locations/delhi', 'Delhi'],
  ['/locations/chandigarh', 'Chandigarh'],
  ['/portfolio', 'Portfolio'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

const renderFallback = (route) =>
  `<section id="seo-fallback"><h1>${esc(route.h1)}</h1><p>${esc(route.description)}</p><nav>${navLinks
    .map(([href, label]) => `<a href="${href}">${esc(label)}</a>`)
    .join('')}</nav></section>`;

const main = () => {
  const templatePath = path.join(BUILD, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('prerender: build/index.html not found — run react-scripts build first.');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf8');
  const today = new Date().toISOString().slice(0, 10);

  seo.routes.forEach((route) => {
    const canonical = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
    let html = template;
    html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title data-rh="true">${esc(route.title)}</title>`);
    html = setMeta(html, 'name', 'description', route.description);
    html = setMeta(html, 'property', 'og:title', route.title);
    html = setMeta(html, 'property', 'og:description', route.description);
    html = setMeta(html, 'property', 'og:url', canonical);
    html = setMeta(html, 'property', 'og:image', `${SITE_URL}/logo512.png`);
    html = setMeta(html, 'name', 'twitter:title', route.title);
    html = setMeta(html, 'name', 'twitter:description', route.description);
    html = setMeta(html, 'name', 'twitter:image', `${SITE_URL}/logo512.png`);
    html = html.replace(/(<link[^>]*rel="canonical"[^>]*href=")[^"]*(")/i, `$1${canonical}$2`);
    html = html.replace(/https:\/\/orizovadigital\.co\.in(?=[/"])/g, SITE_URL);
    html = html.replace(/<section id="seo-fallback">[\s\S]*?<\/section>/i, renderFallback(route));

    const outDir = route.path === '/' ? BUILD : path.join(BUILD, route.path);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    console.log(`  ✓ ${route.path}`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seo.routes
  .map(
    (r) =>
      `  <url><loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod><priority>${r.priority || '0.7'}</priority></url>`
  )
  .join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(BUILD, 'sitemap.xml'), sitemap);

  const robotsPath = path.join(BUILD, 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    const robots = fs
      .readFileSync(robotsPath, 'utf8')
      .replace(/^Sitemap:.*$/m, `Sitemap: ${SITE_URL}/sitemap.xml`);
    fs.writeFileSync(robotsPath, robots);
  }

  console.log(`prerender: ${seo.routes.length} pages + sitemap.xml written for ${SITE_URL}`);
};

main();
