// Dehradun: city hub + city × service pages (original copy).
const hub = {
  slug: 'dehradun',
  city: 'Dehradun',
  region: 'Uttarakhand',
  tagline: 'Websites, SEO & ads for Dehradun schools, coaching institutes, hotels and homestays, clinics, cafes and real estate — Rajpur Road to Prem Nagar',
  intro:
    "Dehradun is Uttarakhand’s capital and its education city: well-known boarding schools, universities and coaching institutes for defence and competitive exams draw families and students from across India. It is also the gateway to Mussoorie and the hills, with a busy market of hotels, homestays and cafes, plus clinics, hospitals and new housing along the city’s main roads. Orizova Digital helps Dehradun businesses get found by locals and by the many people who search from outside the city.",
  areas: ['Rajpur Road', 'Jakhan', 'Sahastradhara Road', 'Clement Town', 'Prem Nagar', 'Ballupur', 'Clock Tower & Paltan Bazaar', 'ISBT area', 'Selaqui', 'Doiwala'],
  industries: ['Schools & boarding schools', 'Defence & exam coaching', 'Hotels, homestays & tour operators', 'Clinics & hospitals', 'Cafes & restaurants', 'Real estate'],
  focus:
    'Parents, students and tourists usually search Dehradun from elsewhere before they arrive. We focus on websites and content that answer their questions clearly, plus Google Maps and reviews for local customers.',
  sections: [
    {
      type: 'prose',
      tag: 'The Dehradun market',
      h2: 'A city people research from far away',
      paras: [
        'A family in Delhi choosing a boarding school, a defence aspirant in Bihar looking for SSB or NDA coaching, or a couple planning a weekend in the hills will spend a long time online before making a decision. They compare websites, read reviews and look for honest, specific information. Schools, institutes and hotels that provide it get the enquiry.',
        'Locally, Dehradun’s growing population means more competition among clinics, cafes, gyms and service businesses along Rajpur Road, Sahastradhara Road and the newer colonies. Google Maps and reviews increasingly decide who gets the visit.',
      ],
    },
    {
      type: 'cards',
      tag: 'Where to start',
      h2: 'Popular starting points in Dehradun',
      items: [
        { title: 'Website development in Dehradun', desc: 'School, institute, hotel and local business websites.', to: '/locations/dehradun/website-development', cta: 'Websites in Dehradun' },
        { title: 'SEO in Dehradun', desc: 'Visibility for parents, students, tourists and locals.', to: '/locations/dehradun/seo', cta: 'SEO in Dehradun' },
        { title: 'Education marketing', desc: 'Admissions for schools and coaching.', to: '/industries/education' },
        { title: 'Hotels & homestays', desc: 'Direct bookings and Google visibility.', to: '/industries/hotels-travel' },
      ],
    },
  ],
  faqs: [
    ['Do you work with Dehradun businesses?', 'Yes. Our team is based in Delhi NCR and works with Dehradun clients over calls, video meetings and WhatsApp.'],
    ['Can you help a boarding school get more admission enquiries?', 'Yes — a clear admissions website with campus, academics and boarding information, Google profile management and well-timed campaigns targeted to the cities parents come from.'],
    ['Do you market defence coaching institutes?', 'Yes — course pages, Google search ads and Meta lead campaigns, with honest results and no guaranteed-selection claims.'],
    ['Can you help a homestay near Mussoorie get direct bookings?', 'Yes — see [hotels & travel marketing](/industries/hotels-travel).'],
  ],
};

