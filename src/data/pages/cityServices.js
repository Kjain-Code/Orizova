// Service × city pages: /locations/<city>/<service>.
// Every page is written separately for its market — never copy one and swap
// the city name.

const cityServices = [
  /* ============================ GHAZIABAD ============================ */
  {
    city: 'ghaziabad',
    service: 'website-development',
    label: 'Website development in Ghaziabad',
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
      { type: 'work' },
      {
        type: 'faq',
        faqs: [
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
    label: 'Website development in Noida',
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
      { type: 'work', h2: 'Websites we have built' },
      {
        type: 'faq',
        faqs: [
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
    label: 'Web design in Delhi',
    banner: 'Professional web design for Delhi boutiques, clinics, restaurants, consultants and traders — premium-looking, fast and ready to rank.',
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
      { type: 'work' },
      {
        type: 'faq',
        faqs: [
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
    label: 'Website development in Chandigarh',
    banner: 'Premium, fast websites for architects, developers, consultants, clinics and hospitality brands in Chandigarh, Mohali, Panchkula and Zirakpur.',
    intro: {
      h2: 'Websites that match the quality of your work',
      paras: [
        'Tricity customers tend to research carefully. Someone hiring an architect for a new house in Mohali, choosing a visa consultant, or booking a venue in Zirakpur will look at your website, Instagram and Google reviews side by side with your competitors. If your website looks dated or loads slowly, the quality of your actual work never gets seen.',
        'We build websites that put your strongest proof first — projects, credentials, testimonials you have permission to show — and present it in a clean, premium design that still loads quickly on a phone.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in the Tricity',
        h2: 'Websites we build in Chandigarh, Mohali & Panchkula',
        items: [
          { title: 'Architects & interior designers', desc: 'Project-by-project portfolios with fast image loading.', to: '/industries/architects' },
          { title: 'Real-estate developers & brokers', desc: 'Project microsites, floor plans, RERA details and lead capture.', to: '/industries/real-estate' },
          { title: 'Immigration & study-abroad consultants', desc: 'Clear service pages, process explanations, honest disclosures and enquiry forms.' },
          { title: 'Clinics & hospitals', desc: 'Specialities, doctor profiles and appointment flows.', to: '/industries/clinics' },
          { title: 'Hotels, venues & restaurants', desc: 'Galleries, packages, menus and booking enquiries.', to: '/industries/restaurants-cafes' },
          { title: 'Education & coaching', desc: 'Programmes, batches, faculty and admission enquiries.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Trust first',
        h2: 'Building credibility into every page',
        paras: [
          'For consultants and service firms in the Tricity, credibility is the conversion. We add registration and licence details where they apply, explain your process step by step, answer common objections in FAQs, and make it easy to see real reviews. For visa and immigration businesses we avoid language that promises outcomes, which also keeps your future ad campaigns compliant.',
        ],
      },
      {
        type: 'process',
        h2: 'Our website process',
        steps: [
          { title: 'Discovery', desc: 'Your services, clients and what sets you apart.' },
          { title: 'Content & structure', desc: 'Pages, proof and keyword targets.' },
          { title: 'Design', desc: 'Premium visual direction, reviewed with you.' },
          { title: 'Build', desc: 'Fast, responsive development with integrations.' },
          { title: 'Launch', desc: 'Go live with tracking and Search Console.' },
        ],
      },
      { type: 'work' },
      {
        type: 'faq',
        faqs: [
          ['Do you build websites for businesses in Mohali and Panchkula?', 'Yes, across the Tricity — Chandigarh, Mohali, Panchkula, Zirakpur and Kharar.'],
          ['Can you build a website for an immigration consultancy?', 'Yes, with clear service explanations and compliant wording that avoids guaranteed-visa claims.'],
          ['Will my portfolio images slow the site down?', 'Not if they are handled properly. We compress images, serve modern formats and load them as the visitor scrolls.'],
          ['Do you work remotely with Tricity clients?', 'Yes. Our team is in Delhi NCR and works with Tricity clients over calls, video meetings and WhatsApp.'],
          ['Can you also run lead generation ads?', 'Yes — [Meta ads](/services/meta-ads) and [Google Ads](/services/google-ads) with qualifying lead forms.'],
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
];

export default cityServices;
