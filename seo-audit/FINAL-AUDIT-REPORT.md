# Orizova Digital — Final Website Audit Report

Date: 24 Oct 2026 · Codebase: `frontend/` (React 19 + react-router 7, pre-rendered to static HTML by `scripts/prerender.js`, hosted on Vercel).
Scope: all 58 indexable URLs + 404, every shared component, build/config, SEO/AEO/GEO setup.

## A. Overall readiness: **89 / 100**

| Area | Score | How it was measured |
|---|---|---|
| Design & UI | 88 | Screenshots at 320, 375, 390, 430, 768, 1024, 1280, 1440, 1920 px; manual review of home, hubs, service, city, blog, contact |
| Content | 82 | Read all page types. Honest and specific; **portfolio/case-study pages thin**, no testimonials, no founder/team info yet |
| Technical SEO | 96 | Static HTML on every URL, sitemap, robots, canonicals, 404 status, redirects, schema all checked by script |
| On-page SEO | 95 | Unique titles/descriptions (script check: 0 duplicates), 1 H1 per page, no heading-level skips, breadcrumbs |
| Local SEO | 70 | On-site done (city pages, hub, schema, NAP). **Off-site missing**: Google Business Profile, reviews, citations |
| GEO / AEO | 85 | Quick answers, takeaways, fact sheet, llms.txt, AI crawlers allowed. Off-site brand mentions still to build |
| Performance | 92 | Lighthouse mobile (lab, local server with brotli like Vercel): 95–97 after fixes. Live PageSpeed before fixes: mobile 84, desktop 99. No field (CrUX) data yet — too little traffic |
| Accessibility | 97 | axe-core WCAG 2 A/AA: 0 violations on all 58 pages; Lighthouse a11y 100. Keyboard: nav, mega-menu (Esc), FAQ accordions checked; full screen-reader pass not done |
| Mobile usability | 94 | 0 horizontal overflow at 7 widths on all pages; tap targets ≥ 44 px on flagged links |
| Functionality | 88 | All internal links 200; client navigation works; contact form works (WhatsApp fallback). Email delivery needs Web3Forms key; no GA4 yet |

Scores are judgement-based on the tests above, not an official metric.

## B. Page-by-page

All pages: title ≤ 62 chars, unique description, canonical correct, Open Graph image, valid JSON-LD, 1 H1, visible breadcrumbs (inner pages), 0 axe violations, 0 overflow, 0 console errors, hydrated without mismatch.

