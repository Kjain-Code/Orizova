// Hyderabad: city hub + city × service pages (original copy for this market).
const hub = {
  slug: 'hyderabad',
  city: 'Hyderabad',
  region: 'Telangana',
  tagline: 'Websites, SEO & performance marketing for Hyderabad startups, clinics, real-estate firms and restaurants — HITEC City to Banjara Hills, Kukatpally to Secunderabad',
  intro:
    "Hyderabad combines a global technology corridor with a huge local consumer market. SaaS and IT companies in HITEC City, Madhapur and Gachibowli sell to the world; hospitals, real-estate developers, restaurants and training institutes compete for millions of local customers from Kukatpally to Kompally. Orizova Digital works remotely with Hyderabad businesses on websites, web apps, SEO and Google and Meta ads — planned for whichever market you are trying to win.",
  areas: ['HITEC City', 'Madhapur', 'Gachibowli', 'Kondapur', 'Banjara Hills', 'Jubilee Hills', 'Kukatpally', 'Ameerpet', 'Secunderabad', 'Kokapet & Narsingi'],
  industries: ['Startups & SaaS', 'Hospitals & clinics', 'Real estate & developers', 'Restaurants & cloud kitchens', 'Training institutes', 'Jewellery & retail'],
  focus:
    'For Hyderabad tech companies we focus on sharp positioning, fast product sites and search campaigns for specific solutions. For consumer businesses we focus on Google Maps, reviews and localised ads — with English, Telugu or Hindi creative depending on who you need to reach.',
  sections: [
    {
      type: 'prose',
      tag: 'The Hyderabad market',
      h2: 'One city, two very different buyers',
      paras: [
        'West Hyderabad — HITEC City, Madhapur, Gachibowli, Kondapur and the Financial District — is full of product companies, IT services firms and startups whose buyers are other businesses, often outside India. They compare vendors carefully. What wins them is a clear website, credible case studies, technical content and search ads for very specific problems.',
        'The rest of the city is a vast local market. Families in Kukatpally, Miyapur, LB Nagar or Secunderabad choose hospitals, schools, restaurants and new apartments through Google Maps, reviews and Instagram. Training institutes around Ameerpet compete for students every month. These businesses need local SEO, reviews and well-targeted lead campaigns more than thought-leadership content.',
      ],
    },
    {
      type: 'cards',
      tag: 'Where to start',
      h2: 'Popular starting points in Hyderabad',
      items: [
        { title: 'Website development in Hyderabad', desc: 'Product sites, corporate websites, landing pages and web apps.', to: '/locations/hyderabad/website-development', cta: 'Websites in Hyderabad' },
        { title: 'SEO in Hyderabad', desc: 'B2B SEO for tech companies and local SEO for consumer businesses.', to: '/locations/hyderabad/seo', cta: 'SEO company in Hyderabad' },
        { title: 'Startups & SaaS', desc: 'Positioning, product websites and demand generation.', to: '/industries/startups-saas' },
        { title: 'Real estate', desc: 'Project landing pages and qualified lead campaigns.', to: '/industries/real-estate' },
      ],
    },
  ],
  faqs: [
    ['Do you work with Hyderabad companies remotely?', 'Yes. Our team is based in Delhi NCR and works with Hyderabad clients over video calls, shared project boards and WhatsApp, with written scopes and regular updates.'],
    ['Can you build a SaaS or product website?', 'Yes — positioning, page structure, product and pricing pages, documentation hubs and fast landing pages for campaigns. See [websites for startups & SaaS](/industries/startups-saas).'],
    ['Do you create ads in Telugu?', 'We can run campaigns with Telugu creative and copy where your audience prefers it, working with your team or a native reviewer for final wording.'],
    ['Do you work with real-estate developers in west Hyderabad?', 'Yes. We build project landing pages and run Meta and Google lead campaigns focused on site visits, not just form fills. See [real estate marketing](/industries/real-estate).'],
    ['Can you help a training institute get more students?', 'Yes — course pages that rank, Google search ads for specific courses and quick follow-up on WhatsApp. See [education marketing](/industries/education).'],
  ],
};

