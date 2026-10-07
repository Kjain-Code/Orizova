/* eslint-disable no-console */
/**
 * Notify IndexNow search engines (Bing, Yandex, Seznam, Naver) about every
 * indexable URL. Google does NOT use IndexNow — for Google use Search Console
 * (sitemap + "Request indexing").
 *
 * Run AFTER the new build is live (the key file must be reachable at
 * https://orizovadigital.co.in/<INDEXNOW_KEY>.txt):
 *     npm run indexnow
 * Only re-run when pages are added or meaningfully changed.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const seo = require('../src/data/seo.json');
const env = fs.existsSync(path.join(ROOT, '.env.production')) ? fs.readFileSync(path.join(ROOT, '.env.production'), 'utf8') : '';
const get = (k) => process.env[k] || ((env.match(new RegExp(`^${k}=(.*)$`, 'm')) || [])[1] || '').trim();

const SITE_URL = (get('REACT_APP_SITE_URL') || seo.defaultSiteUrl).replace(/\/$/, '');
const KEY = get('INDEXNOW_KEY');
if (!KEY) { console.error('INDEXNOW_KEY is not set in .env.production'); process.exit(1); }

const host = new URL(SITE_URL).host;
const urlList = seo.routes.filter((r) => !r.noindex).map((r) => `${SITE_URL}${r.path === '/' ? '/' : r.path}`);
const body = JSON.stringify({ host, key: KEY, keyLocation: `${SITE_URL}/${KEY}.txt`, urlList });

const req = https.request({
  hostname: 'api.indexnow.org', path: '/indexnow', method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body) },
}, (res) => {
  console.log(`IndexNow: HTTP ${res.statusCode} for ${urlList.length} URLs (200/202 = accepted)`);
  res.resume();
});
req.on('error', (e) => { console.error('IndexNow request failed:', e.message); process.exit(1); });
req.end(body);
