// Lucknow: city hub + city × service pages. Original copy for this market —
// never copy another city's file and swap the name.
const hub = {
  slug: 'lucknow',
  city: 'Lucknow',
  region: 'Uttar Pradesh',
  tagline: 'Websites, SEO & lead generation for Lucknow businesses — from Gomti Nagar and Hazratganj to Aliganj, Indira Nagar and Shaheed Path',
  intro:
    "Lucknow has grown from a government-and-tehzeeb city into a busy business market: hospitals and specialist clinics in Gomti Nagar, coaching institutes in Aliganj and Kapoorthala, Chikankari brands in Chowk and Aminabad, and new housing along Shaheed Path and Sushant Golf City. Orizova Digital builds fast websites for Lucknow businesses and runs SEO, Google Ads and Meta Ads that bring calls and WhatsApp enquiries from the right part of the city.",
  areas: ['Gomti Nagar', 'Gomti Nagar Extension', 'Hazratganj', 'Aliganj', 'Indira Nagar', 'Mahanagar', 'Alambagh', 'Jankipuram', 'Aminabad & Chowk', 'Sushant Golf City'],
  industries: ['Hospitals & clinics', 'Coaching & test prep', 'Chikankari & ethnic wear', 'Real estate & builders', 'Restaurants & sweet shops', 'Schools & colleges'],
  focus:
    'Lucknow customers are loyal once they trust you, but they ask around first — so we combine a credible website and a strong Google Business Profile with reviews, Hindi-friendly wording where it helps, and ads targeted to the localities you actually serve.',
  sections: [
    {
      type: 'prose',
      tag: 'The Lucknow market',
      h2: 'Old Lucknow, new Lucknow — and very different customers',
      paras: [
        'The trans-Gomti side — Gomti Nagar, Gomti Nagar Extension, Vibhuti Khand and the Shaheed Path belt — is where new hospitals, offices, cafes and gated societies have come up. Customers here search on Google, read reviews and expect a proper website before they book an appointment or a site visit.',
        'Old Lucknow — Chowk, Aminabad, Nakhas and Hazratganj — runs on reputation built over generations. These businesses rarely lack customers in the shop, but many miss buyers searching from outside the city: a family in Pune looking for genuine Chikankari, or a wedding party looking for a caterer that does proper Awadhi food. A good website and online catalogue opens that door.',
        'In between are the student markets of Aliganj, Kapoorthala and Indira Nagar, where coaching institutes compete hard every admission season. For them, timing matters as much as the message: campaigns need to be ready before results are announced, not after.',
      ],
    },
    {
      type: 'cards',
      tag: 'Where to start',
      h2: 'What usually works first for Lucknow businesses',
      items: [
        { title: 'Website development in Lucknow', desc: 'Clinic, coaching, retail and builder websites that load fast on mobile and turn visits into calls.', to: '/locations/lucknow/website-development', cta: 'Website development in Lucknow' },
        { title: 'SEO & Google Maps in Lucknow', desc: 'Rank for "near me" and locality searches in Gomti Nagar, Aliganj, Indira Nagar and beyond.', to: '/locations/lucknow/seo', cta: 'SEO company in Lucknow' },
        { title: 'Admission-season campaigns', desc: 'Meta and Google lead campaigns for coaching institutes, planned around exam calendars.', to: '/industries/education' },
        { title: 'Online store for Chikankari', desc: 'Sell kurtas, sarees and dupattas across India with a catalogue, payments and shipping.', to: '/industries/ecommerce-d2c' },
      ],
    },
  ],
  faqs: [
    ['Do you work with businesses in Lucknow?', 'Yes. Our team is based in Delhi NCR and works with Lucknow businesses over calls, video meetings and WhatsApp. Projects are planned in clear milestones, so you always know what is happening.'],
    ['Can you help a Lucknow clinic get more patients from Google?', 'Yes. We set up the clinic’s Google Business Profile, build treatment pages, start a genuine review routine and run search ads for the treatments you want to grow — within medical advertising rules. See [digital marketing for clinics](/industries/clinics).'],
    ['When should a coaching institute in Lucknow start ads for admissions?', 'Usually a few weeks before board and entrance results, so your landing page, lead form and follow-up process are ready when parents and students start searching.'],
    ['Can you build an online store for a Chikankari business?', 'Yes — product catalogue with fabric, size and colour options, Indian payment gateways, shipping across India and order notifications on WhatsApp or email. See [e-commerce solutions](/services/ecommerce-solutions).'],
    ['Do you write content in Hindi?', 'Yes, where your customers prefer it. Many Lucknow businesses do well with English pages plus Hindi headings, FAQs or ad copy.'],
  ],
};

