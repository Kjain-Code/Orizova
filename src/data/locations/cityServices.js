// Service × city pages: /locations/<city>/<service>.
// Every page is written separately for its market — never copy one and swap
// the city name.

import moreCities from './cities';

const cityServices = [
  /* ============================ GHAZIABAD ============================ */
  {
    city: 'ghaziabad',
    service: 'website-development',
    label: 'Website development company in Ghaziabad',
    banner: 'Business websites, landing pages and online stores for clinics, coaching centres, showrooms, builders and traders across Ghaziabad — fast on mobile and built to bring calls.',
    intro: {
      h2: 'Websites for how Ghaziabad customers actually search',
      paras: [
        'A parent in Indirapuram looking for a coaching centre, a family in Raj Nagar Extension looking for a dentist, or a buyer searching for a manufacturer in Sahibabad — all of them search on a phone, compare two or three results, and call the one that looks most trustworthy and answers their question fastest.',
        'We design websites that win that comparison: your services and locality visible in the first screen, timings and directions one tap away, WhatsApp and call buttons that follow the visitor down the page, and real photos instead of stock images. Under the hood each page is set up for Google so the site keeps bringing visitors long after launch.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Ghaziabad',
        h2: 'Websites we build for Ghaziabad businesses',
        items: [
          { title: 'Clinic & hospital websites', desc: 'Doctor profiles, treatments, OPD timings, appointment requests and map — for the many clinics across Indirapuram, Vaishali and Raj Nagar.', to: '/industries/clinics' },
          { title: 'Coaching & school websites', desc: 'Courses, batches, results you can verify, admission enquiry forms and parent-friendly FAQs.' },
          { title: 'Showroom & retail websites', desc: 'Product categories, offers, store location and WhatsApp enquiry for furniture, electronics, fashion and auto showrooms.' },
          { title: 'Manufacturer & trader websites', desc: 'Product catalogues with specifications, bulk-enquiry forms and pages for each product line — useful for Sahibabad, Loni and Meerut Road units.' },
          { title: 'Builder & real estate pages', desc: 'Project landing pages with RERA details, floor plans and lead forms for Raj Nagar Extension and NH-24 projects.', to: '/industries/real-estate' },
          { title: 'Restaurant & cafe sites', desc: 'Menu, reservations, delivery links and Google Maps for food businesses around Indirapuram Habitat Centre and Vaishali.', to: '/industries/restaurants-cafes' },
        ],
      },
      {
        type: 'prose',
        tag: 'Local details',
        h2: 'What a Ghaziabad website should get right',
        bullets: [
          'Name the localities you serve (Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension…) naturally on your pages, so Google and customers know where you work',
          'Use the same business name, phone and address as your Google Business Profile',
          'Keep pages light: many visitors are on mobile data in busy markets',
          'Show Hindi-friendly wording where your customers prefer it — a bilingual heading or FAQ can improve trust',
          'Add a clear landmark or "how to reach us" note; addresses in sectors and blocks can be hard to find',
        ],
      },
      {
        type: 'process',
        h2: 'How we build your Ghaziabad website',
        steps: [
          { title: 'Call & requirement', desc: 'We understand your services, customers and the areas you serve.' },
          { title: 'Page plan', desc: 'Which pages you need and which searches each one targets.' },
          { title: 'Design preview', desc: 'You review the homepage design before development.' },
          { title: 'Build & connect', desc: 'WhatsApp, forms, Google Maps, analytics and Search Console.' },
          { title: 'Launch & support', desc: 'Go live, then optional monthly updates and SEO.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Cost',
        h2: 'Website design cost in Ghaziabad',
        paras: [
          'We do not publish one-size-fits-all packages, because a five-page clinic website and a 300-product catalogue are very different jobs. After a short call we send a fixed quote that lists every page and feature. The factors that change the price are explained in our [website cost guide](/blog/website-cost-in-delhi-ncr).',
        ],
      },
      {
        type: 'prose',
        tag: 'Ghaziabad localities',
        h2: 'Website development across Ghaziabad',
        paras: ['We plan pages around the parts of Ghaziabad you actually serve, so local searches like "clinic in Indirapuram" or "coaching in Raj Nagar Extension" can find you.'],
        bullets: [
          '**Indirapuram, Vaishali, Vasundhara & Kaushambi** — clinics, salons, coaching, restaurants and home services for dense residential societies',
          '**Raj Nagar, Raj Nagar Extension & Kavi Nagar** — schools, hospitals, builders and family businesses',
          '**Crossings Republik, Siddharth Vihar & NH-24** — new townships with fast-growing local competition',
          '**Sahibabad, Loni, Meerut Road & Bulandshahr Road industrial areas** — manufacturers and traders that need product catalogues and bulk enquiries',
          '**Modinagar, Muradnagar & Dasna** — local businesses reaching customers beyond the city centre',
        ],
      },
      {
        type: 'cards',
        tag: 'Website types',
        h2: 'Website development services in Ghaziabad',
        items: [
          { title: 'Business websites', desc: 'A page for each service with call, WhatsApp and enquiry buttons on every page.' },
          { title: 'Custom-coded websites', desc: 'Hand-coded React sites that load fast and give full control over SEO.' },
          { title: 'WordPress websites', desc: 'Lightweight WordPress builds when your team wants to edit pages themselves.' },
          { title: 'E-commerce stores', desc: 'Online stores with Razorpay, COD and shipping.', to: '/services/ecommerce-solutions' },
          { title: 'Landing pages for ads', desc: 'Focused pages for Meta and Google campaigns with lead tracking.', to: '/services/meta-ads' },
          { title: 'Website redesign', desc: 'Old sites rebuilt faster, with redirects so existing rankings carry over.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Timelines',
        h2: 'How long a Ghaziabad website takes',
        bullets: [
          '**Landing page:** about 1 week once content is ready',
          '**Business website (5–10 pages):** about 2–4 weeks',
          '**Online store:** about 4–6 weeks depending on products',
          '**Web app or portal:** planned in milestones',
        ],
      },
      { type: 'work' },
      {
        type: 'faq',
        faqs: [
          ['How much does a website cost in Ghaziabad?', 'It depends on pages, design, content and features. We send a fixed, itemised quote after a short call; our [website cost guide](/blog/website-cost-in-delhi-ncr) explains the factors.'],
          ['How long does it take to make a website?', 'About 1 week for a landing page and 2–4 weeks for a 5–10 page business website once content is ready.'],
          ['Will I own the domain and hosting?', 'Yes. Both are registered in your name and all logins are handed over at launch.'],
          ['Is the website SEO-friendly?', 'Yes — fast loading, unique titles and descriptions, schema, sitemap and Google Search Console setup are included. Rankings also need reviews, content and links over time; nobody can guarantee a #1 position.'],
          ['Do you write the content?', 'Yes. We write or polish copy for each page, in English, Hindi or both, and you approve it before launch.'],
          ['Do you build websites for manufacturers in Sahibabad and Loni?', 'Yes — product catalogues with specifications, certifications and bulk-enquiry forms.'],
          ['Can you make a website for my shop in Indirapuram or Vaishali?', 'Yes. We build websites for shops and service businesses across Ghaziabad and connect them to your Google Business Profile so customers can find, call and visit you easily.'],
          ['Do you build websites in Hindi?', 'Yes. We can create bilingual pages or Hindi sections where your customers prefer them.'],
          ['Can my website show my products with prices?', 'Yes. You can show prices, request-a-quote buttons, or a full online store with payments — whichever suits your business.'],
          ['Will you help with Google Maps too?', 'Yes. We can optimise your Google Business Profile at launch; ongoing work is part of [SEO in Ghaziabad](/locations/ghaziabad/seo).'],
          ['Do I need to meet you in person?', 'Not necessarily. Most website projects run smoothly over calls, WhatsApp and shared documents.'],
        ],
      },
    ],
  },
  {
    city: 'ghaziabad',
    service: 'seo',
    label: 'SEO company in Ghaziabad',
    banner: 'Local SEO, Google Maps optimisation and content for Ghaziabad businesses — so you appear when people nearby search for your service.',
    intro: {
      h2: 'Rank where Ghaziabad customers are searching',
      paras: [
        'Searches in Ghaziabad are intensely local. People type "near me", or add their area: "physiotherapist Vaishali", "maths tuition Indirapuram", "modular kitchen Raj Nagar Extension". Google answers these with the map pack first and then websites that clearly serve that area.',
        'Our Ghaziabad SEO focuses on those two places: a strong Google Business Profile with genuine reviews, and a website whose service and location pages match how your customers search. For businesses selling across NCR — manufacturers, traders, B2B services — we add product and industry pages that target wider searches.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our Ghaziabad SEO work',
        bullets: [
          'Google Business Profile optimisation: categories, services, photos, posts, Q&A and booking links',
          'A review routine so happy customers actually leave reviews — and replies to every review',
          'Service pages and locality mentions for the areas you serve (Indirapuram, Vaishali, Vasundhara, Kaushambi, Raj Nagar Extension, Crossings Republik and more)',
          'Technical fixes: speed, mobile usability, indexing and schema markup',
          'Consistent listings on Justdial, Sulekha, IndiaMART and other directories',
          'Monthly reporting from Google Search Console and your Business Profile',
        ],
      },
      {
        type: 'cards',
        tag: 'Examples',
        h2: 'How SEO looks for different Ghaziabad businesses',
        items: [
          { title: 'A clinic in Indirapuram', desc: 'Treatment pages, doctor profiles, review requests after visits and Business Profile posts about camps or new services.' },
          { title: 'A coaching centre in Vasundhara', desc: 'Course and batch pages, admission-season content and FAQs parents ask before enrolling.' },
          { title: 'A manufacturer in Sahibabad', desc: 'Product pages with specifications, industry pages and B2B directory listings for buyers across NCR.' },
        ],
      },
      {
        type: 'process',
        h2: 'Our SEO process for Ghaziabad',
        steps: [
          { title: 'Local audit', desc: 'Your profile and website vs. the businesses ranking above you.' },
          { title: 'Fix the basics', desc: 'Profile, NAP consistency, technical issues.' },
          { title: 'Build local pages', desc: 'Service and area content that matches real searches.' },
          { title: 'Reviews & citations', desc: 'Steady review growth and quality listings.' },
          { title: 'Measure', desc: 'Calls, direction requests, rankings and website enquiries.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Ghaziabad search habits',
        h2: 'How people in Ghaziabad search — and what it means for SEO',
        paras: [
          'Many searches mix Hindi and English ("dentist Vaishali mein", "best tuition near Shipra Mall") or use landmarks rather than sector numbers. Your Google profile and website should mention the landmarks and areas customers actually use, written naturally. Reviews that mention your locality and services also help Google connect you with those searches.',
          'For businesses that serve all of Ghaziabad from one location, we focus on the areas within a realistic travel distance and use ads to reach further out, instead of creating dozens of near-identical locality pages.',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How long will it take to rank on Google Maps in Ghaziabad?', 'Profile improvements can show movement within weeks; competitive categories like clinics and coaching take longer and depend on reviews and distance from the searcher.'],
          ['Can I rank in Indirapuram if my clinic is in Vaishali?', 'Map results favour businesses close to the searcher, so ranking far away is hard. Website pages and Google Ads can help you reach nearby areas.'],
          ['Do you do SEO for B2B companies in Ghaziabad?', 'Yes. For manufacturers and traders we focus on product-level pages and searches from buyers across NCR and India.'],
          ['Will you write content for my website?', 'Yes. We write service, area and blog content, and you approve it before publishing.'],
          ['Do you also manage Google Ads in Ghaziabad?', 'Yes — many clients run [Google Ads](/services/google-ads) while SEO builds up.'],
        ],
      },
    ],
  },

  /* ============================== NOIDA ============================== */
  {
    city: 'noida',
    service: 'website-development',
    label: 'Website development company in Noida',
    banner: 'Websites, landing pages and web apps for Noida startups, IT firms, schools, real-estate projects and local businesses in Greater Noida West.',
    intro: {
      h2: 'From startup landing pages to society-level local businesses',
      paras: [
        'Noida needs two kinds of websites. Startups, SaaS products and IT service companies around Sectors 62, 63 and the Expressway need sites that explain a product clearly, look credible to clients and investors, and convert visitors into demos or sales calls. Consumer businesses in the residential sectors and Greater Noida West need sites that load instantly on a phone and get people to call, book or visit.',
        'We build both. For product companies that means clear messaging, feature and pricing pages, case studies and integrations with your CRM. For local businesses it means services, locality, reviews and WhatsApp — and nothing that slows the page down.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Noida',
        h2: 'Websites we build for Noida',
        items: [
          { title: 'Startup & SaaS websites', desc: 'Product pages, pricing, demo booking and documentation-friendly structure.' },
          { title: 'IT & service company sites', desc: 'Service pages, industries served, case studies and careers pages.' },
          { title: 'School & edtech websites', desc: 'Admissions, curriculum, facilities, fee enquiry and parent FAQs.' },
          { title: 'Real-estate project pages', desc: 'For Noida, Greater Noida West and Yamuna Expressway projects, with lead forms and RERA details.', to: '/industries/real-estate' },
          { title: 'Clinic & wellness sites', desc: 'For practices serving the residential sectors and societies.', to: '/industries/clinics' },
          { title: 'Web apps & dashboards', desc: 'Client portals, booking systems and admin panels.', to: '/services/app-development' },
        ],
      },
      {
        type: 'prose',
        tag: 'Built for growth',
        h2: 'Ready for ads and SEO from day one',
        paras: [
          'Many Noida businesses start running Google or Meta ads soon after launch. We build landing pages with a single clear action, add conversion tracking for forms, calls and WhatsApp clicks, and connect Google Analytics and Search Console before go-live. That way your first campaign already has clean data, and your SEO has a solid technical base.',
        ],
        bullets: [
          'Core Web Vitals-friendly code and images',
          'Schema markup for organisation, services and FAQs',
          'CRM, Google Sheets or email routing for every enquiry',
          'Easy content editing for your team where needed',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Noida teams',
        steps: [
          { title: 'Kick-off', desc: 'Goals, audience, competitors and success metrics.' },
          { title: 'Information architecture', desc: 'Sitemap, page goals and keyword mapping.' },
          { title: 'Design sprints', desc: 'Key screens reviewed with your team.' },
          { title: 'Development & QA', desc: 'Responsive build, integrations and testing.' },
          { title: 'Launch', desc: 'Deployment, tracking checks and handover.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Noida localities',
        h2: 'Websites for every part of Noida and Greater Noida',
        paras: [
          'Noida is really several markets in one city. A website that works for a SaaS company in Sector 62 will not work for a pre-school in Greater Noida West, so we plan pages around who your customers are and where they search from.',
        ],
        bullets: [
          '**Sectors 62, 63, 125–135 & the Expressway** — IT companies, startups, SaaS and B2B service firms that need credible, conversion-focused sites',
          '**Sector 18, Atta & Sector 104 / 137** — retail, restaurants, salons and showrooms that need maps, offers and WhatsApp',
          '**Greater Noida West (Noida Extension), Gaur City & Techzone 4** — clinics, coaching centres, pre-schools and home services for large residential societies',
          '**Greater Noida, Knowledge Park & Pari Chowk** — colleges, institutes, hostels and manufacturers',
          '**Yamuna Expressway & Jewar belt** — real-estate projects and industrial units preparing for the new airport',
        ],
      },
      {
        type: 'cards',
        tag: 'Also in Noida',
        h2: 'More websites Noida businesses ask us for',
        items: [
          { title: 'Manufacturer & exporter catalogues', desc: 'Product pages with specifications, certifications and bulk-enquiry forms for units in Phase 2, Hosiery Complex and Ecotech.' },
          { title: 'E-commerce stores', desc: 'Shopify, WooCommerce or custom stores with Razorpay, COD and shipping integrations.', to: '/services/ecommerce-solutions' },
          { title: 'Website redesign', desc: 'Move an old WordPress or builder site to a faster stack without losing the rankings you already have.' },
          { title: 'Landing pages for ads', desc: 'One-goal pages for Meta and Google campaigns with call, WhatsApp and form tracking.', to: '/services/google-ads' },
        ],
      },
      {
        type: 'prose',
        tag: 'Timelines & cost',
        h2: 'How long a website takes and what it costs in Noida',
        paras: [
          'Once content is ready, a landing page usually takes about a week, a 5–10 page business website 2–4 weeks, and an online store 4–6 weeks. Product websites and web apps are planned in milestones after a requirements call.',
          'Cost depends on pages, design depth, who writes the content and the features you need. We send a fixed, itemised quote before any payment — our [website cost guide](/blog/website-cost-in-delhi-ncr) explains each factor so you can compare quotes fairly.',
        ],
      },
      { type: 'work', h2: 'Websites we have built' },
      {
        type: 'faq',
        faqs: [
          ['How much does a website cost in Noida?', 'It depends on pages, design, content and features. A landing page costs far less than a multi-page site or online store. We share a fixed, itemised quote after a short call — see our [cost guide](/blog/website-cost-in-delhi-ncr).'],
          ['How long does it take to build a website?', 'About 1 week for a landing page and 2–4 weeks for a 5–10 page business site once content is ready; stores and web apps take longer.'],
          ['Can you build a SaaS or startup website that converts demos?', 'Yes — clear positioning, feature and pricing pages, social proof, demo booking and analytics events for every step of the funnel.'],
          ['Do you build e-commerce websites in Noida?', 'Yes — Shopify, WooCommerce or custom code with Razorpay, COD and shipping. See [e-commerce solutions](/services/ecommerce-solutions).'],
          ['Will I own my domain, hosting and code?', 'Yes. Everything is registered in your name and all logins are handed over at launch.'],
          ['Is the website SEO-friendly?', 'Yes. Pre-rendered or server-rendered pages, unique titles and descriptions, schema, sitemap, fast loading and Search Console setup are included. Ongoing ranking work is part of our [SEO service in Noida](/locations/noida/seo).'],
          ['Can you guarantee first-page rankings?', 'No honest company can — Google decides rankings. We build the site the way Google rewards and support it with local SEO, content and links.'],
          ['Do you write the content?', 'Yes. We write or polish copy for each page around how your customers search, and you approve it before launch.'],
          ['Do you offer maintenance after launch?', 'Yes — updates, backups, security and new pages on a monthly plan, or you can manage simple edits yourself.'],
          ['Do you build websites with React or Next.js?', 'Yes. We use modern JavaScript frameworks for product sites and web apps, and WordPress when your team needs simple editing.'],
          ['Can you build our website and app together?', 'Yes. We often build the marketing website, web admin panel and mobile app as one project.'],
          ['Do you work with businesses in Greater Noida West?', 'Yes. Greater Noida West, Greater Noida and the Expressway are part of our service area.'],
          ['How do you price a website project?', 'After a requirement call we send a fixed quote with the page list and features. See [what affects website cost](/blog/website-cost-in-delhi-ncr).'],
          ['Can you help with SEO after launch?', 'Yes — see [SEO in Noida](/locations/noida/seo).'],
        ],
      },
    ],
  },
  {
    city: 'noida',
    service: 'seo',
    label: 'SEO company in Noida',
    banner: 'SEO for Noida companies and local businesses — technical SEO, content and Google Maps optimisation for Noida, Greater Noida and Greater Noida West.',
    intro: {
      h2: 'SEO for both B2B companies and neighbourhood businesses',
      paras: [
        'A software company in Sector 63 and a pediatric clinic in Sector 76 both need SEO, but they need very different SEO. The software company competes nationally for service and solution keywords, so it needs strong technical foundations, detailed service pages and content that earns links. The clinic competes within a few kilometres, so Google Business Profile, reviews and locality pages matter far more.',
        'We start every Noida engagement by working out which game you are playing, then build a keyword map and monthly plan around it.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Two approaches',
        h2: 'How we approach SEO in Noida',
        items: [
          { title: 'For B2B and IT companies', desc: 'Technical SEO, service and solution pages, comparison and use-case content, case studies and digital PR for links.' },
          { title: 'For local businesses', desc: 'Google Business Profile, reviews, sector and society-level pages, and listings on local directories.', to: '/services/local-seo' },
          { title: 'For real estate', desc: 'Project, locality and price-range pages that match how buyers search for Noida and Greater Noida West homes.', to: '/industries/real-estate' },
        ],
      },
      {
        type: 'prose',
        tag: 'What is included',
        h2: 'Our Noida SEO services',
        bullets: [
          'Technical audit and fixes — indexing, speed, mobile, structured data, internal links',
          'Keyword research and a one-keyword-per-page map',
          'New and improved service, location and blog content each month',
          'Google Business Profile optimisation and review routine (for local businesses)',
          'Relevant listings and link building — no spam networks',
          'Monthly report with Search Console clicks, rankings and leads',
        ],
      },
      {
        type: 'process',
        h2: 'Our SEO process',
        steps: [
          { title: 'Audit & benchmark', desc: 'Where you stand vs. competitors.' },
          { title: 'Keyword map', desc: 'Pages to improve and pages to create.' },
          { title: 'Technical fixes', desc: 'Remove what holds rankings back.' },
          { title: 'Content & local', desc: 'Monthly content and profile work.' },
          { title: 'Report & refine', desc: 'Double down on what drives enquiries.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Noida specifics',
        h2: 'What makes SEO in Noida different',
        paras: [
          'Noida addresses are organised by sector numbers, and people search that way: "physiotherapist sector 50", "play school sector 137", "coworking sector 62". Mentioning your sector, nearby sectors and well-known landmarks (metro stations, malls, expressway exits) in your content and profile helps you match those searches.',
          'For B2B companies, the competition is national rather than local, so we prioritise technical quality, detailed service and solution pages, and content that earns mentions from industry websites — the signals that help you compete beyond Noida.',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Do you do SEO for SaaS and IT companies in Noida?', 'Yes. We focus on technical health, service and solution pages, and content that answers buyer questions.'],
          ['Can you help my business rank in Greater Noida West?', 'Yes, through Google Business Profile optimisation, reviews and locality content for Greater Noida West societies and sectors.'],
          ['How soon will SEO show results?', 'Technical and local improvements can show early movement; competitive national keywords take longer. We share realistic milestones after the audit.'],
          ['Is SEO enough, or do I need ads too?', 'SEO builds long-term traffic. If you need enquiries immediately, run [Google Ads](/services/google-ads) alongside.'],
          ['Do you guarantee rankings?', 'No — nobody can. We commit to transparent work and reporting.'],
        ],
      },
    ],
  },

  /* ============================== DELHI ============================== */
  {
    city: 'delhi',
    service: 'website-development',
    label: 'Website designing company in Delhi',
    banner: 'Website designing and development for Delhi boutiques, clinics, restaurants, consultants and traders — premium-looking, fast, custom-coded and ready to rank on Google.',
    intro: {
      h2: 'Web design that stands out in a crowded city',
      paras: [
        'In Delhi your website is compared not just with the business next door but with the best brands customers follow online. A fashion label in Shahpur Jat, a dermatology clinic in Greater Kailash or a CA firm in Nehru Place is judged in a few seconds on how established and trustworthy it looks.',
        'Our Delhi web design work focuses on first impressions and clarity: strong photography and typography, a clear statement of what you do and where, and an obvious next step. We back the design with clean code, fast loading and on-page SEO so it also performs in Google search.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Delhi',
        h2: 'Websites for Delhi businesses',
        items: [
          { title: 'Fashion & lifestyle brands', desc: 'Lookbooks, collections and online stores for designers and boutiques.', to: '/services/ecommerce-solutions' },
          { title: 'Clinics & wellness centres', desc: 'Doctor-first websites with treatments, timings and booking.', to: '/industries/clinics' },
          { title: 'Restaurants, cafes & bars', desc: 'Menu, ambience, reservations, events and delivery links.', to: '/industries/restaurants-cafes' },
          { title: 'Professional services', desc: 'CA, legal, consulting and financial firms that need credibility and clear service pages.', to: '/industries/finance-loan-agents' },
          { title: 'Wholesale & trading', desc: 'Product catalogues and bulk-enquiry flows for Karol Bagh, Chandni Chowk and Sadar Bazaar businesses.' },
          { title: 'Architects & studios', desc: 'Portfolio-led design for practices across South and West Delhi.', to: '/industries/architects' },
        ],
      },
      {
        type: 'prose',
        tag: 'Design principles',
        h2: 'What makes a Delhi business website convert',
        bullets: [
          'Real photos of your space, team and work — stock images reduce trust',
          'Neighbourhood and landmark details so customers know you are nearby',
          'One primary action per page: book, call, WhatsApp or visit',
          'Reviews and proof near the top, not hidden at the bottom',
          'Fast loading on mobile — many visitors browse while on the move',
        ],
      },
      {
        type: 'process',
        h2: 'How we design your website',
        steps: [
          { title: 'Brand & goals', desc: 'Positioning, audience and competitor review.' },
          { title: 'Structure', desc: 'Pages, content and the searches each page targets.' },
          { title: 'Visual design', desc: 'Homepage and key pages designed for approval.' },
          { title: 'Development', desc: 'Responsive build with integrations and tracking.' },
          { title: 'Launch', desc: 'Go live, Search Console, and training.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Across Delhi',
        h2: 'Website designing for every Delhi market',
        paras: [
          'Delhi customers search by neighbourhood — "dentist in Rajouri Garden", "boutique in Lajpat Nagar", "CA in Laxmi Nagar". We plan your pages around the areas you genuinely serve and mention them naturally, so Google and customers both understand where you are.',
        ],
        bullets: [
          '**South Delhi** — Greater Kailash, Hauz Khas, Saket, Lajpat Nagar, Defence Colony and Vasant Kunj',
          '**West Delhi** — Rajouri Garden, Janakpuri, Punjabi Bagh, Tilak Nagar and Dwarka',
          '**North & Central** — Karol Bagh, Connaught Place, Chandni Chowk, Sadar Bazaar, Kamla Nagar and Model Town',
          '**East Delhi** — Laxmi Nagar, Preet Vihar, Mayur Vihar and Shahdara',
          '**North-West & outer Delhi** — Rohini, Pitampura, Netaji Subhash Place and Narela industrial belt',
        ],
      },
      {
        type: 'cards',
        tag: 'Website types',
        h2: 'Website development services in Delhi',
        items: [
          { title: 'Business websites', desc: 'Multi-page sites with a page for each service and area you serve, with WhatsApp and call buttons on every page.' },
          { title: 'Custom-coded websites', desc: 'Hand-coded React sites with no plugin bloat — fast loading and full control over SEO.' },
          { title: 'WordPress websites', desc: 'Lightweight WordPress builds when your team wants to edit pages and blogs.' },
          { title: 'Landing pages for ads', desc: 'Focused pages for Meta and Google campaigns with lead tracking built in.', to: '/services/meta-ads' },
          { title: 'Website redesign', desc: 'Old site rebuilt on a faster stack with proper redirects so rankings carry over.' },
          { title: 'Web apps & portals', desc: 'Booking systems, dashboards and customer portals with secure logins.', to: '/services/app-development' },
        ],
      },
      {
        type: 'prose',
        tag: 'Included',
        h2: 'Every Delhi website comes with',
        bullets: [
          'Responsive design checked on real Android and iPhone screens',
          'Image compression, lazy loading and clean code for fast mobile loading',
          'Titles, descriptions, headings, schema, sitemap and Google Search Console setup',
          'Google Business Profile, Maps, WhatsApp, call and enquiry forms connected',
          'Google Analytics and Meta Pixel for measuring every enquiry',
          'Domain, hosting and SSL in your own name, with all logins handed over',
        ],
      },
      {
        type: 'prose',
        tag: 'Timelines & cost',
        h2: 'Website designing cost and timelines in Delhi',
        paras: [
          'With content ready, a landing page takes about a week and a 5–10 page business website about 2–4 weeks. Online stores and custom portals are planned in milestones.',
          'Website prices in Delhi vary widely because the scope varies: pages, custom design, content writing, features and SEO setup. We give a fixed, itemised quote before you pay anything — read our [Delhi NCR website cost guide](/blog/website-cost-in-delhi-ncr) to compare quotes properly.',
        ],
      },
      { type: 'work' },
      {
        type: 'faq',
        faqs: [
          ['Which is better — a website designing company or a freelancer in Delhi?', 'A freelancer can suit a very small site if they stay available after launch. An agency gives you design, content, development and marketing in one place with accountability. Ask any provider for live sites, an itemised quote and domain ownership in your name.'],
          ['How long does website development take?', 'About 1 week for a landing page and 2–4 weeks for a 5–10 page business site once content is ready.'],
          ['Do you build websites for wholesalers in Chandni Chowk, Sadar Bazaar or Karol Bagh?', 'Yes — product catalogues, bulk-enquiry forms and WhatsApp ordering, plus Google Ads for specific products if needed.'],
          ['Will my website rank on Google?', 'Every site is built SEO-ready, but rankings depend on competition, content, reviews and links. Our [SEO service in Delhi](/locations/delhi/seo) handles the ongoing work. No one can honestly guarantee a #1 position.'],
          ['Will I own the domain and hosting?', 'Yes. Both are registered in your name and every login is handed over at launch.'],
          ['Do you write the website content?', 'Yes. We write or polish each page around how your customers search; you approve before launch.'],
          ['Do you build custom-coded or WordPress websites?', 'Both. Custom code is faster and more flexible; WordPress suits teams that want to edit lots of content themselves.'],
          ['How much does web design cost in Delhi?', 'It depends on the number of pages, design depth and features. We send a fixed quote after a short call. Our [cost guide](/blog/website-cost-in-delhi-ncr) explains the factors.'],
          ['Can you redesign my old website?', 'Yes, including redirects from old URLs so you keep existing Google rankings.'],
          ['Do you build e-commerce websites for Delhi brands?', 'Yes — Shopify, WooCommerce and custom stores.'],
          ['Can you also handle Instagram and ads?', 'Yes. Many Delhi clients pair a new website with [social media](/services/social-media-marketing) and [Meta ads](/services/meta-ads).'],
          ['Do you offer website maintenance?', 'Yes, through a monthly support plan for updates, backups and security.'],
        ],
      },
    ],
  },
  {
    city: 'delhi',
    service: 'seo',
    label: 'SEO company in Delhi',
    banner: 'SEO and local search for Delhi businesses — neighbourhood-level Google Maps visibility, service pages and content that compete in one of India’s toughest markets.',
    intro: {
      h2: 'Realistic SEO for a very competitive city',
      paras: [
        'Ranking for "best dentist in Delhi" or "web designer Delhi" is extremely competitive. Ranking for "root canal treatment in Janakpuri" or "bridal lehenga shop in Chandni Chowk" is far more achievable — and those searches are usually closer to a booking or a visit.',
        'Our Delhi SEO strategy is built on that idea: target the specific services and neighbourhoods where you can win, make your Google Business Profile the best in your area, and grow into broader terms as your site gains authority.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'Strategy',
        h2: 'How we make SEO work in Delhi',
        bullets: [
          '**Neighbourhood focus:** pages and profile content for the zones you serve — South, West, North, East or Central Delhi',
          '**Service depth:** a detailed page for each service or treatment instead of one page listing everything',
          '**Trust signals:** genuine reviews, expert profiles, real photos and clear contact details',
          '**Technical quality:** fast, mobile-friendly pages with proper schema markup',
          '**Authority:** relevant local listings, partnerships and mentions',
        ],
      },
      {
        type: 'cards',
        tag: 'Examples',
        h2: 'What this looks like for Delhi businesses',
        items: [
          { title: 'Dental clinic in Dwarka', desc: 'Treatment pages, before-visit FAQs, review routine and Business Profile posts.', to: '/industries/clinics' },
          { title: 'Cafe in Hauz Khas', desc: 'Menu and events pages, photo-rich profile, reviews and Instagram links.', to: '/industries/restaurants-cafes' },
          { title: 'CA firm in Nehru Place', desc: 'Service pages for GST, audit and tax filing, plus helpful articles.', to: '/industries/finance-loan-agents' },
        ],
      },
      {
        type: 'process',
        h2: 'Our Delhi SEO process',
        steps: [
          { title: 'Competitor audit', desc: 'Who ranks in your neighbourhood and why.' },
          { title: 'Target selection', desc: 'Winnable keywords with real intent.' },
          { title: 'On-page & technical', desc: 'Fix and strengthen existing pages.' },
          { title: 'Local & content', desc: 'Profile, reviews and new pages monthly.' },
          { title: 'Report', desc: 'Rankings, traffic and enquiries.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Delhi specifics',
        h2: 'Neighbourhoods, markets and metro stations',
        paras: [
          'Delhi customers often search by market or metro station — "optician near Rajouri Garden metro", "lehenga shops in Chandni Chowk", "cafes in Hauz Khas Village". Your website and Google profile should use those familiar names, and your directions should mention the nearest metro exit or landmark.',
          'If you have several branches across Delhi, each real location deserves its own Google Business Profile and its own page on your website with unique details: address, timings, team, photos and the services offered there. Copying one page and changing the branch name does not help.',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Is SEO worth it in a competitive city like Delhi?', 'Yes, if you target specific services and areas rather than only the broadest keywords. Those searches are easier to win and convert better.'],
          ['How long does SEO take in Delhi?', 'Local improvements can show early movement; competitive service keywords often take several months of consistent work.'],
          ['Can you help with Google Maps ranking in my area?', 'Yes. See our [local SEO service](/services/local-seo) and [Google Business Profile guide](/blog/google-business-profile-guide).'],
          ['Do you work with clinics in Delhi?', 'Yes, following medical advertising norms — no misleading claims or guaranteed outcomes.'],
          ['What does a monthly SEO report include?', 'Work completed, keyword positions, Search Console data and enquiries from organic search and Google Maps.'],
        ],
      },
    ],
  },

  /* ============================ CHANDIGARH ============================ */
  {
    city: 'chandigarh',
    service: 'website-development',
    label: 'Website development company in Chandigarh',
    banner: "Custom-coded, fast websites for businesses in Chandigarh, Mohali, Panchkula and Zirakpur — designed to look premium, rank on Google and turn visitors into calls and WhatsApp enquiries.",
    intro: {
      h2: 'A website development company for Tricity businesses that want enquiries, not just a website',
      paras: [
        "Customers in the Tricity research carefully. Someone hiring an architect for a new house in Mohali, choosing a visa consultant in Sector 17, comparing clinics in Panchkula or booking a venue on Zirakpur's VIP Road will open two or three websites side by side. The business whose site loads fastest, explains clearly and shows real proof usually gets the call.",
        "Orizova Digital is a **website development and web design company serving Chandigarh, Mohali and Panchkula**. We plan, design, write and code websites that put your strongest proof first — projects, credentials and genuine reviews — in a clean, premium design that still opens in a couple of seconds on a phone. Every site is set up for Google from day one, so it keeps bringing enquiries after launch.",
        "We already build for the Tricity: [Morphic Spaces](/portfolio/morphic-spaces), a spatial design studio working across Chandigarh and the Tricity, runs on a cinematic, image-led website we designed and developed.",
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'What we build',
        h2: 'Website development services in Chandigarh',
        intro: 'One team for design, content, development and Google setup — so you deal with one point of contact from the first call to launch.',
        items: [
          { title: 'Business & company websites', desc: 'Multi-page websites with a page for every service, clear calls to action and WhatsApp, call and enquiry forms on every page.' },
          { title: 'Custom-coded websites (React)', desc: 'Hand-coded sites with no page-builder bloat — faster loading, better Core Web Vitals and full control over design and SEO.' },
          { title: 'WordPress websites', desc: 'When your team wants to edit pages and blogs themselves, we build clean, lightweight WordPress sites with only the plugins you need.' },
          { title: 'E-commerce websites', desc: 'Online stores on Shopify, WooCommerce or custom code with Razorpay or other payment gateways, COD options and order emails.', to: '/services/ecommerce-solutions' },
          { title: 'Landing pages for ads', desc: 'Single-purpose pages for Meta and Google campaigns — fast, focused and built to qualify leads before they reach you.', to: '/services/meta-ads' },
          { title: 'Portfolio websites', desc: 'Image-led sites for architects, interior designers, photographers and studios, with compressed images that still look sharp.', to: '/industries/architects' },
          { title: 'Website redesign', desc: 'Your existing site rebuilt on a faster stack with better structure — without losing the Google rankings you already have.' },
          { title: 'Web apps & portals', desc: 'Dashboards, booking systems, admin panels and customer portals with secure logins.', to: '/services/app-development' },
        ],
      },
      {
        type: 'prose',
        tag: 'Built for the Tricity',
        h2: 'Websites built around how Chandigarh, Mohali & Panchkula customers search',
        paras: [
          'The Tricity behaves like one market. People search by city ("interior designer Chandigarh"), by sector or phase ("dentist sector 35", "physiotherapy phase 7 Mohali") and increasingly by "near me". A website that only says "we serve Chandigarh" in the footer misses most of these searches.',
          'We plan the pages around the areas you genuinely serve and the way your customers actually describe what they need — then write each page for that customer, not for a keyword count.',
        ],
        bullets: [
          '**Chandigarh:** Sector 17, Sector 22, Sector 34, Sector 35, Industrial Area Phase I & II, IT Park and Manimajra',
          '**Mohali:** Phases 3B2, 7 and 8B, Sector 70, Sector 82 (JLPL), Aerocity and Airport Road',
          '**Panchkula:** Sector 5, Sector 9, Sector 20 and the Panchkula Industrial Area',
          '**Zirakpur, Kharar, New Chandigarh & Dera Bassi** — growing residential and commercial belts with fast-rising competition online',
          'Your exact address, timings and Google Maps location shown consistently so Google and customers trust the details',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Websites we build for Tricity industries',
        items: [
          { title: 'Architects & interior designers', desc: 'Project-by-project portfolios with fast image loading — like our work for Morphic Spaces.', to: '/industries/architects' },
          { title: 'Real-estate developers & brokers', desc: 'Project microsites for Mohali, New Chandigarh and Zirakpur with floor plans, RERA details and lead capture.', to: '/industries/real-estate' },
          { title: 'Immigration & study-abroad consultants', desc: 'Clear service and process pages, honest disclosures and enquiry forms that ask the right qualifying questions.' },
          { title: 'Clinics & hospitals', desc: 'Specialities, doctor profiles, OPD timings and appointment requests for clinics across the Tricity.', to: '/industries/clinics' },
          { title: 'Hotels, venues & restaurants', desc: 'Galleries, packages, menus and booking enquiries for venues on Zirakpur and Airport Road and cafes in Sector 7 and Elante.', to: '/industries/restaurants-cafes' },
          { title: 'Coaching, schools & IT companies', desc: 'Courses, batches, faculty and admission enquiries — or careers and service pages for IT Park and Mohali tech firms.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Local work',
        h2: 'Case study: Morphic Spaces — an architecture studio website for the Tricity',
        paras: [
          "Morphic Spaces is a spatial design studio working on contemporary residential, commercial and hospitality projects across Chandigarh and the Tricity. They needed a website that feels as premium as the spaces they design, without the heavy loading that usually comes with big architectural images.",
          'We designed and built a cinematic full-screen hero, editorial serif typography, a minimal navigation and project pages that let the photography speak first — all responsive, so the imagery holds up on a phone as well as on a large screen. [See the full Morphic Spaces case study](/portfolio/morphic-spaces).',
        ],
      },
      {
        type: 'prose',
        tag: 'What every site includes',
        h2: 'What you get with every website we build',
        paras: ['No hidden extras discovered after you pay. Every website we deliver includes:'],
        bullets: [
          'Mobile-first, responsive design tested on real phones',
          'Fast loading: compressed images, modern formats, lazy loading and clean code',
          'SEO setup: unique titles and meta descriptions, one clear H1 per page, schema markup, sitemap, robots.txt and Google Search Console',
          'Google Business Profile and Google Maps linked to your site',
          'WhatsApp, click-to-call and enquiry forms that reach your phone or inbox',
          'Google Analytics and Meta Pixel installed so you can measure enquiries',
          'SSL (https), domain and hosting set up in your own name — you own your website',
          'A handover with logins and a walkthrough so your team can make simple updates',
        ],
      },
      {
        type: 'process',
        h2: 'Our website development process',
        steps: [
          { title: 'Discovery call', desc: 'Your services, customers, competitors and what sets you apart. Usually 30 minutes on a call or video meeting.' },
          { title: 'Plan & quote', desc: 'Page list, features and a fixed quote with a timeline — in writing, before any payment.' },
          { title: 'Content & structure', desc: 'We write or polish the page copy around the searches your customers make, and collect your photos and proof.' },
          { title: 'Design', desc: 'A premium visual direction for your brand, reviewed with you on desktop and mobile.' },
          { title: 'Development', desc: 'Fast, responsive build with forms, WhatsApp, maps, analytics and any integrations you need.' },
          { title: 'Launch & Google setup', desc: 'Go live, submit to Google Search Console, connect your Business Profile and check every page on real devices.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Timelines',
        h2: 'How long does a website take?',
        paras: [
          'Most of the time is spent waiting for content, so we start collecting it on day one. As a guide, once your content and photos are ready:',
        ],
        bullets: [
          '**Landing page:** about 1 week',
          '**Business website (5–10 pages):** about 2–4 weeks',
          '**E-commerce store:** about 4–6 weeks, depending on the number of products',
          '**Custom web app or portal:** planned in milestones after a requirements call',
        ],
      },
      {
        type: 'prose',
        tag: 'Pricing',
        h2: 'Website development cost in Chandigarh',
        paras: [
          'A website price mostly reflects time and responsibility: how many pages, whether the design is custom, who writes the content, which features you need and how much SEO setup is included. A one-page landing site and a 25-page website with e-commerce are very different jobs.',
          'Instead of a confusing price list, we send a **fixed, itemised quote** after a short call — so you know exactly what is included before you pay anything. For a detailed breakdown of what drives the cost, read our guide to [website development cost in Chandigarh](/blog/website-development-cost-chandigarh).',
        ],
      },
      {
        type: 'prose',
        tag: 'Choosing a partner',
        h2: 'Freelancer, template or agency — what fits your business?',
        paras: [
          'A template you set up yourself is the cheapest start, but you also take on the design, writing, speed and Google setup. A freelancer can be a good fit for a small site if they are reliable and stay available after launch. An agency costs more than a template but gives you design, content, development and marketing under one roof, with someone accountable when something breaks.',
          'Whoever you choose, ask for live websites they have built, open them on your phone, and check who will own the domain and hosting. Our checklist on [how to choose a web development company in Chandigarh](/blog/choose-web-development-company-chandigarh) covers the questions to ask.',
        ],
      },
      {
        type: 'cards',
        tag: 'Why Orizova',
        h2: 'Why Tricity businesses work with us',
        items: [
          { title: 'Custom-coded for speed', desc: 'We hand-code sites instead of stacking page-builder plugins, so pages load fast — which Google and impatient mobile visitors both reward.' },
          { title: 'SEO built in, not bolted on', desc: 'Page structure, titles, schema and internal links are planned before design starts. See our [SEO services in Chandigarh](/locations/chandigarh/seo).' },
          { title: 'Websites plus marketing', desc: 'The same team can run [Meta ads](/services/meta-ads), [Google Ads](/services/google-ads) and [local SEO](/services/local-seo) once your site is live.' },
          { title: 'You own everything', desc: 'Domain, hosting and code are set up in your name, with full logins handed over at launch.' },
          { title: 'Honest claims only', desc: 'We will not put invented numbers, fake reviews or guaranteed rankings on your website — or ours.' },
          { title: 'Quick replies on WhatsApp', desc: 'A direct line to the people building your site, not a ticket queue.' },
        ],
      },
      { type: 'work', h2: 'Websites we have built' },
      {
        type: 'faq',
        faqs: [
          ['How much does website development cost in Chandigarh?', 'It depends on the number of pages, design approach, content and features. A landing page costs far less than a multi-page business website or an online store. We send a fixed, itemised quote after a short call — see our [website cost guide](/blog/website-development-cost-chandigarh) for what drives the price.'],
          ['How long does it take to build a website?', 'About 1 week for a landing page and 2–4 weeks for a 5–10 page business website once content is ready. Online stores and web apps take longer and are planned in milestones.'],
          ['Do you build websites for businesses in Mohali, Panchkula and Zirakpur?', 'Yes — across the Tricity: Chandigarh, Mohali, Panchkula, Zirakpur, Kharar, New Chandigarh and Dera Bassi.'],
          ['Are you based in Chandigarh?', 'Our team is based in Delhi NCR and works with Chandigarh Tricity clients over calls, video meetings and WhatsApp. Our Tricity work includes the website for [Morphic Spaces](/portfolio/morphic-spaces).'],
          ['Will my website be SEO-friendly?', 'Yes. Every site includes unique titles and descriptions, a clean heading structure, schema markup, a sitemap, fast loading and Google Search Console setup. Ongoing ranking work is part of our [SEO service](/locations/chandigarh/seo).'],
          ['Can you guarantee my website will rank #1 on Google?', 'No honest company can guarantee a ranking — Google decides. What we can do is build the site the way Google rewards: fast, useful, well-structured pages, then support it with local SEO, reviews and links.'],
          ['Do you build WordPress or custom-coded websites?', 'Both. Custom-coded (React) sites are faster and more flexible; WordPress is a good choice if your team wants to edit lots of pages and blogs themselves. We recommend one based on your needs.'],
          ['Can you build an e-commerce website with online payments?', 'Yes — on Shopify, WooCommerce or custom code, with Razorpay or other payment gateways, cash-on-delivery options and order emails. See [e-commerce solutions](/services/ecommerce-solutions).'],
          ['Will I own the website, domain and hosting?', 'Yes. We register the domain and hosting in your name and hand over all logins at launch.'],
          ['Can you redesign my existing website without losing rankings?', 'Yes. We map your current URLs, keep or redirect them properly and carry over titles and content that already rank, so a redesign improves your site instead of resetting it.'],
          ['Do you write the website content?', 'Yes. We write or polish the copy for every page around how your customers search, and you approve everything before it goes live.'],
          ['Can you build a portfolio website for architects or interior designers?', 'Yes — image-rich portfolio sites that still load quickly. See our [Morphic Spaces case study](/portfolio/morphic-spaces) and our approach for [architects & interior designers](/industries/architects).'],
          ['Do you provide website maintenance after launch?', 'Yes. We can handle updates, backups, security, new pages and speed checks on a monthly plan, or you can manage simple edits yourself after the handover.'],
          ['Can you build a website for an immigration consultancy?', 'Yes, with clear service explanations and compliant wording that avoids guaranteed-visa claims — which also keeps future ad campaigns within platform policies.'],
          ['Can you also run ads to bring leads to the new website?', 'Yes — [Meta ads](/services/meta-ads) and [Google Ads](/services/google-ads) with landing pages and lead forms designed to qualify enquiries.'],
          ['How do we get started?', 'Message us on WhatsApp or call with a short description of your business. We will set up a quick call, then send a written plan and fixed quote.'],
        ],
      },
    ],
  },
  {
    city: 'chandigarh',
    service: 'seo',
    label: 'SEO company in Chandigarh',
    banner: 'SEO and Google Maps optimisation for businesses across Chandigarh, Mohali, Panchkula and Zirakpur.',
    intro: {
      h2: 'Be the obvious choice across the Tricity',
      paras: [
        'Because Chandigarh, Mohali and Panchkula are close together, customers often search across the whole Tricity: "best orthopaedic in Mohali", "interior designer Chandigarh", "banquet hall Zirakpur". Your SEO needs to cover the areas you genuinely serve without creating thin, duplicate pages for every sector.',
        'We build a focused set of service and area pages, strengthen your Google Business Profile, and grow genuine reviews — the signals that matter most for local searches in the Tricity.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our Tricity SEO services',
        bullets: [
          'Google Business Profile optimisation for each real location you have',
          'Service pages that mention Chandigarh, Mohali, Panchkula or Zirakpur where you genuinely serve them',
          'Review collection routine and professional replies',
          'Technical SEO: speed, mobile, indexing, schema',
          'Content that answers Tricity-specific questions customers ask before choosing you',
          'Consistent listings on major directories',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Tricity industries we often help',
        items: [
          { title: 'Real estate', desc: 'Project and locality pages for Mohali, New Chandigarh and Zirakpur buyers.', to: '/industries/real-estate' },
          { title: 'Architects & interiors', desc: 'Portfolio SEO and image optimisation.', to: '/industries/architects' },
          { title: 'Clinics', desc: 'Speciality pages, doctor profiles and reviews.', to: '/industries/clinics' },
        ],
      },
      {
        type: 'process',
        h2: 'Our process',
        steps: [
          { title: 'Audit', desc: 'Profile, website and competitor review.' },
          { title: 'Keyword & area map', desc: 'Which pages target which searches.' },
          { title: 'Fix & optimise', desc: 'Technical and on-page improvements.' },
          { title: 'Local growth', desc: 'Reviews, posts and citations.' },
          { title: 'Report', desc: 'Monthly results and next steps.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Tricity specifics',
        h2: 'Sectors, phases and the three cities',
        paras: [
          'Chandigarh is searched by sector ("dentist sector 35"), Mohali by phase and sector ("physiotherapy phase 7 Mohali"), and Panchkula by sector too. Customers also search across city names because the Tricity behaves like one market. Your content should mention your exact sector or phase, nearby landmarks such as Elante or Sector 17 Plaza where relevant, and the cities you genuinely serve.',
          'Because Tricity customers research thoroughly, the pages that rank also need to convince: real photos, credentials, transparent processes and genuine reviews. SEO brings the visitor; trust converts them.',
        ],
      },
      {
        type: 'prose',
        tag: 'Multiple branches',
        h2: 'If you have offices in more than one Tricity city',
        paras: [
          'Clinics, coaching institutes and consultancies often have branches in both Chandigarh and Mohali or Panchkula. Each staffed location can have its own Google Business Profile and its own page on your website with that branch’s address, timings, team and photos. We set these up so they support each other instead of competing, and make sure reviews are collected for every branch.',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can I rank in Mohali if my office is in Chandigarh?', 'Map results depend on distance, so ranking in a different city is harder. Website content and ads can still reach Mohali customers, and a second genuine location would need its own profile.'],
          ['Should I create a page for every sector?', 'No. Thin pages with only the location changed rarely help. A few strong pages for the areas you truly serve work better.'],
          ['How long does SEO take in the Tricity?', 'It depends on competition in your category. Local improvements can show early, broader keywords take longer.'],
          ['Do you work with immigration consultants?', 'Yes, with content that avoids guaranteed-outcome claims.'],
          ['Can you combine SEO with ads?', 'Yes, many Tricity clients run [Google Ads](/services/google-ads) while SEO grows.'],
        ],
      },
    ],
  },
  /* ============================ VARANASI ============================ */
  {
    city: 'varanasi',
    service: 'website-development',
    label: 'Website development company in Varanasi',
    banner: 'Fast, custom websites for Varanasi hotels, homestays, Banarasi silk sellers, coaching institutes, hospitals and travel businesses — built to rank on Google and bring direct enquiries.',
    intro: {
      h2: 'Websites that bring Varanasi businesses direct customers — from Banaras and beyond',
      paras: [
        'In Varanasi, a large share of your customers find you before they ever reach the city. Pilgrims compare guest houses near Dashashwamedh and Assi Ghat, parents compare coaching institutes in Lanka and Sigra, and buyers across India look for genuine Banarasi sarees online. A clear, fast, trustworthy website is what turns those searches into direct calls, bookings and orders — without paying portal commissions.',
        "Orizova Digital is a **website development company working with Varanasi businesses**. We plan, write, design and code your website, set it up for Google from day one and connect it to WhatsApp, Google Maps and analytics. Our team is based in Delhi NCR and works with Banaras clients over calls, video meetings and WhatsApp.",
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Built for Banaras',
        h2: 'Websites we build for Varanasi businesses',
        items: [
          { title: 'Hotels, homestays & guest houses', desc: 'Room pages, real photos, distance to ghats and temples, reviews and WhatsApp booking enquiries — so more guests book you directly.' },
          { title: 'Banarasi saree & silk stores', desc: 'Online stores with product variants, payment gateways, shipping across India and clear photos of weaves and fabrics.', to: '/services/ecommerce-solutions' },
          { title: 'Coaching & education', desc: 'Courses, batches, faculty, results you can verify and admission enquiry forms for institutes near BHU, Lanka and Sigra.' },
          { title: 'Hospitals & clinics', desc: 'Specialities, doctor profiles, OPD timings and appointment requests for Mahmoorganj, Sigra and Lanka practices.', to: '/industries/clinics' },
          { title: 'Travel, tours & puja services', desc: 'Tour packages, boat rides, puja bookings and multilingual-friendly pages for visitors from India and abroad.' },
          { title: 'Restaurants, cafes & sweet shops', desc: 'Menus, location, timings, delivery links and Google Maps for food businesses across Godowlia, Assi and Cantt.', to: '/industries/restaurants-cafes' },
          { title: 'Manufacturers & traders', desc: 'Product catalogues and bulk-enquiry forms for handicraft, carpet and trading businesses in Varanasi and Bhadohi.' },
          { title: 'Real estate & builders', desc: 'Project pages with floor plans, RERA details and lead forms for projects along Ring Road and Babatpur.', to: '/industries/real-estate' },
        ],
      },
      {
        type: 'prose',
        tag: 'Local details',
        h2: 'What a Varanasi website needs to get right',
        paras: [
          'Visitors to Varanasi search in very specific ways — "hotel near Kashi Vishwanath", "guest house Assi Ghat", "coaching in Lanka", "Banarasi saree online". We build pages around those searches and the areas you genuinely serve.',
        ],
        bullets: [
          'Clear location details: distance to Kashi Vishwanath, the ghats, BHU, Cantt station or Babatpur airport where relevant',
          'Areas named naturally — Sigra, Lanka, Mahmoorganj, Bhelupur, Godowlia, Assi, Cantt, Sarnath, Pandeypur, Shivpur',
          'Pages that work for out-of-town visitors as well as locals, with WhatsApp one tap away',
          'Fast loading on mobile data — many visitors browse while travelling',
          'Real photos of your property, products and team instead of stock images',
          'Google Business Profile and Maps connected to the site',
        ],
      },
      {
        type: 'prose',
        tag: 'Included',
        h2: 'What every website includes',
        bullets: [
          'Mobile-first, responsive design tested on real phones',
          'Speed optimisation: compressed images, modern formats and clean code',
          'SEO setup: titles, descriptions, headings, schema, sitemap and Google Search Console',
          'WhatsApp, click-to-call and enquiry forms on every page',
          'Google Analytics and Meta Pixel for measuring enquiries',
          'Domain, hosting and SSL registered in your own name',
        ],
      },
      {
        type: 'process',
        h2: 'How we work with Varanasi clients',
        steps: [
          { title: 'Call', desc: 'A short call or video meeting about your business, customers and goals.' },
          { title: 'Plan & quote', desc: 'Page list, features, timeline and a fixed written quote.' },
          { title: 'Content & photos', desc: 'We write the copy; you share photos (or we guide you on shooting them on a phone).' },
          { title: 'Design & build', desc: 'Design reviewed with you on WhatsApp or video, then a fast, responsive build.' },
          { title: 'Launch', desc: 'Go live, Google Search Console, Business Profile link and a handover walkthrough.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Timelines & cost',
        h2: 'Website development cost and timelines in Varanasi',
        paras: [
          'Once content and photos are ready, a landing page takes about a week, a 5–10 page business website 2–4 weeks and an online store 4–6 weeks depending on products.',
          'The price depends on pages, design, content writing and features such as booking enquiries or payments. We send a fixed, itemised quote before any payment. Our [website cost guide](/blog/website-cost-in-delhi-ncr) explains what drives the price — the same factors apply in Varanasi.',
        ],
      },
      { type: 'work', h2: 'Websites we have built' },
      {
        type: 'faq',
        faqs: [
          ['Do you build websites for businesses in Varanasi?', 'Yes. We work with Varanasi businesses remotely over calls, video meetings and WhatsApp; our team is based in Delhi NCR.'],
          ['How much does a website cost in Varanasi?', 'It depends on pages, design, content and features. A landing page costs far less than a hotel website with many rooms or an online saree store. We send a fixed, itemised quote after a short call.'],
          ['Can you build a hotel website so guests book directly instead of through portals?', 'Yes — room pages, photos, location, reviews and WhatsApp or form enquiries. Many hotels use both: portals for reach and their own site for direct, commission-free bookings.'],
          ['Can you build an online store for Banarasi sarees and silk?', 'Yes — on Shopify, WooCommerce or custom code, with variants, payment gateways, COD and shipping across India.'],
          ['How long does it take to build a website?', 'About 1 week for a landing page and 2–4 weeks for a 5–10 page site once content is ready.'],
          ['Will my website show on Google?', 'Every site is built SEO-ready and submitted to Google Search Console. Ranking higher takes ongoing work — a Google Business Profile, reviews, content and links. Nobody can honestly guarantee a #1 position.'],
          ['Will I own the domain and website?', 'Yes. The domain and hosting are registered in your name and all logins are handed over at launch.'],
          ['Can you make the website in Hindi as well as English?', 'Yes. We can build bilingual pages so local customers and visitors from across India can both read your site comfortably.'],
          ['Do you also run Google and Meta ads for Varanasi businesses?', 'Yes — [Google Ads](/services/google-ads) for people searching right now and [Meta ads](/services/meta-ads) for reaching travellers and buyers before they search.'],
          ['How do we get started?', 'Message us on WhatsApp or call with a short description of your business. We will set up a quick call and send a written plan and fixed quote.'],
        ],
      },
    ],
  },
];

// Newer cities (see ./cities): one file per market.
moreCities.forEach((c) => cityServices.push(...c.pages));

export default cityServices;
