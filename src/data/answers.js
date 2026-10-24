// Answer-first summaries for AEO / GEO (answer engines + AI assistants).
//
// Each page gets ONE short, self-contained answer near the top, written so
// Google (featured snippets, AI Overviews), ChatGPT, Perplexity, Gemini and
// voice assistants can quote it as-is without reading the whole page.
//
// Rules for editing:
//  - Lead with the direct answer in the first sentence. 40–80 words.
//  - Name the brand ("Orizova Digital") and the place — the answer must make
//    sense on its own when copied out of the page.
//  - Facts only: no invented prices, numbers, clients, awards or results.
//  - Keep it consistent with the page body, the FAQs and src/data/facts.js.
//  - Blog posts can also have 3–4 "takeaways" (shown as a short list).

const answers = {
  /* ---------------- home & hubs ---------------- */
  '/': {
    q: 'What is Orizova Digital?',
    a: 'Orizova Digital is a website development and digital marketing agency based in Delhi NCR. It builds fast, mobile-first websites, online stores and apps, and grows businesses with SEO, local SEO, Google Ads, Meta (Facebook & Instagram) Ads, social media, branding and video editing — for clients in Ghaziabad, Noida, Delhi, the Chandigarh Tricity, Varanasi and across India.',
  },
  '/services': {
    q: 'What services does Orizova Digital offer?',
    a: 'Orizova Digital offers three groups of services: build (website development, e-commerce stores, mobile apps), grow (SEO, local SEO, Google Ads, Meta Ads, social media marketing, digital marketing) and create (branding, logo design and video editing). Each service is planned around enquiries and sales, with tracking set up so results can be measured.',
  },
  '/industries': {
    q: 'Which industries does Orizova Digital work with?',
    a: 'Orizova Digital mainly works with clinics and doctors, architects and interior designers, real-estate builders and brokers, restaurants and cafes, and loan agents, DSAs and financial advisors — plus startups and local service businesses. Each industry gets a website and marketing plan built around how its customers search and decide.',
  },
  '/blog': {
    q: 'What does the Orizova Digital blog cover?',
    a: 'The Orizova Digital blog publishes practical, plain-language guides for business owners in India on website cost, getting a website made, choosing a developer, Google Business Profile, local SEO, Meta Ads vs Google Ads, and marketing for clinics, real estate, restaurants, architects and loan agents.',
  },
  '/faq': {
    q: 'What do businesses usually ask Orizova Digital?',
    a: 'Most questions are about website cost and timelines, how long SEO takes, ad budgets, ownership and process. In short: quotes are fixed and written after understanding your scope, SEO builds over months while ads can bring enquiries within days, no honest agency guarantees rankings, and your domain, website and ad accounts stay in your name.',
  },
  '/about': {
    q: 'Who is Orizova Digital?',
    a: 'Orizova Digital is a full-service digital agency in Delhi NCR that builds websites and apps and runs SEO, Google Ads, Meta Ads, social media and video for local and growing businesses. It works on fixed written quotes, keeps domains and ad accounts in the client’s name, and does not use fake reviews, spam links or ranking guarantees.',
  },
  '/contact': {
    q: 'How do I contact Orizova Digital?',
    a: 'You can contact Orizova Digital on WhatsApp or phone at +91 70608 24503, by email at orizovadigital@gmail.com, or through the contact form on this page. Share your business, city and goal, and the team replies with a clear plan and a fixed quote. Consultations are free.',
  },
  '/portfolio': {
    q: 'What websites has Orizova Digital built?',
    a: 'Orizova Digital’s website portfolio includes Morphic Spaces (a spatial design studio in the Chandigarh Tricity), WIPO Group (a fractional real-estate investment portal), Ganesh Creation (a wedding and fashion photography studio) and FPS Subtitle (a subtitling and localisation studio). Each case study explains the brief, the approach and what was built.',
  },
  '/creative-work': {
    q: 'What kind of videos does Orizova Digital edit?',
    a: 'Orizova Digital edits Instagram reels, short-form ad creatives, brand films and kinetic-typography videos for businesses such as a shopping mall, a diagnostic lab, doctors, paint dealers, car brands and gift-hamper sellers — mostly from footage shot on a phone or camera by the client.',
  },

  /* ---------------- services ---------------- */
  '/services/website-development': {
    q: 'What does Orizova Digital’s website development service include?',
    a: 'Orizova Digital is a website development company that builds business websites, landing pages for ads, portfolio sites, WordPress sites, online stores and custom web apps for businesses across India. Every site is coded mobile-first, set up for Google from day one (titles, schema, sitemap, Search Console) and connected to WhatsApp, Google Business Profile, Meta Pixel and Analytics. A focused business website usually takes a few weeks once content is ready.',
  },
  '/services/ecommerce-solutions': {
    q: 'Can Orizova Digital build an online store?',
    a: 'Yes. Orizova Digital builds Shopify, WooCommerce and custom online stores with fast product pages, a short checkout and Indian payment gateways that accept UPI, cards, net banking and wallets. It also migrates existing stores — products, customers and orders where the platform allows — and redirects old URLs to protect search traffic.',
  },
  '/services/app-development': {
    q: 'Does Orizova Digital build mobile apps?',
    a: 'Yes. Orizova Digital builds Android and iOS apps for startups and businesses across India, usually cross-platform with React Native or Flutter so one codebase runs on both, and native apps when the product needs it. The admin panel, backend APIs and marketing website can be built alongside, apps are published under your own developer accounts, and the source code is handed over to you.',
  },
  '/services/digital-marketing': {
    q: 'What is included in Orizova Digital’s digital marketing service?',
    a: 'Orizova Digital’s digital marketing combines SEO, Google Ads, Meta Ads, social media and content in one plan for businesses across India, built around how many enquiries or sales you need each month. Tracking is set up first and reports focus on leads and cost per lead, not likes. Ads can bring enquiries within days; SEO builds over months. No fixed lead numbers are guaranteed.',
  },
  '/services/social-media-marketing': {
    q: 'What does Orizova Digital’s social media management cover?',
    a: 'Orizova Digital manages Instagram, Facebook, LinkedIn and YouTube for businesses across India with a monthly content calendar, post design, captions, reel editing, posting and replies to general comments, plus a monthly review of what worked. Nothing goes live without your approval, and enquiries from comments and DMs are passed to your team so no lead is missed.',
  },
  '/services/meta-ads': {
    q: 'How does Orizova Digital run Meta (Facebook & Instagram) ads?',
    a: 'Orizova Digital runs Facebook and Instagram campaigns for businesses across India, built for fewer but better enquiries: lead forms with qualifying questions, click-to-WhatsApp ads, retargeting, fast landing pages and tracking that tells Meta which leads were useful. It designs static, carousel and reel creatives, and works inside your own Meta Business account.',
  },
  '/services/google-ads': {
    q: 'How does Orizova Digital manage Google Ads?',
    a: 'Orizova Digital manages Google Ads for businesses across India, building accounts around search intent — Search, local, Performance Max and YouTube — with tightly grouped keywords, a growing negative keyword list, matching ad copy, fast landing pages and call and form tracking. Ads can show the day they are approved; the first few weeks are used to learn which keywords convert.',
  },
  '/services/seo': {
    q: 'How does Orizova Digital do SEO?',
    a: 'Orizova Digital’s SEO combines technical fixes, page-by-page optimisation, useful content and local signals, for businesses across India, aimed at the searches that bring enquiries — not vanity keywords. Every project starts with an audit and a keyword map, followed by monthly work you can see. Results usually build over months, and like any honest agency it does not guarantee first-page rankings.',
  },
  '/services/local-seo': {
    q: 'What is local SEO and how does Orizova Digital help?',
    a: 'Local SEO helps a business appear in Google Maps and the local pack for nearby searches. Google ranks these results on relevance, distance and prominence. Orizova Digital optimises your Google Business Profile, builds a steady flow of genuine reviews, fixes citations and adds location pages, for businesses across India. Profile fixes can show results within weeks.',
  },
  '/services/video-editing': {
    q: 'What video editing does Orizova Digital offer?',
    a: 'Orizova Digital edits reels, short-form ad creatives, brand films and animated typography for Instagram, YouTube and Meta ads for brands across India — usually from footage you shoot on your phone. Edits focus on a strong opening, tight cuts, readable captions and fitting music. Monthly reel packages are available, and revision rounds are agreed upfront.',
  },
  '/services/branding-designing': {
    q: 'What branding services does Orizova Digital provide?',
    a: 'Orizova Digital designs logos, complete brand identity systems, social media templates, packaging and pitch decks for businesses across India. You receive editable source files plus PNG, SVG and PDF exports, and the number of concepts and revisions is agreed in the quote. Existing logos can be refreshed instead of replaced.',
  },

  /* ---------------- cities ---------------- */
  '/locations/ghaziabad': {
    q: 'Which digital marketing agency serves Ghaziabad businesses?',
    a: 'Orizova Digital is a website development and digital marketing agency serving Ghaziabad — including Indirapuram, Vaishali, Vasundhara, Kaushambi, Raj Nagar Extension, Crossings Republik and Sahibabad. It builds fast mobile websites and runs local SEO, Google Business Profile optimisation and Meta and Google Ads for clinics, coaching centres, builders, showrooms, manufacturers and restaurants.',
  },
  '/locations/noida': {
    q: 'Which digital agency works with Noida businesses?',
    a: 'Orizova Digital works with startups, IT companies, schools, real-estate projects, D2C brands and clinics in Noida, Greater Noida and Greater Noida West. It designs and develops websites, web apps and mobile apps, and grows them with SEO, content and Google and Meta ads — often pairing a landing page and ads for leads now with SEO for the long term.',
  },
  '/locations/delhi': {
    q: 'Which agency does web design and digital marketing in Delhi?',
    a: 'Orizova Digital designs SEO-ready websites and runs hyper-local marketing for Delhi businesses across South, West, North and Central Delhi — including Connaught Place, Lajpat Nagar, Saket, Karol Bagh, Rajouri Garden, Dwarka and Rohini. It works with fashion and retail brands, clinics, restaurants, wholesalers, professional services and coaching institutes.',
  },
  '/locations/chandigarh': {
    q: 'Which digital marketing agency serves Chandigarh, Mohali and Panchkula?',
    a: 'Orizova Digital serves the Chandigarh Tricity — Chandigarh, Mohali, Panchkula, Zirakpur, Kharar and New Chandigarh. It builds premium, fast, portfolio-led websites and runs SEO and qualified lead-generation campaigns on Meta and Google for real-estate firms, architects, immigration consultants, clinics, hotels, restaurants and education businesses.',
  },
  '/locations/varanasi': {
    q: 'Which agency builds websites for Varanasi businesses?',
    a: 'Orizova Digital builds fast websites and Google visibility for Varanasi businesses — hotels and homestays near the ghats, Banarasi silk and saree sellers, coaching institutes, hospitals, clinics and travel operators in areas like Sigra, Lanka, Cantt, Assi and Sarnath. The focus is on being found by pilgrims, tourists, students and online buyers before they reach the city.',
  },

  /* ---------------- city × service ---------------- */
  '/locations/ghaziabad/website-development': {
    q: 'Who builds business websites in Ghaziabad?',
    a: 'Orizova Digital is a website development company for Ghaziabad that builds business websites, landing pages and online stores for clinics, coaching centres, showrooms, builders and traders in Indirapuram, Vaishali, Raj Nagar Extension, Sahibabad and nearby areas. Sites are fast on mobile, have click-to-call and WhatsApp buttons, and are set up for Google from launch.',
  },
  '/locations/ghaziabad/seo': {
    q: 'Who provides SEO services in Ghaziabad?',
    a: 'Orizova Digital provides SEO and local SEO for Ghaziabad businesses: Google Business Profile optimisation, genuine reviews, locality and service pages, and technical fixes — so clinics, coaching centres, showrooms and service businesses in Indirapuram, Vaishali, Raj Nagar and Crossings Republik appear for "near me" and area searches.',
  },
  '/locations/noida/website-development': {
    q: 'Who develops websites for Noida companies?',
    a: 'Orizova Digital develops websites, landing pages and web apps for Noida startups, IT and service companies, schools, real-estate projects and D2C brands across Noida, Greater Noida and Greater Noida West. Sites are custom-coded, fast and SEO-ready, and can be paired with Google Ads landing pages so campaigns convert from day one.',
  },
  '/locations/noida/seo': {
    q: 'Who does SEO in Noida?',
    a: 'Orizova Digital does SEO for Noida companies and local businesses. National-market companies get technical SEO, detailed service pages and link-worthy content; local businesses like clinics and schools get Google Business Profile, reviews and locality pages. Every engagement starts with a keyword map and a monthly plan for Noida, Greater Noida and Greater Noida West.',
  },
  '/locations/delhi/website-development': {
    q: 'Which company does website designing in Delhi?',
    a: 'Orizova Digital is a website designing and development company for Delhi boutiques, clinics, restaurants, consultants and traders. Its Delhi sites focus on a strong first impression — photography, typography, a clear statement of what you do and where, and an obvious next step — backed by clean custom code, fast loading and on-page SEO.',
  },
  '/locations/delhi/seo': {
    q: 'How should a Delhi business approach SEO?',
    a: 'In Delhi, broad terms like "best dentist in Delhi" are very competitive, so Orizova Digital targets specific services and neighbourhoods first — for example a treatment plus a locality — where a business can win, then grows into broader terms. That means strong service pages, the best Google Business Profile in your area and genuine reviews.',
  },
  '/locations/chandigarh/website-development': {
    q: 'Who builds websites in Chandigarh, Mohali and Panchkula?',
    a: 'Orizova Digital is a website development and web design company serving Chandigarh, Mohali, Panchkula and Zirakpur. It plans, writes, designs and codes fast, premium websites that put your strongest proof first — projects, credentials and genuine reviews — for architects, visa consultants, clinics, real-estate firms and venues, with WhatsApp and call enquiries built in.',
  },
  '/locations/chandigarh/seo': {
    q: 'Who provides SEO in the Chandigarh Tricity?',
    a: 'Orizova Digital provides SEO and Google Maps optimisation across Chandigarh, Mohali, Panchkula and Zirakpur. Because customers search across the whole Tricity, it builds a focused set of service and area pages (without thin duplicates for every sector), strengthens your Google Business Profile and grows genuine reviews.',
  },
  '/locations/varanasi/website-development': {
    q: 'Who builds websites in Varanasi?',
    a: 'Orizova Digital is a website development company working with Varanasi hotels, homestays, Banarasi silk sellers, coaching institutes, hospitals and travel businesses. It plans, writes, designs and codes fast websites set up for Google from day one and connected to WhatsApp, so searches from across India turn into direct calls, bookings and orders without portal commissions.',
  },

  /* ---------------- industries ---------------- */
  '/industries/clinics': {
    q: 'How can a clinic get more patients online?',
    a: 'A clinic gets more patients online by optimising its Google Business Profile, collecting genuine reviews routinely, having a fast website with treatments, timings and booking, sharing responsible content and running Google Ads for treatments people search for. Orizova Digital does this for clinics, dentists, dermatologists, physiotherapists and diagnostic centres, within medical advertising rules.',
  },
  '/industries/architects': {
    q: 'What marketing works for architects and interior designers?',
    a: 'For architects and interior designers, a fast portfolio-led website, an active Instagram and local SEO work best together. Orizova Digital builds portfolio websites that load large project images quickly, explain your process, filter enquiries by project type, and connect with Instagram and Google Business Profile — it built the website for Morphic Spaces, a spatial design studio in the Chandigarh Tricity.',
  },
  '/industries/real-estate': {
    q: 'How do builders and brokers get better real-estate leads?',
    a: 'Better real-estate leads come from filtering in the ad itself (location, configuration, price band), two or three qualifying questions on the form, follow-up within minutes, project landing pages and tracking site visits rather than just leads. Orizova Digital runs Meta lead ads, Google search and WhatsApp follow-up this way for builders, brokers and channel partners.',
  },
  '/industries/restaurants-cafes': {
    q: 'How can restaurants and cafes get more customers online?',
    a: 'Restaurants and cafes get more walk-ins by keeping their Google Maps listing complete with photos and fresh reviews, posting reels consistently on Instagram, and running small local ads around offers and events. Orizova Digital handles Google Maps, reviews, Instagram reels and local ads for restaurants, cafes, bakeries and cloud kitchens.',
  },
  '/industries/finance-loan-agents': {
    q: 'How can loan agents and DSAs get quality leads online?',
    a: 'Loan agents and DSAs get quality leads by building trust first — a clear, transparent website and Google profile — then using Google search for people already looking for loans, Meta ads for reach, and fast WhatsApp follow-up, while staying compliant (for example, no bank logos without permission). Orizova Digital sets this up for loan agents, DSAs, insurance and financial advisors.',
  },

  /* ---------------- portfolio ---------------- */
  '/portfolio/morphic-spaces': {
    q: 'What did Orizova Digital build for Morphic Spaces?',
    a: 'Orizova Digital designed and developed the website for Morphic Spaces, a spatial design studio in the Chandigarh Tricity working on contemporary residential, commercial and hospitality projects. It is a premium, image-led site with a cinematic full-screen hero, editorial serif typography and a project showcase that lets the architecture speak first.',
  },
  '/portfolio/wipo-group': {
    q: 'What did Orizova Digital build for WIPO Group?',
    a: 'Orizova Digital built an interactive fractional real-estate investment portal for WIPO Group, with a live wallet dashboard, property listings and a coin-trading interface — designed to make fractional property ownership feel simple and trustworthy for first-time users.',
  },
  '/portfolio/ganesh-creation': {
    q: 'What did Orizova Digital build for Ganesh Creation?',
    a: 'Orizova Digital built a cinematic portfolio website for Ganesh Creation, a pan-India wedding and fashion photography studio, with an animated intro loader, a filterable gallery so couples can browse by type of shoot, and a team showcase.',
  },
  '/portfolio/fps-subtitle': {
    q: 'What did Orizova Digital build for FPS Subtitle?',
    a: 'Orizova Digital built the corporate website for FPS Subtitle, a Bollywood subtitling, translation and localisation studio, with rotating multilingual hero messaging and a full service breakdown that shows its multilingual capability at a glance.',
  },

  /* ---------------- blog ---------------- */
  '/blog/website-cost-in-delhi-ncr': {
    q: 'How much does a website cost in Delhi NCR?',
    a: 'Website cost in Delhi NCR depends mainly on the number of pages, design approach (template or custom), who writes the content, features like booking or payments, the platform, SEO and speed setup, and ongoing costs like domain, hosting and maintenance. A one-page landing site costs least; multi-page sites and online stores cost more. Always compare itemised quotes.',
    takeaways: [
      'Price is mostly time and responsibility — cheap quotes often leave out content, SEO setup, mobile testing or hosting.',
      'Seven factors decide cost: pages, design, content, features, platform, SEO/speed setup and ongoing costs.',
      'Compare itemised quotes on what is included, not just the total.',
      'Make sure the domain is registered in your own name.',
    ],
  },
  '/blog/google-business-profile-guide': {
    q: 'How do I optimise my Google Business Profile?',
    a: 'To optimise a Google Business Profile: claim and verify it correctly, choose the most accurate primary category, fill every field (hours, services, areas, description), add real photos, build a steady flow of genuine reviews and reply to them, post updates regularly, and make sure your name, address and phone match everywhere else online. The profile is free.',
    takeaways: [
      'Google ranks local results on relevance, distance and prominence.',
      'The primary category is one of the most important choices on the profile.',
      'Genuine reviews, collected steadily, matter more than a one-time burst.',
      'Keep your business name, address and phone identical across the web.',
    ],
  },
  '/blog/meta-ads-vs-google-ads': {
    q: 'Meta Ads or Google Ads — which is better for a local business?',
    a: 'Google Ads catches people who are already searching for your service, so it suits urgent, high-intent needs. Meta Ads (Facebook and Instagram) reaches people before they search, so it suits visual offers, events and creating demand. Many local businesses use both. Judge each by cost per qualified lead or sale, not just cost per click.',
    takeaways: [
      'Google = intent (people searching now). Meta = interruption (people discovering you).',
      'Meta often has a lower cost per lead, but lead quality varies more.',
      'Give each campaign a few weeks and enough budget before deciding.',
      'Running both together often works best once tracking is in place.',
    ],
  },
  '/blog/get-more-patients-clinic-online': {
    q: 'How can a clinic get more patients online?',
    a: 'Start with a complete Google Business Profile, make asking for reviews a routine, build a simple fast website with treatments, timings and booking, share helpful and responsible content, use Google Ads for treatments people actively search for and Meta for awareness — and measure calls and appointments, not clicks. Always stay within medical advertising rules.',
    takeaways: [
      'Google Business Profile fixes and a booking option can help within weeks.',
      'Reviews should be collected routinely and genuinely.',
      'Patient testimonials need clear consent and no misleading claims.',
      'Track calls and appointments as the real result.',
    ],
  },
  '/blog/real-estate-leads-meta-ads': {
    q: 'How do I get better-quality real-estate leads from Facebook and Instagram ads?',
    a: 'Put the filter in the ad itself (location, configuration, price), add two or three qualifying questions to the lead form, respond within minutes, send higher-intent buyers to a landing page, use creatives that show the real project, teach Meta which leads were good, and measure cost per site visit instead of cost per lead.',
    takeaways: [
      'Most poor leads come from forms set for maximum volume and slow follow-up.',
      'Two or three custom questions is usually the right length.',
      'Real-estate ads must follow Meta’s Special Ad Category rules.',
      'Cost per site visit is a better measure than cost per lead.',
    ],
  },
  '/blog/how-to-get-a-business-website-india': {
    q: 'How do I get a business website made in India?',
    a: 'Decide what the website must achieve, prepare your content (services, photos, contact details), choose a developer by checking live work and an itemised quote, then go through planning, design, development, testing and launch. Once content is ready, a landing page takes about a week and a 5–10 page business website about 2–4 weeks. Keep the domain in your own name.',
    takeaways: [
      'Prepare content and photos before development starts — it is the most common delay.',
      'Ask for live examples and an itemised quote before you pay.',
      'A 5–10 page business website usually takes about 2–4 weeks once content is ready.',
      'After launch, set up Google Search Console and Google Business Profile.',
    ],
  },
  '/blog/website-development-cost-chandigarh': {
    q: 'How much does website development cost in Chandigarh?',
    a: 'Website cost in Chandigarh, Mohali and Panchkula depends on the number of pages, design approach, content writing and features. A landing page costs much less than a multi-page business website, and an online store or web app costs more again. Ask about recurring costs — domain, hosting, paid plugins — and compare itemised quotes.',
    takeaways: [
      'Quotes differ because the scope behind them differs.',
      'Domain and hosting are sometimes included only for the first year.',
      'WordPress can be cheaper at the start; paid plugins renew every year.',
      'The cheapest quote often leaves out content, SEO setup or support.',
    ],
  },
  '/blog/choose-web-development-company-chandigarh': {
    q: 'How do I choose a web development company in Chandigarh?',
    a: 'Check their real, live work on your own phone; verify their claims; ask for an itemised quote that says who writes the content and what SEO setup is included; confirm you will own the domain, hosting and code; and ask what support you get after launch. Be wary of anyone who guarantees first-page Google rankings.',
    takeaways: [
      'Open their live websites on your phone, not just screenshots.',
      'Get scope, content writing and SEO setup in writing.',
      'Make sure the domain and hosting are in your name.',
      'Nobody can guarantee first-page rankings — Google decides.',
    ],
  },
  '/blog/instagram-ideas-restaurants-cafes': {
    q: 'What should restaurants and cafes post on Instagram?',
    a: 'Restaurants and cafes do well posting food close-ups and preparation, the place and its vibe, the people behind it, reasons to visit now (offers, events, new dishes) and trust-building answers (timings, location, reviews). A sustainable routine of a few reels a week plus daily stories, shot well on a phone with a location tag, works better than bursts.',
    takeaways: [
      'Mix five themes: food, place, people, reasons to come now, and trust.',
      'Consistency beats bursts — a few reels a week plus stories.',
      'Good light, steady shots and clear audio matter more than the camera.',
      'Always add a location tag and a clear way to book or order.',
    ],
  },
  '/blog/architect-portfolio-website-tips': {
    q: 'What makes a good architect or interior designer portfolio website?',
    a: 'A good architect portfolio website shows a curated set of the best, most relevant projects with clear structure, loads large images quickly, explains the studio’s process and fee approach, filters enquiries by project type and budget, and works together with Instagram and Google Business Profile.',
    takeaways: [
      'Quality over quantity — show your best, most relevant projects.',
      'Optimise images so the site stays fast on mobile.',
      'Explain how you work and share typical budgets to filter enquiries.',
      'Link the website and Instagram so each supports the other.',
    ],
  },
  '/blog/loan-agent-lead-generation': {
    q: 'How can loan agents and DSAs get quality leads online?',
    a: 'Build trust first with a clear website and Google profile, use Google search to reach people already looking for loans, use Meta ads for reach, reply on WhatsApp within the first few minutes, publish helpful content, and follow compliance rules — such as not using bank or NBFC logos without permission. Measure files logged and disbursals, not just leads.',
    takeaways: [
      'Trust comes before ads — a transparent website is strongly recommended.',
      'Home loans, business loans and loan against property have strong search demand.',
      'Fast WhatsApp follow-up decides lead quality.',
      'Never use bank logos in ads without explicit permission.',
    ],
  },
  '/blog/local-seo-checklist': {
    q: 'What is a local SEO checklist for small businesses?',
    a: 'A local SEO checklist covers five areas: a complete and accurate Google Business Profile, a steady flow of genuine reviews with replies, website pages for each service and area with your name, address and phone, consistent citations and local links, and tracking calls, direction requests and website visits from Maps.',
    takeaways: [
      'Google Business Profile is the foundation of local SEO.',
      'Reviews and replies build prominence over time.',
      'Each service and area you serve deserves a useful page.',
      'Check profile details monthly and post every week or two.',
    ],
  },
};

export const answerFor = (path) => answers[path] || null;

export default answers;
