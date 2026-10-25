// Bengaluru: city hub + city × service pages (original copy).
const hub = {
  slug: 'bengaluru',
  city: 'Bengaluru',
  region: 'Karnataka',
  tagline: 'Websites, SEO & growth marketing for Bengaluru startups, SaaS companies, D2C brands, clinics, restaurants and real estate — Koramangala to Whitefield',
  intro:
    "Bengaluru is India’s startup capital: thousands of SaaS, fintech and D2C companies in Koramangala, HSR Layout, Indiranagar and the Outer Ring Road, competing for customers, investors and talent. Its huge working population also makes it one of the country’s most competitive markets for restaurants, clinics, fitness studios and residential projects. Orizova Digital works remotely with Bengaluru businesses on product websites, e-commerce, SEO and performance marketing.",
  areas: ['Koramangala', 'HSR Layout', 'Indiranagar', 'Whitefield', 'Electronic City', 'Outer Ring Road & Bellandur', 'Jayanagar & JP Nagar', 'Marathahalli', 'Hebbal', 'Sarjapur Road'],
  industries: ['Startups & SaaS', 'D2C & e-commerce brands', 'Restaurants, cafes & breweries', 'Aesthetic & dental clinics', 'Real estate', 'Fitness & wellness'],
  focus:
    'Bengaluru buyers are digital natives who expect product-grade websites. We focus on clear positioning, fast pages, strong tracking and SEO and paid campaigns that can scale — without promising shortcuts.',
  sections: [
    {
      type: 'prose',
      tag: 'The Bengaluru market',
      h2: 'Where every competitor is already online',
      paras: [
        'In Bengaluru, almost every business in your category already has a website, an Instagram page and probably ads running. Standing out requires sharper positioning, better landing pages and smarter targeting — not just being present. For startups, the website also has to impress investors and candidates, not only customers.',
        'Neighbourhoods matter too. A clinic in HSR Layout and one in Whitefield serve very different catchments, and traffic means customers rarely cross the city for everyday services. Local SEO and ads should be planned by area.',
      ],
    },
    {
      type: 'cards',
      tag: 'Where to start',
      h2: 'Popular starting points in Bengaluru',
      items: [
        { title: 'Website development in Bengaluru', desc: 'Product sites, D2C stores and local business websites.', to: '/locations/bengaluru/website-development', cta: 'Websites in Bengaluru' },
        { title: 'SEO in Bengaluru', desc: 'SaaS, e-commerce and local SEO.', to: '/locations/bengaluru/seo', cta: 'SEO company in Bengaluru' },
        { title: 'Startups & SaaS', desc: 'Positioning and demand generation.', to: '/industries/startups-saas' },
        { title: 'D2C & e-commerce', desc: 'Stores and performance marketing.', to: '/industries/ecommerce-d2c' },
      ],
    },
  ],
  faqs: [
    ['Do you work with Bengaluru startups remotely?', 'Yes. Our team is based in Delhi NCR and works with Bengaluru clients over video calls, Slack or WhatsApp and shared project boards.'],
    ['Can you build a website before our launch or fundraise?', 'Yes — positioning, a sharp homepage, product pages, waitlist or demo flows and a fast build on a timeline you can plan around.'],
    ['Do you run performance marketing for D2C brands?', 'Yes — Meta and Google campaigns, creative testing, product feeds and reporting on revenue. See [D2C & e-commerce](/industries/ecommerce-d2c).'],
    ['Can you help a restaurant or brewery in Indiranagar or Koramangala?', 'Yes — Google Maps, reviews, Instagram reels and local ads. See [restaurants & cafes](/industries/restaurants-cafes).'],
  ],
};

