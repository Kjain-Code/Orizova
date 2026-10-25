/* eslint-disable no-console */
/**
 * Run after adding a city (src/data/locations/cities/<slug>.js) or an industry
 * (src/data/industries/more/<slug>.js):   npm run sync-pages
 *
 * 1. Adds/updates their routes in src/data/site/seo.json (title, description,
 *    H1 from each file's `meta`), so the pre-renderer builds them and they go
 *    into sitemap.xml and llms.txt. Existing lastmod dates are kept.
 * 2. Regenerates the lightweight citiesIndex / cityServicesIndex in
 *    src/data/site/siteIndex.js (used by the footer, home page and hubs).
 * 3. Warns about titles over 60 characters, descriptions outside 110–160
 *    characters, and pages missing a quick answer or meta.
 * New industries also need a line in industriesIndex (siteIndex.js).
 */
const fs = require('fs'); const path = require('path');
const esbuild = require('esbuild');
const ROOT = path.join(__dirname, '..');
const TODAY = new Date().toISOString().slice(0, 10);
const TMP = path.join(ROOT, 'node_modules', '.cache', 'orizova-sync');
fs.mkdirSync(TMP, { recursive: true });
const load = (rel) => {
  const out = path.join(TMP, rel.replace(/\W/g, '_') + '.cjs');
  esbuild.buildSync({ entryPoints: [path.join(ROOT, rel)], bundle: true, platform: 'node', format: 'cjs', outfile: out, loader: { '.js': 'jsx', '.webp': 'empty', '.mp4': 'empty' }, logLevel: 'error' });
  delete require.cache[out]; return require(out).default;
};
const seoPath = path.join(ROOT, 'src/data/site/seo.json');
const seo = JSON.parse(fs.readFileSync(seoPath, 'utf8'));
const warn = [];
const upsert = (route, afterPrefix) => {
  if (route.title.length > 60) warn.push(`title ${route.title.length}: ${route.path}`);
  if (route.description.length < 110 || route.description.length > 160) warn.push(`desc ${route.description.length}: ${route.path}`);
  const i = seo.routes.findIndex((r) => r.path === route.path);
  if (i >= 0) { seo.routes[i] = { ...seo.routes[i], ...route, lastmod: seo.routes[i].lastmod || route.lastmod }; return; }
  let at = -1; seo.routes.forEach((r, k) => { if (r.path.startsWith(afterPrefix)) at = k; });
  seo.routes.splice(at + 1, 0, route);
};
// cities
const cities = load('src/data/locations/cities/index.js');
cities.forEach((c) => {
  Object.entries(c.meta).forEach(([p, m]) => {
    const parts = p.split('/').filter(Boolean);
    const key = parts.length === 2 ? `city:${parts[1]}` : `cityservice:${parts[1]}/${parts[2]}`;
    upsert({ key, path: p, priority: parts.length === 2 ? '0.8' : '0.9', ...m, lastmod: m.lastmod || TODAY }, '/locations');
  });
  // sanity: every page has meta + answer
  [c.hub.slug].map((s) => `/locations/${s}`).concat(c.pages.map((pg) => `/locations/${pg.city}/${pg.service}`)).forEach((p) => {
    if (!c.meta[p]) warn.push('no meta ' + p); if (!c.answers[p]) warn.push('no answer ' + p);
  });
});
// industries (optional)
let industries = [];
if (fs.existsSync(path.join(ROOT, 'src/data/industries/more/index.js'))) {
  industries = load('src/data/industries/more/index.js');
  industries.forEach((ind) => {
    const p = `/industries/${ind.slug}`;
    upsert({ key: `industry:${ind.slug}`, path: p, priority: '0.8', ...ind.meta, lastmod: TODAY }, '/industries');
    if (!ind.answer) warn.push('no answer ' + p);
  });
}
fs.writeFileSync(seoPath, JSON.stringify(seo, null, 2) + '\n');

// siteIndex generated blocks
const locations = load('src/data/locations/locations.js');
const cityServices = load('src/data/locations/cityServices.js');
const sitePath = path.join(ROOT, 'src/data/site/siteIndex.js');
let site = fs.readFileSync(sitePath, 'utf8');
const q = (s) => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const ZONES = {
  'Delhi NCR': ['delhi', 'noida', 'greater-noida', 'ghaziabad', 'indirapuram', 'gurugram', 'faridabad'],
  'Uttar Pradesh': ['lucknow', 'meerut', 'agra', 'kanpur', 'varanasi'],
  'Punjab, Haryana & Chandigarh Tricity': ['chandigarh', 'mohali', 'panchkula', 'ludhiana'],
  'Rajasthan & Uttarakhand': ['jaipur', 'dehradun'],
  'South & West India': ['hyderabad', 'bengaluru', 'pune', 'mumbai'],
};
const zoneOf = (slug) => { const z = Object.entries(ZONES).find(([, l]) => l.includes(slug)); if (!z) warn.push('no zone ' + slug); return z ? z[0] : 'Other'; };
const zoneOrder = Object.values(ZONES).flat();
const sortedLocs = [...locations].sort((a, b) => zoneOrder.indexOf(a.slug) - zoneOrder.indexOf(b.slug));
const citiesBlock = `export const cityZones = [${Object.keys(ZONES).map(q).join(', ')}];\n\nexport const citiesIndex = [\n${sortedLocs.map((l) => `  { slug: ${q(l.slug)}, city: ${q(l.city)}, region: ${q(l.region)}, zone: ${q(zoneOf(l.slug))} },`).join('\n')}\n];`;
const csBlock = `export const cityServicesIndex = [\n${cityServices.map((c) => `  { city: ${q(c.city)}, service: ${q(c.service)}, label: ${q(c.label)} },`).join('\n')}\n];`;
const replaceBlock = (src, name, block) => {
  const re = new RegExp(`export const ${name} = \\[[\\s\\S]*?\\n\\];`);
  if (re.test(src)) return src.replace(re, block);
  return src.replace('export const postsIndex', `${block}\n\nexport const postsIndex`);
};
site = site.replace(/export const cityZones = .*;\n\n/, '');
site = replaceBlock(site, 'citiesIndex', citiesBlock);
site = replaceBlock(site, 'cityServicesIndex', csBlock);
fs.writeFileSync(sitePath, site);
console.log(`cities: ${locations.length}, city×service: ${cityServices.length}, routes: ${seo.routes.length}`);
if (warn.length) console.log('WARN\n' + warn.join('\n'));
