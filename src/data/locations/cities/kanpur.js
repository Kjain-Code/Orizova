// Kanpur: city hub + city × service pages (original copy).
const hub = {
  slug: 'kanpur',
  city: 'Kanpur',
  region: 'Uttar Pradesh',
  tagline: 'Websites, SEO & lead generation for Kanpur manufacturers, leather and textile exporters, coaching institutes, hospitals and traders — Swaroop Nagar to Panki',
  intro:
    "Kanpur is one of North India’s great industrial and trading cities: leather tanneries and saddlery in Jajmau, textile and hosiery units, engineering works in Panki and Dada Nagar, and wholesale markets that supply half of Uttar Pradesh. It is also a major education centre, with coaching institutes concentrated in Kakadeo, and a large market for hospitals and clinics in Swaroop Nagar and Civil Lines. Orizova Digital builds websites and runs SEO and ads that help Kanpur businesses reach buyers beyond their existing network.",
  areas: ['Swaroop Nagar', 'Civil Lines', 'Kakadeo', 'Arya Nagar', 'Kidwai Nagar', 'Govind Nagar', 'Kalyanpur', 'Jajmau', 'Panki & Dada Nagar', 'Mall Road'],
  industries: ['Leather & saddlery exporters', 'Textile & hosiery units', 'Engineering manufacturers', 'Coaching institutes', 'Hospitals & clinics', 'Wholesale traders'],
  focus:
    'Kanpur businesses often rely on long-standing relationships. Digital marketing adds new buyers: export enquiries from product SEO, distributors from Google search ads, and students and patients from local SEO and lead campaigns.',
  sections: [
    {
      type: 'prose',
      tag: 'The Kanpur market',
      h2: 'Relationships built the business — search finds the next customers',
      paras: [
        'Many Kanpur manufacturers and traders have served the same buyers for decades. That network is valuable, but it rarely grows on its own. Importers, new distributors and procurement teams now search Google, LinkedIn and B2B portals first. A clear website with product lines, capacity and quality information you can back up puts you in front of buyers who have never heard of you.',
        'Kakadeo’s coaching institutes face a different challenge: intense competition for engineering and medical aspirants every year, and parents who research thoroughly. Clear course pages, verifiable results and fast follow-up on enquiries make the difference.',
      ],
    },
    {
      type: 'cards',
      tag: 'Where to start',
      h2: 'Popular starting points in Kanpur',
      items: [
        { title: 'Website development in Kanpur', desc: 'Export catalogues, institute and hospital websites.', to: '/locations/kanpur/website-development', cta: 'Websites in Kanpur' },
        { title: 'SEO in Kanpur', desc: 'Product SEO and local SEO.', to: '/locations/kanpur/seo', cta: 'SEO company in Kanpur' },
        { title: 'Manufacturers & exporters', desc: 'B2B and export enquiry systems.', to: '/industries/manufacturers-exporters' },
        { title: 'Coaching institutes', desc: 'Admission campaigns and course SEO.', to: '/industries/education' },
      ],
    },
  ],
  faqs: [
    ['Do you work with Kanpur businesses?', 'Yes. Our team is based in Delhi NCR and works with Kanpur clients over calls, video meetings and WhatsApp.'],
    ['Can you help a leather exporter get international enquiries?', 'Yes — an export-ready catalogue website, product SEO for international buyers, and listings and campaigns in the markets you target. See [manufacturers & exporters](/industries/manufacturers-exporters).'],
    ['Can you help a Kakadeo coaching institute with admissions?', 'Yes — course pages, demo-class booking, Google search ads, Meta lead forms and WhatsApp follow-up. See [education marketing](/industries/education).'],
    ['Do you write content in Hindi?', 'Yes, for local-facing pages and ads where it helps.'],
  ],
};

