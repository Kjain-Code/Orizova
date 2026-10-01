# Reference Websites — Extraction (Phase 1A)

Research date: 1 Oct 2026. Method: fetched homepage + sitemap + 1–2 key inner pages per site.
Rule followed: **nothing below is to be copied into our site** — it is only used to learn structure, topics, keywords and gaps.

> Limitation: our fetch tool converts pages to text, so JSON-LD / OG tags inside `<head>` were not always visible. Where it says "not detected", confirm with Google's Rich Results Test before relying on it.
> `d2web.in` and `digitalbanegaindia.com` / `shivwebsindia.com` sitemaps refused automated fetching (robots/timeout). For d2web I used its public directory listings (IndiaMART, TechBehemoths) instead.

---

## Quick comparison

| Site | Base | Platform | Approx. pages | Blog | Location pages | Industry pages | Pricing shown | FAQ on home |
|---|---|---|---|---|---|---|---|---|
| techadsmediaa.com | Shahdara, Delhi | WordPress + Yoast | 19 pages | 8 posts | No | No | No | No |
| digitalmarketingplayers.com | Naveen Shahdara, Delhi | WordPress | ~15 + subdomains | Yes (~5 recent) | No | No | No | No |
| digitalbanegaindia.com | Ghaziabad | — | n/a (blocked) | ? | No | Lists 6 industries on home | "Website starting @ Rs 4800" | No |
| websitedesignghaziabad.com (Pointersoft) | Vasundhara, Ghaziabad | Static HTML | 42 URLs | Yes (blogs.html) | **16 micro-locality pages** | No | Yes (tables on location/service pages) | No |
| sharpwebtech.com | Indirapuram, Ghaziabad | WordPress/Elementor theme | ~50 (many theme demo pages) | 5 (mostly lorem ipsum) | No | No | Yes (pricing page + SEO tiers) | Yes (3 Qs) |
| shivwebsindia.com | Ghaziabad (freelancer) | WordPress | n/a (blocked) | Yes | Mentions Delhi/Ghaziabad/Patna | No | No | **Yes (8–11 Qs)** |
| d2web.in | Vaishali, Ghaziabad | — | n/a (blocked) | ? | ? | eCommerce, gaming, hospitality (per TechBehemoths) | Yes on IndiaMART (₹3,999 site, ₹2,000/mo marketing) | ? |

---

## 1. techadsmediaa.com

**Homepage**
- Title: "Best Digital Marketing Agency in Delhi (2026) | Tech Ads Mediaa" — note the **year in the title** for freshness/CTR.
- Meta: claims founding 2020, "best digital marketing agency" in Delhi NCR.
- H1: "Welcome to Tech Ads mediaa" (weak — brand only, no keyword).
- H2 order: certified/partners → Our services → Why choose → Work strategy → Portfolio → Blog → Brand section → "Trusted by over 250 clients" → Team → Testimonials.
- H3s: 12 service cards (Website development, SEO, Amazon marketing, Facebook services, Graphic design, Video editing, Flipkart marketing, Instagram services, SMM, Google Ads, Email, WhatsApp marketing).
- ~2,000–2,500 words.
- Layout: hero + CTA → 12 service cards → why choose (4) → strategy (3 pillars) → 4 portfolio links → 8 blog cards → brand section → client logo carousel (30) → team → contact form (first/last name, email, phone, service dropdown, message).

**Navigation**: Home · Portfolio · Services (dropdown of 11) · Blog · About · Contact + "Get a Quote" button + social icons.
**Footer groups**: About blurb + socials | 12 service links | Quick links (About, Services, Portfolio, Blog, Contact, **Terms, Privacy**) | Address, phone, email, Google Maps link.

**Page list (page-sitemap)**: home, welcome page, whatsapp-marketing, portfolio, flipkart-marketing, video-editing-services, graphic-design, google-ads-services, social-media-marketing, search-engine-optimization, contact-us, blog, enquire-now, amazon-marketing, about-us, services, facebook-services, website-development, e-mail-marketing.
**URL pattern**: flat `/service-name/`.

