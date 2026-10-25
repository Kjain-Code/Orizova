// Pune: city hub + city × service pages (original copy).
const hub = {
  slug: 'pune',
  city: 'Pune',
  region: 'Maharashtra',
  tagline: 'Websites, SEO & performance marketing for Pune startups, IT firms, auto suppliers, educational institutes, real estate and restaurants — Hinjewadi to Kharadi, Baner to Kothrud',
  intro:
    "Pune mixes a large IT and startup ecosystem in Hinjewadi, Kharadi and Baner with one of India’s biggest automotive manufacturing belts in Pimpri-Chinchwad and Chakan, a famous education sector and a lively restaurant and cafe culture. Orizova Digital works remotely with Pune businesses on websites, web apps, SEO and Google and Meta campaigns — planned around whether you sell to businesses, students or local families.",
  areas: ['Hinjewadi', 'Baner & Balewadi', 'Aundh', 'Wakad', 'Kharadi', 'Viman Nagar', 'Koregaon Park', 'Kothrud', 'Hadapsar & Magarpatta', 'Pimpri-Chinchwad'],
  industries: ['Startups & SaaS', 'Auto & engineering suppliers', 'Colleges & training institutes', 'Real estate', 'Restaurants & cafes', 'Clinics & hospitals'],
  focus:
    'For Pune tech companies and manufacturers, we focus on credibility and B2B demand. For consumer businesses, we focus on Google Maps, reviews and localised campaigns around the IT corridors and residential hubs.',
  sections: [
    {
      type: 'prose',
      tag: 'The Pune market',
      h2: 'Tech, manufacturing, education — and a demanding local audience',
      paras: [
        'Pune’s IT parks and startup hubs are full of companies selling software and services to clients worldwide; its industrial belts supply auto and engineering components to major manufacturers. Both need websites and search visibility that prove capability to buyers who compare carefully.',
        'The city’s young, digital-first population also makes it a strong market for restaurants, cafes, fitness studios, clinics and real-estate projects near the IT corridors. These businesses win on Instagram, Google Maps and reviews.',
      ],
    },
    {
      type: 'cards',
      tag: 'Where to start',
      h2: 'Popular starting points in Pune',
      items: [
        { title: 'Website development in Pune', desc: 'Product sites, corporate and manufacturer websites, local business sites.', to: '/locations/pune/website-development', cta: 'Websites in Pune' },
        { title: 'SEO in Pune', desc: 'B2B, education and local SEO.', to: '/locations/pune/seo', cta: 'SEO company in Pune' },
        { title: 'Startups & SaaS', desc: 'Positioning and demand generation.', to: '/industries/startups-saas' },
        { title: 'Manufacturers', desc: 'B2B enquiry systems for suppliers.', to: '/industries/manufacturers-exporters' },
      ],
    },
  ],
  faqs: [
    ['Do you work with Pune companies remotely?', 'Yes. Our team is based in Delhi NCR and works with Pune clients over video calls, shared project boards and WhatsApp.'],
    ['Can you build a website for an auto-component supplier?', 'Yes — capability pages, quality systems you hold, part ranges and RFQ forms. See [manufacturers](/industries/manufacturers-exporters).'],
    ['Do you work with colleges and training institutes?', 'Yes — program pages, admission campaigns and counsellor follow-up. See [education](/industries/education).'],
    ['Can you run Instagram marketing for a Pune cafe?', 'Yes — reels, local ads and Google Maps optimisation. See [restaurants & cafes](/industries/restaurants-cafes).'],
  ],
};

