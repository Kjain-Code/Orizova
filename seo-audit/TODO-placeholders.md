# {{TODO}} placeholders — real info only you can provide

None of these show as "TODO" text on the live site. Where info is missing the section is simply hidden, or a neutral wording is used.

| # | What | Where (file) | Effect until filled |
|---|---|---|---|
| 1 | Real, verifiable stats (years in business, projects, clients) | src/components/Hero.jsx, src/components/About.jsx | Shows: 11 services, 4 cities, 3 live sites |
| 2 | Client result + testimonial for WIPO Group, Ganesh Creation, FPS Subtitle (with permission) | src/data/projects.js (`clientResult`, `testimonial`) | Results/testimonial sections hidden on portfolio pages |
| 3 | Founder name(s), founding year, team photos, real story | src/pages/AboutPage.jsx | About page uses general "how we work" content |
| 4 | Business hours | src/data/contact.js (`hours`) | Hours not shown on contact page / schema |
| 5 | Public office address (only if real) + geo | src/components/Seo.jsx (schema), src/data/contact.js | Site stays "service-area business: Delhi NCR" |
| 6 | LinkedIn, Facebook, YouTube, Google Business Profile URLs | src/data/contact.js (`sameAs`) | Schema lists Instagram only |
| 7 | Web3Forms access key → `REACT_APP_WEB3FORMS_KEY` in .env.production | src/components/Contact.jsx | Form sends the enquiry via WhatsApp instead of email |
| 8 | GA4 Measurement ID → `REACT_APP_GA_ID` in .env.production | src/index.js | No Google Analytics |
| 9 | Google Search Console verification (DNS TXT at GoDaddy preferred, or meta tag) | public/index.html | Not verified |
| 10 | Named blog author + short bio | src/data/blog/index.js | Author shown as "Orizova Digital Team" |
| 11 | Lawyer review of Privacy Policy & Terms; registered business name; jurisdiction city | src/data/pages/legal.js | Generic template wording |
| 12 | Confirm brand name "Orizova Digital" (changed from "Orizova Co.") | site-wide | Must match Google Business Profile exactly |
| 13 | Confirm hosting (Vercel vs GoDaddy) | vercel.json / public/.htaccess | Both configs included |
| 14 | Optional: real "starting from ₹…" prices → we can add /pricing | — | No prices shown anywhere |
| 15 | Client logos (with permission) for a logo strip | — | No logo strip |