const pages = [
  {
    city: 'kanpur',
    service: 'website-development',
    label: 'Website development company in Kanpur',
    banner: 'Export catalogues for Kanpur leather, textile and engineering manufacturers, plus websites for coaching institutes, hospitals and traders.',
    intro: {
      h2: 'Websites that open new markets for Kanpur businesses',
      paras: [
        'An importer in Europe sourcing leather goods, a retailer in Bihar looking for a hosiery supplier, or a parent comparing coaching institutes — all of them judge a Kanpur business by its website before making contact. Most local websites do not give them enough to go on.',
        'We build websites that do: product lines with clear specifications, company capability and quality information, verifiable results for institutes, and enquiry forms that reach the right person — fast on mobile and set up for Google.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Kanpur',
        h2: 'Websites we build for Kanpur businesses',
        items: [
          { title: 'Leather & saddlery export sites', desc: 'Product ranges, materials, finishes, sampling and export enquiry forms.', to: '/industries/manufacturers-exporters' },
          { title: 'Textile & hosiery catalogues', desc: 'Product lines, sizes, MOQs and distributor enquiries.', to: '/industries/manufacturers-exporters' },
          { title: 'Engineering company websites', desc: 'Capabilities, machinery, industries served and RFQ forms.', to: '/industries/manufacturers-exporters' },
          { title: 'Coaching institute websites', desc: 'Courses, faculty, batch timings, results and demo-class booking.', to: '/industries/education' },
          { title: 'Hospital & clinic websites', desc: 'Departments, doctors and appointment requests.', to: '/industries/clinics' },
          { title: 'Wholesale trader websites', desc: 'Brands and categories stocked, dealer enquiries and WhatsApp ordering.', to: '/industries/retail-showrooms' },
        ],
      },
      {
        type: 'prose',
        tag: 'Export-ready',
        h2: 'What international buyers expect',
        bullets: [
          'English-first, professional product pages with clear photos',
          'Materials, finishes, sizes and customisation options',
          'Sampling process, MOQ and lead times',
          'Certifications and compliance you genuinely hold',
          'Fast email and WhatsApp response to enquiries',
        ],
      },
      {
        type: 'process',
        h2: 'How we build',
        steps: [
          { title: 'Understand products & buyers', desc: 'Markets, buyer types and enquiries today.' },
          { title: 'Structure', desc: 'Product lines and page plan.' },
          { title: 'Design', desc: 'Professional, export-ready look.' },
          { title: 'Build', desc: 'Catalogue, enquiry forms, tracking and SEO.' },
          { title: 'Launch & train', desc: 'Your team learns to add products.' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['What does a catalogue website cost?', 'It depends on products and features. We quote a fixed price after a call and can phase large catalogues. See our [cost guide](/blog/website-cost-in-delhi-ncr).'],
          ['Can we show prices only to dealers?', 'Yes — a login area or "price on request" with a quick form.'],
          ['Do you build multilingual export sites?', 'Yes, where you target non-English markets.'],
          ['Do you do SEO?', 'Yes — see [SEO in Kanpur](/locations/kanpur/seo).'],
        ],
      },
    ],
  },
  {
    city: 'kanpur',
    service: 'seo',
    label: 'SEO company in Kanpur',
    banner: 'Product and export SEO for Kanpur manufacturers, and local SEO for coaching institutes, hospitals and traders.',
    intro: {
      h2: 'Be found by buyers, students and patients',
      paras: [
        'For a Kanpur manufacturer, SEO means ranking product pages for searches buyers make across India and abroad. For a Kakadeo coaching institute or a Swaroop Nagar hospital, it means appearing in Google Maps and local results when people nearby search.',
        'We build the right strategy for your business and do the work every month — with reports that show enquiries, not just positions.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our SEO services in Kanpur',
        bullets: [
          'Product and category SEO for manufacturers and exporters',
          'International SEO setup for export markets',
          'Google Business Profile and reviews for local businesses',
          'Course and exam pages for coaching institutes',
          'Technical SEO and structured data',
          'Monthly reports',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Kanpur businesses we often help',
        items: [
          { title: 'Exporters', desc: 'Product rankings for international buyers.', to: '/industries/manufacturers-exporters' },
          { title: 'Coaching', desc: 'Course SEO before admission season.', to: '/industries/education' },
          { title: 'Hospitals', desc: 'Speciality and Maps visibility.', to: '/industries/clinics' },
          { title: 'Traders', desc: 'Brand and category visibility.', to: '/industries/retail-showrooms' },
        ],
      },
      { type: "prose", tag: "Kanpur specifics", h2: "Industrial zones, coaching hubs and old markets", paras: ["Kanpur’s search behaviour mirrors its economy. Leather businesses in Jajmau and engineering units in Panki and Dada Nagar are searched by buyers who care about products and capability, often from outside Uttar Pradesh. Kakadeo’s coaching institutes compete for students from across the state, especially in the weeks after board results. Hospitals in Swaroop Nagar and Civil Lines compete for patients searching by speciality.", "Each of these needs different pages and signals. We avoid creating thin pages for every mohalla, and instead build a few strong pages for the products, courses or specialities that bring real enquiries."], bullets: ["**Jajmau** — leather, tanneries and saddlery exporters", "**Panki & Dada Nagar** — engineering and manufacturing units", "**Kakadeo & Kalyanpur** — coaching institutes and student services", "**Swaroop Nagar & Civil Lines** — hospitals, clinics and professional services"] },
      {
        type: 'faq',
        faqs: [
          ['How long does SEO take?', 'Local work can show in weeks; product and export rankings take several months.'],
          ['Do you guarantee rankings?', 'No. We guarantee consistent work and honest reporting.'],
          ['Can you help with LinkedIn too?', 'Yes, for B2B businesses a company page and regular posts support credibility.'],
          ['Do you run Google Ads?', 'Yes — see our [Google Ads service](/services/google-ads).'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/kanpur': {
    q: 'Which digital marketing agency works with Kanpur businesses?',
    a: 'Orizova Digital builds websites and runs SEO and ads for Kanpur businesses — leather and saddlery exporters in Jajmau, textile and hosiery units, engineering manufacturers in Panki and Dada Nagar, coaching institutes in Kakadeo, hospitals in Swaroop Nagar and wholesale traders — focused on reaching buyers and customers beyond existing networks.',
  },
  '/locations/kanpur/website-development': {
    q: 'Who builds websites for Kanpur manufacturers and institutes?',
    a: 'Orizova Digital builds export-ready catalogue websites for Kanpur leather, textile and engineering manufacturers, and websites for coaching institutes, hospitals and wholesale traders. Sites include product specifications, sampling and MOQ details, verifiable results for institutes, enquiry forms and WhatsApp, and SEO setup from launch.',
  },
  '/locations/kanpur/seo': {
    q: 'Who does SEO for Kanpur businesses?',
    a: 'Orizova Digital does SEO for Kanpur businesses: product, category and international SEO for manufacturers and exporters, and local SEO — Google Business Profile, reviews and course or speciality pages — for coaching institutes, hospitals and traders. Monthly reports focus on enquiries.',
  },
};

const meta = {
  '/locations/kanpur': { title: 'Digital Marketing Agency in Kanpur | Orizova Digital', description: 'Websites, SEO and ads for Kanpur leather and textile exporters, engineering units, coaching institutes in Kakadeo, hospitals and traders.', h1: 'Digital Marketing Agency in Kanpur' },
  '/locations/kanpur/website-development': { title: 'Website Development Company in Kanpur | Orizova', description: 'Export catalogue websites for Kanpur leather, textile and engineering manufacturers, plus coaching institute, hospital and trader websites.', h1: 'Website Development Company in Kanpur' },
  '/locations/kanpur/seo': { title: 'SEO Company in Kanpur – Export, Product & Local SEO', description: 'Product and export SEO for Kanpur manufacturers, and local SEO for coaching institutes, hospitals and traders. Monthly reporting on enquiries.', h1: 'SEO Company in Kanpur' },
};

const city = { hub, pages, answers, meta };
export default city;