| URL | Purpose | Title len | Words | Quick answer | Issues left (tech) | Content gap | Status |
|---|---|---|---|---|---|---|---|
| `/` | Home (India-wide brand page) | 61 | 1300 | — | 0 | — | Done |
| `/services` | Services hub | 51 | 717 | ✓ | 0 | — | Done |
| `/services/website-development` | Main service page (India) | 54 | 1464 | ✓ | 0 | — | Done |
| `/services/ecommerce-solutions` | Main service page (India) | 54 | 897 | ✓ | 0 | — | Done |
| `/services/app-development` | Main service page (India) | 49 | 798 | ✓ | 0 | — | Done |
| `/services/digital-marketing` | Main service page (India) | 45 | 862 | ✓ | 0 | — | Done |
| `/services/social-media-marketing` | Main service page (India) | 48 | 835 | ✓ | 0 | — | Done |
| `/services/meta-ads` | Main service page (India) | 51 | 901 | ✓ | 0 | — | Done |
| `/services/google-ads` | Main service page (India) | 53 | 843 | ✓ | 0 | — | Done |
| `/services/seo` | Main service page (India) | 53 | 777 | ✓ | 0 | — | Done |
| `/services/local-seo` | Main service page (India) | 50 | 758 | ✓ | 0 | — | Done |
| `/services/video-editing` | Main service page (India) | 52 | 780 | ✓ | 0 | — | Done |
| `/services/branding-designing` | Main service page (India) | 48 | 730 | ✓ | 0 | — | Done |
| `/locations` | Locations hub | 49 | 400 | ✓ | 0 | — | Done |
| `/locations/ghaziabad` | City page (local) | 47 | 1038 | ✓ | 0 | — | Done |
| `/locations/noida` | City page (local) | 51 | 1018 | ✓ | 0 | — | Done |
| `/locations/delhi` | City page (local) | 51 | 985 | ✓ | 0 | — | Done |
| `/locations/chandigarh` | City page (local) | 48 | 1008 | ✓ | 0 | — | Done |
| `/locations/ghaziabad/website-development` | City × service page (local) | 50 | 1408 | ✓ | 0 | — | Done |
| `/locations/ghaziabad/seo` | City × service page (local) | 50 | 801 | ✓ | 0 | — | Done |
| `/locations/noida/website-development` | City × service page (local) | 54 | 1458 | ✓ | 0 | — | Done |
| `/locations/noida/seo` | City × service page (local) | 48 | 752 | ✓ | 0 | — | Done |
| `/locations/delhi/website-development` | City × service page (local) | 52 | 1422 | ✓ | 0 | — | Done |
| `/locations/delhi/seo` | City × service page (local) | 46 | 754 | ✓ | 0 | — | Done |
| `/locations/chandigarh/website-development` | City × service page (local) | 59 | 2446 | ✓ | 0 | — | Done |
| `/locations/chandigarh/seo` | City × service page (local) | 50 | 763 | ✓ | 0 | — | Done |
| `/locations/varanasi` | City page (local) | 54 | 959 | ✓ | 0 | — | Done |
| `/locations/varanasi/website-development` | City × service page (local) | 57 | 1371 | ✓ | 0 | — | Done |
| `/industries` | Industries hub | 47 | 425 | ✓ | 0 | — | Done |
| `/industries/clinics` | Industry page (India) | 49 | 856 | ✓ | 0 | — | Done |
| `/industries/architects` | Industry page (India) | 50 | 783 | ✓ | 0 | — | Done |
| `/industries/real-estate` | Industry page (India) | 46 | 776 | ✓ | 0 | — | Done |
| `/industries/restaurants-cafes` | Industry page (India) | 52 | 751 | ✓ | 0 | — | Done |
| `/industries/finance-loan-agents` | Industry page (India) | 50 | 734 | ✓ | 0 | — | Done |
| `/blog` | Blog hub | 50 | 693 | ✓ | 0 | — | Done |
| `/blog/how-to-get-a-business-website-india` | Blog guide | 50 | 1509 | ✓ | 0 | — | Done |
| `/blog/website-development-cost-chandigarh` | Blog guide | 51 | 1484 | ✓ | 0 | — | Done |
| `/blog/choose-web-development-company-chandigarh` | Blog guide | 53 | 1171 | ✓ | 0 | — | Done |
| `/blog/website-cost-in-delhi-ncr` | Blog guide | 51 | 1350 | ✓ | 0 | — | Done |
| `/blog/google-business-profile-guide` | Blog guide | 49 | 1314 | ✓ | 0 | — | Done |
| `/blog/meta-ads-vs-google-ads` | Blog guide | 48 | 1201 | ✓ | 0 | — | Done |
| `/blog/get-more-patients-clinic-online` | Blog guide | 47 | 1178 | ✓ | 0 | — | Done |
| `/blog/real-estate-leads-meta-ads` | Blog guide | 52 | 1218 | ✓ | 0 | — | Done |
| `/blog/instagram-ideas-restaurants-cafes` | Blog guide | 52 | 1198 | ✓ | 0 | — | Done |
| `/blog/architect-portfolio-website-tips` | Blog guide | 53 | 1132 | ✓ | 0 | — | Done |
| `/blog/loan-agent-lead-generation` | Blog guide | 47 | 1146 | ✓ | 0 | — | Done |
| `/blog/local-seo-checklist` | Blog guide | 50 | 1050 | ✓ | 0 | — | Done |
| `/faq` | FAQ | 49 | 743 | ✓ | 0 | — | Done |
| `/portfolio/morphic-spaces` | Case study | 55 | 376 | ✓ | 0 | Thin — needs real client results/testimonial | Done (needs your input) |
| `/portfolio/wipo-group` | Case study | 48 | 292 | ✓ | 0 | Thin — needs real client results/testimonial | Done (needs your input) |
| `/portfolio/ganesh-creation` | Case study | 47 | 283 | ✓ | 0 | Thin — needs real client results/testimonial | Done (needs your input) |
| `/portfolio/fps-subtitle` | Case study | 52 | 262 | ✓ | 0 | Thin — needs real client results/testimonial | Done (needs your input) |
| `/portfolio` | Portfolio hub | 47 | 323 | ✓ | 0 | Thin — needs real client results/testimonial | Done (needs your input) |
| `/creative-work` | Video portfolio | 55 | 295 | ✓ | 0 | Thin — needs real client results/testimonial | Done (needs your input) |
| `/about` | About | 47 | 685 | ✓ | 0 | — | Done |
| `/contact` | Contact / lead form | 58 | 387 | ✓ | 0 | — | Done |
| `/privacy-policy` | Legal | 32 | 392 | — | 0 | Needs lawyer review | Done (needs your input) |
| `/terms` | Legal | 30 | 276 | — | 0 | Needs lawyer review | Done (needs your input) |

