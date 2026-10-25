// Gurugram (Gurgaon): city hub + city × service pages (original copy).
const hub = {
  slug: 'gurugram',
  city: 'Gurugram',
  region: 'Haryana (Delhi NCR)',
  tagline: 'Websites, SEO & performance marketing for Gurugram startups, D2C brands, real-estate developers, clinics and restaurants — Cyber City to Golf Course Extension Road',
  intro:
    "Gurugram (Gurgaon) is where many of India’s corporate offices, funded startups, D2C brands and premium real-estate projects sit side by side with one of NCR’s most demanding consumer markets. Buyers here compare carefully and expect a polished digital experience. Orizova Digital builds fast, conversion-focused websites and runs SEO and Google and Meta campaigns for Gurugram businesses — with tracking that shows what each rupee brings back.",
  areas: ['Cyber City & DLF Phases', 'Golf Course Road', 'Golf Course Extension Road', 'Sohna Road', 'MG Road', 'Udyog Vihar', 'Sector 29', 'Dwarka Expressway', 'Palam Vihar', 'Manesar'],
  industries: ['Startups & SaaS', 'D2C & e-commerce brands', 'Real estate developers & brokers', 'Aesthetic & dental clinics', 'Restaurants & bars', 'Interior designers & architects'],
  focus:
    'Gurugram campaigns are competitive and expensive, so we start with measurement: proper conversion tracking, fast landing pages and clear cost-per-lead targets. Then we scale what works across Google, Meta and SEO.',
  sections: [
    {
      type: 'prose',
      tag: 'The Gurugram market',
      h2: 'A premium market where execution decides results',
      paras: [
        'Gurugram audiences see more ads than almost anywhere else in India. Generic creatives and slow landing pages get ignored, and cost per click on competitive searches — real estate, aesthetic treatments, SaaS — is high. Small improvements in landing-page speed, messaging and lead qualification translate directly into lower cost per customer.',
        'The city is also split by corridor. Golf Course Road and Golf Course Extension Road have premium residential demand; Sohna Road and the Dwarka Expressway have a large base of newer societies; Udyog Vihar and Manesar host manufacturers and B2B companies; and Cyber City and Sector 29 drive restaurant and nightlife searches. Targeting by corridor is usually smarter than targeting "Gurgaon" as a whole.',
      ],
    },
    {
      type: 'cards',
      tag: 'Where to start',
      h2: 'Popular starting points in Gurugram',
      items: [
        { title: 'Website development in Gurugram', desc: 'Product sites, D2C stores, project pages and corporate websites.', to: '/locations/gurugram/website-development', cta: 'Websites in Gurugram' },
        { title: 'SEO in Gurugram', desc: 'B2B, e-commerce and local SEO.', to: '/locations/gurugram/seo', cta: 'SEO company in Gurugram' },
        { title: 'D2C & e-commerce brands', desc: 'Stores, product SEO and performance creative.', to: '/industries/ecommerce-d2c' },
        { title: 'Real estate', desc: 'Lead campaigns optimised for site visits.', to: '/industries/real-estate' },
      ],
    },
  ],
  faqs: [
    ['Do you work with Gurugram companies?', 'Yes. Our team is based in Delhi NCR, so meetings in Gurugram can be arranged; most work runs over calls, shared dashboards and WhatsApp.'],
    ['Can you run performance marketing for a D2C brand?', 'Yes — Shopify or custom stores, product feeds, Meta and Google campaigns, creative testing and reporting on revenue and return on ad spend. See [D2C & e-commerce](/industries/ecommerce-d2c).'],
    ['Do you work with luxury real-estate projects?', 'Yes. We build premium project pages and run campaigns that qualify buyers by budget and configuration, tracking site visits rather than only leads.'],
    ['Can you help an aesthetic or dental clinic in Gurugram?', 'Yes, within medical advertising rules — treatment pages, Google search ads, reviews and Instagram content. See [skin & hair clinics](/industries/skin-hair-clinics) and [dental clinics](/industries/dental-clinics).'],
  ],
};

