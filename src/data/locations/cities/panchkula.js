// Panchkula: city hub + city × service pages (complements the Tricity page).
const hub = {
  slug: 'panchkula',
  city: 'Panchkula',
  region: 'Haryana (Chandigarh Tricity)',
  tagline: 'Websites, Google Maps and local marketing for Panchkula clinics, schools, banquet halls, builders and shops — Sector 5 to MDC, Pinjore to Zirakpur',
  intro:
    "Panchkula is the calmer, family-centred part of the Tricity: well-planned sectors, schools and hospitals, banquet halls and wedding venues, and steady demand for clinics, coaching, salons and home services. Customers here are loyal but careful — they check reviews and ask neighbours before choosing. Orizova Digital helps Panchkula businesses look as trustworthy online as they are offline, with fast websites, a strong Google presence and local ads.",
  areas: ['Sector 5', 'Sector 8', 'Sector 9', 'Sector 11', 'Sector 20', 'Sector 21', 'Mansa Devi Complex', 'Industrial Area', 'Pinjore', 'Kalka'],
  industries: ['Clinics & hospitals', 'Schools & coaching', 'Banquet halls & venues', 'Real estate', 'Salons & wellness', 'Home services'],
  focus:
    'Panchkula customers often search across the Tricity but prefer someone close by. We focus on sector-level Google Maps visibility, genuine reviews and websites that make you easy to choose — with ads used to reach families in specific sectors.',
  sections: [
    {
      type: 'prose',
      tag: 'The Panchkula market',
      h2: 'Trust travels by word of mouth — and now by reviews',
      paras: [
        'Many Panchkula families have lived in the same sector for years. Recommendations still matter enormously, but they now continue online: a neighbour mentions a dentist, and the first thing you do is check their Google reviews and website. A business with few reviews or an outdated listing loses that recommendation without ever knowing.',
        'Events are a major part of the local economy too. Banquet halls, farmhouses and venues along the Pinjore and Zirakpur roads compete for wedding and party bookings from across the Tricity — a category where photos, video walkthroughs and fast replies decide most enquiries.',
      ],
    },
    {
      type: 'cards',
      tag: 'Where to start',
      h2: 'Popular starting points in Panchkula',
      items: [
        { title: 'Website development in Panchkula', desc: 'Clinic, school, venue and local business websites.', to: '/locations/panchkula/website-development', cta: 'Websites in Panchkula' },
        { title: 'SEO in Panchkula', desc: 'Sector-level Google Maps and local SEO.', to: '/locations/panchkula/seo', cta: 'SEO company in Panchkula' },
        { title: 'Banquet & wedding venues', desc: 'Galleries, packages and enquiry campaigns.', to: '/industries/events-weddings' },
        { title: 'Chandigarh & Mohali', desc: 'See our other Tricity pages.', to: '/locations/chandigarh' },
      ],
    },
  ],
  faqs: [
    ['Do you work with Panchkula businesses?', 'Yes. Our team is based in Delhi NCR and works with Tricity clients remotely over calls, video meetings and WhatsApp.'],
    ['Can you help a banquet hall get more wedding enquiries?', 'Yes — a venue website with galleries and capacities, Google profile optimisation, and Meta and Google campaigns around the wedding season. See [events & weddings](/industries/events-weddings).'],
    ['Can my Panchkula clinic appear for Chandigarh searches?', 'Map rankings depend on distance, so it is harder from one address. Your website and ads can still reach nearby Chandigarh sectors.'],
    ['Do you work with schools?', 'Yes — admission-focused websites, Google profile management and admission-season campaigns. See [education marketing](/industries/education).'],
  ],
};

