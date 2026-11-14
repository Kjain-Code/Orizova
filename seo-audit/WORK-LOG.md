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

## 3 Nov 2026 — SEOptimer audit fixes + portfolio update
Portfolio redesign files (Projects, Portfolio, PortfolioDetail, CreativeWorkSections, creativeWork/projects/answers data, orizova-digital.webp, seo.json route) added from orizova-updates.zip.

**SEOptimer (orizovadigital.co.in, grade A) — fixed in code**
- Title tag 61 → 58 chars: "Web Development & Digital Marketing Agency India | Orizova". Home description now also mentions Google Maps (154 chars).
- Clear-text email removed from the HTML of every page: new components/common/EmailLink.jsx (address shown as user<span>@</span>domain, mailto: attached after load), JSON-LD writes "@" as @, contact quick answer and one blog line reworded, form placeholder changed.
- Inline styles: 3,258 → 102 across the site, home page 0. Brand colours now come from classes (src/utils/tone.js + src/styles/tones.css); other one-off styles moved to src/styles/utilities.css; prerender drops framer-motion's finished "opacity:1;transform:none".
- Analytics: when REACT_APP_GA_ID is set, prerender.js writes the GA4 tag into every page's <head> (library still loads after page load).
- X and YouTube: contact.js has xUrl / youtubeUrl slots; once filled, footer icons and schema sameAs update automatically.

**Other fixes**: /portfolio quick answer + meta description now include the Orizova case study; PageSpeed ring labels no longer run together on phones (portfolio cards); footer email stays on one line.

**Tested**: build ✅ (128 pages + 404), ESLint 0 ✅, test ✅, titles 30–60 chars on all pages ✅, 0 pages with plain-text email ✅, no JS/hydration errors ✅, no horizontal scroll at 390px ✅, before/after screenshots of 14 key pages compared — only intended changes.

## 3 Nov 2026 (later) — blank page after deploy fixed
Live /portfolio and /creative-work showed only the navbar when opened from a tab loaded before the latest deploy: the page's JS file name had changed, the download failed and React waited forever. App.js now retries the download, reloads the page once (max once per 30 s) to get the new files, and if it still fails keeps the pre-rendered page (or a "Refresh page" message) instead of a blank screen. Tested: forced chunk failures recover; normal navigation between all pages OK; build ✅ lint ✅ test ✅.

## 4 Nov 2026 — visible breadcrumbs removed
The "Home › Services › …" line above the H1 is gone from every page (PageBanner.jsx no longer renders it; its CSS removed). Pages still pass `crumbs`, which PageBanner ignores. The BreadcrumbList schema in <Seo> is unchanged, so Google can still show the path in search results. Tested: 0 pages with a visible breadcrumb, banners checked on desktop + mobile, build ✅ lint ✅ test ✅.

