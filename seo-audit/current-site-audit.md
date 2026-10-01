# Current Site Audit — orizovadigital.co.in (Phase 0 + 1B)

Audit date: 1 Oct 2026. Sources: project code in `frontend/`, a fresh local production build, a headless-browser crawl of that build at 1366px and 390px, and live fetches of orizovadigital.co.in (homepage, /locations/noida, /blog, /sitemap.xml).

---

## Phase 0 — Codebase

| Item | Finding |
|---|---|
| Framework | Create React App (`react-scripts 5.0.1`), React 19, client-side SPA |
| Routing | `react-router-dom` v7 in `src/App.js`. Routes: `/`, `/services`, `/services/:slug`, `/locations/:city`, `/portfolio`, `/creative-work`, `/about`, `/contact`, `*` (404). Pages are lazy-loaded. |
| How pages are added | Data-driven: services in `src/data/services.js`, cities in `src/data/locations.js`, SEO title/description/H1 per URL in `src/data/seo.json`. A new URL needs: data entry + route (if new template) + entry in `seo.json`. |
| Meta tags | `src/components/Seo.jsx` (react-helmet-async) sets title, description, robots, canonical, OG, Twitter, JSON-LD at runtime. |
| Static HTML for crawlers | `scripts/prerender.js` runs after `react-scripts build`; writes `build/<route>/index.html` for every route in `seo.json` with the right title/description/canonical/OG + a small fallback block (H1 + 1 paragraph + nav links). Also regenerates `sitemap.xml` and fixes `robots.txt`. |
| Hosting | No `vercel.json` / `netlify.toml` / `.htaccess` in the repo. Live site serves unknown URLs with the homepage (see /blog below), so the host has an SPA fallback configured outside the repo. Domain uses `REACT_APP_SITE_URL=https://orizovadigital.co.in` (`.env.production`). {{TODO: confirm host — Vercel project settings or GoDaddy}} |
| Design system | `src/index.css` tokens: `--primary #4C0E82`, `--violet #8B5CF6`, `--gold #F5A623`, `--gold-deep #C2650C`, `--coral #FF6B4A`, cream surfaces; fonts Bricolage Grotesque (headings), Inter (body), Instrument Serif (accent). Reusable pieces: `PageBanner`, `CtaBand`, `section-tag`/`section-title`/`section-subtitle`, `about-points`, `loc-*` cards, `details` FAQ, `btn-primary`/`btn-outline`/`btn-gold`, `FloatingButtons` (WhatsApp + Instagram). |
| Analytics | Meta Pixel (lazy-loaded). **No GA4, no Google Search Console verification tag** (placeholder comment only). |
| Build | `npm run build` ✅ compiles successfully, 16 prerendered pages. Main JS 124.6 kB gz. |
| Build caveat | `npm ci` fails: **package-lock.json is out of sync with package.json** (missing `yaml@2.9.1`). `npm install` works. Vercel/CI using `npm ci` could fail. |

---

## Page inventory (16 indexable URLs + 404)

Rendered word counts are from the full React page (main content only, excluding nav/footer).

| URL | Title (chars) | H1 | Words | JSON-LD | Notes |
|---|---|---|---|---|---|
| / | Web Development & Digital Marketing Agency in Delhi NCR \| Orizova (65) | Website Development & Digital Marketing Agency in Ghaziabad, Noida, Delhi & Chandigarh | ~610 | ProfessionalService, WebSite, FAQPage | Good base. Unverified stats (see claims). |
| /services | Web Development, SEO & Digital Marketing Services \| Orizova Co. (63) | Web Development, SEO & Digital Marketing Services | ~310 | + Breadcrumb, 6×Service | OK hub, light copy |
| /services/website-development | 62 | Website Development Company in Delhi NCR | **~227** | Service, FAQPage | **Thin**; generic "approach" copy shared by all service pages |
| /services/app-development | 58 | Mobile App Development Company in Delhi NCR | **~207** | same | Thin |
| /services/digital-marketing | 66 | Digital Marketing Agency in Delhi NCR | **~207** | same | Thin; Meta Ads / Google Ads / SMM have no own pages |
| /services/branding-designing | 55 | Branding & Logo Design Agency in Delhi NCR | **~212** | same | Thin |
| /services/seo | 61 | SEO Services in Delhi NCR | **~210** | same | Thin; Local SEO has no own page |
| /services/ecommerce-solutions | 64 | E-commerce Website Development | **~199** | same | Thin |
| /locations/ghaziabad | 66 | Web Development & Digital Marketing Agency in Ghaziabad | ~436 | Service, FAQPage | Unique copy ✅ but under 600 words |
| /locations/noida | 66 | Website Development & Digital Marketing Company in Noida | ~433 | same | Unique ✅, short |
| /locations/delhi | 54 | Web Design & Digital Marketing Agency in Delhi | ~431 | same | Unique ✅, short |
| /locations/chandigarh | 66 | Web Development & Digital Marketing Agency in Chandigarh | ~425 | same | Unique ✅, short |
| /portfolio | 55 | Website Development Portfolio — Projects That Speak | **~169** | ItemList | Thin; subtitle promises "results they delivered" but no results shown |
| /creative-work | 47 | Video Editing & Reels That Do the Talking | **~130** | Breadcrumb only | Thin; this is our only video-editing page |
| /about | 46 | About Orizova — A Team That Turns Vision Into Reality | **~180** | Breadcrumb only | Thin; no team, founding story or real details |
| /contact | 66 | Contact Orizova — Let's Grow Together | **~101** | Breadcrumb only | No ContactPage schema; form is mailto-only |
| /blog (does not exist) | — | — | — | — | Live: returns **homepage content with HTTP 200** (soft 404) |