const pages = [
  {
    city: 'panchkula',
    service: 'website-development',
    label: 'Website development company in Panchkula',
    banner: 'Websites for Panchkula clinics, schools, banquet halls, builders and local businesses — clear, fast and designed to earn trust.',
    intro: {
      h2: 'Simple, trustworthy websites for Panchkula families',
      paras: [
        'Panchkula customers do not need flashy websites — they need clear ones. Who are you, what do you offer, which sector are you in, when are you open, and can they trust you? A good Panchkula website answers all five in the first scroll, with real photos and genuine reviews.',
        'We design and build exactly that, plus the features your business needs: appointment requests for clinics, admission enquiries for schools, date and package enquiries for venues, and WhatsApp everywhere.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Panchkula',
        h2: 'Websites we build for Panchkula businesses',
        items: [
          { title: 'Clinic & hospital websites', desc: 'Doctors, specialities, timings and appointment requests.', to: '/industries/clinics' },
          { title: 'School websites', desc: 'Admissions, fee and transport details, notices and galleries.', to: '/industries/education' },
          { title: 'Banquet & venue websites', desc: 'Halls, lawns, capacities, menus, packages and date enquiries.', to: '/industries/events-weddings' },
          { title: 'Real-estate websites', desc: 'Project and resale listings with clear location information.', to: '/industries/real-estate' },
          { title: 'Salon & wellness websites', desc: 'Services, packages and booking.', to: '/industries/salons-beauty' },
        ],
      },
      {
        type: 'prose',
        tag: 'Local details',
        h2: 'What a Panchkula website should include',
        bullets: [
          'Your sector and market (for example "Sector 11 market" or "near Sector 5 bus stand")',
          'The nearby sectors and towns you serve — Zirakpur, Pinjore, MDC, Chandigarh',
          'Real photos of your premises, team and work',
          'Genuine reviews or testimonials you have permission to show',
          'One-tap call and WhatsApp on every page',
        ],
      },
      {
        type: 'process',
        h2: 'How it works',
        steps: [
          { title: 'Call', desc: 'Your business, customers and goals.' },
          { title: 'Plan', desc: 'Pages, content and features.' },
          { title: 'Design', desc: 'Homepage design for approval.' },
          { title: 'Build', desc: 'Development, forms, Maps and tracking.' },
          { title: 'Launch', desc: 'Go live and hand over in your name.' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How much does a website cost in Panchkula?', 'It depends on pages and features. We send a fixed quote after a short call; see our [Tricity website cost guide](/blog/website-development-cost-chandigarh).'],
          ['Can you add online booking for my venue?', 'Yes — date enquiry forms, package selection and WhatsApp follow-up.'],
          ['Will I be able to update it?', 'Yes, we set up simple editing or handle updates on a monthly plan.'],
          ['Do you also do SEO?', 'Yes — see [SEO in Panchkula](/locations/panchkula/seo).'],
        ],
      },
    ],
  },
  {
    city: 'panchkula',
    service: 'seo',
    label: 'SEO company in Panchkula',
    banner: 'Sector-level Google Maps ranking, reviews and local SEO for Panchkula businesses.',
    intro: {
      h2: 'Be the business Panchkula finds first',
      paras: [
        'Panchkula searches are short and local: "pediatrician sector 9", "banquet hall Panchkula", "play school MDC". Google answers them mostly from its map pack, chosen by relevance, distance and prominence. A complete profile, consistent reviews and a website that clearly mentions your sector and services are what move you up.',
        'We handle that local SEO work every month and report on rankings, calls and direction requests — the numbers that matter for a local business.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Local SEO for Panchkula',
        bullets: [
          'Google Business Profile setup, verification and optimisation',
          'Review collection routine and professional replies',
          'Website pages for your services and the sectors you serve',
          'Consistent listings on relevant directories',
          'Regular Google posts with offers, events and updates',
          'Map-ranking checks across different sectors',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Panchkula businesses we often help',
        items: [
          { title: 'Clinics', desc: 'Speciality visibility and patient reviews.', to: '/industries/clinics' },
          { title: 'Schools & play schools', desc: 'Admission-season visibility.', to: '/industries/education' },
          { title: 'Venues', desc: 'Maps, photos and reviews for event searches.', to: '/industries/events-weddings' },
          { title: 'Home services', desc: 'Service-area profiles that reach the whole Tricity.', to: '/industries/home-services' },
        ],
      },
      { type: "prose", tag: "Panchkula specifics", h2: "Sector markets and Tricity overlap", paras: ["Panchkula is searched by sector, and each sector market — Sector 5, 8, 9, 11, 20 — serves its surrounding residential pockets. Mansa Devi Complex, Pinjore and Kalka have their own local demand. Because Chandigarh is next door, many searches also include Tricity-wide terms, so your website should mention the nearby areas you genuinely serve.", "Banquet and event venues along the Pinjore and Zirakpur sides compete across the whole Tricity; for them, photos, reviews and a strong website matter more than map distance."], bullets: ["**Sector 5 & Sector 8–11** — clinics, schools, retail and services", "**Sector 20–21 & MDC** — residential, play schools and home services", "**Industrial Area** — manufacturers and B2B services", "**Pinjore & Kalka** — venues, hotels and tourism"] },
      {
        type: 'faq',
        faqs: [
          ['How soon will rankings improve?', 'Profile fixes and reviews often show movement within weeks; stable top positions take a few months.'],
          ['I serve customers at home — can I still rank?', 'Yes, with a service-area profile that hides your home address and lists the areas you serve.'],
          ['Do you guarantee rankings?', 'No. We guarantee consistent work and honest reporting.'],
          ['Can you handle our Chandigarh branch too?', 'Yes — see [SEO in Chandigarh](/locations/chandigarh/seo).'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/panchkula': {
    q: 'Which digital marketing agency works with Panchkula businesses?',
    a: 'Orizova Digital helps Panchkula clinics, schools, banquet halls and venues, real-estate businesses, salons and home-service providers with fast websites, sector-level Google Maps optimisation, genuine review routines and local Meta and Google ads across Panchkula, MDC, Pinjore and the wider Chandigarh Tricity.',
  },
  '/locations/panchkula/website-development': {
    q: 'Who builds websites for businesses in Panchkula?',
    a: 'Orizova Digital builds clear, fast websites for Panchkula clinics, schools, banquet halls, real-estate firms, salons and local businesses. Each site shows services, sector location, timings, real photos and genuine reviews, with appointment, admission or date-enquiry forms and one-tap call and WhatsApp.',
  },
  '/locations/panchkula/seo': {
    q: 'How can a Panchkula business rank higher on Google Maps?',
    a: 'A Panchkula business ranks higher on Google Maps by completing and verifying its Google Business Profile, collecting genuine reviews regularly, posting updates and having website pages that mention its sector and services. Orizova Digital does this local SEO work monthly and tracks map rankings across Panchkula sectors.',
  },
};

const meta = {
  '/locations/panchkula': { title: 'Digital Marketing Agency in Panchkula | Orizova', description: 'Websites, Google Maps ranking and local ads for Panchkula clinics, schools, banquet halls, builders, salons and home services across every sector.', h1: 'Digital Marketing Agency in Panchkula' },
  '/locations/panchkula/website-development': { title: 'Website Development Company in Panchkula | Orizova', description: 'Clear, fast websites for Panchkula clinics, schools, banquet halls, builders and local businesses — real photos, reviews, WhatsApp and SEO setup.', h1: 'Website Development Company in Panchkula' },
  '/locations/panchkula/seo': { title: 'SEO Company in Panchkula – Local SEO & Google Maps', description: 'Sector-level Google Maps ranking, review routines and local SEO for Panchkula clinics, schools, venues and service businesses. Monthly reporting.', h1: 'SEO Company in Panchkula' },
};

const city = { hub, pages, answers, meta };
export default city;