const pages = [
  {
    city: 'dehradun',
    service: 'website-development',
    label: 'Website development company in Dehradun',
    banner: 'Websites for Dehradun schools, coaching institutes, hotels and homestays, clinics, cafes and real-estate businesses.',
    intro: {
      h2: 'Answer every question before they visit Dehradun',
      paras: [
        'Parents considering a boarding school want to see the campus, understand boarding life, fees structure and the admission process. Students choosing a coaching institute want batch details and honest results. Travellers want room photos, distances and directions. If your website does not answer these questions, they choose someone whose website does.',
        'We build Dehradun websites that answer them clearly, with fast pages, real photography and simple enquiry and booking flows.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Dehradun',
        h2: 'Websites we build for Dehradun businesses',
        items: [
          { title: 'School & boarding school websites', desc: 'Academics, boarding, campus life, admissions and virtual tours.', to: '/industries/education' },
          { title: 'Coaching institute websites', desc: 'Courses for defence and competitive exams, batches, faculty and enquiries.', to: '/industries/education' },
          { title: 'Hotel & homestay websites', desc: 'Rooms, views, directions and direct booking.', to: '/industries/hotels-travel' },
          { title: 'Clinic websites', desc: 'Doctors, treatments and appointment requests.', to: '/industries/clinics' },
          { title: 'Cafe & restaurant websites', desc: 'Menu, events and reservations.', to: '/industries/restaurants-cafes' },
          { title: 'Real-estate websites', desc: 'Projects and plots with clear location details.', to: '/industries/real-estate' },
        ],
      },
      {
        type: 'prose',
        tag: 'Local details',
        h2: 'What Dehradun websites should include',
        bullets: [
          'Clear location context — distance from the ISBT, railway station, Jolly Grant airport or Mussoorie',
          'Real campus, room or premises photography',
          'Admission timelines and processes stated plainly for schools and institutes',
          'Season and weather notes for tourism businesses',
          'WhatsApp and call options for quick questions',
        ],
      },
      {
        type: 'process',
        h2: 'How we build',
        steps: [
          { title: 'Brief', desc: 'Audience, questions they ask, how they enquire.' },
          { title: 'Plan', desc: 'Pages and content.' },
          { title: 'Design', desc: 'Main pages for approval.' },
          { title: 'Build', desc: 'Fast code, forms, booking and tracking.' },
          { title: 'Launch', desc: 'Connected to Google and handed over.' },
        ],
      },
      {
        type: 'faq',
        faqs: [
          ['What does a school website cost?', 'It depends on pages, features like notices or portals, and content. We send a fixed quote after a call.'],
          ['Can we post notices and news ourselves?', 'Yes, we set up simple editing for notices, events and galleries.'],
          ['Can you add a virtual campus tour?', 'Yes, using video or 360° content you provide.'],
          ['Do you do SEO?', 'Yes — see [SEO in Dehradun](/locations/dehradun/seo).'],
        ],
      },
    ],
  },
  {
    city: 'dehradun',
    service: 'seo',
    label: 'SEO company in Dehradun',
    banner: 'SEO for Dehradun schools, coaching institutes, hotels and local businesses — visibility for people searching from Dehradun and beyond.',
    intro: {
      h2: 'Rank for searches made from Delhi, Bihar and beyond',
      paras: [
        'Many Dehradun searches come from outside the city: "best boarding school in Dehradun", "NDA coaching Dehradun", "homestay near Mussoorie". These are not Google Maps searches — they are researched decisions where your website content, reviews and reputation decide rankings.',
        'Local searches still matter for clinics, cafes and service businesses. We build a plan that covers both.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our SEO services in Dehradun',
        bullets: [
          'Content that answers parents’, students’ and travellers’ questions in depth',
          'Google Business Profile optimisation and reviews',
          'Course, program and room pages that rank',
          'Technical SEO and structured data',
          'Mentions and listings on relevant education and travel platforms',
          'Monthly reporting on enquiries',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Dehradun businesses we often help',
        items: [
          { title: 'Schools & coaching', desc: 'Admission-focused SEO.', to: '/industries/education' },
          { title: 'Hotels & homestays', desc: 'Visibility for travellers.', to: '/industries/hotels-travel' },
          { title: 'Clinics', desc: 'Local Maps visibility.', to: '/industries/clinics' },
          { title: 'Cafes', desc: 'Maps and reviews.', to: '/industries/restaurants-cafes' },
        ],
      },
      { type: "prose", tag: "Dehradun specifics", h2: "Researched decisions and local searches", paras: ["Boarding school and coaching searches are made by families comparing options over weeks. They read about academics, boarding life, safety and results, and they trust schools that answer openly. Pages that cover these topics in depth — with real photos and clear admission information — tend to rank and convert better than short promotional pages.", "Local searches around Rajpur Road, Sahastradhara Road, Prem Nagar and Clement Town are mostly for clinics, cafes, gyms and services. Here, the Google profile, reviews and accurate timings do most of the work."], bullets: ["**Rajpur Road & Jakhan** — cafes, clinics, hotels and premium retail", "**Prem Nagar & Clement Town** — schools, coaching and student services", "**Sahastradhara Road** — residential projects, homestays and services", "**Clock Tower & Paltan Bazaar** — traditional retail and markets"] },
      {
        type: 'faq',
        faqs: [
          ['How long does SEO take?', 'Local work can show in weeks; competitive education and travel searches take months.'],
          ['Do you guarantee rankings?', 'No. We guarantee consistent work and honest reporting.'],
          ['Can SEO help us before admission season?', 'Yes — ideally start several months before, so pages have time to rank.'],
          ['Do you run Google Ads too?', 'Yes — see [Google Ads](/services/google-ads).'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/dehradun': {
    q: 'Which digital marketing agency works with Dehradun businesses?',
    a: 'Orizova Digital helps Dehradun schools and boarding schools, defence and competitive-exam coaching institutes, hotels, homestays and tour operators, clinics, cafes and real-estate businesses with websites, SEO and ads — focused on parents, students and travellers who research from outside Dehradun as well as local customers.',
  },
  '/locations/dehradun/website-development': {
    q: 'Who builds websites for Dehradun schools and businesses?',
    a: 'Orizova Digital builds websites for Dehradun schools and boarding schools, coaching institutes, hotels and homestays, clinics, cafes and real-estate businesses. Sites answer the questions visitors ask before they travel — campus, admissions, rooms, distances, timings — with real photos, simple enquiry or booking flows and SEO setup.',
  },
  '/locations/dehradun/seo': {
    q: 'Who does SEO for Dehradun businesses?',
    a: 'Orizova Digital does SEO for Dehradun schools, coaching institutes, hotels, homestays and local businesses. Because many searches come from outside the city, it focuses on in-depth content, reviews and program, course and room pages, plus Google Business Profile optimisation for local searches. Reports focus on enquiries.',
  },
};

const meta = {
  '/locations/dehradun': { title: 'Digital Marketing Agency in Dehradun | Orizova', description: 'Websites, SEO and ads for Dehradun schools, coaching institutes, hotels, homestays, clinics, cafes and real estate — reach locals and visitors.', h1: 'Digital Marketing Agency in Dehradun' },
  '/locations/dehradun/website-development': { title: 'Website Development Company in Dehradun | Orizova', description: 'Websites for Dehradun schools, boarding schools, coaching institutes, hotels, homestays, clinics and cafes — clear, fast and SEO-ready.', h1: 'Website Development Company in Dehradun' },
  '/locations/dehradun/seo': { title: 'SEO Company in Dehradun – Schools, Hotels & Local', description: 'SEO for Dehradun schools, coaching institutes, hotels and homestays, plus Google Maps and reviews for local clinics, cafes and service businesses.', h1: 'SEO Company in Dehradun' },
};

const city = { hub, pages, answers, meta };
export default city;
