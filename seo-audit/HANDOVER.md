# Handover — Orizova Digital SEO build (Phase 3–5)

Date: 2 Oct 2026

## 1. Summary
**Pages: 16 → 51 indexable URLs** (+ real 404).
- New (35): 5 service pages (Social Media, Meta Ads, Google Ads, Local SEO, Video Editing) · 8 service×city pages (Website Development + SEO × Ghaziabad/Noida/Delhi/Chandigarh) · Industries hub + 5 industry pages · Blog index + 9 posts · FAQ hub · 3 portfolio project pages · Privacy Policy · Terms.
- Improved (16): Home (industries strip, blog strip, 2 more FAQs), Services hub, all 6 original service pages (≈200 → 600–1,000+ words, unique copy), 4 city hubs (≈430 → 790–890 words), About, Contact, Portfolio, Creative Work.
- No page deleted, no URL changed → no redirects needed. Nav gained "Industries" and "Blog".

**Technical fixes**
- Real static HTML for every page: `scripts/prerender.js` now renders the actual React page at build time (React 19 static prerender). Crawlers get the full text — e.g. Noida page went from ~120 words of fallback HTML to ~850 words.
- Proper 404: `build/404.html` + `vercel.json` (`framework: null`, cleanUrls, no trailing slash) so unknown URLs return HTTP 404 instead of the homepage. `public/.htaccess` does the same on Apache/GoDaddy.
- Every page: unique title (≈50–60 chars), description (≈130–160), canonical, OG/Twitter tags with absolute 1200×630 `og-image.png`, one H1, breadcrumbs.
- JSON-LD: ProfessionalService/Organization, WebSite, BreadcrumbList, Service, FAQPage, BlogPosting, Blog, CollectionPage, CreativeWork, ContactPage, AboutPage — all parse as valid JSON.
- Sitemap lists all 51 URLs with lastmod; robots.txt points to it.
- Videos: 11 originals (≈370 MB, 1080p, 8 in HEVC — which many browsers can't play) → web copies in `src/assets/videos-web/` (≈60 MB, 720p H.264, faststart) + poster images; videos load only on hover/click. Originals left untouched in `src/assets/videos/` (no longer used by the build).
- Contact form: no more `mailto:`; sends via Web3Forms when a key is set, otherwise opens WhatsApp with the enquiry; labels linked to inputs; Meta Pixel `Lead` event.
- Accessibility: visible focus outlines, `aria-expanded` on mobile menu, keyboard-playable video cards, labelled form fields.
- Optional GA4 loader (env var). `package-lock.json` synced (`npm ci` works again). `fetchPriority` React warning fixed.
- Honesty fixes: removed unverifiable claims (150+ projects, 98%, 50+ clients, 5+ years, 150% revenue, 100K+ leads, 5.0 rating, "Top Rated Agency", "24/7 support", "results they delivered"). Brand renamed "Orizova Co." → "Orizova Digital" everywhere (text only; logo image unchanged).

## 2. Verification (Phase 4)
- `npm run build` ✅ compiles, 0 ESLint errors, 51 pages pre-rendered.
- Headless Chrome on all 51 pages at 1366px and 390px: no horizontal scroll, exactly one H1, no images without alt, no JS/console errors (only blocked third-party fonts/pixel inside the test sandbox), no broken internal links (56 unique internal hrefs all resolve), unknown URL → 404 status with noindex.
- Static HTML check: title, description, canonical and OG image correct on every page; all JSON-LD valid.
- Lighthouse was not run (no Lighthouse in this environment) — run PageSpeed Insights on the live site after deploy.
- Fake-fact sweep: no invented clients, reviews, results, prices, awards or years. See TODO-placeholders.md.

## 3. Git commands (run inside the `frontend` folder)
```bash
git status
git checkout -b seo-upgrade
git add -A
git commit -m "SEO upgrade: 35 new pages, static prerender, 404, schema, compressed videos, honest trust copy"
git push -u origin seo-upgrade
# after checking the Vercel preview deployment:
git checkout main && git merge seo-upgrade && git push
```
Optional: the original videos in `src/assets/videos/` (~370 MB) are no longer used. You can move them out of the repo to keep git small — tell me and I'll do it.

## 4. Off-site checklist (priority order)
1. Deploy, then **Google Search Console**: verify (DNS TXT at GoDaddy), submit `https://orizovadigital.co.in/sitemap.xml`, request indexing for home, /services, the 4 city pages and the 5 new service pages.
2. **Google Business Profile**: create/claim as "Orizova Digital" (exact same name/phone/website), category "Internet marketing service" / "Website designer", service-area business if no public office; add services, photos, weekly posts.
3. **Reviews**: send your direct review link to every past client (WIPO Group, Ganesh Creation, FPS Subtitle, video clients). Genuine reviews only.
4. **GA4 + Web3Forms keys** → add to `.env.production` (see TODO list) and redeploy.
5. **Bing Webmaster Tools**: import from Search Console.
6. **Profiles**: LinkedIn company page, Facebook page, YouTube channel (upload the reels) → send me URLs for schema.
7. **Directories (identical NAP)**: Justdial, Sulekha, IndiaMART, Clutch, GoodFirms, DesignRush, TechBehemoths, Apple Business Connect, Bing Places.
8. **Client permissions**: testimonial + logo + any real numbers from each portfolio client.
9. **Backlinks**: "Designed by Orizova Digital" footer credit on client sites (with permission); local business associations in Noida/Ghaziabad/Chandigarh; guest posts.
10. Meta Business verification.

## 5. 90-day content plan
| Week | Blog post | Target keyword | Links to |
|---|---|---|---|
| 1 | SEO vs Google Ads: where should a small business start? | seo vs google ads | /services/seo, /services/google-ads |
| 2 | Website for dentists: checklist & examples | dental clinic website | /industries/clinics |
| 3 | How much do Google Ads cost in Delhi NCR? | google ads cost india | /services/google-ads |
| 4 | Instagram reels for real estate projects | real estate reels ideas | /industries/real-estate, /services/video-editing |
| 5 | WordPress vs Shopify vs custom website | wordpress vs shopify | /services/website-development, /services/ecommerce-solutions |
| 6 | How to get reviews on Google (without breaking rules) | how to get google reviews | /services/local-seo |
| 7 | Digital marketing for coaching centres in Ghaziabad | coaching centre marketing | /locations/ghaziabad |
| 8 | Restaurant website must-haves (menu, reservations, delivery) | restaurant website design | /industries/restaurants-cafes |
| 9 | Meta lead form vs landing page: which converts better? | facebook lead form vs landing page | /services/meta-ads |
| 10 | Interior designer marketing in Chandigarh Tricity | interior designer marketing | /industries/architects, /locations/chandigarh |
| 11 | Social media management cost in India — what affects it | social media management cost | /services/social-media-marketing |
| 12 | Website speed: why your site loses customers (and fixes) | website speed optimization | /services/website-development |
| 13 | Year-end local SEO audit for small businesses | local seo audit | /blog/local-seo-checklist, /services/local-seo |

Also during these 90 days: add Greater Noida / Mohali city-service pages only if you get real clients there; add case studies as soon as clients share results.
