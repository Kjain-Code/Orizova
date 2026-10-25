# Orizova Digital — website (frontend)

React 19 single-page app, pre-rendered to static HTML at build time for SEO, AEO and GEO.
Hosted on Vercel (`vercel.json`); `public/.htaccess` is a fallback for Apache hosting.

```bash
npm install
npm start          # local dev server
npm run build      # production build + pre-render every page (scripts/prerender.js)
npm run lint
npm test
npm run indexnow   # after deploy: notify Bing/Yandex (and ChatGPT search via Bing) of all URLs
npm run sync-pages # after adding a city or industry file: updates seo.json + siteIndex.js
```

## How the site is organised

The URL structure has two layers that must stay separate:

| Layer | URLs | Targets | Content lives in |
|---|---|---|---|
| **Main pages (India-wide)** | `/`, `/services`, `/services/<service>`, `/industries/<industry>`, `/blog/<post>`, `/portfolio/<project>` | Searches across India ("SEO services in India", "Meta ads agency") | `src/data/services`, `src/data/industries`, `src/data/blog`, `src/data/work` |
| **Location pages (local SEO)** | `/locations` (hub), `/locations/<city>`, `/locations/<city>/<service>` | City searches ("SEO company in Noida") | `src/data/locations` |

Main service pages link down to their city pages ("… in your city"), and city pages link up to the main service page. City pages are **not in the main navigation** (we work pan-India); they are linked from the footer's "Serving businesses across India" strip, the home page, the /locations hub and in-page links. Never copy the same text onto both layers: city pages need genuinely local content (areas, local customers, local examples).

## Folder structure

```
src/
├── index.js, App.js            app entry + routes (one route per URL pattern)
├── ssr-entry.jsx               build-time renderer used by scripts/prerender.js
├── index.css                   design tokens (colours, radius, shadows) + global styles
├── assets/                     logo, portfolio images, web-optimised videos + posters
│
├── components/
│   ├── layout/                 Navbar, Footer, FloatingButtons, PageTransition, scroll helpers
│   ├── seo/                    Seo.jsx — <head> tags + JSON-LD schema for every page
│   ├── common/                 PageBanner (page hero + H1), CtaBand, BlogCards, Doodles
│   ├── content/                ContentBlocks (prose/cards/process/FAQ blocks), QuickAnswer, ContentPage.css
│   ├── home/                   home-page sections: Hero, Services, WhyUs, FeaturedWork, AreasServed, HomeExtras
│   └── sections/               larger sections used by inner pages: About, Contact, Projects, CreativeRingGallery…
│
├── pages/                      one file per page template, grouped like the URLs
│   ├── core/                   Home, About, Contact, FAQ, Legal, NotFound
│   ├── services/               /services and /services/<service>
│   ├── locations/              /locations (hub), /locations/<city>, /locations/<city>/<service>
│   ├── industries/             /industries and /industries/<industry>
│   ├── blog/                   /blog and /blog/<post>
│   └── work/                   /portfolio, /portfolio/<project>, /creative-work
│
└── data/                       ALL copy lives here — edit text without touching components
    ├── site/                   seo.json (every route: title, description, H1, lastmod),
    │                           contact.js, facts.js (brand fact sheet), siteIndex.js (nav/footer index),
    │                           faqs.js, legal.js, answers.js (quick answers for home & hub pages)
    ├── services/               services.js (cards), servicePages.js (long copy), answers.js
    ├── locations/              locations.js (city hubs), cityServices.js (city × service), answers.js
    ├── industries/             industries.js, answers.js
    ├── work/                   projects.js (portfolio), creativeWork.js (videos), answers.js
    └── blog/                   index.js, posts-a.js, posts-b.js, answers.js (short answer + takeaways)
```

## Adding a city or an industry (most common)

- **City:** copy the structure of `src/data/locations/cities/lucknow.js` into `cities/<slug>.js` (hub + website-development + seo pages, quick answers, meta) and **write genuinely local copy** — areas, industries, landmarks. Import it in `cities/index.js`, add its slug to a zone in `ZONES` inside `scripts/sync-pages.js`, then run `npm run sync-pages`.
- **Industry:** copy `src/data/industries/more/dental-clinics.js` into `more/<slug>.js`, import it in `more/index.js`, add a line (slug, group, name, short) to `industriesIndex` in `src/data/site/siteIndex.js`, optionally list it in `serviceIndustries`, then run `npm run sync-pages`.

## Adding a page

1. Write the copy in the matching `src/data/<section>/` file (services, locations, industries, blog, work).
2. Add the route to `src/data/site/seo.json`: `path`, `title` (≤ 60 characters), `description` (120–160), `h1`, `lastmod`.
3. Add a quick answer in `src/data/<section>/answers.js`: one question plus a direct 40–80 word answer that names Orizova Digital and the place. Facts only.
4. New location pages also go in `cityServicesIndex` in `src/data/site/siteIndex.js` (nav, footer, internal links).
5. Run `npm run build`. Every page is pre-rendered, and `sitemap.xml`, `robots.txt`, `llms.txt` and `llms-full.txt` are regenerated.
6. After deploy: request indexing in Search Console and run `npm run indexnow`.

Content rules: no invented numbers, prices, clients, reviews or results. Placeholders that only the business can fill are listed in `seo-audit/TODO-placeholders.md`.

## SEO / AEO / GEO notes

- `seo-audit/AEO-GEO.md`: what is in place for answer engines and AI assistants, plus the off-site checklist (Hinglish).
- `seo-audit/HANDOVER.md`, `seo-audit/WORK-LOG.md`: history of the SEO work.