const pages = [
  {
    city: 'hyderabad',
    service: 'website-development',
    label: 'Website development company in Hyderabad',
    banner: 'Corporate websites, SaaS product sites, landing pages, web apps and e-commerce for Hyderabad startups and businesses — fast, scalable and SEO-ready.',
    intro: {
      h2: 'Websites built for how Hyderabad buyers decide',
      paras: [
        'A CTO in the US evaluating a Gachibowli software company and a family in Kukatpally choosing a hospital have one thing in common: they form an opinion within seconds of opening your website. For the CTO, it is about clarity and credibility. For the family, it is about trust and how easy it is to book.',
        'Orizova Digital builds websites for both kinds of buyer. We plan the structure around what your visitor needs to know, write and design pages that make the decision easy, and code them to load fast, scale with your business and rank on Google.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Hyderabad',
        h2: 'Websites we build for Hyderabad businesses',
        items: [
          { title: 'SaaS & product websites', desc: 'Positioning-led homepages, feature and pricing pages, integrations and demo booking.', to: '/industries/startups-saas' },
          { title: 'IT services & corporate sites', desc: 'Service pages, case studies, careers and global enquiry forms for firms in HITEC City and Madhapur.' },
          { title: 'Hospital & clinic websites', desc: 'Departments, doctor profiles, appointment requests and health packages.', to: '/industries/clinics' },
          { title: 'Real-estate project sites', desc: 'Project pages with RERA details, floor plans, amenities and site-visit booking.', to: '/industries/real-estate' },
          { title: 'Restaurant & cloud kitchen sites', desc: 'Menus, direct ordering links, catering and event enquiries.', to: '/industries/restaurants-cafes' },
          { title: 'Training institute websites', desc: 'Course pages, batches, trainers, placement information you can verify and demo-class booking.', to: '/industries/education' },
        ],
      },
      {
        type: 'prose',
        tag: 'Built to scale',
        h2: 'What we pay attention to on Hyderabad projects',
        bullets: [
          'Clear information architecture so large sites (services, industries, locations, blogs) stay easy to navigate',
          'Fast loading on mobile networks and on global connections for international buyers',
          'Structured data for organisations, products, FAQs and articles',
          'Analytics and conversion tracking set up before launch, including demo bookings and form submissions',
          'Multilingual sections where your customers expect Telugu or Hindi',
          'Documentation and handover so your in-house team can maintain the site',
        ],
      },
      {
        type: 'process',
        h2: 'Our website process',
        steps: [
          { title: 'Discovery', desc: 'Goals, audience, competitors and what a qualified lead looks like.' },
          { title: 'Structure & copy', desc: 'Sitemap, page goals and messaging before design starts.' },
          { title: 'UI design', desc: 'Key templates designed and approved.' },
          { title: 'Development & QA', desc: 'Custom build, speed testing, tracking and SEO setup.' },
          { title: 'Launch & iterate', desc: 'Go live, monitor and improve based on real data.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Cost',
        h2: 'Website development cost for Hyderabad companies',
        paras: [
          'Cost depends on the number of templates, integrations and how much copy we write. A focused landing page, a 15-page corporate website and a SaaS site with a documentation hub are priced very differently. We send a fixed, itemised quote after discovery so there are no surprises later.',
        ],
      },
      {
        type: 'prose',
        tag: 'Hyderabad areas',
        h2: 'Working across Hyderabad and Secunderabad',
        bullets: [
          '**HITEC City, Madhapur, Gachibowli & Financial District** — SaaS, IT services, startups and corporate offices',
          '**Banjara Hills & Jubilee Hills** — premium clinics, restaurants, boutiques and design studios',
          '**Kukatpally, Miyapur & Kondapur** — hospitals, schools, retail and residential projects',
          '**Ameerpet & Begumpet** — training institutes and professional services',
          '**Kokapet, Narsingi & Tellapur** — new residential and commercial developments',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Which technologies do you use?', 'Mostly modern JavaScript frameworks such as React, plus WordPress or Shopify when you need a familiar editor or store. We choose based on what your team can maintain.'],
          ['Can you work with our in-house developers?', 'Yes. We can design and build the marketing site while your team owns the product, or hand over a documented codebase.'],
          ['Do you sign NDAs?', 'Yes, we are happy to sign an NDA before discussing product details.'],
          ['Can you also run SEO and ads?', 'Yes — see [SEO in Hyderabad](/locations/hyderabad/seo), [Google Ads](/services/google-ads) and [Meta Ads](/services/meta-ads).'],
        ],
      },
    ],
  },
  {
    city: 'hyderabad',
    service: 'seo',
    label: 'SEO company in Hyderabad',
    banner: 'B2B and SaaS SEO for Hyderabad tech companies, and local SEO for hospitals, restaurants, training institutes and retailers across the city.',
    intro: {
      h2: 'SEO for the market you actually sell to',
      paras: [
        'A Gachibowli SaaS company and a Kukatpally hospital both need SEO — but almost nothing about the strategy is the same. The SaaS company competes globally for solution and comparison keywords and needs technical depth, strong content and links. The hospital competes within a few kilometres and needs a winning Google Business Profile, reviews and pages for each speciality.',
        'We start every Hyderabad SEO engagement by mapping which searches actually bring revenue, then build a plan around them — with monthly work you can see and reports that connect rankings to enquiries.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our SEO services in Hyderabad',
        bullets: [
          'Technical SEO audits for large and JavaScript-heavy websites',
          'Keyword research and topic clusters for B2B and SaaS',
          'Comparison, alternative and use-case pages for product companies',
          'Google Business Profile and review management for local businesses',
          'Speciality and locality pages for hospitals, clinics and multi-branch brands',
          'Monthly reporting with Search Console, Analytics and lead data',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Hyderabad businesses we often help with SEO',
        items: [
          { title: 'Startups & SaaS', desc: 'Content and technical SEO that brings sign-ups and demo requests.', to: '/industries/startups-saas' },
          { title: 'Hospitals & clinics', desc: 'Speciality pages, doctor profiles and Maps visibility.', to: '/industries/clinics' },
          { title: 'Restaurants', desc: 'Maps, reviews and menu visibility for local searches.', to: '/industries/restaurants-cafes' },
          { title: 'Training institutes', desc: 'Course pages that rank for "course + Ameerpet" type searches.', to: '/industries/education' },
        ],
      },
      {
        type: 'prose',
        tag: 'Hyderabad specifics',
        h2: 'Neighbourhoods, landmarks and languages',
        paras: [
          'Local searches in Hyderabad are usually tied to a neighbourhood or landmark — "dentist in Kondapur", "biryani near Ameerpet metro", "hospital in Secunderabad". Multi-branch brands need a separate profile and page for each real location. We also look at where Telugu or Hindi content could capture searches competitors ignore.',
          'For tech companies, the city matters less than credibility. Original content, clear product pages and mentions from industry publications usually do more for rankings than any local signal.',
        ],
      },
      {
        type: 'process',
        h2: 'How we run SEO',
        steps: [
          { title: 'Audit', desc: 'Technical health, content gaps and competitor benchmarks.' },
          { title: 'Roadmap', desc: 'Prioritised plan for the first three months.' },
          { title: 'Execute', desc: 'Fixes, new pages and content every month.' },
          { title: 'Authority', desc: 'Profiles, citations, digital PR and earned mentions.' },
          { title: 'Report', desc: 'Rankings, traffic and leads in one monthly review.' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you do SEO for a website built in React?', 'Yes. We make sure pages are rendered for search engines, load fast and have proper titles, metadata, internal links and structured data.'],
          ['How long until SEO brings leads?', 'Local businesses can see early movement within weeks. B2B and SaaS content usually needs a few months to build traction.'],
          ['Do you write the content?', 'Yes, with input from your subject experts for technical topics.'],
          ['Do you guarantee rankings?', 'No. We guarantee a clear plan, consistent work and honest reporting.'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/hyderabad': {
    q: 'Which digital agency works with Hyderabad businesses?',
    a: 'Orizova Digital works remotely with Hyderabad businesses on websites, web apps, SEO and Google and Meta ads — SaaS and IT companies in HITEC City, Madhapur and Gachibowli, and hospitals, real-estate developers, restaurants and training institutes across Kukatpally, Ameerpet, Banjara Hills and Secunderabad. Strategy is planned for either a B2B or a local consumer market.',
  },
  '/locations/hyderabad/website-development': {
    q: 'Who builds websites for Hyderabad startups and businesses?',
    a: 'Orizova Digital builds SaaS product websites, IT and corporate sites, landing pages, web apps and e-commerce stores for Hyderabad companies, plus hospital, real-estate, restaurant and training institute websites. Projects start with structure and copy, then design and fast custom development with analytics, structured data and SEO set up before launch.',
  },
  '/locations/hyderabad/seo': {
    q: 'Who provides SEO services in Hyderabad?',
    a: 'Orizova Digital provides SEO for Hyderabad businesses: technical SEO, topic clusters and comparison pages for SaaS and IT companies, and Google Business Profile, reviews and speciality or locality pages for hospitals, restaurants, training institutes and retailers. Each engagement starts with an audit and a roadmap, with monthly reports linking rankings to leads.',
  },
};

const meta = {
  '/locations/hyderabad': { title: 'Digital Marketing Agency in Hyderabad | Orizova', description: 'Websites, SEO, Google & Meta Ads for Hyderabad SaaS and IT companies, hospitals, real-estate developers, restaurants and training institutes.', h1: 'Digital Marketing Agency in Hyderabad' },
  '/locations/hyderabad/website-development': { title: 'Website Development Company in Hyderabad | Orizova', description: 'SaaS product sites, corporate websites, landing pages and web apps for Hyderabad companies — plus hospital, real-estate and restaurant websites.', h1: 'Website Development Company in Hyderabad' },
  '/locations/hyderabad/seo': { title: 'SEO Company in Hyderabad – B2B, SaaS & Local SEO', description: 'Technical and content SEO for Hyderabad SaaS and IT companies, and local SEO for hospitals, restaurants and institutes in Kukatpally, Ameerpet & more.', h1: 'SEO Company in Hyderabad' },
};

const city = { hub, pages, answers, meta };
export default city;