Title lengths: 6 of 16 titles are 64–66 chars → may truncate in Google (target 50–60).
Meta descriptions: present and unique on all 16 ✅ (several are >160 chars, e.g. Ghaziabad 177, home 171).

---

## Issues found

### A. Indexing / technical SEO (highest impact)
1. **Crawlers get only ~120 words per page.** The prerendered HTML contains just H1 + one paragraph + nav (confirmed on live /locations/noida). All real content (services, FAQs, areas) appears only after JavaScript runs. Google can render JS, but slower and less reliably; Bing, WhatsApp/LinkedIn previews and most AI crawlers see the thin version. → Need full static HTML per page (real prerender/SSG).
2. **Soft 404s.** Any unknown URL (e.g. /blog) returns HTTP 200 with homepage HTML. Google may index junk URLs or flag soft 404s. → Proper `404.html` + host config returning status 404.
3. **Prerender H1 ≠ rendered H1** on /about, /contact, /portfolio, /creative-work, /services pages (e.g. static "About Orizova Co." vs rendered "About Orizova — A Team That Turns Vision Into Reality"). Minor, but should match.
4. **Home H2 in static HTML is the meta description** — WebFetch saw it as H2; fine but wasteful.
5. **No hosting config in repo** (`vercel.json`): no redirects, no headers (cache, security), no trailing-slash policy. Both `/about` and `/about/` may resolve → duplicate URLs. Canonicals help but redirects are cleaner.
6. **Sitemap** lists only 16 URLs (all pages) — fine today, but has no images/blog. `lastmod` = build date for every page (Google ignores lastmod that always changes).
7. **No Google Search Console verification, no GA4.**
8. `package-lock.json` out of sync (see Phase 0).

### B. Content depth & coverage
9. **All 6 service pages are thin (~200–230 words)** and share the same generic "Clear thinking, careful execution" block → near-duplicate risk.
10. **Services you sell but have no page for:** Meta Ads, Google Ads, Social Media Marketing, Local SEO, Video Editing (only /creative-work gallery), WordPress/Shopify.
11. **No industry pages** for target niches: clinics, architects, real estate, restaurants, cafes, finance/loan agents.
12. **No blog** — zero informational content, no way to target "website cost", "how to get leads for clinic" etc.
13. **No pricing guidance** anywhere (competitors use "starting from ₹X" and cost FAQs).
14. **No process section** on service pages; no "who it's for".
15. Location pages are unique (good) but 425–436 words and have only 3 FAQs; no Greater Noida / Mohali / Panchkula detail beyond lists.
16. About page has no real people, story, founding year, or address.

### C. Trust & conversion
17. ⚠️ **Unverified claims currently live** (must be confirmed as true or replaced — rule: no invented facts):
    - Hero stats: "150+ Projects Delivered", "98% Client Satisfaction", "50+ Happy Clients", "5+ Years Experience" (`src/components/Hero.jsx`)
    - Hero floating cards: "150% Avg Revenue Increase", "100K+ Leads Generated for Clients", "5.0 Average Rating"
    - About: "5+ Years of Excellence", "150+ Projects Done", "50+ Happy Clients", "Top Rated Agency — India's Emerging Digital Partner", "Proven track record across industries" (`src/components/About.jsx`)
    - Why Us: "24/7 Support" (`src/components/WhyUs.jsx`)
    - Portfolio subtitle: "…and the results they delivered" (no results are shown)
    → I have NOT changed these. Please confirm each, or approve replacing them with {{TODO}} / softer wording in Phase 3.
18. **Contact form is `mailto:` only** — opens the visitor's email app; on many phones nothing happens or the lead is lost. No WhatsApp hand-off from the form, no thank-you page, no conversion tracking event.
19. No testimonials, client logos, Google reviews, partner badges, team photos, office address/map, or business hours.
20. Only one social profile (Instagram) in `sameAs`. No LinkedIn, Facebook, YouTube, Google Business Profile link.
21. Brand name inconsistency: site says **"Orizova Co."** everywhere (32 places), you call it **"Orizova Digital"**, domain is orizovadigital. {{TODO: confirm official brand name}} — it must match Google Business Profile exactly (NAP consistency).
22. No Privacy Policy / Terms pages (needed for Meta/Google lead ads and trust).

### D. Performance / media
23. **Videos are huge**: 11 MP4s totalling **~370 MB** in `src/assets/videos` (largest 53.9 MB `Reel1.mp4`, 47.6 MB `0727.mp4`). They load with `preload="metadata"` (good), but play-on-click streams tens of MB on mobile data. → Re-encode to 720p H.264 ~2–5 MB each + poster images, or host on YouTube/Cloudinary.
24. Portfolio images already have WebP versions ✅ (11–32 kB). Unused `.jpg` originals still in `src/assets/portfolio` (not imported → not shipped; fine).
25. `logo.png` 42 kB still in repo; WebP used ✅.
26. OG image is the square logo (`logo512.png`) for every page → poor social previews. → 1200×630 branded OG image(s).

### E. Accessibility & UX
27. **Contact form labels not linked to inputs** (`<label>` without `htmlFor`/`id`) → screen readers can't associate them.
28. Mobile menu toggle has `aria-label` ✅ but no `aria-expanded`.
29. No horizontal scroll at 390px on any page ✅. All `<img>` have alt ✅.
30. Console: only blocked third-party requests in the test sandbox (fonts/pixel) — no app JS errors ✅.

### F. What is already good (keep)
- Clean, keyword-aware URL structure (`/services/<slug>`, `/locations/<city>`).
- Unique, honest city copy (comment in code even warns against fake office claims).
- Schema: ProfessionalService + WebSite + Breadcrumb + Service + FAQPage already wired.
- Click-to-call in navbar, floating WhatsApp, LCP-aware hero, code-splitting, WebP.