const pages = [
  {
    city: 'gurugram',
    service: 'website-development',
    label: 'Website development company in Gurugram',
    banner: 'High-performance websites, D2C stores, SaaS product sites and real-estate project pages for Gurugram businesses — built for speed, conversions and SEO.',
    intro: {
      h2: 'Websites that hold up to Gurugram expectations',
      paras: [
        'Gurugram buyers use well-funded apps and polished websites every day, and they judge yours against them. A clunky template, slow product pages or a form that breaks on mobile can quietly undo an expensive ad campaign.',
        'Orizova Digital builds custom websites that load fast, look premium and are engineered for conversion — clear value propositions, social proof, frictionless forms and checkout, and analytics that show where visitors drop off.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Gurugram',
        h2: 'Websites we build for Gurugram businesses',
        items: [
          { title: 'D2C & Shopify stores', desc: 'Fast product pages, bundles, reviews, UPI checkout and marketing integrations.', to: '/industries/ecommerce-d2c' },
          { title: 'SaaS & startup websites', desc: 'Positioning, product tours, pricing and demo booking.', to: '/industries/startups-saas' },
          { title: 'Real-estate project sites', desc: 'Premium project microsites with floor plans, RERA details and site-visit booking.', to: '/industries/real-estate' },
          { title: 'Clinic websites', desc: 'Treatment pages, doctor profiles and consultation booking.', to: '/industries/skin-hair-clinics' },
          { title: 'Corporate & B2B sites', desc: 'Service pages, case studies and enquiry routing for Udyog Vihar and Manesar companies.', to: '/industries/manufacturers-exporters' },
          { title: 'Interior & architecture portfolios', desc: 'Image-led portfolios that still load fast.', to: '/industries/architects' },
        ],
      },
      {
        type: 'prose',
        tag: 'Performance',
        h2: 'What we optimise on every Gurugram build',
        bullets: [
          'Core Web Vitals: fast first load, stable layout, quick response to taps',
          'Conversion paths: one clear action per page, short forms, sticky WhatsApp and call',
          'Tracking: GA4 events, Meta Pixel and Conversions API, Google Ads conversions',
          'SEO foundations: clean URLs, metadata, schema and internal links',
          'Landing pages that match each ad campaign’s message',
        ],
      },
      {
        type: 'process',
        h2: 'Our build process',
        steps: [
          { title: 'Discovery', desc: 'Goals, audience, funnel and success metrics.' },
          { title: 'Wireframes & copy', desc: 'Structure and messaging before visuals.' },
          { title: 'Design', desc: 'High-fidelity designs for key templates.' },
          { title: 'Development', desc: 'Custom build, integrations, tracking and QA.' },
          { title: 'Optimise', desc: 'Post-launch testing and improvements.' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Shopify or custom code?', 'Shopify suits most D2C brands that want to manage products easily; custom code suits unusual product logic or performance-critical builds. We recommend based on your catalogue and team.'],
          ['Can you redesign without losing SEO?', 'Yes — we map old URLs to new ones with redirects and preserve content that already ranks.'],
          ['What does a website cost?', 'It depends on templates, integrations and copy. We send a fixed, itemised quote after discovery.'],
          ['Do you handle ads too?', 'Yes — [Google Ads](/services/google-ads), [Meta Ads](/services/meta-ads) and [SEO in Gurugram](/locations/gurugram/seo).'],
        ],
      },
    ],
  },
  {
    city: 'gurugram',
    service: 'seo',
    label: 'SEO company in Gurugram',
    banner: 'SEO for Gurugram SaaS companies, D2C brands, real-estate firms, clinics and restaurants — technical, content and local.',
    intro: {
      h2: 'SEO for a city full of competitors with big budgets',
      paras: [
        'In Gurugram, your SEO competitors include national brands and well-funded startups. You win by being more specific and more useful: targeting the exact services, products and corridors where you can be the best answer, then building authority steadily.',
        'Our Gurugram SEO combines technical health, content that answers real buyer questions, product and category optimisation for e-commerce, and local SEO for businesses that serve nearby customers.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our SEO services in Gurugram',
        bullets: [
          'Technical audits for large, JavaScript or Shopify websites',
          'Category and product SEO for D2C and e-commerce',
          'B2B content: solution, comparison and use-case pages',
          'Local SEO by corridor — Golf Course Road, Sohna Road, Dwarka Expressway',
          'Digital PR and earned mentions',
          'Monthly reporting tied to revenue or qualified leads',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Gurugram businesses we often help',
        items: [
          { title: 'D2C & e-commerce', desc: 'Category, product and content SEO.', to: '/industries/ecommerce-d2c' },
          { title: 'SaaS & startups', desc: 'Topic clusters and comparison pages.', to: '/industries/startups-saas' },
          { title: 'Real estate', desc: 'Project and locality content for buyers.', to: '/industries/real-estate' },
          { title: 'Restaurants & bars', desc: 'Maps, reviews and menu visibility.', to: '/industries/restaurants-cafes' },
        ],
      },
      { type: "prose", tag: "Gurugram specifics", h2: "Corridor-level local SEO", paras: ["Gurugram customers search by corridor: ‘dentist Golf Course Road’, ‘cafe Sector 29’, ‘gym Sohna Road’. A single Google profile cannot rank across the whole city, so local businesses should focus on the catchment around each real branch and build reviews that mention it.", "For startups and D2C brands, Gurugram is where the office is, not the market. SEO there is national: product, category and solution pages, plus genuine authority."], bullets: ["**Cyber City, DLF Phases & MG Road** — corporates, restaurants, clinics", "**Golf Course Road & Extension** — premium residential, clinics, interiors", "**Sohna Road & Dwarka Expressway** — new societies, schools, services", "**Udyog Vihar & Manesar** — B2B and manufacturing"] },
      {
        type: 'faq',
        faqs: [
          ['How long does SEO take in Gurugram?', 'Technical fixes and local work can show early; competitive national keywords usually take several months.'],
          ['Can you do SEO for a Shopify store?', 'Yes — collection structure, product content, duplicate-URL handling, speed and structured data.'],
          ['Do you build links?', 'We focus on earned mentions through useful content, digital PR and genuine business listings — not paid link schemes.'],
          ['Do you guarantee results?', 'No honest agency guarantees rankings. We commit to a clear plan, consistent work and transparent reporting.'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/gurugram': {
    q: 'Which digital marketing agency works with Gurugram businesses?',
    a: 'Orizova Digital builds fast, conversion-focused websites and runs SEO and Google and Meta campaigns for Gurugram startups, SaaS companies, D2C brands, real-estate developers, aesthetic and dental clinics, restaurants and interior designers — from Cyber City and Golf Course Road to Sohna Road and the Dwarka Expressway — with tracking that ties spend to leads or revenue.',
  },
  '/locations/gurugram/website-development': {
    q: 'Who builds websites for Gurugram companies?',
    a: 'Orizova Digital builds Shopify and custom D2C stores, SaaS and startup websites, real-estate project microsites, clinic websites and B2B corporate sites for Gurugram businesses. Builds focus on Core Web Vitals, clear conversion paths, GA4 and Meta tracking and SEO foundations, with fixed, itemised quotes after discovery.',
  },
  '/locations/gurugram/seo': {
    q: 'Who provides SEO services in Gurugram?',
    a: 'Orizova Digital provides SEO for Gurugram businesses: technical audits for large, JavaScript and Shopify sites, category and product SEO for D2C brands, solution and comparison content for SaaS companies, local SEO by corridor for clinics and restaurants, and digital PR. Reporting ties rankings to revenue or qualified leads.',
  },
};

const meta = {
  '/locations/gurugram': { title: 'Digital Marketing Agency in Gurugram | Orizova', description: 'Websites, SEO and performance marketing for Gurugram startups, D2C brands, real-estate developers, clinics and restaurants — tracked to leads.', h1: 'Digital Marketing Agency in Gurugram' },
  '/locations/gurugram/website-development': { title: 'Website Development Company in Gurugram | Orizova', description: 'Fast, conversion-focused websites for Gurugram: D2C stores, SaaS product sites, real-estate microsites, clinic and corporate websites.', h1: 'Website Development Company in Gurugram' },
  '/locations/gurugram/seo': { title: 'SEO Company in Gurugram – SaaS, D2C & Local SEO', description: 'Technical, content and local SEO for Gurugram SaaS companies, D2C brands, real-estate firms, clinics and restaurants. Reporting tied to revenue.', h1: 'SEO Company in Gurugram' },
};

const city = { hub, pages, answers, meta };
export default city;