const pages = [
  {
    city: 'bengaluru',
    service: 'website-development',
    label: 'Website development company in Bengaluru',
    banner: 'Product websites for Bengaluru startups and SaaS companies, Shopify and custom D2C stores, and fast websites for clinics, restaurants and real estate.',
    intro: {
      h2: 'Product-grade websites for a product-first city',
      paras: [
        'Bengaluru visitors judge your website the way they judge an app: is it fast, clear and easy to use? For startups, the site has to explain what you do in seconds, show proof and make the next step obvious — whether that is a demo, a sign-up or a purchase.',
        'We design and build websites with that bar in mind: tight messaging, clean design, fast custom code, analytics and SEO foundations, and the flexibility to keep shipping new pages as your product evolves.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Bengaluru',
        h2: 'Websites we build for Bengaluru businesses',
        items: [
          { title: 'SaaS & startup websites', desc: 'Positioning, features, pricing, integrations, docs hubs and demo booking.', to: '/industries/startups-saas' },
          { title: 'D2C stores', desc: 'Shopify or custom stores with fast product pages and UPI checkout.', to: '/industries/ecommerce-d2c' },
          { title: 'Landing pages for campaigns', desc: 'Message-matched pages for each ad campaign.', to: '/services/website-development' },
          { title: 'Clinic websites', desc: 'Treatments, doctors and booking.', to: '/industries/skin-hair-clinics' },
          { title: 'Restaurant websites', desc: 'Menus, reservations and events.', to: '/industries/restaurants-cafes' },
          { title: 'Real-estate project sites', desc: 'Projects with RERA details and site-visit booking.', to: '/industries/real-estate' },
        ],
      },
      {
        type: 'process',
        h2: 'How we work',
        steps: [
          { title: 'Positioning', desc: 'What you do, for whom and why you.' },
          { title: 'Wireframes & copy', desc: 'Structure and messaging.' },
          { title: 'Design', desc: 'Modern UI for key templates.' },
          { title: 'Build', desc: 'Fast code, CMS, tracking and SEO.' },
          { title: 'Iterate', desc: 'Ship new pages and experiments.' },
        ],
      },
      { type: "prose", tag: "Bengaluru areas", h2: "Website development across Bengaluru", bullets: ["**Koramangala, HSR Layout & Indiranagar** — startups, D2C brands, cafes and clinics", "**Whitefield & Outer Ring Road** — tech companies, schools and hospitals", "**Electronic City & Sarjapur Road** — IT firms and residential projects", "**Jayanagar, JP Nagar & Hebbal** — established businesses, clinics and retail"] },
      { type: "prose", tag: "Cost", h2: "Website development cost in Bengaluru", paras: ["Cost depends on the number of templates, CMS needs, integrations and how much copy we write. Fixed, itemised quote after discovery — no hourly surprises."] },
      {
        type: 'faq',
        faqs: [
          ['Which stack do you use?', 'Usually React-based builds for performance, or Shopify/WordPress when your team needs a familiar editor.'],
          ['Can marketing edit pages without developers?', 'Yes, we set up a CMS or editable sections for common changes.'],
          ['What does it cost?', 'Fixed, itemised quote after discovery, based on templates and integrations.'],
          ['Do you do SEO too?', 'Yes — see [SEO in Bengaluru](/locations/bengaluru/seo).'],
        ],
      },
    ],
  },
  {
    city: 'bengaluru',
    service: 'seo',
    label: 'SEO company in Bengaluru',
    banner: 'SEO for Bengaluru SaaS companies, D2C brands and local businesses — technical, content and Google Maps.',
    intro: {
      h2: 'Compounding growth from search',
      paras: [
        'For many Bengaluru startups, paid acquisition gets expensive quickly. SEO builds a channel that compounds: pages that answer your buyers’ questions keep bringing sign-ups and demo requests month after month. For local businesses, Google Maps and reviews deliver the steadiest stream of customers.',
        'We plan SEO around the searches that lead to revenue, build and improve pages every month, and report on pipeline and sales, not vanity traffic.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our SEO services in Bengaluru',
        bullets: [
          'Technical SEO for JavaScript and Shopify websites',
          'Topic clusters, comparison and alternative pages for SaaS',
          'Category and product SEO for D2C',
          'Google Business Profile and reviews by neighbourhood for local businesses',
          'Digital PR and earned mentions',
          'Reporting tied to pipeline or revenue',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Bengaluru businesses we often help',
        items: [
          { title: 'SaaS', desc: 'Content that brings demos.', to: '/industries/startups-saas' },
          { title: 'D2C', desc: 'Category and product SEO.', to: '/industries/ecommerce-d2c' },
          { title: 'Clinics', desc: 'Neighbourhood Maps visibility.', to: '/industries/dental-clinics' },
          { title: 'Restaurants', desc: 'Maps, reviews and menus.', to: '/industries/restaurants-cafes' },
        ],
      },
      { type: "prose", tag: "Bengaluru specifics", h2: "Neighbourhood catchments and startup content", paras: ["Bengaluru traffic means people choose services close to home or office. A clinic in HSR Layout competes with other HSR and Koramangala clinics, not with Whitefield. We plan local SEO by catchment, with a profile and page for each real branch and reviews that mention the neighbourhood.", "For startups, Bengaluru is simply where the company is based. What matters is content that answers buyers’ questions better than competitors: use-case pages, comparisons, integration pages and genuinely useful guides, supported by mentions in startup and industry publications."], bullets: ["**Koramangala, HSR Layout & Indiranagar** — startups, D2C brands, cafes and clinics", "**Whitefield & Marathahalli** — tech parks, families, schools and hospitals", "**Electronic City & Sarjapur Road** — tech companies and residential projects", "**Jayanagar & JP Nagar** — established residential, clinics and retail"] },
      {
        type: 'faq',
        faqs: [
          ['How long until SEO brings sign-ups?', 'Usually several months for competitive SaaS topics; local SEO can show earlier.'],
          ['Do you guarantee rankings?', 'No. We guarantee a clear plan, consistent work and honest reporting.'],
          ['Do you write technical content?', 'Yes, with your product team’s input.'],
          ['Do you run paid campaigns?', 'Yes — [Google Ads](/services/google-ads) and [Meta Ads](/services/meta-ads).'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/bengaluru': {
    q: 'Which digital agency works with Bengaluru startups and businesses?',
    a: 'Orizova Digital works remotely with Bengaluru startups, SaaS companies, D2C brands, clinics, restaurants, fitness studios and real-estate projects on product websites, e-commerce stores, SEO and Meta and Google performance marketing, planned by neighbourhood for local businesses and around pipeline or revenue for startups.',
  },
  '/locations/bengaluru/website-development': {
    q: 'Who builds websites for Bengaluru startups?',
    a: 'Orizova Digital builds product-grade websites for Bengaluru startups and SaaS companies — positioning, features, pricing, docs hubs and demo flows — plus Shopify and custom D2C stores, campaign landing pages and websites for clinics, restaurants and real estate, with tracking and SEO foundations from launch.',
  },
  '/locations/bengaluru/seo': {
    q: 'Who provides SEO services in Bengaluru?',
    a: 'Orizova Digital provides SEO for Bengaluru businesses: technical SEO for JavaScript and Shopify sites, topic clusters and comparison pages for SaaS, category and product SEO for D2C brands, and neighbourhood-level Google Business Profile work for clinics and restaurants, with reporting tied to pipeline or revenue.',
  },
};

const meta = {
  '/locations/bengaluru': { title: 'Digital Marketing Agency in Bengaluru | Orizova', description: 'Websites, SEO and performance marketing for Bengaluru startups, SaaS companies, D2C brands, clinics, restaurants and real estate.', h1: 'Digital Marketing Agency in Bengaluru' },
  '/locations/bengaluru/website-development': { title: 'Website Development Company in Bengaluru | Orizova', description: 'Product websites for Bengaluru startups and SaaS, Shopify and custom D2C stores, and fast websites for clinics, restaurants and real estate.', h1: 'Website Development Company in Bengaluru' },
  '/locations/bengaluru/seo': { title: 'SEO Company in Bengaluru – SaaS, D2C & Local SEO', description: 'Technical, content and local SEO for Bengaluru SaaS companies, D2C brands, clinics and restaurants — reporting tied to pipeline and revenue.', h1: 'SEO Company in Bengaluru' },
};

const city = { hub, pages, answers, meta };
export default city;
