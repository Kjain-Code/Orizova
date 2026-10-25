// Indirapuram (Ghaziabad): locality hub + city × service pages. Written for
// this neighbourhood market specifically — it complements, not repeats, the
// wider Ghaziabad page.
const hub = {
  slug: 'indirapuram',
  city: 'Indirapuram',
  region: 'Ghaziabad, Uttar Pradesh',
  tagline: 'Websites, Google Maps visibility and local ads for Indirapuram businesses — Niti Khand to Shakti Khand, Ahinsa Khand to Gyan Khand',
  intro:
    "Indirapuram is one of the densest residential neighbourhoods in Delhi NCR: high-rise societies, busy market streets and families who choose clinics, salons, coaching classes, gyms and restaurants within a few kilometres of home. Orizova Digital helps Indirapuram businesses win those nearby customers with a fast website, a Google Business Profile that ranks for \"near me\" searches, genuine reviews and small, tightly targeted Meta ads.",
  areas: ['Niti Khand', 'Shakti Khand', 'Ahinsa Khand', 'Nyay Khand', 'Gyan Khand', 'Abhay Khand', 'Vaibhav Khand', 'Shipra Suncity', 'Habitat Centre area', 'Kanawani'],
  industries: ['Clinics, dentists & physios', 'Salons & beauty studios', 'Coaching & pre-schools', 'Restaurants, cafes & bakeries', 'Gyms & fitness studios', 'Home services & interiors'],
  focus:
    'In a neighbourhood this dense, distance decides most searches. We focus on what moves "near me" rankings — your Google profile, reviews and locality pages — and use radius-targeted ads so you only pay to reach people who can actually walk or drive in.',
  sections: [
    {
      type: 'prose',
      tag: 'The Indirapuram market',
      h2: 'A neighbourhood where everyone searches "near me"',
      paras: [
        'Most Indirapuram customers live within a short drive of you — in the societies of Niti Khand, Shakti Khand, Ahinsa Khand or across the road in Vasundhara and Vaishali. When they need a dentist, a salon appointment, a tuition class or dinner, they open Google Maps or Instagram and choose from the first few results. Being one of those results is worth more than any hoarding.',
        'Competition is close, too. There may be five clinics or ten salons within a kilometre of yours. The ones that win have complete profiles with real photos, a steady stream of fresh reviews, correct timings and a website that makes booking easy. None of this needs a big budget — it needs consistency.',
      ],
    },
    {
      type: 'cards',
      tag: 'Where to start',
      h2: 'What works first for Indirapuram businesses',
      items: [
        { title: 'Google Maps & local SEO', desc: 'Rank in the map pack for searches from Indirapuram, Vasundhara and Vaishali.', to: '/locations/indirapuram/seo', cta: 'SEO in Indirapuram' },
        { title: 'A fast booking website', desc: 'Services, prices or packages, timings and one-tap WhatsApp booking.', to: '/locations/indirapuram/website-development', cta: 'Websites in Indirapuram' },
        { title: 'Radius Meta ads', desc: 'Instagram and Facebook ads shown only within a few kilometres of your outlet.', to: '/services/meta-ads' },
        { title: 'Salon & clinic marketing', desc: 'Packages built for appointment-based businesses.', to: '/industries/salons-beauty' },
      ],
    },
  ],
  faqs: [
    ['Do you work with small businesses in Indirapuram?', 'Yes. Most of our Indirapuram work is with owner-run clinics, salons, coaching centres, restaurants and service businesses. We suggest only what fits your budget and stage.'],
    ['How can my business appear in Google Maps for Indirapuram searches?', 'Complete and verify your Google Business Profile with the correct category, exact location, photos, services and timings, then collect genuine reviews regularly. We set this up and keep it active. See [SEO in Indirapuram](/locations/indirapuram/seo).'],
    ['Can ads be shown only to people in Indirapuram?', 'Yes. Meta and Google ads can target a radius around your outlet or specific pin codes, so your budget reaches people who can actually visit.'],
    ['Is Indirapuram covered by your Ghaziabad services?', 'Yes. Indirapuram is part of Ghaziabad; this page focuses on the neighbourhood itself. See also our [Ghaziabad page](/locations/ghaziabad).'],
    ['Can you meet in person?', 'Our team is based in Delhi NCR, so meetings in Indirapuram can be arranged when needed. Most day-to-day work happens over WhatsApp and calls.'],
  ],
};