const pages = [
  {
    city: 'lucknow',
    service: 'website-development',
    label: 'Website development company in Lucknow',
    banner: 'Business websites, landing pages and online stores for Lucknow clinics, coaching institutes, Chikankari brands, builders and restaurants — fast on mobile and built to bring enquiries.',
    intro: {
      h2: 'A website Lucknow customers trust at first glance',
      paras: [
        'In Lucknow, word of mouth still decides a lot — but that word of mouth now ends with "check them on Google". A parent comparing coaching institutes in Aliganj, a family choosing a hospital in Gomti Nagar or a buyer in Bengaluru looking for authentic Chikankari will all open your website before they call. If it looks outdated, loads slowly or hides the phone number, they move to the next result.',
        'Orizova Digital designs and develops websites that pass that check: what you do and where you are in the first screen, real photos instead of stock images, click-to-call and WhatsApp buttons on every page, and pages set up for Google from launch so the site keeps bringing visitors after it goes live.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Lucknow',
        h2: 'Websites we build for Lucknow businesses',
        items: [
          { title: 'Hospital & clinic websites', desc: 'Doctor profiles with qualifications, departments, OPD timings, appointment requests and directions — for clinics across Gomti Nagar, Indira Nagar and Alambagh.', to: '/industries/clinics' },
          { title: 'Coaching institute websites', desc: 'Courses, batch timings, faculty, verifiable results and an admission enquiry form that reaches your counsellor on WhatsApp.', to: '/industries/education' },
          { title: 'Chikankari & ethnic wear stores', desc: 'Online catalogues and stores with fabric and size details, close-up photos and shipping across India.', to: '/industries/ecommerce-d2c' },
          { title: 'Builder & project websites', desc: 'Project pages with RERA details, floor plans, location maps and site-visit booking for projects along Shaheed Path and Sultanpur Road.', to: '/industries/real-estate' },
          { title: 'Restaurant & caterer websites', desc: 'Menus, catering packages, event enquiries and delivery links for restaurants, sweet shops and caterers.', to: '/industries/restaurants-cafes' },
          { title: 'School & college websites', desc: 'Admissions information, fee and transport details, notices and galleries that parents can find easily.', to: '/industries/education' },
        ],
      },
      {
        type: 'prose',
        tag: 'Local details',
        h2: 'What a Lucknow website should get right',
        bullets: [
          'Name your locality and nearby landmark clearly — "near Patrakarpuram crossing" or "opposite Kapoorthala complex" helps customers find you and helps Google match local searches',
          'Offer Hindi where your customers expect it: bilingual headings, FAQs or a Hindi version of key pages',
          'Put admission dates, OPD timings or store hours where they are impossible to miss — and keep them updated',
          'For heritage and craft businesses, tell the story behind the work: artisans, technique and how to identify genuine products',
          'Keep pages light enough to load quickly on mobile data in crowded markets',
        ],
      },
      {
        type: 'process',
        h2: 'How we build your Lucknow website',
        steps: [
          { title: 'Requirement call', desc: 'Your services, customers, localities and what an enquiry should look like.' },
          { title: 'Sitemap & content plan', desc: 'Which pages you need and which searches each page should answer.' },
          { title: 'Homepage design', desc: 'You approve the look before we develop the full site.' },
          { title: 'Development & setup', desc: 'Fast custom code, WhatsApp, forms, Maps, Analytics and Search Console.' },
          { title: 'Launch & handover', desc: 'Domain and hosting in your name, training and optional monthly support.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Cost',
        h2: 'Website development cost in Lucknow',
        paras: [
          'A five-page clinic website, a coaching site with course pages and an online store with hundreds of products are very different jobs, so we do not publish one price for everything. After a short call we send a fixed, itemised quote. Our [website cost guide](/blog/website-cost-in-delhi-ncr) explains what changes the price — the same factors apply in Lucknow.',
        ],
      },
      {
        type: 'prose',
        tag: 'Lucknow localities',
        h2: 'Website development across Lucknow',
        paras: ['We plan pages around the parts of Lucknow you actually serve, so searches like "dentist in Indira Nagar" or "NEET coaching in Aliganj" can find you.'],
        bullets: [
          '**Gomti Nagar, Gomti Nagar Extension & Vibhuti Khand** — hospitals, clinics, offices, cafes and premium retail',
          '**Aliganj, Kapoorthala & Jankipuram** — coaching institutes, schools, tuition centres and student services',
          '**Hazratganj, Aminabad & Chowk** — heritage retail, Chikankari, jewellers, sweet shops and restaurants',
          '**Indira Nagar, Mahanagar & Alambagh** — clinics, diagnostic centres, salons and neighbourhood businesses',
          '**Shaheed Path, Sushant Golf City & Sultanpur Road** — builders, new housing projects and interior designers',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How long does a website take for a Lucknow business?', 'A focused business website usually goes live in a few weeks once content and photos are ready. Online stores and larger sites are planned in clear milestones.'],
          ['Can you make my coaching website show results and toppers?', 'Yes, as long as the results are genuine and you have permission to show students’ names and photos. Verifiable results build far more trust than vague claims.'],
          ['Will the website be in my name?', 'Yes. The domain is registered in your name and you receive all logins at handover.'],
          ['Can you update the website after launch?', 'Yes — monthly support for updates, new pages, offers and admission notices is optional.'],
          ['Do you also handle SEO and ads?', 'Yes. Many Lucknow clients pair the website with [SEO in Lucknow](/locations/lucknow/seo) and Google or Meta ads.'],
        ],
      },
    ],
  },
  {
    city: 'lucknow',
    service: 'seo',
    label: 'SEO company in Lucknow',
    banner: 'Local SEO and Google Maps optimisation for Lucknow clinics, coaching institutes, retailers and service businesses — so you show up for the searches that bring real enquiries.',
    intro: {
      h2: 'Get found when Lucknow searches for what you do',
      paras: [
        'Lucknow searches are increasingly local and specific: "skin clinic Gomti Nagar", "best NEET coaching in Aliganj", "Chikan kurti wholesale Aminabad". The businesses that appear for these searches are not always the biggest — they are the ones with a complete Google Business Profile, genuine reviews and a website that clearly answers the question.',
        'Our SEO work for Lucknow businesses focuses on exactly those signals. We start with an audit and a keyword map for the localities and services you care about, fix what is holding the site back, and then build your visibility month by month with reports you can actually read.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our SEO services in Lucknow',
        bullets: [
          'Google Business Profile optimisation — categories, services, photos, posts and Q&A',
          'A simple, policy-compliant routine for collecting genuine reviews',
          'Service and locality pages for the parts of Lucknow you really serve',
          'Technical SEO: speed, mobile usability, indexing, schema markup',
          'Content in English and Hindi that answers questions customers ask before they call',
          'Consistent name, address and phone across directories and listings',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Lucknow businesses we often help with SEO',
        items: [
          { title: 'Clinics & hospitals', desc: 'Treatment and doctor pages, Maps visibility and reviews for specialities people search by name.', to: '/industries/clinics' },
          { title: 'Coaching institutes', desc: 'Course and exam pages that rank before and during admission season.', to: '/industries/education' },
          { title: 'Retail & Chikankari brands', desc: 'Category pages and product SEO for buyers searching from outside Lucknow.', to: '/industries/retail-showrooms' },
          { title: 'Real estate', desc: 'Project and locality pages for buyers comparing Shaheed Path, Sultanpur Road and Gomti Nagar Extension.', to: '/industries/real-estate' },
        ],
      },
      {
        type: 'prose',
        tag: 'Lucknow specifics',
        h2: 'Khands, sectors and landmarks: how Lucknow searches',
        paras: [
          'Gomti Nagar is organised into Khands (Vibhuti Khand, Vipul Khand, Vinay Khand), Indira Nagar and Aliganj into sectors, and older areas are known by their markets and chowks. Customers use all of these in searches and in conversation. Your Google profile, website and listings should use the exact names your customers use, plus a recognisable landmark.',
          'Lucknow also has strong Hindi search behaviour, especially on mobile and voice. A page that answers common questions in simple Hindi, alongside English, can capture searches your competitors ignore.',
        ],
      },
      {
        type: 'process',
        h2: 'How a Lucknow SEO project runs',
        steps: [
          { title: 'Audit', desc: 'Website, Google profile, reviews and the competitors who appear for your searches.' },
          { title: 'Keyword & locality map', desc: 'One clear target per page, by service and area.' },
          { title: 'Foundations', desc: 'Technical fixes, page optimisation and profile clean-up.' },
          { title: 'Growth', desc: 'New pages, reviews, posts and citations every month.' },
          { title: 'Monthly report', desc: 'Rankings, Search Console data, calls and enquiries.' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How long does SEO take in Lucknow?', 'Google profile improvements can show movement within weeks. Ranking pages for competitive services usually takes a few months of consistent work. We share realistic milestones after the audit.'],
          ['Can you guarantee first-page rankings?', 'No honest agency can guarantee rankings. We guarantee the work, transparent reporting and a clear plan focused on searches that bring enquiries.'],
          ['I have branches in Gomti Nagar and Alambagh. Can both rank?', 'Yes. Each staffed branch can have its own Google Business Profile and its own page on your website with its address, timings and photos.'],
          ['Do you do SEO in Hindi?', 'Yes. We can add Hindi pages or Hindi FAQs where your customers search in Hindi.'],
          ['Can SEO and Google Ads work together?', 'Yes. [Google Ads](/services/google-ads) can bring enquiries while SEO builds, and search-term data from ads helps decide which pages to create.'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/lucknow': {
    q: 'Which digital marketing agency works with Lucknow businesses?',
    a: 'Orizova Digital builds websites and runs SEO, Google Ads and Meta Ads for Lucknow businesses — hospitals and clinics in Gomti Nagar, coaching institutes in Aliganj and Kapoorthala, Chikankari and retail brands in Chowk and Aminabad, and builders along Shaheed Path. Its team is based in Delhi NCR and works with Lucknow clients over calls and WhatsApp.',
  },
  '/locations/lucknow/website-development': {
    q: 'Who builds websites for businesses in Lucknow?',
    a: 'Orizova Digital is a website development company for Lucknow that builds clinic, coaching, school, real-estate, restaurant and e-commerce websites for areas like Gomti Nagar, Aliganj, Indira Nagar, Hazratganj and Shaheed Path. Sites are fast on mobile, include click-to-call and WhatsApp, can include Hindi content and are set up for Google from launch.',
  },
  '/locations/lucknow/seo': {
    q: 'Who provides SEO services in Lucknow?',
    a: 'Orizova Digital provides SEO and local SEO for Lucknow clinics, coaching institutes, retailers and service businesses: Google Business Profile optimisation, genuine reviews, locality pages for areas like Gomti Nagar and Aliganj, technical fixes and Hindi-friendly content. Work starts with an audit and keyword map, and results are reported monthly.',
  },
};

const meta = {
  '/locations/lucknow': { title: 'Digital Marketing Agency in Lucknow | Orizova Digital', description: 'Websites, SEO, Google & Meta Ads for Lucknow businesses — clinics in Gomti Nagar, coaching in Aliganj, Chikankari brands and builders on Shaheed Path.', h1: 'Digital Marketing Agency in Lucknow' },
  '/locations/lucknow/website-development': { title: 'Website Development Company in Lucknow | Orizova', description: 'Fast, mobile-first websites for Lucknow clinics, coaching institutes, Chikankari stores, builders and restaurants. Hindi-friendly, SEO-ready, fixed quotes.', h1: 'Website Development Company in Lucknow' },
  '/locations/lucknow/seo': { title: 'SEO Company in Lucknow – Local SEO & Google Maps', description: 'Local SEO for Lucknow: Google Business Profile, reviews, locality pages for Gomti Nagar, Aliganj & Indira Nagar, technical fixes and Hindi content.', h1: 'SEO Company in Lucknow' },
};

const city = { hub, pages, answers, meta };
export default city;