**Service page sample — /search-engine-optimization/**
- Title "Search Engine Optimization (SEO) - Tech Ads Mediaa" (no location).
- H1 "What is SEO Engine Optimization" (typo; informational, not commercial).
- 20+ H2/H3: why SEO important (8 benefits) → benefits (6) → how we help (4) → CTA.
- ~1,200–1,400 words, no FAQ, no pricing.

**Blog (8 posts, all Jan 2026)**: email marketing best practices; customised marketing plan; ROI on paid ads; content marketing; SEO visibility; social strategy; "trends in 2024". Generic, not local.

**Trust/conversion**: "250+ clients", logo carousel, team section, form, WhatsApp + call buttons, Google Maps.
**Off-site/links**: Facebook, Instagram, LinkedIn, Google Maps listing, GSC verified.
**Keywords**: best digital marketing agency in Delhi; digital marketing agency Delhi NCR; SEO; SMM; Google Ads; WhatsApp marketing; Amazon/Flipkart marketing; video editing.

---

## 2. digitalmarketingplayers.com

**Homepage**
- Title: "Best Digital Marketing Company in Delhi – Boost Your Business Digitally".
- Canonical points to a **different domain** (ushort.dev/...) and the child sitemaps showed a maintenance page — a technical SEO mistake on their side (we should avoid this).
- Two H1s: "TOP DIGITAL MARKETING COMPANY IN DELHI NCR" + tagline H1.
- H2s: Advertising partners → Brands we serve → Happy clients → Mission → Trusted by business owners → Services in Delhi NCR → "We deal all types of industries" → Reviews → Free consultation → Media coverage → Media partners → Case studies ("Challenges we accepted") → Blog → footer.
- ~1,200–1,500 words.

**Navigation**: Home · About (Terms, Privacy, **Refund & Cancellation, Disclaimer**) · Services (Website dev, SMM, PPC, SEO) · Portfolio · Advertise With Us · Influencer Marketing · Blog · Contact.
**Footer**: Quick links (legal pages + blog) | Services | Address, 2 phone numbers, email, **business hours Mon–Sat 10:30–7:00** | Instagram, LinkedIn, Facebook, YouTube.

**Trust elements (strongest of the set)**
- Google Partner, Google Ads/Analytics certified, Meta Business Partner badges.
- 15+ client logos; **24 YouTube video testimonials**; review badges.
- Directory/media badges: **Clutch, GoodFirms, DesignRush, Crunchbase, WooRank**.
- 2 case studies with % results.
- Free-consultation form with service dropdown.
- Separate subdomains: portfolio, PPC, influencer.

**Blog topics**: "Best digital marketing agency in Delhi NCR"; why businesses need SMM; brand story post; SMM guide 2025; Facebook marketing.
**Keywords**: best/top digital marketing company Delhi / Delhi NCR; PPC services; SEO services; SMM services; website development services; performance marketing; content creation.

---

## 3. digitalbanegaindia.com (Ghaziabad)

- Title/meta/H1 not readable via fetch.
- H2/H3: Our digital marketing services → Web designing / Web development / Digital marketing / Website maintenance / SEO / Software development → Satisfied clients / Software engineers (counters) → Web designing & development services → **website-type cards: Business, E-commerce, WordPress, Dynamic, Blogging, News website** → Digital marketing services (SEO, social media, branding management) → "Get website for your business" → "Digitalize your business online".
- ~1,200 words.
- **Price anchor**: "Website starting @ Rs. 4800" + "Enquiry Now".
- **Industries listed**: interior design, tour & travel, real estate, food industry, salon, software.
- No visible FAQ, reviews widget or schema.
- Keywords: website designing Ghaziabad, web development, digital marketing, SEO, WordPress website, e-commerce website.

---

## 4. websitedesignghaziabad.com (Pointersoft Technologies)

**Homepage**
- Title: "Website Designing Company in Ghaziabad - Website Design Ghaziabad - Web Designing Company Ghaziabad" (keyword-stuffed, 3 variants).
- H1: "Welcome to Website Design Company Ghaziabad".
- H2: How to set up a website? → End-to-end solutions → Why choose us → Benefits of digital marketing → Our work → Where we are → Our services → **Citywise services**.
- ~2,100 words. Full address in Vasundhara, 2 phones, email, "Get a Free Quote" form, 4 YouTube videos, 6 partner logos.

**Navigation**: Home · About · Services (14: website designing, static, dynamic, e-commerce, web dev, SEO services, SEO company Ghaziabad, digital marketing, SMM, bulk SMS, domain, hosting, video editing, news portal) · Training (digital marketing institute Ghaziabad) · Career · Enquiry · Blogs · Contact.
**Footer**: Our services (14) | **Citywise services (16 localities)**.

**Sitemap (42 URLs)** — key pattern: `website-design-<locality>.html` for Rajnagar Extension, Hapur, Loni, Murad Nagar, Shastri Nagar, Kavi Nagar, Tronica City, Meerut, Vaishali, Indirapuram, Kaushambi, Modinagar, Vasundhara, Sahibabad, Faridnagar, Dasna. Plus `video-editing-services-ghaziabad.html`, `seo-company-ghaziabad.html`.

**Location page sample — Indirapuram**: Title "Website Designing Company in Indirapuram…", H1 "Website Design Indirapuram", ~850 words, **pricing table (static/dynamic/e-commerce)**, H2 "approximate charges for designing a website… Indirapuram?". Copy is templated — **same text with the locality swapped** (we must not do this).

**Service page sample — Video editing Ghaziabad**: ~1,800 words; long keyword title; H2s cover what is video editing, why you need it, services offered, **cost of video editing in Delhi NCR / Ghaziabad / Noida**, average price; shows hourly price range and a flat package price. Cost questions are clearly a ranking/conversion lever.

**Keywords**: website designing company Ghaziabad; website design + each locality; SEO company Ghaziabad; video editing services Ghaziabad; ecommerce website design; static/dynamic website design; website design cost.

---

## 5. sharpwebtech.com (Indirapuram)

**Homepage**
- Title: "Sharp Web Technology" (brand only). **No meta description.**
- 3 H1s (slider).
- H2s: best IT solution → featured services → team → skills → work process → projects → case studies → blog → consultation.
- Inflated counters (858 projects / 28k clients) and theme-demo pages (home-two…home-twelve, shop, cart, lorem-ipsum blog posts) left in sitemap — **thin/duplicate content risk** on their side.
- 3-question FAQ on home. Team member names shown.

**Navigation (well-structured mega menu — worth learning from)**
- Digital Market: Local SEO, Ecommerce SEO, Best SEO company, Social media marketing, Website optimization
- Web/App Development: Website dev, Ecommerce dev, Shopify, WordPress, Mobile app, UI/UX, CMS
- Paid Marketing: **Facebook Ads, Google Ads, Instagram Ads, YouTube Ads management** (one page each)
**Footer**: Links | Explore (Team, **Pricing plan**, Service, About) | Office map + phone + email | socials (generic, unlinked).

**Sub-service page sample — /local-seo/** (~1,800 words)
- H2s: powerful local SEO → what we offer → services (strategy, website optimization, location-based page analysis, **Google Business Profile optimization**) → results → pricing plans (Basic / Silver / Gold, 3-month) → FAQ (What is local SEO; how long it takes; does it help small business; what is GBP optimization) → consultation.
- Lesson: **one page per sub-service + pricing tiers + FAQ**.

**Pricing page**: 4 monthly plans (generic theme copy).
**Keywords**: local SEO; ecommerce SEO; best SEO company; Shopify/WordPress development; Google/Facebook/Instagram/YouTube ads management; website optimization.

---

## 6. shivwebsindia.com (freelancer, Ghaziabad)

- H1: "Hire the best freelance WordPress Developers in Ghaziabad…"
- H2s: grow your business → freelance IT consultant & digital marketer → why choose us → full range of services → **website design & development process (4 steps)** → freelance website designer in Ghaziabad → **FAQ** → testimonials → blog.
- ~3,500 words (longest homepage of the set).
- **FAQ (strong, buyer-intent)**: cost to create a website; making current site mobile-friendly; what is responsive design; how long a website takes; why every business needs a website; how to find a cost-effective agency; why SEO; why search traffic matters; how SEO helps; responsive design and SEO.
- Trust: 5 dated testimonials, founder name, "10+ years" claim, phone CTAs repeated 3×.
- Keywords: freelance WordPress developer Ghaziabad; freelance website designer Ghaziabad; Delhi NCR; SEO/SMO/PPC.

---

## 7. d2web.in (D2web Solution OPC Pvt Ltd, Vaishali)

Site refused automated fetch. From public listings:
- IndiaMART catalogue: e-commerce website ₹6,999/pack; mobile app ₹9,999; website ₹3,999/pack; digital marketing ₹2,000/month; website designing ₹5,000/month. GST-verified badge, owner name shown.
- TechBehemoths: 11 services (custom software, web, mobile, digital marketing, SEO, UI/UX, graphic design, e-commerce), founded 2017, industries eCommerce/gaming/hospitality/consumer, **no reviews**, "profile strength very poor".
- Lesson: low-price anchors on marketplaces generate enquiries; directory profiles exist but are neglected → easy to outrank with a complete profile + reviews.

---

## Cross-site patterns (what the top results have in common)

1. **One URL per service and sub-service** (Google Ads, Meta/Facebook Ads, Local SEO, video editing, WordPress, Shopify…). Our site groups these into 6 broad pages.
2. **Location targeting** — Pointersoft ranks with 16 locality pages (templated); others put the city in titles/H1s. Nobody has *genuinely unique* location pages → our opportunity.
3. **Price signals** — "starting at ₹X", cost FAQs, pricing tables. Searchers ask "website cost in Ghaziabad".
4. **Trust stack** — client logos, video/Google reviews, partner badges (Google Partner, Meta), directory badges (Clutch, GoodFirms, DesignRush), team, address + map, business hours.
5. **Legal pages** — Privacy, Terms, Refund/Cancellation, Disclaimer in footer.
6. **Blog** exists on every site but content is generic and thin; none target niche + city questions (e.g. "website for clinic in Noida").
7. **Industry pages** — none of the 7 have dedicated niche pages (only lists). Third-party sites like owlclaw.com rank with service × city × industry pages → clear gap we can fill honestly.
8. **Technical weaknesses** across competitors: missing meta descriptions, multiple H1s, keyword-stuffed titles, demo/lorem pages indexed, wrong canonical domain, little or no schema.

## Backlink / citation ideas seen on or around these sites
Google Business Profile · Google Maps embed · Clutch · GoodFirms · DesignRush · Crunchbase · TechBehemoths · IndiaMART · Justdial · Sulekha · Semrush Agency Partners · Krowdbase · YouTube channel (video testimonials) · Facebook · Instagram · LinkedIn company page · WooRank.

Sources: the seven reference homepages and sitemaps listed above; https://m.indiamart.com/d2web-solution/products-and-services.html ; https://techbehemoths.com/company/d2web-solution ; https://owlclaw.com/locations/services/lead-generation-agency/noida/real-estate ; https://agencies.semrush.com/list/dental-clinics-supplies/ghaziabad