## 4 Nov 2026 — 3 new blog posts + richer blog formatting
**New posts** (src/data/blog/posts-d.js, newest first on /blog and the home page):
- /blog/how-long-does-seo-take — SEO timeline (cites Google's "Do you need an SEO?"; our own Search Console numbers from the case study)
- /blog/shopify-vs-woocommerce-vs-custom-website-india — e-commerce platform comparison (Shopify India prices/fees dated Nov 2026, linked to official pricing)
- /blog/google-ads-cost-india — how Google Ads cost works + budget formula (Google's 2× daily / 30.4× monthly rule linked; example numbers labelled)

Each has a short answer + takeaways (data/blog/answers.js), FAQ schema, seo.json route (title ≤60, description 120–160), sitemap entry, and guideIndex links from the related service, industry and city pages (22–42 linking pages each). Older posts now link to them (local SEO checklist, Delhi NCR cost guide, business-website guide, Meta vs Google). /blog meta description and hub answer updated.

**New blog blocks** (ContentBlocks.jsx Prose, article variant + ContentPage.css): `steps` (numbered cards), `table` (comparison table, swipe on mobile), `tip` (callout: tip / warn / example).

**Tested**: build ✅ (131 pages + 404), lint ✅, test ✅, 0 broken internal links, all JSON-LD valid, 1 H1 per page, titles 30–60 ✅, desktop + mobile screenshots checked.

## 4 Nov 2026 — blank white page fixed
Symptom on the live site: some pages stayed an empty cream screen (tab showing the URL instead of the title) until refreshed. Reproduced locally: when any error happens while React starts, React removed the whole pre-rendered page and the static <title> had already been removed — exactly that screen.
- src/index.js: `RootSafety` boundary around the app. On any crash the pre-rendered page (and its title) stays on screen, links keep working as normal links, and the error is logged in the console as "[orizova] page error …". React 19 `onUncaughtError` also logs.
- scripts/prerender.js: title, description, canonical, OG and verification tags now sit right after the viewport tag, before the inline CSS (title at ~250 bytes instead of ~130 KB), so the tab title shows immediately.
Tested: forced crash → page still shown (old build: blank); no hydration errors on key pages; first paint < 1 s with mobile network + CPU throttling; build ✅ lint ✅ test ✅.

## 4 Nov 2026 — full-site QA pass
Checked all 131 pages on mobile (390 px) and desktop: no JS or hydration errors, no horizontal scroll, no broken images, every image has alt text, no empty links, exactly 1 H1 per page, 0 broken internal links, all JSON-LD valid.
Fixed:
- Accessibility (axe WCAG 2 A/AA, all pages): 8 issues → 0. Small gold labels (eyebrow tags, "In short", case-study kicker, contact kicker) now use `--gold-text: #A85507` (contrast 4.9–5.3:1, was 3.8–4.1); industries WhatsApp button green #15803D (white text 5:1, was 2:1); decorative 01/02/03 numbers drawn by CSS; case-study link's accessible name includes its visible URL.
- Images: logo.webp 243×180 21 KB → 216×160 14 KB (still 2× for the hero); morphic-spaces.webp 1400 px 106 KB → 1000 px 61 KB.
Lighthouse (mobile, local): accessibility 100, best practices 100, SEO 100 on home, portfolio, industries, contact, blog post; performance 89–95 locally (no CDN).

## 9 Nov 2026 — AI video production service + SEO cluster
**New service (Create group):** /services/ai-video-production (pillar, in navbar, home grid, footer, /services hub) plus specialised pages /services/ai-ugc-videos, /services/ai-product-videos, /services/ai-avatar-videos (`parent` field in services.js — the default export stays top-level only; `allServices` includes the sub-pages). Copy in src/data/services/aiVideoPages.js: formats, AI vs shoot table, process, who it's for, AI labels/consent rules (India IT Rules amendment in force 20 Feb 2026, YouTube & Meta labels, ASCI draft May 2026), cost factors, FAQs.
**City pages:** /locations/{delhi,noida,gurugram,mumbai,bengaluru,chandigarh}/ai-video-production — src/data/locations/aiVideoCities.js, each written for its market and languages.
**Blogs (posts-e.js):** /blog/ai-ugc-video-ads-guide, /blog/ai-video-production-cost-india, /blog/ai-video-vs-traditional-video-shoot.
**Video samples:** new `videos` content block shows creativeWork items with category "AI Videos" (optional `kind`: ugc | product | avatar | reel | explainer); until samples are added it shows a "get samples on WhatsApp" box. How to add a video is documented at the top of creativeWork.js. CreativeWorkSections now exports a reusable VideoGrid.
**Also:** quick answers, seo.json routes (titles ≤60, descriptions 120–160), facts, /services /creative-work and home answers, GoalPicker "AI video ads" goal, illustrations for the 4 services, guide links from service/industry/city pages.
**Fixes found while testing:** (1) the blog `steps` CSS added on 4 Nov used `.cb-step`, which clashed with the existing "Our process" timeline and broke it on every service/city page — blog steps renamed to `.cb-astep*`; (2) AI Search Optimization showed an arrow icon in the mega menu (FiCpu was missing from Navbar ICONS); (3) home service grid CTA now fills the last row when one card is left over.
**Tested:** build ✅ 144 pages, lint ✅, test ✅, 0 broken links, all JSON-LD valid, axe 0 violations on all pages, no JS errors / horizontal scroll on any page (390 px + desktop), screenshots checked.

## 13 Nov 2026 — 5 new commercial-intent blogs
- New file src/data/blog/posts-f.js: meta-ads-cost-india, seo-cost-india, whatsapp-marketing-for-business-india, social-media-marketing-cost-india, b2b-lead-generation-manufacturers-india.
- Wired into blog/index.js, blog/answers.js (quick answers), siteIndex.js (postsIndex = home "From the blog" cards, guideIndex = links from service/industry/city pages), seo.json routes (149 pages in sitemap), site/answers.js and /blog description.
- QA: CI build pass, 0 broken links, JSON-LD valid, axe 0 violations, sweep clean on 149 pages.