## C. Issues by priority

### P0 — Critical
None found. No broken pages, console errors, security exposures or launch blockers.

### P1 — High (all fixed)
| Issue | Where | Why it mattered | Fix | Done |
|---|---|---|---|---|
| Page re-rendered from scratch on load (`createRoot`) | `src/index.js` | Pre-rendered text was thrown away and painted again after JS → slow mobile LCP | `hydrateRoot` on pre-rendered pages (verified: 58/58 hydrate with 0 mismatches) | ✅ |
| Render-blocking stylesheet | build output | Extra round-trip before first paint on mobile | Main CSS (14 KB gz) inlined into each pre-rendered page | ✅ |
| Main service/industry pages said "Delhi NCR" | `src/data/site/seo.json`, service/industry data | Business serves all of India; city intent belongs on city pages | Rewritten India-wide; city pages kept local | ✅ |
| No `/locations` hub (URL returned 404) | routes | City pages had no parent page; weak structure | New `LocationsPage`, nav + footer links, breadcrumbs Home › Locations › City | ✅ |
| Breadcrumbs only in schema | all inner pages | Google prefers visible breadcrumbs matching schema; users lose context | Visible breadcrumbs in `PageBanner` | ✅ |
| Hover-only "Learn more" buttons | home services grid | Invisible on phones (no hover) | Always visible | ✅ |

### P2 — Medium (fixed)
- AEO/GEO layer: quick answers (56 pages), blog takeaways, brand fact sheet, WebPage schema with `dateModified` + `speakable`, OfferCatalog, `llms.txt` / `llms-full.txt`, AI crawlers named in robots.txt. ✅
- Code folder structure reorganised by section (`pages/`, `components/`, `data/`). ✅
- Floating Instagram button covered text on phones → hidden ≤ 768 px (WhatsApp stays). ✅
- Small tap targets ("Explore service", "Get a quote…") → ≥ 44 px. ✅
- Contact form spam trap (hidden honeypot). ✅
- Unverifiable "Why us" claims replaced with factual points. ✅

