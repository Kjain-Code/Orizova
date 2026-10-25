// Agra: city hub + city × service pages (original copy).
const hub = {
  slug: 'agra',
  city: 'Agra',
  region: 'Uttar Pradesh',
  tagline: 'Websites, SEO & ads for Agra hotels, tour operators, footwear and marble-craft businesses, clinics and retailers — Fatehabad Road to Kamla Nagar',
  intro:
    "Agra welcomes visitors from all over the world to the Taj Mahal, and its economy reflects it: hotels and guest houses along Fatehabad Road and Taj Ganj, tour and taxi operators, marble inlay and handicraft workshops, and petha makers. It is also one of India’s major footwear manufacturing centres, alongside a large local market of clinics, hospitals, schools and retailers. Orizova Digital helps Agra businesses win direct bookings, trade enquiries and local customers online.",
  areas: ['Fatehabad Road', 'Taj Ganj', 'Sanjay Place', 'Kamla Nagar', 'Dayal Bagh', 'Sikandra', 'Civil Lines', 'Shahganj', 'Agra Cantt', 'Bodla'],
  industries: ['Hotels & guest houses', 'Tour & taxi operators', 'Footwear manufacturers', 'Marble & handicrafts', 'Clinics & hospitals', 'Schools & coaching'],
  focus:
    'For tourism businesses, we focus on direct bookings and being found by travellers before they arrive. For footwear and craft businesses, it is B2B and export enquiries. For local businesses, it is Google Maps and reviews in your part of the city.',
  sections: [
    {
      type: 'prose',
      tag: 'The Agra market',
      h2: 'Most of your customers search before they reach Agra',
      paras: [
        'A family planning a day trip from Delhi, a foreign traveller choosing a hotel with a Taj view, or a footwear retailer in another state looking for a manufacturer — all of them search online long before they arrive or place an order. Booking portals and marketplaces take a large share of that business, often with heavy commissions.',
        'A strong website, a well-managed Google profile and helpful content let Agra businesses capture more of that demand directly. Locally, families in Kamla Nagar, Dayal Bagh and Sikandra choose clinics, schools and shops the same way as everywhere else: Google Maps, reviews and a quick look at the website.',
      ],
    },
    {
      type: 'cards',
      tag: 'Where to start',
      h2: 'Popular starting points in Agra',
      items: [
        { title: 'Website development in Agra', desc: 'Hotel, tour, manufacturer and local business websites.', to: '/locations/agra/website-development', cta: 'Websites in Agra' },
        { title: 'SEO in Agra', desc: 'Tourism, product and local SEO.', to: '/locations/agra/seo', cta: 'SEO company in Agra' },
        { title: 'Hotels & travel', desc: 'Direct bookings and Google visibility.', to: '/industries/hotels-travel' },
        { title: 'Footwear & craft manufacturers', desc: 'Catalogues and B2B enquiries.', to: '/industries/manufacturers-exporters' },
      ],
    },
  ],
  faqs: [
    ['Do you work with Agra businesses?', 'Yes. Our team is based in Delhi NCR and works with Agra clients over calls, video meetings and WhatsApp.'],
    ['Can you help a hotel get more direct bookings?', 'Yes — a fast website with room pages and direct enquiry or booking, Google profile optimisation and travel content. See [hotels & travel](/industries/hotels-travel).'],
    ['Can you build a catalogue website for a footwear manufacturer?', 'Yes — categories, styles, sizes, MOQ notes and bulk-enquiry forms for retailers and distributors. See [manufacturers](/industries/manufacturers-exporters).'],
    ['Do you build websites for tour and taxi operators?', 'Yes — tour packages, vehicle options, pickup points, transparent inclusions and WhatsApp booking.'],
  ],
};

