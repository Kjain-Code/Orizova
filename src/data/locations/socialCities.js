// Social media management × city pages: /locations/<city>/social-media-marketing
// (added 24 Nov 2026). Each city gets its own intro, local business examples,
// local notes and FAQs — never a copy with the city name swapped. Prices come
// only from data/services/socialPricing.js. Pushed into cityServices
// (cityServices.js); answers merged in locations/answers.js; routes in
// data/site/seo.json.

const SERVICE = 'social-media-marketing';

const SHARED_FAQ = [
  ['How much does social media management cost?', 'Our plans are ₹6,000/month (4 reels, 4 posts, 8 stories), ₹10,000/month (8 reels, 8 posts, 12–16 stories, community management) and ₹14,000/month (12 reels, 12 posts, 20–24 stories, advanced strategy). Paid ads are separate.'],
  ['Who owns my Instagram and Facebook pages?', 'You do. We work through Meta Business Suite access you give us, and every post, design and video stays yours.'],
  ['Will you buy followers or likes?', 'Never. Fake followers hurt reach and trust. We grow real local followers who can become customers.'],
];

const PROCESS = {
  type: 'process',
  h2: 'How our social media management works',
  steps: [
    { title: 'Free page audit', desc: 'We review your Instagram, Facebook and competitors.' },
    { title: 'Brand brief', desc: 'Offers, customers, tone and look — one short call.' },
    { title: 'Monthly calendar', desc: 'You approve the plan on WhatsApp before we create.' },
    { title: 'Create & post', desc: 'Reels, posts and stories go live; we reply to comments and DMs.' },
    { title: 'Monthly report', desc: 'What grew, what worked, and the plan for next month.' },
  ],
};

const page = (city, name, d) => ({
  city,
  service: SERVICE,
  label: `Social media management in ${name}`,
  banner: d.banner,
  intro: { h2: d.h2, paras: d.intro },
  blocks: [
    { type: 'cards', tag: `Popular in ${name}`, h2: `Social media we manage for ${name} businesses`, items: d.cards },
    { type: 'prose', tag: `${name} specifics`, h2: `What works on Instagram in ${name}`, bullets: d.local },
    { type: 'pricing', tag: 'Plans & pricing', h2: `Social media management packages in ${name}`, intro: 'The same clear monthly plans for every city — planning, design, captions, posting and a monthly report included.', context: `social media management in ${name}` },
    PROCESS,
    {
      type: 'links',
      h2: `More for ${name} businesses`,
      links: [
        { to: '/services/instagram-management', label: 'Instagram management' },
        { to: '/services/facebook-page-management', label: 'Facebook page management' },
        { to: '/services/linkedin-management', label: 'LinkedIn management' },
        { to: `/locations/${city}/meta-ads`, label: `Meta ads in ${name}` },
        { to: `/locations/${city}`, label: `Digital marketing in ${name}` },
        { to: '/blog/social-media-marketing-cost-india', label: 'Social media management cost in India' },
        { to: '/creative-work', label: 'Our reels & videos' },
      ],
    },
    { type: 'faq', faqs: [...d.faqs, ...SHARED_FAQ] },
  ],
});

