# Work Log — Orizova SEO project

Running list of every file created or changed in your project folder.

## 1 Oct 2026 — Phase 0–2 (research & plan only, no site code changed)
| File | Action | Why |
|---|---|---|
| seo-audit/references-extract.md | created | Phase 1A – competitor extraction |
| seo-audit/current-site-audit.md | created | Phase 0 + 1B – our codebase & site audit |
| seo-audit/gap-analysis.md | created | Phase 1C – gaps vs competitors |
| seo-audit/keyword-map.csv | created | Phase 1C – keyword → page map |
| seo-audit/site-plan.md | created | Phase 2 – plan awaiting approval |
| seo-audit/WORK-LOG.md | created | This log |

No source files, pages or URLs were modified.

## 2 Oct 2026 — Phase 3–5 (build, verify, handover)
**New files**
- vercel.json, public/.htaccess, public/og-image.png
- src/ssr-entry.jsx
- src/components/ContentBlocks.jsx, ContentPage.css, BlogCards.jsx, HomeExtras.jsx
- src/pages/CityServicePage.jsx, IndustriesPage.jsx, IndustryPage.jsx, BlogIndex.jsx, BlogPost.jsx, FaqPage.jsx, LegalPage.jsx, PortfolioDetail.jsx
- src/data/siteIndex.js, src/data/pages/{servicePages,cityServices,industries,faqs,legal}.js, src/data/blog/{index,posts-a,posts-b}.js
- src/assets/videos-web/*.mp4 (11) + posters/*.webp (11)
- seo-audit/TODO-placeholders.md, seo-audit/HANDOVER.md

**Changed files**
- package.json (esbuild devDependency), package-lock.json (re-synced)
- scripts/prerender.js (full static rendering, 404.html, sitemap, robots)
- public/index.html, public/manifest.json (brand name, GSC note)
- src/App.js (new routes, AppShell for prerender, no blank flash), src/index.js (prerender hand-off, optional GA4)
- src/components: Seo, Navbar(+css), Footer(+css), Hero(+css), About, WhyUs, Contact, AreasServed, Services, ServicesDetail, Projects, CreativeRingGallery, FeaturedWork & Preloader (brand name only)
- src/data: seo.json, services.js, locations.js, projects.js, contact.js, creativeWork.js
- src/pages: Home, ServicePage, ServicesPage, LocationPage, AboutPage, ContactPage, Portfolio, CreativeWork

**Not deleted:** original videos in src/assets/videos/ (now unused) and portfolio .jpg originals.

## 7 Oct 2026 — Indexing-readiness audit & fixes
Live site checked: all 52 URLs in sitemap, robots.txt OK, www→apex and trailing-slash redirects OK, unknown URLs return a real 404, full HTML is pre-rendered. Site is **not yet indexed** (no results for the domain or brand) — the main blocker is discovery (Search Console, Business Profile, links), not code.

**Fixed in code**
- Desktop CLS ≈ 0.43 on every inner page → 0: styles for code-split pages now ship in main.css (src/index.js), so pre-rendered pages no longer paint unstyled then jump.
- Truncated H1s: heading split dropped text after the second break (e.g. Local SEO page H1 lost "in Delhi NCR & Chandigarh", Meta Ads/Video/Real-estate lost their tails). New `splitHeading()` in PageBanner.jsx; em dash kept as separator.
- Weak H1s rewritten: About, Contact, 4 portfolio case studies (seo.json + pages).
- Internal links: new `guideIndex`/`RelatedGuides` — every blog post now linked from the service, industry and city pages it supports (posts went from 3–5 to 7–26 internal links); industries hub links industry guides; case studies link to service + industry pages.
- Mobile tap targets: footer, legal and "Available in" city links now ≥ 28–32px tall.
- Verification: GOOGLE_SITE_VERIFICATION / BING_SITE_VERIFICATION in .env.production are injected into every page by prerender.js.
- IndexNow (Bing/Yandex): key in .env.production, key file generated at build, `npm run indexnow` submits all URLs.
- Source maps no longer published (GENERATE_SOURCEMAP=false).
- Removed inaccurate geo.region=IN-UP meta (site also serves Delhi & Chandigarh).
- Sitemap lastmod updated for changed pages.
- Stale unit test fixed (brand name + jsdom matchMedia/scrollTo stubs).

**Verified**: build ✅, ESLint 0 errors ✅, test ✅, 52 pages + 404 pre-rendered, unique title/description/canonical on all, 1 H1 each, all JSON-LD valid, 0 broken internal links, 0 horizontal scroll at 390px, CLS 0 desktop & mobile, no console errors.