const pages = [
  {
    city: 'agra',
    service: 'website-development',
    label: 'Website development company in Agra',
    banner: 'Websites for Agra hotels, tour operators, footwear manufacturers, marble and handicraft businesses, clinics and local shops.',
    intro: {
      h2: 'Websites that bring Agra business directly to you',
      paras: [
        'For a hotel near the Taj or a tour operator, every booking that comes through your own website instead of a portal keeps more money in your business. For a footwear manufacturer, a professional catalogue site can bring retailers and distributors who would never have found you through contacts.',
        'We build Agra websites around those goals: beautiful but fast pages, clear information travellers and buyers need, and direct enquiry, booking and WhatsApp options — set up for Google from the first day.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Agra',
        h2: 'Websites we build for Agra businesses',
        items: [
          { title: 'Hotel & guest house websites', desc: 'Rooms, views, distance from the Taj, amenities and direct enquiries.', to: '/industries/hotels-travel' },
          { title: 'Tour & taxi operator sites', desc: 'Packages, inclusions, vehicles, pickup points and WhatsApp booking.', to: '/industries/hotels-travel' },
          { title: 'Footwear catalogue websites', desc: 'Styles, materials, sizes and bulk-order enquiries.', to: '/industries/manufacturers-exporters' },
          { title: 'Marble & handicraft stores', desc: 'Online catalogues and stores with shipping across India and abroad.', to: '/industries/ecommerce-d2c' },
          { title: 'Clinic & hospital websites', desc: 'Doctors, departments and appointment requests.', to: '/industries/clinics' },
          { title: 'School & coaching websites', desc: 'Admissions, courses and enquiries.', to: '/industries/education' },
        ],
      },
      {
        type: 'prose',
        tag: 'For tourism businesses',
        h2: 'What travellers look for',
        bullets: [
          'Exact distance and travel time to the Taj Mahal, Agra Fort and the railway station',
          'Real photos of rooms, views and vehicles — not stock images',
          'Transparent prices or "starting from" ranges, and what is included',
          'Reviews from real guests, and quick replies on WhatsApp',
          'Content in English and, where useful, other languages for international guests',
        ],
      },
      {
        type: 'process',
        h2: 'How we build',
        steps: [
          { title: 'Brief', desc: 'Your guests or buyers and how they book.' },
          { title: 'Structure', desc: 'Pages for rooms, tours or products.' },
          { title: 'Design', desc: 'Approval of the main pages.' },
          { title: 'Build', desc: 'Fast code, galleries, forms and booking links.' },
          { title: 'Launch', desc: 'Connected to Google and your listings.' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Can you connect our booking engine?', 'Yes, we can link or embed it alongside direct enquiry forms.'],
          ['What does a website cost?', 'We send a fixed quote after a short call. See our [website cost guide](/blog/website-cost-in-delhi-ncr).'],
          ['Can you also manage Google reviews?', 'We set up a review routine and reply templates as part of [local SEO](/services/local-seo).'],
          ['Do you do SEO in Agra?', 'Yes — see [SEO in Agra](/locations/agra/seo).'],
        ],
      },
    ],
  },
  {
    city: 'agra',
    service: 'seo',
    label: 'SEO company in Agra',
    banner: 'SEO for Agra hotels, tour operators, manufacturers and local businesses — Google Maps, travel content and product pages.',
    intro: {
      h2: 'Get found by travellers, buyers and locals',
      paras: [
        'Agra searches come from three groups: travellers planning a visit ("hotel near Taj Mahal with view", "Agra same day tour"), trade buyers ("leather shoes manufacturer Agra"), and locals ("child specialist Kamla Nagar"). Each group needs a different SEO approach.',
        'We identify which searches bring your best customers and build the pages, Google profile and reviews to win them.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our SEO services in Agra',
        bullets: [
          'Google Business Profile optimisation for hotels, operators and local businesses',
          'Travel content that answers visitor questions — timings, routes, itineraries',
          'Product and category SEO for footwear and craft businesses',
          'Review routines and replies',
          'Technical SEO for image-heavy sites',
          'Monthly reports on bookings and enquiries from search',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Agra businesses we often help',
        items: [
          { title: 'Hotels & travel', desc: 'Direct-booking visibility.', to: '/industries/hotels-travel' },
          { title: 'Manufacturers', desc: 'Product rankings for trade buyers.', to: '/industries/manufacturers-exporters' },
          { title: 'Clinics', desc: 'Local Maps visibility.', to: '/industries/clinics' },
          { title: 'Education', desc: 'Admission-season visibility.', to: '/industries/education' },
        ],
      },
      { type: "prose", tag: "Agra specifics", h2: "Taj Ganj, Fatehabad Road and the residential city", paras: ["Tourism searches cluster around the Taj Mahal: hotels on Fatehabad Road and in Taj Ganj, tours, taxis and restaurants with a view. Travellers often search from Delhi, Jaipur or abroad, so content that answers practical questions — timings, closed days, distances, sunrise visits — helps hotels and operators rank for more than just their name.", "Residential Agra — Kamla Nagar, Dayal Bagh, Sikandra, Sanjay Place — searches like any other city: clinics, schools, coaching and shops. Google profiles and reviews matter most here."], bullets: ["**Fatehabad Road & Taj Ganj** — hotels, guest houses, restaurants and tours", "**Sanjay Place & Civil Lines** — offices, clinics and professional services", "**Kamla Nagar & Dayal Bagh** — residential, schools, clinics and retail", "**Industrial and footwear clusters** — manufacturers and exporters"] },
      {
        type: 'faq',
        faqs: [
          ['Can SEO reduce portal commissions?', 'Over time, more direct enquiries can reduce your dependence on portals, though most hotels keep using both.'],
          ['How long does SEO take?', 'Local improvements show in weeks; competitive travel searches take months.'],
          ['Do you guarantee rankings?', 'No. We guarantee consistent work and transparent reporting.'],
          ['Do you run ads too?', 'Yes — [Google Ads](/services/google-ads) and [Meta Ads](/services/meta-ads).'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/agra': {
    q: 'Which digital marketing agency works with Agra businesses?',
    a: 'Orizova Digital helps Agra businesses — hotels and guest houses near the Taj Mahal, tour and taxi operators, footwear manufacturers, marble and handicraft workshops, clinics, schools and retailers — with websites, SEO and Google and Meta ads focused on direct bookings, trade enquiries and local customers. Its team is based in Delhi NCR.',
  },
  '/locations/agra/website-development': {
    q: 'Who builds websites for Agra hotels and businesses?',
    a: 'Orizova Digital builds websites for Agra hotels and guest houses, tour and taxi operators, footwear manufacturers, marble and handicraft businesses, clinics and schools. Sites include real photos, distances to key landmarks, transparent inclusions, direct enquiry or booking options and WhatsApp, and are set up for Google from launch.',
  },
  '/locations/agra/seo': {
    q: 'Who does SEO for Agra businesses?',
    a: 'Orizova Digital does SEO for Agra businesses across three audiences: travellers searching for hotels and tours, trade buyers searching for footwear and craft manufacturers, and locals searching for clinics, schools and shops. Work covers Google Business Profile, travel and product content, reviews and technical SEO.',
  },
};

const meta = {
  '/locations/agra': { title: 'Digital Marketing Agency in Agra | Orizova Digital', description: 'Websites, SEO and ads for Agra hotels, tour operators, footwear and marble-craft businesses, clinics and schools — direct bookings and enquiries.', h1: 'Digital Marketing Agency in Agra' },
  '/locations/agra/website-development': { title: 'Website Development Company in Agra | Orizova', description: 'Websites for Agra hotels, tour operators, footwear manufacturers, handicraft businesses, clinics and schools — fast, photo-led and SEO-ready.', h1: 'Website Development Company in Agra' },
  '/locations/agra/seo': { title: 'SEO Company in Agra – Hotel, Travel & Local SEO', description: 'SEO for Agra hotels, tour operators, footwear and craft manufacturers, and local businesses — Google Maps, travel content and product pages.', h1: 'SEO Company in Agra' },
};

const city = { hub, pages, answers, meta };
export default city;