const pages = [
  {
    city: 'pune',
    service: 'website-development',
    label: 'Website development company in Pune',
    banner: 'SaaS and corporate websites, manufacturer capability sites, institute websites and local business sites for Pune — fast, scalable and SEO-ready.',
    intro: {
      h2: 'Websites built for Pune’s mix of buyers',
      paras: [
        'A Pune website might need to convince a global software buyer, a procurement head at an automaker, a student choosing a program, or a family choosing a clinic. Each needs different information, presented clearly and quickly.',
        'We start with who your buyer is and what they need to decide, then build a fast, well-structured website around it — with tracking, SEO and enquiry flows set up from day one.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Pune',
        h2: 'Websites we build for Pune businesses',
        items: [
          { title: 'SaaS & startup websites', desc: 'Positioning, features, pricing and demo booking.', to: '/industries/startups-saas' },
          { title: 'IT services websites', desc: 'Services, case studies, careers and global enquiry forms.', to: '/industries/startups-saas' },
          { title: 'Manufacturer capability sites', desc: 'Processes, quality, part ranges and RFQs.', to: '/industries/manufacturers-exporters' },
          { title: 'College & institute websites', desc: 'Programs, admissions, placements you can verify.', to: '/industries/education' },
          { title: 'Real-estate project sites', desc: 'Project pages with RERA details and site visits.', to: '/industries/real-estate' },
          { title: 'Restaurant & cafe websites', desc: 'Menus, events and reservations.', to: '/industries/restaurants-cafes' },
        ],
      },
      {
        type: 'process',
        h2: 'Our process',
        steps: [
          { title: 'Discovery', desc: 'Buyer, goals and success metrics.' },
          { title: 'Structure & copy', desc: 'Sitemap and messaging.' },
          { title: 'Design', desc: 'Key templates approved.' },
          { title: 'Development', desc: 'Custom build, tracking and SEO.' },
          { title: 'Launch & iterate', desc: 'Measure and improve.' },
        ],
      },
      { type: "prose", tag: "Pune areas", h2: "Website development across Pune", bullets: ["**Hinjewadi, Baner & Wakad** — startups, IT services, cafes and residential projects", "**Kharadi, Viman Nagar & Magarpatta** — offices, restaurants and clinics", "**Kothrud, Aundh & Shivajinagar** — colleges, institutes, clinics and retail", "**Pimpri-Chinchwad & Chakan** — automotive and engineering suppliers"] },
      { type: "prose", tag: "Cost", h2: "Website development cost in Pune", paras: ["A focused business website, a 20-page corporate site and a SaaS site with a documentation hub are priced very differently. We send a fixed, itemised quote after discovery, and can phase larger builds so the most important pages launch first."] },
      {
        type: 'faq',
        faqs: [
          ['What does a website cost?', 'It depends on templates, integrations and copy. Fixed, itemised quote after discovery.'],
          ['Can you work with our in-house team?', 'Yes, we can collaborate or hand over a documented codebase.'],
          ['Do you sign NDAs?', 'Yes.'],
          ['Do you do SEO?', 'Yes — see [SEO in Pune](/locations/pune/seo).'],
        ],
      },
    ],
  },
  {
    city: 'pune',
    service: 'seo',
    label: 'SEO company in Pune',
    banner: 'B2B and SaaS SEO for Pune tech companies and manufacturers, education SEO for institutes, and local SEO for restaurants, clinics and real estate.',
    intro: {
      h2: 'SEO built around how your buyers search',
      paras: [
        'Pune SEO strategies vary widely. A SaaS company needs topic clusters and comparison pages; an auto supplier needs product and capability pages that procurement teams find; an institute needs program pages that rank before admissions; a cafe in Koregaon Park needs Google Maps and reviews.',
        'We identify the searches that bring revenue for your business and build a monthly plan around them, with clear reporting.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our SEO services in Pune',
        bullets: [
          'Technical SEO for modern websites',
          'Content strategy and topic clusters for B2B',
          'Product and capability SEO for manufacturers',
          'Program and course SEO for institutes',
          'Google Business Profile and reviews for local businesses',
          'Monthly reporting tied to leads',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Pune businesses we often help',
        items: [
          { title: 'SaaS & IT', desc: 'Content and technical SEO.', to: '/industries/startups-saas' },
          { title: 'Manufacturers', desc: 'Product and capability rankings.', to: '/industries/manufacturers-exporters' },
          { title: 'Education', desc: 'Program pages that rank.', to: '/industries/education' },
          { title: 'Restaurants', desc: 'Maps and reviews.', to: '/industries/restaurants-cafes' },
        ],
      },
      { type: "prose", tag: "Pune specifics", h2: "IT corridors, auto belts and residential hubs", paras: ["Pune’s local searches follow its corridors. Hinjewadi, Wakad and Baner have a young professional population searching for cafes, gyms, clinics and rentals; Kharadi, Viman Nagar and Magarpatta have similar demand on the east side; Kothrud, Aundh and Shivajinagar are established residential and education areas. Local businesses should target the corridor they serve, not ‘Pune’ as a whole.", "Pimpri-Chinchwad and Chakan are home to a large automotive and engineering supply chain. For these businesses, SEO is about capability and product pages that procurement teams find — not Google Maps."], bullets: ["**Hinjewadi, Wakad & Baner** — tech companies, cafes, gyms, clinics and housing", "**Kharadi, Viman Nagar & Hadapsar** — offices, restaurants and residential projects", "**Kothrud, Aundh & Shivajinagar** — colleges, coaching, clinics and retail", "**Pimpri-Chinchwad & Chakan** — auto and engineering suppliers"] },
      {
        type: 'faq',
        faqs: [
          ['How long does SEO take?', 'Local work shows in weeks; B2B and competitive education searches take months.'],
          ['Do you guarantee rankings?', 'No. We guarantee consistent work and transparent reporting.'],
          ['Do you write content?', 'Yes, with input from your experts for technical topics.'],
          ['Do you run ads?', 'Yes — [Google Ads](/services/google-ads) and [Meta Ads](/services/meta-ads).'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/pune': {
    q: 'Which digital agency works with Pune businesses?',
    a: 'Orizova Digital works remotely with Pune businesses on websites, web apps, SEO and Google and Meta ads — startups and IT firms in Hinjewadi, Kharadi and Baner, auto and engineering suppliers in Pimpri-Chinchwad and Chakan, colleges and training institutes, real-estate projects, restaurants, cafes and clinics.',
  },
  '/locations/pune/website-development': {
    q: 'Who builds websites for Pune companies?',
    a: 'Orizova Digital builds SaaS and IT services websites, manufacturer capability sites, college and institute websites, real-estate project pages and restaurant websites for Pune businesses. Projects start with discovery and messaging, then design and fast custom development with tracking and SEO set up before launch.',
  },
  '/locations/pune/seo': {
    q: 'Who provides SEO services in Pune?',
    a: 'Orizova Digital provides SEO for Pune businesses: technical SEO and topic clusters for SaaS and IT companies, product and capability SEO for manufacturers, program pages for institutes, and Google Business Profile and reviews for restaurants, clinics and real estate, with monthly reports tied to leads.',
  },
};

const meta = {
  '/locations/pune': { title: 'Digital Marketing Agency in Pune | Orizova Digital', description: 'Websites, SEO and ads for Pune startups, IT firms, auto suppliers, colleges, real-estate projects, restaurants and clinics.', h1: 'Digital Marketing Agency in Pune' },
  '/locations/pune/website-development': { title: 'Website Development Company in Pune | Orizova', description: 'SaaS, IT, manufacturer, institute, real-estate and restaurant websites for Pune businesses — fast, scalable and SEO-ready, with fixed quotes.', h1: 'Website Development Company in Pune' },
  '/locations/pune/seo': { title: 'SEO Company in Pune – B2B, Education & Local SEO', description: 'SEO for Pune SaaS and IT companies, manufacturers, colleges and local businesses — technical, content and Google Maps, with monthly reporting.', h1: 'SEO Company in Pune' },
};

const city = { hub, pages, answers, meta };
export default city;
