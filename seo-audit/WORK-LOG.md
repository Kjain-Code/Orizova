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

## 24 Oct 2026 — AEO + GEO layer (answer engines & AI assistants)
See seo-audit/AEO-GEO.md for the full explanation and off-site checklist.

**New files**
- src/data/answers.js — quick answer (+ blog takeaways) for 55 pages
- src/data/facts.js — brand fact sheet (single source for About, llms.txt)
- seo-audit/AEO-GEO.md

**Changed files**
- src/components/ContentBlocks.jsx — QuickAnswer + FactSheet components
- src/components/ContentPage.css — styles for .qa and .facts
- src/components/Seo.jsx — WebPage schema (dateModified, speakable), OfferCatalog, knowsLanguage
- src/pages/* (Home, Services, Service, Location, CityService, Industries, Industry, Blog index, BlogPost, Portfolio, PortfolioDetail, CreativeWork, About, Contact, FAQ) — QuickAnswer added; BlogPost dateModified/Updated; About fact sheet
- src/components/AreasServed.jsx — Varanasi added to home FAQ (consistency)
- src/ssr-entry.jsx — exports data for llms.txt
- scripts/prerender.js — robots.txt with named AI crawlers, /llms.txt, /llms-full.txt
- public/robots.txt, vercel.json, public/.htaccess — AI bots + noindex header for llms files
- src/data/seo.json — lastmod 2026-10-24 for the 55 updated pages

**Verified**: build ✅, ESLint 0 errors ✅, test ✅, 57 pages pre-rendered, all JSON-LD valid, 1 H1 per page, quick answer on all 55 target pages, no horizontal scroll at 390px, no page errors.

## 24 Oct 2026 — Structure, India-wide main pages, locations hub, full test
**Site structure (URLs unchanged — no redirects needed)**
- Main pages target all of India: home, /services/*, /industries/* (H1, title, description, banner, schema areaServed = India).
- Location pages stay local: /locations/<city>, /locations/<city>/<service>.
- NEW hub page /locations (LocationsPage.jsx) linking every city and city×service page; added to navbar, footer ("Local Pages"), sitemap, llms.txt.
- Breadcrumbs now visible on every inner page (PageBanner `crumbs`) and match the BreadcrumbList schema; city pages: Home › Locations › City › Service.

**Code folder structure** (see README.md): src/components/{layout,seo,common,content,home,sections}, src/pages/{core,services,locations,industries,blog,work}, src/data/{site,services,locations,industries,work,blog}. Quick answers split per section (data/<section>/answers.js). Unused Preloader removed.
- Old copies of moved files are removed by running `cleanup-old-files.bat` once (double-click in the frontend folder).

**Content & design fixes**: honest "Why us" points, home section headings India-wide, service cards button always visible (was hover-only, invisible on phones), compact service cards on phones, floating buttons stacked on the right on phones (left button covered text), service counts read from data, ≥44px tap targets on small links.

**Tested**: build ✅ (58 pages + 404), ESLint 0 ✅, test ✅, axe WCAG 2 A/AA: 0 violations on all pages ✅, 0 broken internal links ✅, 1 H1 per page ✅, no horizontal scroll at 390px ✅, no JS errors ✅. Lighthouse mobile (with compression like Vercel): Performance ~91, Accessibility 100, Best Practices 100, SEO 100; CLS 0.

## 25 Oct 2026 — Pan-India city pages, 19 industries, quick-answer redesign
**Navigation & layout**
- "Locations" removed from the main menu (we work pan-India). City pages stay for SEO, linked from a quiet "Serving businesses across India" strip in the footer, a one-line city list on the home page, the /locations hub (now grouped by zone) and in-page links.
- "In India" removed from visible H1s on the service pages, /services and /about (titles and meta descriptions still mention India for ranking).
- Quick answer box redesigned as a quiet "In short" row and moved below the page intro on every template (blog posts keep a compact short answer at the top).
- Instagram floating button moved to the right, above WhatsApp (it covered text on the left); hero sparkle moved off the "Leads, Not Likes" card.

**New pages (65 new URLs → 123 total)**
- 17 new city/locality hubs, each with a website-development and an SEO page (51 pages): Lucknow, Indirapuram, Gurugram, Faridabad, Greater Noida, Meerut, Mohali, Panchkula, Jaipur, Agra, Kanpur, Dehradun, Ludhiana, Hyderabad, Pune, Bengaluru, Mumbai. Each is written for its own market (localities, industries, landmarks) — max 6-word-shingle overlap between any two city pages ≈ 23%, all from shared template sections.
- 14 new industry pages: dental clinics, skin/hair/aesthetic clinics, home services, hotels & travel, weddings & events, e-commerce & D2C, retail & showrooms, manufacturers & exporters, education, salons, fitness & wellness, professional services, immigration consultants, startups & SaaS. /industries is grouped into 7 sectors.

**Linking**
- Service pages link to their relevant industries ("… for your industry") and to every city page for that service; city hubs link to nearby cities in the same zone, then the rest of India; service cards on city hubs point to the city-specific page where one exists.
- Blog guides now linked from the new city and industry pages (guideIndex).
- First trusted outbound links added (Google Search Central, web.dev Core Web Vitals, Google Business Profile ranking & guidelines, Google Ads healthcare policy, Meta Advertising Standards).
- Organization schema areaServed and facts.js / llms.txt now list all cities and 19 industries.

**Tooling**: `npm run sync-pages` (scripts/sync-pages.js) keeps seo.json and siteIndex.js in sync with the city/industry files.

**Tested**: build ✅ (123 pages + 404), 1 H1 per page ✅, 0 broken internal links ✅, all JSON-LD valid ✅, no duplicate titles/descriptions ✅, all titles ≤ 60 chars ✅, no horizontal scroll at 390px ✅.

## 2026-10-25 — Competitor gap work (digitalnotebook, techmagnate, buffetism, matebiz, invoidea)

- New service **AI Search Optimization (AEO / GEO)** at /services/ai-search-optimization — answer-first content citing Google's "AI features and your website" and OpenAI's crawler docs; added to nav, footer, schema, facts, FAQs, llms.txt and the home/services grids.
- Home: outcome-led hero ("Get Found on Google & AI Search. Turn Visitors into Enquiries"), WhatsApp CTA, honest 12+ / 19+ stats; new "Problems We Fix" section (pain → fix → service); "Our Toolkit" section; reviews section that appears automatically once real reviews are added (src/data/site/reviews.js); home FAQ expanded (AI search, ownership, reporting, remote work).
- /about redesigned: story split with illustration, values, services, process, industries and cities, toolkit.
- /faq: new "AI search" group.
- 3 new blog posts: get-recommended-by-chatgpt-google-ai, website-visitors-but-no-enquiries, how-to-choose-digital-marketing-agency — each linked from relevant service, industry and city pages via guideIndex.

**Tested**: build ✅ (127 pages + 404), 0 broken internal links ✅, all JSON-LD valid ✅, no duplicate titles ✅, 1 H1 per page and no horizontal scroll at 390px ✅.
