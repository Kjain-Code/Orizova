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