### P2/P3 — Remaining (need your input or accounts)
| Item | Why | What's needed |
|---|---|---|
| Portfolio & Creative Work pages thin (260–380 words) | Case studies are the strongest trust + GEO signal | Client results, testimonial, permission — real data only |
| No founder / team / founding year | E-E-A-T trust; AI tools look for who is behind a brand | Fill `src/data/site/facts.js` (`founders`, `founded`) and About page |
| No reviews / testimonials | Conversions + local ranking | Genuine Google reviews |
| Web3Forms key missing | Form currently opens WhatsApp instead of emailing | `REACT_APP_WEB3FORMS_KEY` in `.env.production` |
| GA4 missing | Can't measure traffic incl. ChatGPT/Perplexity referrals | `REACT_APP_GA_ID` |
| Privacy/Terms are templates | Legal accuracy | Lawyer review |
| Build-tool vulnerabilities (`npm audit`: 75, incl. 2 critical) | All in `react-scripts` dev/build tooling (dev server, svgo…), **not shipped to the browser** — static site has no server code | Long-term: migrate CRA → Vite (not done: large change) |
| No Content-Security-Policy header | Defence-in-depth | Optional; needs care because of inline JSON-LD/CSS/Pixel |

## D. Test results (actually run)

| Check | Result |
|---|---|
| `npm run build` (+ pre-render) | ✅ 58 pages + 404, sitemap 58 URLs |
| ESLint | ✅ 0 errors |
| Unit test (`npm test`) | ✅ 1/1 |
| Hydration (all 58 URLs, Playwright) | ✅ 0 mismatches, 0 errors, client navigation works |
| Responsive (7 widths × 58 pages) | ✅ 0 horizontal overflow, 0 clipped text (one intentional screen-reader-only heading) |
| Broken internal links | ✅ 0 (all unique internal hrefs return 200) |
| Metadata | ✅ 0 duplicate titles, 0 duplicate descriptions, canonicals correct, OG on all, no accidental noindex |
| Headings | ✅ 1 H1 per page, 0 level skips |
| JSON-LD | ✅ valid JSON on all pages |
| Accessibility (axe WCAG 2 A/AA) | ✅ 0 violations, 58/58 pages |
| Lighthouse mobile (lab, local) | Performance 95–97 (home, service, city, blog), Accessibility/Best Practices/SEO 100, CLS 0 |
| Not tested | Real-device testing on iOS Safari; screen reader pass; live form email delivery (no key); field Core Web Vitals (no CrUX data yet) |

## E. Launch checklist
- [ ] Double-click `cleanup-old-files.bat` once (removes old copies of moved files)
- [ ] `npm run build` locally → deploy to Vercel
- [ ] Re-run PageSpeed Insights on the live site (expect mobile ↑ from 84)
- [ ] Search Console: resubmit `sitemap.xml`; Request indexing for `/`, `/services`, `/locations`, top service pages
- [ ] Search Console → Pages → open each "Not indexed" reason (see note below)
- [ ] Bing Webmaster Tools: import from Search Console, submit sitemap; run `npm run indexnow`
- [ ] Add `REACT_APP_WEB3FORMS_KEY` and `REACT_APP_GA_ID` to `.env.production`, redeploy, send a test enquiry
- [ ] Google Business Profile (exact name "Orizova Digital", same phone/website)
- [ ] Reviews, LinkedIn/Facebook/YouTube profiles → add URLs to `src/data/site/contact.js` (`sameAs`)
- [ ] Agency directories: Clutch, GoodFirms, DesignRush, Justdial, Sulekha

### Note: Search Console "43 not indexed / 18 indexed"
Normal for a site this new (live ~5 weeks). The usual reasons are *Discovered/Crawled – currently not indexed* (Google hasn't judged the page worth indexing yet — fixed over time by internal links, fresh content, backlinks and brand signals), *Page with redirect* (http://, www., trailing-slash variants — expected, not a problem) and *Not found (404)* (old URLs). Open each reason in Search Console → Pages to confirm; only real pages listed under "Crawled/Discovered" need action.

## F. Remaining work
See section C "Remaining". Everything else in scope was implemented and tested.