const pages = [
  {
    city: 'indirapuram',
    service: 'website-development',
    label: 'Website development company in Indirapuram',
    banner: 'Websites for Indirapuram clinics, salons, coaching centres, restaurants, gyms and home-service businesses — quick to load, easy to book from and built for nearby customers.',
    intro: {
      h2: 'A website that turns nearby searches into bookings',
      paras: [
        'When someone in Shakti Khand searches for a physiotherapist or a mother in Niti Khand looks for a pre-school, they tap the first convincing result and decide within seconds. Your website’s job is simple: show what you offer, where you are, when you are open and how to book — all on the first screen of a phone.',
        'We build exactly that for Indirapuram businesses: clean, fast websites with your real photos, clear services or packages, a map and landmark directions, and WhatsApp and call buttons that stay visible as the visitor scrolls. Everything is set up for Google so the site supports your Maps ranking instead of sitting idle.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Indirapuram',
        h2: 'Websites we build for Indirapuram businesses',
        items: [
          { title: 'Clinic & dental websites', desc: 'Doctors, treatments, timings and appointment requests for clinics and dental practices near the Habitat Centre and Shipra.', to: '/industries/dental-clinics' },
          { title: 'Salon & beauty studio sites', desc: 'Service menu with prices or packages, stylist profiles, gallery and WhatsApp booking.', to: '/industries/salons-beauty' },
          { title: 'Coaching & pre-school sites', desc: 'Classes, batches, teachers, fee enquiries and admission forms parents can fill on a phone.', to: '/industries/education' },
          { title: 'Restaurant & bakery sites', desc: 'Menu, order links, party bookings and cake-order forms.', to: '/industries/restaurants-cafes' },
          { title: 'Gym & fitness studio sites', desc: 'Memberships, trainers, class schedules and trial-session booking.', to: '/industries/fitness-wellness' },
          { title: 'Home services & interiors', desc: 'Service areas by society and Khand, before-after photos and quote requests.', to: '/industries/home-services' },
        ],
      },
      {
        type: 'prose',
        tag: 'Local details',
        h2: 'What an Indirapuram website should include',
        bullets: [
          'Your Khand and a landmark everyone knows — "near Shipra Mall", "opposite Habitat Centre" — in the header or contact section',
          'The societies and nearby areas you serve (Vasundhara, Vaishali, Kaushambi, Crossings Republik) if you offer home visits or delivery',
          'Clear timings, including Sunday and holiday hours',
          'Prices, packages or "starting from" ranges where your industry allows — it filters out time-wasting enquiries',
          'Google reviews or testimonials you have permission to show',
        ],
      },
      {
        type: 'process',
        h2: 'From first call to launch',
        steps: [
          { title: 'Quick call', desc: 'What you offer, who your customers are and how they book today.' },
          { title: 'Page plan', desc: 'Usually 4–8 focused pages for a neighbourhood business.' },
          { title: 'Design', desc: 'Homepage design for your approval, using your real photos.' },
          { title: 'Build', desc: 'Fast code, booking forms, WhatsApp, Maps and Analytics.' },
          { title: 'Go live', desc: 'Connected to your Google profile and handed over in your name.' },
        ],
      },
      {
        type: 'prose',
        tag: 'Cost',
        h2: 'Website cost for an Indirapuram business',
        paras: [
          'Most neighbourhood businesses need a focused website rather than a large one, which keeps cost sensible. We send a fixed quote listing every page and feature after a short call. For a breakdown of what affects the price, read our [website cost guide](/blog/website-cost-in-delhi-ncr).',
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['Do I need a website if I already have a Google profile?', 'A Google profile gets you found; a website convinces people and gives Google more information to rank you. The two work best together, and the website is the place you fully control.'],
          ['Can customers book appointments from the website?', 'Yes — a booking request form, WhatsApp booking, or integration with the booking tool you already use.'],
          ['Can I update prices and offers myself?', 'Yes. We can set up simple editing for offers and prices, or handle updates for you on a monthly plan.'],
          ['How quickly can it go live?', 'A focused neighbourhood website usually goes live within a few weeks once photos and content are ready.'],
        ],
      },
    ],
  },
  {
    city: 'indirapuram',
    service: 'seo',
    label: 'SEO company in Indirapuram',
    banner: 'Google Maps ranking, reviews and local SEO for Indirapuram businesses — so you appear when nearby customers search "near me".',
    intro: {
      h2: 'Win the map pack in your own neighbourhood',
      paras: [
        'For most Indirapuram businesses, the three results in Google’s map pack bring more enquiries than everything else combined. Google chooses them using relevance, distance and prominence — how well your profile matches the search, how close you are, and how established your business looks through reviews, links and mentions.',
        'You cannot change your distance, but you can win on the rest. We optimise your Google Business Profile, build a steady review routine, strengthen your website’s local signals and keep your listings consistent — the practical work that moves neighbourhood rankings.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Local SEO for Indirapuram',
        bullets: [
          'Google Business Profile: primary and secondary categories, services, products, photos, posts and Q&A',
          'Review routine with QR codes and WhatsApp messages that make it easy for happy customers to leave a review',
          'Professional replies to reviews, including the difficult ones',
          'Website pages that mention your Khand, nearby societies and landmarks naturally',
          'Consistent listings on Justdial, Sulekha, Practo or industry directories where relevant',
          'Monthly tracking of map rankings across different parts of Indirapuram',
        ],
      },
      {
        type: 'prose',
        tag: 'Why distance matters',
        h2: 'Ranking in Niti Khand is not the same as ranking in Vaibhav Khand',
        paras: [
          'Map results change as the searcher moves. A salon in Ahinsa Khand might rank first for someone standing outside, and fifth for someone in Gyan Khand. That is why we track rankings on a grid of points across the neighbourhood instead of a single number — it shows where you are strong and where more reviews, posts or local content are needed.',
          'For businesses that serve all of Indirapuram and Vasundhara, ads can fill the gaps where organic map ranking is weaker, while SEO keeps strengthening the core area.',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Indirapuram businesses we often help',
        items: [
          { title: 'Dental & medical clinics', desc: 'Treatment-specific visibility and a compliant review process.', to: '/industries/dental-clinics' },
          { title: 'Salons & beauty', desc: 'Service listings, photos and reviews that win "salon near me".', to: '/industries/salons-beauty' },
          { title: 'Coaching & tuition', desc: 'Subject and class pages parents find before admissions.', to: '/industries/education' },
          { title: 'Restaurants & cafes', desc: 'Menu, photos and fresh reviews for evening searches.', to: '/industries/restaurants-cafes' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['How soon will I see results in Google Maps?', 'Profile fixes and a regular review routine often show movement within weeks. Strong, stable rankings build over a few months.'],
          ['Can I buy reviews to rank faster?', 'No — fake reviews break Google’s policies and can get your profile suspended. We help you collect genuine reviews consistently, which works better over time.'],
          ['My shop is in a society complex. Can I still rank?', 'Yes, as long as customers visit you at that address and it is set up correctly on Google. Home-based service businesses can use a service-area profile instead.'],
          ['Do you also do SEO for all of Ghaziabad?', 'Yes. See our [SEO services in Ghaziabad](/locations/ghaziabad/seo) for wider coverage.'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/indirapuram': {
    q: 'Which digital marketing agency works with Indirapuram businesses?',
    a: 'Orizova Digital helps Indirapuram businesses — clinics, dentists, salons, coaching centres, restaurants, gyms and home-service providers across Niti Khand, Shakti Khand, Ahinsa Khand and nearby — win local customers with a fast website, Google Business Profile optimisation, genuine reviews and radius-targeted Meta and Google ads. Its team is based in Delhi NCR.',
  },
  '/locations/indirapuram/website-development': {
    q: 'Who builds websites for businesses in Indirapuram?',
    a: 'Orizova Digital builds focused, fast websites for Indirapuram clinics, dental practices, salons, coaching centres, restaurants, gyms and home-service businesses. Each site shows services, timings, location with a landmark and one-tap WhatsApp or call booking on the first screen, and is set up for Google so it supports Maps rankings in Indirapuram, Vasundhara and Vaishali.',
  },
  '/locations/indirapuram/seo': {
    q: 'How can an Indirapuram business rank in Google Maps?',
    a: 'An Indirapuram business ranks in Google Maps by completing its Google Business Profile with the right categories, services, photos and timings, collecting genuine reviews regularly, and having website pages that mention its Khand and nearby areas. Orizova Digital does this local SEO work and tracks map rankings across the neighbourhood every month.',
  },
};

const meta = {
  '/locations/indirapuram': { title: 'Digital Marketing Agency in Indirapuram | Orizova', description: 'Websites, Google Maps ranking, reviews and local ads for Indirapuram clinics, salons, coaching centres, restaurants and gyms in Niti, Shakti & Ahinsa Khand.', h1: 'Digital Marketing Agency in Indirapuram' },
  '/locations/indirapuram/website-development': { title: 'Website Development in Indirapuram, Ghaziabad | Orizova', description: 'Fast websites for Indirapuram clinics, salons, coaching centres, restaurants and gyms — with WhatsApp booking, landmarks and Google setup. Fixed quote.', h1: 'Website Development Company in Indirapuram' },
  '/locations/indirapuram/seo': { title: 'SEO Company in Indirapuram – Rank in Google Maps', description: 'Local SEO for Indirapuram: Google Business Profile, genuine reviews, locality pages and map-ranking tracking across every Khand. Win "near me" searches.', h1: 'SEO Company in Indirapuram' },
};

const city = { hub, pages, answers, meta };
export default city;