const pages = [
  page('delhi', 'Delhi', {
    banner: 'Social media management in Delhi for restaurants, boutiques, clinics, coaching institutes and professional firms — reels, posts, stories and replies handled every week, from ₹6,000/month.',
    h2: 'Delhi customers check Instagram before they visit',
    intro: [
      'From cafés in Hauz Khas and Connaught Place to boutiques in Lajpat Nagar, clinics in South Delhi and coaching centres in Mukherjee Nagar and Laxmi Nagar, Delhi customers look up a business on Instagram before they visit, book or call. Competition is intense, so a page that posts rarely is easily ignored.',
      'Our [social media management](/services/social-media-marketing) keeps your Delhi page active every week — reels that show your place and people, offers and reviews in stories, sharp captions with area tags, and quick replies to DMs.',
    ],
    cards: [
      { title: 'Cafés & restaurants', desc: 'Dish reels, weekend offers, events and reviews for Delhi’s food crowd.', to: '/industries/restaurants-cafes' },
      { title: 'Boutiques & fashion', desc: 'New-arrival reels, styling posts and wedding-season collections.', to: '/industries/retail-showrooms' },
      { title: 'Clinics & doctors', desc: 'Doctor introductions and patient-education reels within medical ad rules.', to: '/industries/clinics' },
      { title: 'Coaching & education', desc: 'Results, faculty, demo classes and admission updates.', to: '/industries/education' },
    ],
    local: [
      '**Area tags** — Hauz Khas, CP, Saket, Rajouri Garden, Lajpat Nagar — so nearby people find you',
      '**Hinglish captions and reels** for a mixed Delhi audience',
      '**Festival planning** around Diwali, Karva Chauth, wedding season and New Year',
      '**Collaborations** with Delhi food and lifestyle creators when it fits your budget',
    ],
    faqs: [
      ['Can you visit our Delhi outlet to shoot?', 'Yes. Our team is in Delhi NCR, so on-location shoots can be arranged as an extra. Most months we edit clips you record on your phone.'],
      ['Do you work with small Delhi businesses?', 'Yes — our Brand Presence plan at ₹6,000/month is designed for small shops, clinics and cafés.'],
    ],
  }),

  page('noida', 'Noida', {
    banner: 'Social media management in Noida for restaurants, salons, clinics, real-estate brokers, edtech and startups — Instagram, Facebook and LinkedIn handled every week, from ₹6,000/month.',
    h2: 'From Sector 18 cafés to Sector 62 startups',
    intro: [
      'Noida’s businesses range from cafés and salons in Sector 18 and the 50s sectors to clinics in new residential sectors, real-estate brokers along the Expressway, and edtech and IT startups in Sector 62 and 63. All of them are found on Instagram first — and most struggle to post consistently.',
      'We are a Delhi NCR team, so managing [social media](/services/social-media-marketing) for Noida businesses comes naturally: reels from your outlet, society and sector tags, LinkedIn for startups, and replies that turn DMs into bookings.',
    ],
    cards: [
      { title: 'Salons & beauty', desc: 'Before–after reels, offers and booking reminders.', to: '/industries/salons-beauty' },
      { title: 'Real-estate brokers', desc: 'Property walkthrough reels and society updates.', to: '/industries/real-estate' },
      { title: 'Restaurants & cloud kitchens', desc: 'Menu reels, delivery offers and reviews.', to: '/industries/restaurants-cafes' },
      { title: 'Startups & edtech', desc: 'Founder LinkedIn posts and product content.', to: '/services/linkedin-management' },
    ],
    local: [
      '**Sector and society names** in captions and location tags',
      '**Weekend and festival offers** timed for residential sectors',
      '**LinkedIn** for Sector 62–63 startups and IT firms',
      '**Quick DM replies** — Noida customers expect fast answers on prices and slots',
    ],
    faqs: [
      ['Are you near Noida?', 'Yes, our team is in Delhi NCR, so we can meet or shoot in Noida when needed.'],
      ['Can you manage both Instagram and LinkedIn for my startup?', 'Yes — Instagram and Facebook are in every plan, and [LinkedIn management](/services/linkedin-management) can be added.'],
    ],
  }),

  page('greater-noida', 'Greater Noida', {
    banner: 'Social media management in Greater Noida and Greater Noida West for gyms, salons, cafés, schools, coaching and brokers — weekly reels, posts and replies, from ₹6,000/month.',
    h2: 'Reach the new families of Greater Noida West',
    intro: [
      'Greater Noida West adds thousands of new families every year, and new gyms, salons, cafés, play schools and coaching centres open in every society market. These residents discover local businesses through Instagram reels, society WhatsApp groups and Facebook — which makes a consistent page a real advantage.',
      'We manage your [social media](/services/social-media-marketing) with society-level tags, offers timed for new residents, and reels that show your space and people.',
    ],
    cards: [
      { title: 'Gyms & fitness studios', desc: 'Transformation reels, trainer intros and membership offers.', to: '/industries/fitness-wellness' },
      { title: 'Play schools & coaching', desc: 'Activity reels, results and admission updates.', to: '/industries/education' },
      { title: 'Salons & spas', desc: 'Service reels, offers and reviews.', to: '/industries/salons-beauty' },
      { title: 'Brokers & builders', desc: 'Resale and new-project walkthroughs.', to: '/industries/real-estate' },
    ],
    local: [
      '**Society names** — Gaur City, Ek Murti, Tech Zone — in captions and tags',
      '**New-resident offers** that reach families who just moved in',
      '**Facebook** alongside Instagram for parents and older residents',
      '**Admission-season content** for schools and coaching institutes',
    ],
    faqs: [
      ['Do you work with small shops in Greater Noida West?', 'Yes — the ₹6,000/month Brand Presence plan suits single-outlet businesses.'],
      ['Can you shoot at my gym or salon?', 'Yes, on-location shoots in Greater Noida can be arranged as an extra.'],
    ],
  }),

  page('ghaziabad', 'Ghaziabad', {
    banner: 'Social media management in Ghaziabad for shops, showrooms, clinics, coaching institutes and builders — Hindi and Hinglish reels, posts and quick replies, from ₹6,000/month.',
    h2: 'Hindi-first content for a big local market',
    intro: [
      'Ghaziabad is a large, value-conscious market — retailers in Turab Nagar, showrooms on RDC, coaching in Raj Nagar and Vaishali, hospitals and clinics across the city and builders in Raj Nagar Extension. Customers respond to clear Hindi offers, real faces and quick WhatsApp replies.',
      'Our [social media management](/services/social-media-marketing) for Ghaziabad uses Hindi and Hinglish reels, local tags and festive planning, so your page speaks the way your customers do.',
    ],
    cards: [
      { title: 'Shops & showrooms', desc: 'New stock, festive and wedding-season reels.', to: '/industries/retail-showrooms' },
      { title: 'Coaching institutes', desc: 'Results, toppers and batch announcements.', to: '/industries/education' },
      { title: 'Clinics & hospitals', desc: 'Health tips and doctor introductions in Hindi.', to: '/industries/clinics' },
      { title: 'Builders & brokers', desc: 'Project updates and site-visit reels.', to: '/industries/real-estate' },
    ],
    local: [
      '**Hindi and Hinglish** reels and captions',
      '**Area tags** — Raj Nagar, Vaishali, Kavi Nagar, RDC, Crossings Republik',
      '**Festival calendar** — Navratri, Diwali, Karva Chauth and wedding season',
      '**WhatsApp handover** so DM enquiries reach your counter quickly',
    ],
    faqs: [
      ['Can you make reels in Hindi?', 'Yes — Hindi, English or Hinglish, whatever your customers prefer.'],
      ['Can I start with only Instagram and Facebook?', 'Yes, every plan covers both.'],
    ],
  }),

  page('indirapuram', 'Indirapuram', {
    banner: 'Social media management in Indirapuram for cafés, salons, clinics, tutors, boutiques and property dealers — weekly reels and posts that reach nearby societies, from ₹6,000/month.',
    h2: 'Be the name every society nearby knows',
    intro: [
      'Indirapuram is dense and local: families from Shakti Khand, Niti Khand, Ahinsa Khand and Vaibhav Khand shop, eat and book services within a few kilometres. The businesses that win are the ones residents keep seeing on Instagram and in their society groups.',
      'We manage your [social media](/services/social-media-marketing) with khand-level tags, resident offers and friendly reels that make you the familiar local choice.',
    ],
    cards: [
      { title: 'Cafés & bakeries', desc: 'Fresh-bake reels, weekend specials and birthday orders.', to: '/industries/restaurants-cafes' },
      { title: 'Salons & beauty', desc: 'Service reels and festive offers.', to: '/industries/salons-beauty' },
      { title: 'Clinics & dentists', desc: 'Doctor intros and patient-education reels.', to: '/industries/dental-clinics' },
      { title: 'Property dealers', desc: 'Resale listings as reels and carousels.', to: '/industries/real-estate' },
    ],
    local: [
      '**Khand and society names** in captions and tags',
      '**Resident offers** and referral posts',
      '**Shipra Mall and Habitat Centre area** tags for discovery',
      '**Fast replies** to price and slot questions',
    ],
    faqs: [
      ['Do you work in Indirapuram?', 'Yes. Our team is in Delhi NCR and can visit for shoots when needed.'],
      ['I only have a small shop. Is it worth it?', 'Yes — local businesses gain most from being seen regularly. Start with the ₹6,000/month plan.'],
    ],
  }),

  page('gurugram', 'Gurugram', {
    banner: 'Social media management in Gurugram for restaurants, salons, real-estate firms, startups and consultants — Instagram, Facebook and LinkedIn handled weekly, from ₹6,000/month.',
    h2: 'Premium audiences expect a premium feed',
    intro: [
      'Gurugram’s customers — from Golf Course Road and DLF phases to Sohna Road and Cyber City — expect a polished feed. Restaurants, salons, interior studios, real-estate firms and startups compete for attention from busy, digital-first professionals.',
      'Our [social media management](/services/social-media-marketing) gives Gurugram brands a consistent, premium look: well-edited reels, designed carousels, story highlights and LinkedIn for B2B and founders.',
    ],
    cards: [
      { title: 'Restaurants & bars', desc: 'Ambience reels, chef features and event promos.', to: '/industries/restaurants-cafes' },
      { title: 'Real-estate firms', desc: 'Luxury project walkthroughs and market updates.', to: '/industries/real-estate' },
      { title: 'Startups & B2B', desc: 'Founder and company LinkedIn content.', to: '/services/linkedin-management' },
      { title: 'Interior & architecture studios', desc: 'Project reveals and process reels.', to: '/industries/architects' },
    ],
    local: [
      '**Premium visual style** — consistent colours, typography and editing',
      '**LinkedIn** for Cyber City and Udyog Vihar companies and consultants',
      '**Area tags** — Golf Course Road, Sohna Road, DLF, Sector 29',
      '**English-first captions** with crisp, professional tone',
    ],
    faqs: [
      ['Can you manage LinkedIn for my Gurugram company?', 'Yes — see [LinkedIn management](/services/linkedin-management); it can be added to an Instagram and Facebook plan.'],
      ['Do you shoot in Gurugram?', 'Yes, on-location shoots can be arranged as an extra.'],
    ],
  }),

  page('faridabad', 'Faridabad', {
    banner: 'Social media management in Faridabad for retailers, clinics, schools, gyms and manufacturers — Hindi-friendly reels, posts and replies every week, from ₹6,000/month.',
    h2: 'Local trust, built one reel at a time',
    intro: [
      'Faridabad’s businesses — showrooms in NIT and Sector 15, clinics and hospitals, schools, gyms in Greater Faridabad and manufacturers in the industrial areas — win customers through trust and word of mouth. Instagram and Facebook are where that word of mouth now lives.',
      'We manage your [social media](/services/social-media-marketing) with real faces, Hindi-friendly reels, reviews and offers, plus LinkedIn and catalogue-style posts for manufacturers.',
    ],
    cards: [
      { title: 'Retail & showrooms', desc: 'Product reels and festive offers.', to: '/industries/retail-showrooms' },
      { title: 'Clinics & hospitals', desc: 'Doctor intros and health awareness posts.', to: '/industries/clinics' },
      { title: 'Schools & coaching', desc: 'Events, results and admissions.', to: '/industries/education' },
      { title: 'Manufacturers', desc: 'Factory, product and capability content for buyers.', to: '/industries/manufacturers-exporters' },
    ],
    local: [
      '**Hindi and Hinglish** content for local audiences',
      '**Sector tags** — NIT, Sector 15, 21, Greater Faridabad',
      '**Facebook** alongside Instagram for families and older customers',
      '**LinkedIn and catalogue posts** for industrial businesses',
    ],
    faqs: [
      ['Do you manage social media for factories?', 'Yes — product, process and capability posts on LinkedIn, Facebook and Instagram for B2B buyers.'],
      ['Can you post in Hindi?', 'Yes, Hindi, English or Hinglish.'],
    ],
  }),

  page('lucknow', 'Lucknow', {
    banner: 'Social media management in Lucknow for restaurants, sweet shops, boutiques, clinics, coaching and real estate — reels, posts and replies with a local touch, from ₹6,000/month.',
    h2: 'Lucknow’s tehzeeb, on your Instagram',
    intro: [
      'Lucknow loves its food, fashion and celebrations — from Aminabad and Hazratganj to Gomti Nagar and Indira Nagar. Restaurants, chikankari boutiques, sweet shops, clinics, coaching institutes and builders all compete for attention on Instagram and Facebook.',
      'Our [social media management](/services/social-media-marketing) for Lucknow businesses mixes Hindi and Urdu-flavoured warmth with clean, modern design — reels that show your craft, festive campaigns and quick replies.',
    ],
    cards: [
      { title: 'Restaurants & sweet shops', desc: 'Kebab, biryani and mithai reels, festive orders.', to: '/industries/restaurants-cafes' },
      { title: 'Chikankari & boutiques', desc: 'Craft reels, new collections and wedding wear.', to: '/industries/retail-showrooms' },
      { title: 'Coaching institutes', desc: 'Toppers, faculty and batch updates.', to: '/industries/education' },
      { title: 'Clinics & hospitals', desc: 'Doctor intros and awareness posts.', to: '/industries/clinics' },
    ],
    local: [
      '**Area tags** — Hazratganj, Gomti Nagar, Aminabad, Indira Nagar, Aliganj',
      '**Festive calendar** — Eid, Diwali, wedding season, Lucknow Mahotsav',
      '**Hindi and Hinglish** captions with local warmth',
      '**Craft storytelling** for chikankari and food businesses',
    ],
    faqs: [
      ['Do you work remotely with Lucknow businesses?', 'Yes — social media management works fully on WhatsApp and calls; shoots can be arranged.'],
      ['Can you sell chikankari through Instagram?', 'Yes — reels, catalogue posts and DM-to-WhatsApp orders, with [Meta ads](/locations/lucknow/meta-ads) when you want more reach.'],
    ],
  }),

  page('meerut', 'Meerut', {
    banner: 'Social media management in Meerut for sports-goods brands, jewellers, showrooms, schools, clinics and builders — reels, posts and replies every week, from ₹6,000/month.',
    h2: 'Make Meerut’s best businesses look their best online',
    intro: [
      'Meerut is known for sports goods, jewellery, textiles and a strong education sector, with busy markets in Abu Lane, Begum Bridge and Sadar. Many of these businesses have loyal customers offline but almost no consistent presence on Instagram.',
      'Our [social media management](/services/social-media-marketing) turns your products and shop into weekly reels and posts — and helps manufacturers show their range to buyers across India.',
    ],
    cards: [
      { title: 'Sports-goods brands', desc: 'Product reels and dealer-facing content.', to: '/industries/manufacturers-exporters' },
      { title: 'Jewellers', desc: 'Collection reels and wedding-season posts.', to: '/industries/retail-showrooms' },
      { title: 'Schools & coaching', desc: 'Results, events and admissions.', to: '/industries/education' },
      { title: 'Clinics & hospitals', desc: 'Doctor intros and health awareness posts.', to: '/industries/clinics' },
    ],
    local: [
      '**Product-first reels** for manufacturers and jewellers',
      '**Hindi captions** for local customers; English for out-of-state buyers',
      '**Market tags** — Abu Lane, Begum Bridge, Sadar, Shastri Nagar',
      '**Wedding and festival** campaigns',
    ],
    faqs: [
      ['Can social media help a Meerut manufacturer?', 'Yes — product reels and LinkedIn posts help dealers and buyers across India discover your range.'],
      ['Do you need to visit Meerut?', 'Not usually — you send clips and photos and we create everything. Shoots can be arranged.'],
    ],
  }),

  page('agra', 'Agra', {
    banner: 'Social media management in Agra for hotels, restaurants, handicraft and marble shops, footwear brands and clinics — reels for tourists and locals, from ₹6,000/month.',
    h2: 'Reach tourists before they arrive — and locals every week',
    intro: [
      'Agra’s hotels, restaurants and handicraft shops serve visitors who plan their trip on Instagram, while footwear makers, clinics and schools serve a large local market. Both need a feed that looks trustworthy and current.',
      'We manage your [social media](/services/social-media-marketing) with reels for travellers, local offers for residents and product content for Agra’s footwear and marble businesses.',
    ],
    cards: [
      { title: 'Hotels & homestays', desc: 'Room tours, rooftop views and booking stories.', to: '/industries/hotels-travel' },
      { title: 'Restaurants', desc: 'Rooftop dining, Mughlai and petha reels.', to: '/industries/restaurants-cafes' },
      { title: 'Marble & handicrafts', desc: 'Craft process reels for tourists and online buyers.', to: '/industries/retail-showrooms' },
      { title: 'Footwear brands', desc: 'Product reels and dealer content.', to: '/industries/manufacturers-exporters' },
    ],
    local: [
      '**English reels** for tourists, Hindi for locals',
      '**Taj-view and landmark tags** for discovery by travellers',
      '**Review and booking highlights** for hotels',
      '**Process reels** that show real craftsmanship',
    ],
    faqs: [
      ['Can you help my Agra hotel get bookings from Instagram?', 'Yes — room tours, reviews and booking highlights, plus [Meta ads](/locations/agra/meta-ads) to reach travellers planning a trip.'],
      ['Do you post in English and Hindi?', 'Yes, depending on who you want to reach.'],
    ],
  }),

  page('kanpur', 'Kanpur', {
    banner: 'Social media management in Kanpur for leather and textile businesses, showrooms, clinics, coaching institutes and restaurants — weekly reels and posts, from ₹6,000/month.',
    h2: 'Show what Kanpur makes and sells',
    intro: [
      'Kanpur’s leather, textile and manufacturing businesses, its busy markets in Swaroop Nagar and Mall Road, coaching institutes in Kakadeo and hospitals across the city all have stories worth showing — but few have the time to post every week.',
      'Our [social media management](/services/social-media-marketing) turns your products, people and results into steady reels and posts, with LinkedIn for B2B companies.',
    ],
    cards: [
      { title: 'Leather & textile businesses', desc: 'Product and process content for buyers.', to: '/industries/manufacturers-exporters' },
      { title: 'Coaching institutes', desc: 'Results, faculty and batch updates.', to: '/industries/education' },
      { title: 'Showrooms & retail', desc: 'New stock and festive reels.', to: '/industries/retail-showrooms' },
      { title: 'Clinics & hospitals', desc: 'Doctor intros and awareness posts.', to: '/industries/clinics' },
    ],
    local: [
      '**Area tags** — Swaroop Nagar, Kakadeo, Civil Lines, Mall Road',
      '**Hindi-first** captions and reels',
      '**LinkedIn** for exporters and B2B firms',
      '**Admission-season planning** for Kakadeo coaching',
    ],
    faqs: [
      ['Do you manage LinkedIn for Kanpur exporters?', 'Yes — see [LinkedIn management](/services/linkedin-management).'],
      ['Is ₹6,000/month enough to start?', 'Yes, the Brand Presence plan gives a consistent weekly presence on Instagram and Facebook.'],
    ],
  }),

  page('varanasi', 'Varanasi', {
    banner: 'Social media management in Varanasi for hotels, guest houses, Banarasi saree sellers, restaurants and tour operators — reels for travellers and buyers, from ₹6,000/month.',
    h2: 'Banaras is made for reels',
    intro: [
      'Ghats at sunrise, Banarasi silk on the loom, kachori-jalebi mornings — Varanasi’s businesses have content most cities would envy. Hotels and guest houses near the ghats, saree weavers and sellers, restaurants and tour operators can reach travellers and buyers across India and abroad.',
      'We manage your [social media](/services/social-media-marketing) with reels that capture the city, booking-focused stories for stays and tours, and catalogue posts for saree businesses.',
    ],
    cards: [
      { title: 'Hotels & guest houses', desc: 'Ghat-view reels, room tours and reviews.', to: '/industries/hotels-travel' },
      { title: 'Banarasi saree sellers', desc: 'Loom-to-saree reels and collection posts.', to: '/industries/retail-showrooms' },
      { title: 'Restaurants & cafés', desc: 'Food reels for travellers and locals.', to: '/industries/restaurants-cafes' },
      { title: 'Tour operators', desc: 'Aarti, boat ride and itinerary reels.', to: '/industries/hotels-travel' },
    ],
    local: [
      '**English for travellers**, Hindi for local customers',
      '**Ghat and landmark tags** — Dashashwamedh, Assi, Kashi Vishwanath',
      '**Seasonal planning** — Dev Deepawali, festivals and peak travel months',
      '**WhatsApp handover** for bookings and saree orders',
    ],
    faqs: [
      ['Can Instagram bring bookings to my Varanasi guest house?', 'Yes — reels, reviews and booking highlights help, and [Meta ads](/locations/varanasi/meta-ads) reach travellers planning a trip.'],
      ['Can you sell Banarasi sarees through Instagram?', 'Yes — collection reels, catalogue posts and DM-to-WhatsApp orders.'],
    ],
  }),

  page('chandigarh', 'Chandigarh', {
    banner: 'Social media management in Chandigarh for cafés, salons, clinics, immigration consultants, real estate and boutiques — polished reels, posts and replies, from ₹6,000/month.',
    h2: 'A city with taste expects a good-looking feed',
    intro: [
      'Chandigarh’s cafés in Sector 7 and 26, salons, clinics, boutiques, immigration and IELTS consultants and real-estate firms serve an audience that notices design. A neat, consistent Instagram and Facebook presence is often the difference between a visit and a scroll.',
      'Our [social media management](/services/social-media-marketing) gives Chandigarh businesses a clean visual style, Punjabi-Hindi-English content where it fits and quick replies to DMs.',
    ],
    cards: [
      { title: 'Cafés & restaurants', desc: 'Ambience and dish reels, events and offers.', to: '/industries/restaurants-cafes' },
      { title: 'Immigration & IELTS', desc: 'Visa updates, success stories and FAQs — honestly.', to: '/industries/immigration-consultants' },
      { title: 'Salons & clinics', desc: 'Service reels and doctor intros.', to: '/industries/skin-hair-clinics' },
      { title: 'Boutiques', desc: 'Collection reels and wedding wear.', to: '/industries/retail-showrooms' },
    ],
    local: [
      '**Sector tags** — 7, 8, 17, 26, 35 and Elante area',
      '**Clean, design-led visuals**',
      '**Punjabi, Hindi or English** captions by audience',
      '**Tricity reach** with Mohali and Panchkula',
    ],
    faqs: [
      ['Do you work with immigration consultants in Chandigarh?', 'Yes — with honest content only: no guaranteed-visa claims, real updates and FAQs.'],
      ['Can you cover Mohali and Panchkula too?', 'Yes, we tag and target the whole tricity.'],
    ],
  }),

  page('mohali', 'Mohali', {
    banner: 'Social media management in Mohali for IT companies, immigration consultants, clinics, real estate, gyms and cafés — Instagram, Facebook and LinkedIn handled weekly, from ₹6,000/month.',
    h2: 'Startups, studios and consultants — all on one feed',
    intro: [
      'Mohali has a growing IT and startup scene in the industrial and Airport Road areas, a large immigration and IELTS market, new residential sectors with gyms and cafés, and hospitals and clinics serving the tricity.',
      'We manage your [social media](/services/social-media-marketing) with LinkedIn for IT firms, honest, helpful content for consultants and lively reels for local businesses.',
    ],
    cards: [
      { title: 'IT companies & startups', desc: 'Hiring, culture and founder LinkedIn content.', to: '/services/linkedin-management' },
      { title: 'Immigration & IELTS', desc: 'Updates, FAQs and student success stories.', to: '/industries/immigration-consultants' },
      { title: 'Gyms & cafés', desc: 'Reels, offers and community posts.', to: '/industries/fitness-wellness' },
      { title: 'Real estate', desc: 'Project and resale walkthroughs.', to: '/industries/real-estate' },
    ],
    local: [
      '**LinkedIn** for Mohali’s IT and startup companies',
      '**Phase and sector tags** — Phase 7, Sector 70, Airport Road, Aerocity',
      '**Punjabi and English** content where it fits',
      '**Tricity audience** with Chandigarh and Panchkula',
    ],
    faqs: [
      ['Can you manage LinkedIn hiring posts for my IT company?', 'Yes — company page, culture and hiring posts, plus founder content.'],
      ['Do you work with Mohali immigration consultants?', 'Yes, with honest content and no guaranteed-visa claims.'],
    ],
  }),

  page('panchkula', 'Panchkula', {
    banner: 'Social media management in Panchkula for clinics, schools, salons, gyms, cafés and property dealers — weekly reels, posts and replies for local families, from ₹6,000/month.',
    h2: 'Local families, local favourite',
    intro: [
      'Panchkula is a calm, family-oriented city where clinics, schools, salons, gyms, cafés and property dealers depend on local reputation. Residents discover and compare businesses on Instagram and Facebook, and ask friends before they visit.',
      'Our [social media management](/services/social-media-marketing) keeps your page warm and active — real faces, reviews, offers and quick replies.',
    ],
    cards: [
      { title: 'Clinics & dentists', desc: 'Doctor intros and patient education.', to: '/industries/dental-clinics' },
      { title: 'Schools & coaching', desc: 'Events, achievements and admissions.', to: '/industries/education' },
      { title: 'Salons & gyms', desc: 'Service reels and membership offers.', to: '/industries/salons-beauty' },
      { title: 'Property dealers', desc: 'Listings as reels and carousels.', to: '/industries/real-estate' },
    ],
    local: [
      '**Sector tags** across Panchkula',
      '**Facebook** for families alongside Instagram',
      '**Review-led content** for trust',
      '**Tricity reach** with Chandigarh and Mohali',
    ],
    faqs: [
      ['Is social media worth it for a small Panchkula clinic?', 'Yes — patients check pages before booking. Start with the ₹6,000/month plan.'],
      ['Can you shoot in Panchkula?', 'On-location shoots can be arranged as an extra.'],
    ],
  }),

  page('ludhiana', 'Ludhiana', {
    banner: 'Social media management in Ludhiana for hosiery and garment brands, manufacturers, showrooms, restaurants and clinics — product reels, posts and replies, from ₹6,000/month.',
    h2: 'Ludhiana makes it — Instagram sells it',
    intro: [
      'Ludhiana’s hosiery, garment, cycle-parts and machinery makers, its showrooms on Ferozepur Road and in Sarabha Nagar, and its restaurants and clinics have great products — but often a sleepy Instagram and Facebook page.',
      'We manage your [social media](/services/social-media-marketing) with product reels for retail and wholesale buyers, festive campaigns, Punjabi-Hindi content and LinkedIn for B2B.',
    ],
    cards: [
      { title: 'Hosiery & garment brands', desc: 'Collection reels for retailers and online buyers.', to: '/industries/ecommerce-d2c' },
      { title: 'Manufacturers', desc: 'Product, process and dealer content.', to: '/industries/manufacturers-exporters' },
      { title: 'Showrooms', desc: 'Wedding and festive reels.', to: '/industries/retail-showrooms' },
      { title: 'Restaurants', desc: 'Punjabi food reels and offers.', to: '/industries/restaurants-cafes' },
    ],
    local: [
      '**Wholesale and retail** content for different buyers',
      '**Punjabi, Hindi and English** captions',
      '**Area tags** — Sarabha Nagar, Model Town, Ferozepur Road',
      '**LinkedIn** for exporters and industrial firms',
    ],
    faqs: [
      ['Can Instagram bring wholesale enquiries?', 'Yes — catalogue posts, reels and DM-to-WhatsApp handover work well for garment brands.'],
      ['Do you post in Punjabi?', 'Yes, Punjabi, Hindi or English depending on your customers.'],
    ],
  }),

  page('jaipur', 'Jaipur', {
    banner: 'Social media management in Jaipur for hotels, restaurants, jewellers, handicraft and textile brands, wedding businesses and clinics — reels and posts every week, from ₹6,000/month.',
    h2: 'Jaipur’s colour deserves a feed to match',
    intro: [
      'Jaipur’s hotels and cafés, jewellers in Johari Bazaar, block-print and textile brands, wedding venues and planners, and clinics in Malviya Nagar and C-Scheme all have rich visual stories — and audiences on Instagram in India and abroad.',
      'Our [social media management](/services/social-media-marketing) turns that colour into consistent reels, collection posts and booking-focused stories.',
    ],
    cards: [
      { title: 'Hotels & cafés', desc: 'Heritage-stay reels, rooftop dining and reviews.', to: '/industries/hotels-travel' },
      { title: 'Jewellers & textiles', desc: 'Collection and craft reels.', to: '/industries/retail-showrooms' },
      { title: 'Wedding businesses', desc: 'Venue tours, decor and real wedding reels.', to: '/industries/events-weddings' },
      { title: 'Clinics', desc: 'Doctor intros and patient education.', to: '/industries/clinics' },
    ],
    local: [
      '**English for travellers and online buyers**, Hindi for locals',
      '**Landmark and area tags** — Johari Bazaar, C-Scheme, Malviya Nagar, Vaishali Nagar',
      '**Wedding-season** content calendar',
      '**Craft storytelling** for handmade brands',
    ],
    faqs: [
      ['Can you help my Jaipur brand sell online through Instagram?', 'Yes — collection reels, catalogue posts and DM-to-WhatsApp orders, with ads when you need reach.'],
      ['Do you manage wedding venue pages?', 'Yes — venue tours, decor reels and enquiry handling.'],
    ],
  }),

  page('dehradun', 'Dehradun', {
    banner: 'Social media management in Dehradun for schools, coaching institutes, cafés, homestays, clinics and real estate — reels, posts and replies every week, from ₹6,000/month.',
    h2: 'From Rajpur Road cafés to hill-view homestays',
    intro: [
      'Dehradun is an education hub with a lively café scene on Rajpur Road, a growing number of homestays and resorts towards Mussoorie, and clinics and builders serving new residents. Students, parents and travellers all research on Instagram.',
      'We manage your [social media](/services/social-media-marketing) with reels for travellers, trust-building content for schools and clinics, and lively posts for cafés.',
    ],
    cards: [
      { title: 'Schools & coaching', desc: 'Campus life, results and admissions.', to: '/industries/education' },
      { title: 'Cafés & restaurants', desc: 'Ambience and food reels.', to: '/industries/restaurants-cafes' },
      { title: 'Homestays & resorts', desc: 'Mountain-view room tours and booking stories.', to: '/industries/hotels-travel' },
      { title: 'Clinics', desc: 'Doctor intros and health awareness.', to: '/industries/clinics' },
    ],
    local: [
      '**Area tags** — Rajpur Road, Jakhan, Prem Nagar, towards Mussoorie',
      '**Season planning** for tourist months and admissions',
      '**Parent-friendly** content for schools',
      '**Booking highlights** for homestays',
    ],
    faqs: [
      ['Can Instagram bring bookings for my Dehradun homestay?', 'Yes — room tours, reviews and booking highlights, plus ads in peak season.'],
      ['Do you work remotely?', 'Yes, fully on WhatsApp and calls; shoots can be arranged.'],
    ],
  }),

  page('hyderabad', 'Hyderabad', {
    banner: 'Social media management in Hyderabad for restaurants, real-estate projects, clinics, salons, startups and boutiques — reels in English, Telugu-friendly content and quick replies, from ₹6,000/month.',
    h2: 'Biryani reels to villa-plot walkthroughs',
    intro: [
      'Hyderabad’s restaurants, real-estate projects towards Shadnagar, Kokapet and Shamshabad, clinics, salons, boutiques and Hitech City startups all compete on Instagram. We already make real-estate and AI video content for Hyderabad-area projects, so we know what works here.',
      'Our [social media management](/services/social-media-marketing) gives Hyderabad businesses consistent reels, posts and stories — English or Telugu-friendly — with LinkedIn for startups and B2B firms.',
    ],
    cards: [
      { title: 'Real-estate projects', desc: 'Plot and villa walkthroughs, location and price highlights.', to: '/industries/real-estate' },
      { title: 'Restaurants & cloud kitchens', desc: 'Biryani, Irani café and delivery reels.', to: '/industries/restaurants-cafes' },
      { title: 'Clinics & salons', desc: 'Doctor intros and service reels.', to: '/industries/skin-hair-clinics' },
      { title: 'Startups', desc: 'Founder and company LinkedIn posts.', to: '/services/linkedin-management' },
    ],
    local: [
      '**Area tags** — Banjara Hills, Jubilee Hills, Gachibowli, Kondapur, Hitech City',
      '**Telugu-friendly** captions where your customers prefer it',
      '**AI video reels** for property projects without a shoot every week',
      '**LinkedIn** for Hitech City companies',
    ],
    faqs: [
      ['Do you work with Hyderabad real-estate projects?', 'Yes — we already make real-estate ads and AI videos for Hyderabad-area villa-plot projects. See our [case studies](/case-studies).'],
      ['Can you post in Telugu?', 'Yes, Telugu-friendly captions can be added where your audience prefers it.'],
    ],
  }),

  page('bengaluru', 'Bengaluru', {
    banner: 'Social media management in Bengaluru for startups, D2C brands, cafés, clinics, gyms and real estate — Instagram, Facebook and LinkedIn handled weekly, from ₹6,000/month.',
    h2: 'Built for startup-speed brands',
    intro: [
      'Bengaluru’s startups, D2C brands, cafés and breweries in Indiranagar and Koramangala, gyms, clinics and real-estate projects towards Whitefield and Sarjapur all compete for a digital-first audience that scrolls fast and expects quality.',
      'We manage your [social media](/services/social-media-marketing) with sharp reels, carousels that get saved, LinkedIn for founders and companies, and a monthly report your team can actually use.',
    ],
    cards: [
      { title: 'Startups & SaaS', desc: 'Founder LinkedIn, product and hiring content.', to: '/industries/startups-saas' },
      { title: 'D2C brands', desc: 'Product reels, UGC-style videos and launches.', to: '/industries/ecommerce-d2c' },
      { title: 'Cafés & restaurants', desc: 'Ambience and menu reels.', to: '/industries/restaurants-cafes' },
      { title: 'Gyms & wellness', desc: 'Transformation and trainer reels.', to: '/industries/fitness-wellness' },
    ],
    local: [
      '**Area tags** — Indiranagar, Koramangala, HSR, Whitefield, Sarjapur Road',
      '**LinkedIn** for founders and B2B companies',
      '**AI and UGC-style videos** for D2C launches',
      '**English-first**, crisp tone',
    ],
    faqs: [
      ['Do you work with Bengaluru startups remotely?', 'Yes — fully remote on Slack/WhatsApp, calls and shared folders.'],
      ['Can you make UGC-style videos for our D2C brand?', 'Yes — including [AI UGC video ads](/services/ai-ugc-videos).'],
    ],
  }),

  page('pune', 'Pune', {
    banner: 'Social media management in Pune for cafés, coaching and colleges, clinics, real estate, salons and startups — reels, posts and replies every week, from ₹6,000/month.',
    h2: 'Students, professionals and families — one city',
    intro: [
      'Pune mixes a huge student population, IT professionals in Hinjewadi and Kharadi, families in new suburbs and a strong café culture in Koregaon Park, Baner and Viman Nagar. Each audience lives on Instagram, and each expects something different.',
      'Our [social media management](/services/social-media-marketing) plans content for the audience you want — student offers, professional services or family-friendly reels — and keeps it consistent.',
    ],
    cards: [
      { title: 'Cafés & restaurants', desc: 'Weekend, student and date-night reels.', to: '/industries/restaurants-cafes' },
      { title: 'Coaching & colleges', desc: 'Results, campus life and admissions.', to: '/industries/education' },
      { title: 'Real estate', desc: 'Project walkthroughs in growing suburbs.', to: '/industries/real-estate' },
      { title: 'Clinics & salons', desc: 'Doctor intros and service reels.', to: '/industries/clinics' },
    ],
    local: [
      '**Area tags** — Koregaon Park, Baner, Viman Nagar, Hinjewadi, Kothrud',
      '**English, Hindi or Marathi-friendly** captions',
      '**Student-season planning** for colleges and coaching',
      '**LinkedIn** for IT services and startups',
    ],
    faqs: [
      ['Can you post in Marathi?', 'Yes, Marathi-friendly captions can be added where it suits your audience.'],
      ['Do you work remotely with Pune businesses?', 'Yes, fully remote; shoots can be arranged.'],
    ],
  }),

  page('mumbai', 'Mumbai', {
    banner: 'Social media management in Mumbai for restaurants, salons, boutiques, real estate, clinics, startups and creators — reels, posts and replies every week, from ₹6,000/month.',
    h2: 'Keep up with the fastest feed in India',
    intro: [
      'Mumbai’s restaurants and bars in Bandra and Lower Parel, salons and boutiques, real-estate projects across the suburbs, clinics, startups and personal brands compete in the most crowded feed in the country. Consistency and quality are the minimum.',
      'We manage your [social media](/services/social-media-marketing) with sharp reels, premium design, LinkedIn for professionals and quick DM handling — at clear monthly prices.',
    ],
    cards: [
      { title: 'Restaurants & bars', desc: 'Ambience, chef and event reels.', to: '/industries/restaurants-cafes' },
      { title: 'Salons & boutiques', desc: 'Service and collection reels.', to: '/industries/salons-beauty' },
      { title: 'Real estate', desc: 'Project walkthroughs and launches.', to: '/industries/real-estate' },
      { title: 'Founders & professionals', desc: 'Personal brand Instagram and LinkedIn.', to: '/services/linkedin-management' },
    ],
    local: [
      '**Area tags** — Bandra, Andheri, Lower Parel, Powai, Thane',
      '**Premium edit style** for a demanding audience',
      '**Personal-brand content** for founders, doctors and consultants',
      '**English and Hindi** captions',
    ],
    faqs: [
      ['Do you work remotely with Mumbai businesses?', 'Yes — fully remote on WhatsApp, calls and shared folders.'],
      ['Can you manage a personal brand Instagram?', 'Yes — founder-led reels and scripts written in your voice.'],
    ],
  }),
];

const NAMES = Object.fromEntries(pages.map((p) => [p.city, p.label.replace('Social media management in ', '')]));

const answers = Object.fromEntries(pages.map((p) => [
  `/locations/${p.city}/${SERVICE}`,
  {
    q: `Who offers social media management in ${NAMES[p.city]}?`,
    a: `Orizova Digital, a Delhi NCR agency, manages Instagram, Facebook and LinkedIn for businesses in ${NAMES[p.city]} — content calendar, reels, posts, stories, captions, posting and replies, with a monthly report. Plans are ₹6,000, ₹10,000 and ₹14,000 per month; paid ads are separate. Accounts and content stay in the client’s name, and followers are never bought.`,
  },
]));

const socialCities = { pages, answers, NAMES };
export default socialCities;
