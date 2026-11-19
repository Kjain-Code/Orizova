// Meta (Facebook & Instagram) ads × city pages: /locations/<city>/meta-ads
// (added 19 Nov 2026). Each city gets its own intro, campaign examples, local
// notes and FAQs — written for that market's businesses and lead problems,
// never a copy with the city name swapped. No invented clients, numbers or
// prices. Pushed into cityServices (cityServices.js); answers merged in
// locations/answers.js; routes live in data/site/seo.json.

const SERVICE = 'meta-ads';

const SHARED_FAQ = [
  ['Whose name is the ad account in?', 'Yours. We work inside your own Meta Business account and ad account, so the page, data and history always stay with you.'],
  ['Is GST added to Meta ad spend?', 'Yes. For businesses billed in India, Meta adds GST to ad spend on its invoices. Our management fee is separate from the ad budget.'],
];

const PROCESS = {
  type: 'process',
  h2: 'How we run Meta ads',
  steps: [
    { title: 'Audit & tracking', desc: 'Page, ad account, Pixel and Conversions API checked or set up.' },
    { title: 'Offer & audience', desc: 'What we promote, to whom, where — and the qualifying questions.' },
    { title: 'Creatives', desc: 'Reels, statics and carousels made for the feed, including AI video.' },
    { title: 'Launch & learn', desc: 'Controlled budget in the learning phase, daily checks.' },
    { title: 'Optimise & report', desc: 'Scale what brings real customers, weekly lead-quality review.' },
  ],
};

// Build one city page from its own content.
const page = (city, name, d) => ({
  city,
  service: SERVICE,
  label: `Meta ads agency in ${name}`,
  banner: d.banner,
  intro: { h2: d.h2, paras: d.intro },
  blocks: [
    { type: 'cards', tag: `Popular in ${name}`, h2: `Meta campaigns we run for ${name} businesses`, items: d.cards },
    { type: 'prose', tag: `${name} specifics`, h2: d.localH2, paras: d.localParas, bullets: d.local },
    PROCESS,
    {
      type: 'links',
      h2: `More for ${name} businesses`,
      links: [
        { to: `/locations/${city}`, label: `Digital marketing in ${name}` },
        { to: `/locations/${city}/website-development`, label: `Website development in ${name}` },
        { to: `/locations/${city}/ai-video-production`, label: `AI video ads in ${name}` },
        { to: '/blog/meta-ads-cost-india', label: 'What Meta ads cost in India' },
        ...(d.extraLinks || []),
      ],
    },
    { type: 'faq', faqs: [...d.faqs, ...SHARED_FAQ] },
  ],
});

const pages = [
  page('delhi', 'Delhi', {
    banner: 'Facebook and Instagram ads for Delhi retailers, D2C brands, coaching institutes, clinics and property sellers — lead forms with qualifying questions, click-to-WhatsApp campaigns and retargeting that bring real customers.',
    h2: 'Delhi customers scroll first and buy later',
    intro: [
      'In Delhi, shoppers discover a Karol Bagh wedding store, a Lajpat Nagar boutique or a South Delhi skin clinic on Instagram long before they walk in. Students in Mukherjee Nagar and Laxmi Nagar compare coaching institutes through Reels. That makes Meta ads one of the fastest ways to reach Delhi customers — and one of the easiest to waste money on.',
      'We run [Meta ads](/services/meta-ads) for Delhi businesses with one focus: enquiries that turn into customers. That means the right objective, area targeting by zone, a qualifying question or a WhatsApp conversation instead of a casual form, and creatives that look like your brand.',
    ],
    cards: [
      { title: 'Click-to-WhatsApp for retail', desc: 'Garment, jewellery and furniture stores get chats with price and stock questions, not anonymous form fills.', to: '/industries/retail-showrooms' },
      { title: 'D2C sales campaigns', desc: 'Catalogue and conversion campaigns for fashion, beauty and lifestyle brands selling online.', to: '/industries/ecommerce-d2c' },
      { title: 'Coaching admissions', desc: 'Demo-class and batch campaigns with questions about course and exam year.', to: '/industries/education' },
      { title: 'Clinic appointments', desc: 'Consultation campaigns within Meta’s health-ad rules, with fast WhatsApp follow-up.', to: '/industries/clinics' },
      { title: 'Festive & sale bursts', desc: 'Short, high-budget windows for Diwali, wedding season and end-of-season sales.' },
    ],
    localH2: 'What works for Delhi audiences',
    local: [
      '**Zone targeting** — separate ad sets for South, West, North and East Delhi when the offer is store-based',
      '**Hinglish creatives** that sound like Delhi, with the offer in the first two seconds',
      '**WhatsApp follow-up within minutes** — Delhi customers message several businesses at once',
      '**Festive calendars planned early** so creatives are approved before costs rise',
    ],
    faqs: [
      ['Can you target only one part of Delhi?', 'Yes. We can target a radius around your store or chosen localities, and run separate ads for different zones.'],
      ['Do Meta ads work for coaching institutes in Delhi?', 'Yes, especially demo-class and new-batch campaigns with a question about the course and exam year to filter enquiries.'],
    ],
  }),

  page('noida', 'Noida', {
    banner: 'Meta ads for Noida real-estate projects, edtech and coaching, D2C brands, clinics and manufacturers — campaigns built for qualified leads and fast follow-up.',
    h2: 'From Expressway projects to Sector 62 startups',
    intro: [
      'Noida’s biggest Meta advertisers are property projects along the Noida Expressway and in the 150s sectors, edtech and coaching companies, D2C brands run from small offices, and clinics serving the city’s new residential sectors. Each wants leads — but property, education and health ads all need careful setup to bring genuine buyers.',
      'We plan [Meta ads](/services/meta-ads) for Noida businesses around lead quality: higher-intent forms, a qualifying question on budget or timeline, WhatsApp flows and tracking that teaches Meta which leads actually converted.',
    ],
    cards: [
      { title: 'Real-estate site-visit leads', desc: 'Project campaigns within Meta’s housing-ad rules, with budget and timeline questions.', to: '/industries/real-estate' },
      { title: 'Edtech & coaching leads', desc: 'Course and demo campaigns with questions that filter casual sign-ups.', to: '/industries/education' },
      { title: 'D2C conversion campaigns', desc: 'Catalogue and purchase campaigns with Pixel and Conversions API tracking.', to: '/industries/ecommerce-d2c' },
      { title: 'Clinic & dental bookings', desc: 'Local consultation campaigns for clinics in Noida’s sectors.', to: '/industries/dental-clinics' },
      { title: 'Dealer leads for manufacturers', desc: 'B2B campaigns aimed at shop owners and dealers in chosen states.', to: '/blog/b2b-lead-generation-manufacturers-india' },
    ],
    localH2: 'What works in Noida',
    local: [
      '**Sector-level targeting** for local businesses; city-wide or NCR for property and education',
      '**Higher-intent forms** for property — fewer leads, far fewer fake numbers',
      '**AI and UGC-style video ads** to test many hooks without a shoot each week',
      '**CRM or Google Sheet sync** so sales teams call leads within minutes',
    ],
    faqs: [
      ['Can you run Meta ads for a Noida real-estate project?', 'Yes. Housing ads follow Meta’s special-category rules, so we use broader targeting and filter with qualifying questions instead.'],
      ['Are you based near Noida?', 'Yes. Our team is in Delhi NCR, so we can meet when needed.'],
    ],
  }),

  page('greater-noida', 'Greater Noida', {
    banner: 'Meta ads for Greater Noida and Greater Noida West builders, brokers, colleges, coaching institutes and local shops — leads that match budget, location and timeline.',
    h2: 'Leads for a fast-growing city',
    intro: [
      'Greater Noida West has thousands of new families every year, Knowledge Park has dozens of colleges competing for admissions, and new shops, clinics and gyms open in every sector. Meta ads can reach all of these audiences — but property and admission leads in particular are often low-quality without the right setup.',
      'We run [Meta ads](/services/meta-ads) that add the right friction: questions on budget, course or timeline, WhatsApp conversations instead of open forms, and ads that state the location and possession or admission details clearly.',
    ],
    cards: [
      { title: 'Resale & new-project leads', desc: 'Campaigns for builders and brokers, with budget and BHK questions.', to: '/industries/real-estate' },
      { title: 'College admission leads', desc: 'Course-specific campaigns during admission season, with eligibility questions.', to: '/industries/education' },
      { title: 'Coaching & tuition', desc: 'Batch and demo-class campaigns for local institutes.' },
      { title: 'New store & gym launches', desc: 'Local reach and offer campaigns for sector markets and societies.', to: '/industries/fitness-wellness' },
      { title: 'Retargeting site visitors', desc: 'Reminding people who viewed your project or course page.' },
    ],
    localH2: 'What works in Greater Noida',
    local: [
      '**Society and sector names** in the creative so local families recognise you',
      '**Admission-season planning** for colleges — campaigns ready before peak months',
      '**Video walkthroughs** and AI-made project videos instead of static brochures',
      '**Separate audiences** for Greater Noida West and Greater Noida city',
    ],
    faqs: [
      ['Do Meta ads work for college admissions?', 'Yes, especially with course-specific ads and an eligibility question to filter enquiries.'],
      ['Can you also make the ad videos?', 'Yes — including AI-made project and course videos, so you do not need a shoot for every campaign.'],
    ],
  }),

  page('ghaziabad', 'Ghaziabad', {
    banner: 'Facebook and Instagram ads for Ghaziabad builders, coaching institutes, hospitals, retailers and manufacturers — Hindi creatives, WhatsApp leads and follow-up that works.',
    h2: 'Hindi-first ads for a big, local market',
    intro: [
      'Ghaziabad is a large, price-conscious market: builders in Raj Nagar Extension and Crossings Republik, coaching in Raj Nagar and Vaishali, hospitals across the city, retailers in Turab Nagar and factories in Sahibabad and Loni. Customers respond to clear Hindi offers and quick WhatsApp replies more than polished English ads.',
      'We run [Meta ads](/services/meta-ads) for Ghaziabad businesses with Hindi creatives, area targeting, qualifying questions and lead delivery straight to your phone or sheet.',
    ],
    cards: [
      { title: 'Builder & broker leads', desc: 'Payment-plan and site-visit campaigns within Meta’s housing rules.', to: '/industries/real-estate' },
      { title: 'Coaching batch leads', desc: 'Hindi demo-class campaigns for institutes and tutors.', to: '/industries/education' },
      { title: 'Hospital & clinic campaigns', desc: 'Health-camp and consultation campaigns within Meta’s health policies.', to: '/industries/clinics' },
      { title: 'Retail WhatsApp campaigns', desc: 'Festive and wedding-season offers that start a chat.', to: '/industries/retail-showrooms' },
      { title: 'Dealer leads', desc: 'B2B campaigns for Sahibabad and Loni manufacturers.', to: '/industries/manufacturers-exporters' },
    ],
    localH2: 'What works in Ghaziabad',
    local: [
      '**Hindi copy and voice-overs** — not translated English',
      '**Area-wise ad sets** for Indirapuram, Vaishali, Raj Nagar Extension and old Ghaziabad',
      '**WhatsApp-first campaigns** for retail and clinics',
      '**Fast calling** — leads sent to your team within minutes',
    ],
    faqs: [
      ['Can the ads be in Hindi?', 'Yes. Most of our Ghaziabad creatives are in Hindi or Hinglish, written for local customers.'],
      ['Can you meet us in Ghaziabad?', 'Yes, our team is in Delhi NCR. Most work happens over calls and WhatsApp.'],
    ],
  }),

  page('indirapuram', 'Indirapuram', {
    banner: 'Local Meta ads for Indirapuram clinics, dentists, salons, cafes, tuition centres and property dealers — radius targeting and WhatsApp campaigns that bring nearby families.',
    h2: 'Small radius, real customers',
    intro: [
      'Most Indirapuram businesses only need customers from a few kilometres away — the khands and societies around them. Meta ads can target exactly that radius, which makes them one of the most efficient ways for a clinic, salon, cafe or tuition centre to fill appointments and seats.',
      'We run small, focused [Meta ads](/services/meta-ads) campaigns: a clear offer, your location in the creative, a WhatsApp button and quick replies — with reports that count bookings, not just clicks.',
    ],
    cards: [
      { title: 'Dental & clinic bookings', desc: 'Consultation and check-up campaigns within Meta’s health rules.', to: '/industries/dental-clinics' },
      { title: 'Salon & spa offers', desc: 'Weekday, festive and bridal offers that start WhatsApp chats.', to: '/industries/salons-beauty' },
      { title: 'Cafe & restaurant footfall', desc: 'Weekend and new-menu campaigns for nearby families.', to: '/industries/restaurants-cafes' },
      { title: 'Tuition admissions', desc: 'Batch and demo campaigns aimed at parents nearby.', to: '/industries/education' },
      { title: 'Rental & resale listings', desc: 'Listing campaigns for property dealers in the societies.', to: '/industries/real-estate' },
    ],
    localH2: 'Why local Meta ads work here',
    local: [
      '**Radius targeting** around your clinic, salon or cafe',
      '**Khand, society or landmark** named in the ad so people know you are close',
      '**Small daily budgets** run steadily instead of big one-off bursts',
      '**WhatsApp replies within minutes** — the biggest factor in bookings',
    ],
    faqs: [
      ['Can a small clinic or salon run Meta ads?', 'Yes. Local campaigns can start with a small daily budget and grow once you see bookings.'],
      ['Can ads show only to people in Indirapuram?', 'Yes — Meta ads can be limited to a small radius around your business.'],
    ],
  }),

  page('gurugram', 'Gurugram', {
    banner: 'Meta ads for Gurugram real-estate developers, aesthetic and dental clinics, D2C brands, restaurants and startups — premium creatives and lead quality checks for high-value customers.',
    h2: 'Premium audiences, higher stakes',
    intro: [
      'Gurugram buyers are used to polished brands. Luxury projects on Golf Course Extension and the Dwarka Expressway, aesthetic clinics, premium restaurants and D2C brands all compete for the same affluent audience — where a single good lead can be worth a lot, and a careless campaign wastes more.',
      'We run [Meta ads](/services/meta-ads) in Gurugram with brand-standard creatives, strict lead-quality settings, CRM integration and weekly reviews with your sales team about which leads actually converted.',
    ],
    cards: [
      { title: 'Luxury real-estate leads', desc: 'Project campaigns within housing-ad rules, with budget and timeline questions.', to: '/industries/real-estate' },
      { title: 'Aesthetic clinic bookings', desc: 'Treatment campaigns within Meta’s health and before-after policies.', to: '/industries/skin-hair-clinics' },
      { title: 'D2C scaling', desc: 'Catalogue, UGC and conversion campaigns with Conversions API.', to: '/industries/ecommerce-d2c' },
      { title: 'Restaurant launches', desc: 'Reservation and launch campaigns for premium dining.', to: '/industries/restaurants-cafes' },
      { title: 'B2B & startup leads', desc: 'Lead forms and retargeting for SaaS and service companies.', to: '/industries/startups-saas' },
    ],
    localH2: 'What works in Gurugram',
    local: [
      '**Brand-standard creatives** — premium audiences ignore cheap-looking ads',
      '**Higher-intent forms and CRM sync** for real estate and clinics',
      '**Lead-quality feedback loops** — your sales team’s outcomes sent back to Meta',
      '**UGC and AI video testing** for D2C brands that need new hooks weekly',
    ],
    faqs: [
      ['Can you run ads for luxury projects?', 'Yes, within Meta’s housing rules. We use strong creatives and qualifying questions to reach serious buyers.'],
      ['Do you connect leads to our CRM?', 'Yes — Meta leads can flow into most CRMs or a Google Sheet automatically.'],
    ],
  }),

  page('faridabad', 'Faridabad', {
    banner: 'Meta ads for Faridabad manufacturers looking for dealers, plus schools, hospitals, builders and retailers — campaigns that filter out the wrong enquiries.',
    h2: 'Dealer leads and local customers',
    intro: [
      'Faridabad’s manufacturers — auto components, engineering goods, electricals — increasingly use Meta ads to find dealers and distributors in other cities. At the same time, the city’s schools, hospitals, builders and retailers use them to reach families in the sectors and Greater Faridabad.',
      'We run [Meta ads](/services/meta-ads) for both: B2B dealer campaigns with qualifying questions that filter retail buyers, and local campaigns with clear offers and WhatsApp follow-up.',
    ],
    cards: [
      { title: 'Dealer & distributor leads', desc: 'Factory videos and “become a dealer” offers aimed at shop owners in chosen states.', to: '/blog/b2b-lead-generation-manufacturers-india' },
      { title: 'School admissions', desc: 'Admission-season campaigns for parents nearby.', to: '/industries/education' },
      { title: 'Hospital campaigns', desc: 'Health-camp and department campaigns within Meta’s health rules.', to: '/industries/clinics' },
      { title: 'Property leads', desc: 'Project campaigns within housing-ad rules for Greater Faridabad.', to: '/industries/real-estate' },
      { title: 'Retail offers', desc: 'Festive and sale campaigns for NIT and sector markets.', to: '/industries/retail-showrooms' },
    ],
    localH2: 'What works in Faridabad',
    local: [
      '**A business-type question** on dealer forms so retail buyers drop out',
      '**Catalogue on WhatsApp** sent to every dealer lead within minutes',
      '**Hindi creatives** for dealers and local families; English for corporate buyers',
      '**State-wise targeting** for manufacturers expanding their dealer network',
    ],
    faqs: [
      ['Do Meta ads work for B2B manufacturers?', 'Yes, for reaching dealers, retailers and resellers in chosen cities — with a qualifying question to filter retail buyers.'],
      ['Can you meet us in Faridabad?', 'Yes, our team is in Delhi NCR.'],
    ],
  }),

  page('lucknow', 'Lucknow', {
    banner: 'Facebook and Instagram ads for Lucknow clinics, coaching institutes, real-estate projects, chikankari brands and restaurants — Hindi creatives and WhatsApp leads that convert.',
    h2: 'Lucknow’s customers are on Instagram',
    intro: [
      'From hair and skin clinics in Gomti Nagar to coaching institutes in Kapoorthala and Aliganj, projects along Shaheed Path and chikankari brands selling across India, Lucknow businesses increasingly win customers through Facebook and Instagram. Done carelessly, the same ads bring hundreds of uninterested leads.',
      'We run [Meta ads](/services/meta-ads) for Lucknow businesses with Hindi creatives, qualifying questions, WhatsApp-first flows and follow-up support — so your team spends time on people who actually want to buy.',
    ],
    cards: [
      { title: 'Hair & skin clinic leads', desc: 'Consultation campaigns within Meta’s health rules, with WhatsApp follow-up.', to: '/industries/skin-hair-clinics' },
      { title: 'Coaching admissions', desc: 'Batch and test-series campaigns with exam-year questions.', to: '/industries/education' },
      { title: 'Real-estate leads', desc: 'Plot and flat campaigns within housing-ad rules.', to: '/industries/real-estate' },
      { title: 'Chikankari online sales', desc: 'Catalogue and conversion campaigns to buyers across India.', to: '/industries/ecommerce-d2c' },
      { title: 'Restaurant & sweet shop offers', desc: 'Festive, delivery and weekend campaigns.', to: '/industries/restaurants-cafes' },
    ],
    localH2: 'What works in Lucknow',
    local: [
      '**Warm, polite Hindi copy** that fits Lucknow’s tone',
      '**Local vs all-India audiences** — clinics and coaching target the city; chikankari targets the country',
      '**WhatsApp campaigns** for clinics and retail',
      '**Offer and price hints** in the ad so expectations match',
    ],
    faqs: [
      ['Do you run Meta ads for clinics in Lucknow?', 'Yes, within Meta’s health-ad policies — no misleading before-after claims, and fast WhatsApp follow-up.'],
      ['Can you sell our chikankari outside Lucknow?', 'Yes — catalogue and conversion campaigns can target buyers across India.'],
    ],
    extraLinks: [{ to: '/locations/lucknow/seo', label: 'SEO in Lucknow' }],
  }),

  page('meerut', 'Meerut', {
    banner: 'Meta ads for Meerut sports-goods makers, jewellers, coaching institutes, hospitals and builders — dealer leads, local offers and Hindi creatives.',
    h2: 'Local customers and national dealers',
    intro: [
      'Meerut sells sports goods, scissors and instruments to dealers across India, while its jewellers, coaching institutes, hospitals and new projects along the Delhi–Meerut Expressway compete for local customers. Meta ads can reach both groups — with very different setups.',
      'We run [Meta ads](/services/meta-ads) for Meerut businesses: dealer campaigns that filter out retail buyers, and local Hindi campaigns with clear offers and WhatsApp follow-up.',
    ],
    cards: [
      { title: 'Sports goods dealer leads', desc: 'Dealer and bulk-order campaigns aimed at sports shops in chosen states.', to: '/blog/b2b-lead-generation-manufacturers-india' },
      { title: 'Jewellery campaigns', desc: 'Wedding-season and festive collection campaigns that start WhatsApp chats.', to: '/industries/retail-showrooms' },
      { title: 'Coaching admissions', desc: 'Batch and demo-class campaigns in Hindi.', to: '/industries/education' },
      { title: 'Hospital campaigns', desc: 'Health-camp and department campaigns within Meta’s rules.', to: '/industries/clinics' },
      { title: 'Property leads', desc: 'Expressway-project campaigns within housing-ad rules.', to: '/industries/real-estate' },
    ],
    localH2: 'What works in Meerut',
    local: [
      '**Product videos with specifications** for dealer campaigns',
      '**Hindi creatives** for local customers and north-Indian dealers',
      '**Wedding-season planning** for jewellers',
      '**Business-type questions** to keep dealer leads clean',
    ],
    faqs: [
      ['Can Meta ads find dealers for our sports goods?', 'Yes — targeted to shop owners in chosen cities, with a dealer offer and a business-type question.'],
      ['Are you close to Meerut?', 'Yes, our team is in Delhi NCR and most work happens over calls and WhatsApp.'],
    ],
  }),

  page('agra', 'Agra', {
    banner: 'Meta ads for Agra hotels, tour operators, leather and footwear brands, petha and handicraft sellers and local clinics — direct bookings, online sales and local leads.',
    h2: 'Bookings and sales, not just likes',
    intro: [
      'Agra hotels and tour operators want direct bookings instead of paying platform commissions; leather, footwear, petha and marble-inlay brands want online buyers across India; and local clinics and schools want families nearby. Meta ads can do all three, but each needs its own campaign type.',
      'We run [Meta ads](/services/meta-ads) for Agra businesses with the right objective for each goal — WhatsApp and lead campaigns for bookings, catalogue campaigns for products, and local campaigns for clinics and schools.',
    ],
    cards: [
      { title: 'Direct hotel bookings', desc: 'Campaigns to travellers planning Agra trips, leading to WhatsApp or your booking page.', to: '/industries/hotels-travel' },
      { title: 'Tour package leads', desc: 'Same-day tour and package campaigns for domestic travellers.' },
      { title: 'Leather & footwear sales', desc: 'Catalogue and conversion campaigns for online stores.', to: '/industries/ecommerce-d2c' },
      { title: 'Petha & handicraft gifting', desc: 'Festive gifting campaigns to buyers across India.' },
      { title: 'Clinic & school campaigns', desc: 'Local campaigns for families in Agra.', to: '/industries/clinics' },
    ],
    localH2: 'What works in Agra',
    local: [
      '**Target travellers before they arrive** — people in other cities planning a visit',
      '**Real photos** of rooms and products, not stock images',
      '**Festive gifting angles** for petha and handicrafts',
      '**English and Hindi** versions for different audiences',
    ],
    faqs: [
      ['Can Meta ads bring direct hotel bookings?', 'Yes — by reaching people planning trips and sending them to WhatsApp or your own booking page.'],
      ['Do you work with Agra businesses remotely?', 'Yes, over calls, video meetings and WhatsApp.'],
    ],
  }),

  page('kanpur', 'Kanpur', {
    banner: 'Meta ads for Kanpur leather, textile and FMCG companies seeking dealers, plus coaching institutes, hospitals and real-estate projects — clean leads and Hindi creatives.',
    h2: 'Dealer networks and local demand',
    intro: [
      'Kanpur’s leather, textile and FMCG companies sell through dealers across UP, Bihar and beyond, while its coaching institutes in Kakadeo, hospitals and real-estate projects compete for local customers. Meta ads can reach both — the setup is what decides lead quality.',
      'We run [Meta ads](/services/meta-ads) for Kanpur businesses with dealer campaigns that filter out retail buyers, Hindi local campaigns and lead delivery to your team within minutes.',
    ],
    cards: [
      { title: 'Dealer & distributor leads', desc: 'Campaigns aimed at shop owners and distributors in chosen districts.', to: '/blog/b2b-lead-generation-manufacturers-india' },
      { title: 'FMCG product awareness', desc: 'Video and reach campaigns for new products in target markets.' },
      { title: 'Coaching admissions', desc: 'Batch and test-series campaigns in Hindi.', to: '/industries/education' },
      { title: 'Hospital campaigns', desc: 'Department and health-camp campaigns within Meta’s rules.', to: '/industries/clinics' },
      { title: 'Property leads', desc: 'Project campaigns within housing-ad rules.', to: '/industries/real-estate' },
    ],
    localH2: 'What works in Kanpur',
    local: [
      '**District-level targeting** for dealer expansion',
      '**Hindi creatives and WhatsApp catalogues** for every dealer lead',
      '**Qualifying questions** — business type and monthly quantity',
      '**Local radius campaigns** for hospitals and coaching',
    ],
    faqs: [
      ['Can Meta ads help us find distributors?', 'Yes, with dealer offers, district targeting and questions that filter out retail buyers.'],
      ['Do you work with Kanpur companies remotely?', 'Yes, over calls, video meetings and WhatsApp.'],
    ],
  }),

  page('varanasi', 'Varanasi', {
    banner: 'Meta ads for Varanasi hotels and guest houses, Banarasi saree sellers, tour and puja services, coaching institutes and hospitals — bookings, sales and local leads.',
    h2: 'Reach visitors before they reach Banaras',
    intro: [
      'For Varanasi hotels, guest houses and tour services, the customer is usually in another city planning a visit. For Banarasi saree sellers, the buyer can be anywhere in India. Meta ads can reach both groups directly — and bring bookings and orders without platform commissions.',
      'We run [Meta ads](/services/meta-ads) for Varanasi businesses with travel-intent audiences, catalogue campaigns for sarees, WhatsApp booking flows and local campaigns for coaching and hospitals.',
    ],
    cards: [
      { title: 'Hotel & guest house bookings', desc: 'Campaigns to people planning a Varanasi trip, leading to WhatsApp booking.', to: '/industries/hotels-travel' },
      { title: 'Banarasi saree sales', desc: 'Catalogue and conversion campaigns to buyers across India.', to: '/industries/ecommerce-d2c' },
      { title: 'Tour, boat & puja packages', desc: 'Package campaigns for pilgrims and tourists.' },
      { title: 'Coaching admissions', desc: 'Batch campaigns for institutes near BHU and Lanka.', to: '/industries/education' },
      { title: 'Hospital campaigns', desc: 'Department and health-camp campaigns within Meta’s rules.', to: '/industries/clinics' },
    ],
    localH2: 'What works in Varanasi',
    local: [
      '**Target travellers in other cities** — not just people already in Varanasi',
      '**Respectful creatives** for pilgrimage and puja services',
      '**Real photos** of rooms, ghats-side views and sarees',
      '**WhatsApp bookings** with fast replies',
    ],
    faqs: [
      ['Can Meta ads bring direct bookings for our guest house?', 'Yes — by reaching people planning a Varanasi trip and sending them to WhatsApp or your website.'],
      ['Can you sell Banarasi sarees across India?', 'Yes, with catalogue and conversion campaigns connected to your online store.'],
    ],
    extraLinks: [{ to: '/locations/varanasi/seo', label: 'SEO in Varanasi' }],
  }),

  page('chandigarh', 'Chandigarh', {
    banner: 'Facebook and Instagram ads for Chandigarh Tricity study-abroad consultants, real-estate projects, clinics, boutiques and restaurants — Punjabi, Hindi and English campaigns that bring serious enquiries.',
    h2: 'Lead quality for the Tricity’s biggest categories',
    intro: [
      'In Chandigarh, Mohali and Panchkula, Meta ads are crowded with study-abroad and IELTS consultants, real-estate projects in New Chandigarh, Zirakpur and Kharar, clinics and boutiques. Cheap leads are easy to get here; serious, qualified enquiries are not.',
      'We run [Meta ads](/services/meta-ads) for Tricity businesses with qualifying questions, compliant claims, Punjabi and Hindi creatives, and follow-up flows that turn enquiries into counselling sessions, site visits and appointments.',
    ],
    cards: [
      { title: 'Study-abroad & IELTS leads', desc: 'Intake and course campaigns — no visa or score promises, with eligibility questions.', to: '/industries/immigration-consultants' },
      { title: 'Real-estate leads', desc: 'Project campaigns within housing-ad rules for New Chandigarh, Zirakpur and Kharar.', to: '/industries/real-estate' },
      { title: 'Clinic appointments', desc: 'Consultation campaigns within Meta’s health policies.', to: '/industries/clinics' },
      { title: 'Boutique & wedding wear', desc: 'Collection campaigns that start WhatsApp chats.', to: '/industries/retail-showrooms' },
      { title: 'Restaurant & cafe footfall', desc: 'Launch and weekend campaigns for Sector 7, 26 and Elante-area outlets.', to: '/industries/restaurants-cafes' },
    ],
    localH2: 'What works in the Tricity',
    local: [
      '**Punjabi, Hindi and English** creatives for different audiences',
      '**Eligibility questions** for study-abroad leads — age, education and intake',
      '**Tricity targeting** together or by city',
      '**Compliant claims** — no guarantees, clear disclaimers',
    ],
    faqs: [
      ['Do Meta ads work for immigration consultants?', 'Yes, with careful claims, eligibility questions and fast counselling follow-up. Ads must not promise visas or results.'],
      ['Do you cover Mohali and Panchkula too?', 'Yes — we work across the Tricity, mostly over calls and WhatsApp.'],
    ],
    extraLinks: [{ to: '/locations/chandigarh/seo', label: 'SEO in Chandigarh' }],
  }),

  page('mohali', 'Mohali', {
    banner: 'Meta ads for Mohali immigration and IELTS consultants, real-estate projects, hospitals, IT companies and restaurants — qualified leads in Punjabi, Hindi and English.',
    h2: 'Serious enquiries in a crowded market',
    intro: [
      'Mohali has one of India’s densest concentrations of immigration and IELTS consultants, along with real-estate projects around Aerocity and the airport road, large hospitals, IT companies and a growing restaurant scene. Every one of them competes for attention on Facebook and Instagram.',
      'We run [Meta ads](/services/meta-ads) for Mohali businesses with eligibility and budget questions, compliant creatives and WhatsApp follow-up — so your counsellors and sales teams speak to serious people.',
    ],
    cards: [
      { title: 'Immigration & IELTS leads', desc: 'Intake and course campaigns with eligibility questions and no guarantees.', to: '/industries/immigration-consultants' },
      { title: 'Aerocity property leads', desc: 'Project campaigns within housing-ad rules.', to: '/industries/real-estate' },
      { title: 'Hospital campaigns', desc: 'Department and health-camp campaigns within Meta’s rules.', to: '/industries/clinics' },
      { title: 'IT company lead gen', desc: 'B2B lead forms and retargeting for service companies.', to: '/industries/startups-saas' },
      { title: 'Restaurant launches', desc: 'Launch and weekend campaigns for Mohali outlets.', to: '/industries/restaurants-cafes' },
    ],
    localH2: 'What works in Mohali',
    local: [
      '**Punjabi creatives** for local audiences; English for IT and B2B',
      '**Higher-intent forms** to cut fake and casual study-abroad leads',
      '**Counselling within hours** — speed decides who wins the student',
      '**Tricity-wide targeting** when the offer serves Chandigarh and Panchkula too',
    ],
    faqs: [
      ['How do you improve immigration lead quality?', 'With higher-intent forms, eligibility questions, honest creatives and fast follow-up — and by sending results back to Meta so it learns.'],
      ['Can the ads be in Punjabi?', 'Yes — Punjabi, Hindi and English.'],
    ],
  }),

  page('panchkula', 'Panchkula', {
    banner: 'Meta ads for Panchkula schools, clinics, builders, boutiques, cafes and hill-stay businesses — local campaigns with clean creatives and WhatsApp follow-up.',
    h2: 'Polished local campaigns',
    intro: [
      'Panchkula’s schools, clinics and diagnostic centres, builders, boutiques, cafes and stays towards Morni Hills mostly serve Tricity families — a smaller, quality-conscious audience. Well-made local Meta ads reach them efficiently.',
      'We run [Meta ads](/services/meta-ads) for Panchkula businesses with sector targeting, calm and premium creatives and fast WhatsApp replies.',
    ],
    cards: [
      { title: 'School admissions', desc: 'Admission-season campaigns aimed at Tricity parents.', to: '/industries/education' },
      { title: 'Clinic & diagnostic bookings', desc: 'Test-package and consultation campaigns within Meta’s rules.', to: '/industries/clinics' },
      { title: 'Property leads', desc: 'Project and resale campaigns within housing-ad rules.', to: '/industries/real-estate' },
      { title: 'Boutique offers', desc: 'Collection and festive campaigns that start WhatsApp chats.', to: '/industries/salons-beauty' },
      { title: 'Weekend stays', desc: 'Getaway campaigns for Morni Hills stays aimed at Tricity and Delhi.', to: '/industries/hotels-travel' },
    ],
    localH2: 'What works in Panchkula',
    local: [
      '**Sector targeting** for local services',
      '**Premium, calm creatives** — Panchkula audiences ignore loud ads',
      '**Weekend-getaway timing** for stays',
      '**Hindi, Punjabi or English** depending on the audience',
    ],
    faqs: [
      ['Can ads target only Panchkula?', 'Yes — specific sectors, Panchkula as a whole or the full Tricity.'],
      ['Do Meta ads work for schools?', 'Yes, especially before and during admission season, with real photos and clear admission steps.'],
    ],
  }),

  page('ludhiana', 'Ludhiana', {
    banner: 'Meta ads for Ludhiana knitwear and hosiery brands, wholesalers, cycle and auto-parts makers, boutiques and immigration consultants — dealer leads, online sales and Punjabi campaigns.',
    h2: 'Wholesale, retail and study-abroad leads',
    intro: [
      'Ludhiana’s knitwear and hosiery brands sell to retailers across India before every season; its cycle and auto-parts makers need dealers; its boutiques sell wedding wear to all of Punjab; and its immigration consultants serve a huge student market. Meta ads can reach every one of these audiences.',
      'We run [Meta ads](/services/meta-ads) for Ludhiana businesses with season-timed wholesale campaigns, dealer forms that filter retail buyers, Punjabi creatives and compliant study-abroad ads.',
    ],
    cards: [
      { title: 'Wholesale buyer leads', desc: 'Season-collection campaigns aimed at retailers, with MOQ and business-type questions.', to: '/blog/b2b-lead-generation-manufacturers-india' },
      { title: 'Cycle & parts dealers', desc: 'Dealer campaigns for chosen states.', to: '/industries/manufacturers-exporters' },
      { title: 'Knitwear online sales', desc: 'Catalogue and conversion campaigns for D2C stores.', to: '/industries/ecommerce-d2c' },
      { title: 'Boutique & wedding wear', desc: 'Collection campaigns that start WhatsApp chats.', to: '/industries/retail-showrooms' },
      { title: 'Immigration leads', desc: 'Intake campaigns with eligibility questions and no guarantees.', to: '/industries/immigration-consultants' },
    ],
    localH2: 'What works in Ludhiana',
    local: [
      '**Season timing** — winter collections advertised before buyers place orders',
      '**Punjabi and Hindi** creatives for buyers across north India',
      '**MOQ and price-list on WhatsApp** for every wholesale lead',
      '**AI-made catalogue videos** so every range has an ad',
    ],
    faqs: [
      ['Can Meta ads find wholesale buyers for knitwear?', 'Yes — campaigns aimed at retailers and resellers, with business-type and quantity questions.'],
      ['Can the ads be in Punjabi?', 'Yes — Punjabi, Hindi and English.'],
    ],
    extraLinks: [{ to: '/locations/ludhiana/seo', label: 'SEO in Ludhiana' }],
  }),

  page('jaipur', 'Jaipur', {
    banner: 'Meta ads for Jaipur jewellers, block-print and handicraft brands, hotels and wedding venues, coaching institutes and restaurants — sales, bookings and admissions.',
    h2: 'Selling Jaipur to India and the world',
    intro: [
      'Jaipur’s jewellery, block-print and handicraft brands sell to buyers across India and abroad; its heritage hotels and wedding venues compete for travellers and families planning events; and its coaching institutes and restaurants serve a large local market. Meta ads connect all of them with the right buyers.',
      'We run [Meta ads](/services/meta-ads) for Jaipur businesses with catalogue campaigns for products, booking and enquiry campaigns for hotels and venues, and local campaigns for coaching and food.',
    ],
    cards: [
      { title: 'Jewellery online sales', desc: 'Catalogue and conversion campaigns with product-accurate creatives.', to: '/industries/ecommerce-d2c' },
      { title: 'Block-print & handicraft sales', desc: 'Collection and gifting campaigns to buyers across India.' },
      { title: 'Hotel bookings', desc: 'Campaigns to travellers planning Jaipur trips, leading to direct booking.', to: '/industries/hotels-travel' },
      { title: 'Wedding venue enquiries', desc: 'Destination-wedding campaigns with date and guest-count questions.', to: '/industries/events-weddings' },
      { title: 'Coaching admissions', desc: 'Batch and test-series campaigns in Hindi.', to: '/industries/education' },
    ],
    localH2: 'What works in Jaipur',
    local: [
      '**Product-accurate creatives** — buyers pay for the craft detail',
      '**Wedding-season planning** for venues and jewellers',
      '**Travel-intent audiences** for hotels in other cities',
      '**English and Hindi** versions for different buyers',
    ],
    faqs: [
      ['Can Meta ads bring wedding venue enquiries?', 'Yes — with date, guest-count and budget questions to filter serious families and planners.'],
      ['Can you sell our jewellery online with Meta ads?', 'Yes, with catalogue campaigns connected to your store and Conversions API tracking.'],
    ],
    extraLinks: [{ to: '/locations/jaipur/seo', label: 'SEO in Jaipur' }],
  }),

  page('dehradun', 'Dehradun', {
    banner: 'Meta ads for Dehradun schools and boarding schools, exam-coaching institutes, hotels and homestays, clinics and property projects — admissions, bookings and local leads.',
    h2: 'Admissions and bookings from far away',
    intro: [
      'Dehradun’s boarding schools enrol students from across India, its defence and government-exam coaching institutes attract aspirants from many states, and its hotels and homestays serve travellers heading to Mussoorie and the hills. Most of these customers decide from another city — exactly where Meta ads can reach them.',
      'We run [Meta ads](/services/meta-ads) for Dehradun businesses with parent- and aspirant-focused admission campaigns, travel-intent booking campaigns and local campaigns for clinics and property.',
    ],
    cards: [
      { title: 'Boarding school admissions', desc: 'Campaigns to parents in other cities, with grade and session questions.', to: '/industries/education' },
      { title: 'Exam coaching leads', desc: 'Batch campaigns for defence and government exams — no selection guarantees.', to: '/industries/education' },
      { title: 'Hotel & homestay bookings', desc: 'Travel-intent campaigns for Dehradun and Mussoorie stays.', to: '/industries/hotels-travel' },
      { title: 'Clinic campaigns', desc: 'Consultation campaigns within Meta’s health rules.', to: '/industries/clinics' },
      { title: 'Property & plot leads', desc: 'Campaigns within housing-ad rules.', to: '/industries/real-estate' },
    ],
    localH2: 'What works in Dehradun',
    local: [
      '**Target parents and aspirants in other states**, not just Dehradun',
      '**Calm, credible creatives** for schools — real campus photos',
      '**Seasonal travel timing** for stays',
      '**No result guarantees** in coaching ads',
    ],
    faqs: [
      ['Can Meta ads reach parents in other cities for our boarding school?', 'Yes — campaigns can target parents in chosen cities and states, with questions on grade and session.'],
      ['Do you work with Dehradun businesses remotely?', 'Yes, over calls, video meetings and WhatsApp.'],
    ],
  }),

  page('hyderabad', 'Hyderabad', {
    banner: 'Meta ads for Hyderabad real-estate developers, hospitals, restaurants, training institutes and startups — campaigns in English, Telugu and Hindi with lead-quality checks.',
    h2: 'A big market with very different audiences',
    intro: [
      'Hyderabad’s largest Meta advertisers are real-estate projects in Kokapet, Tellapur, Shadnagar and the growth corridors, hospitals, restaurants, IT-training institutes in Ameerpet and startups in HITEC City. Each audience speaks a different language — Telugu, Hindi or English — and expects different ads.',
      'We run [Meta ads](/services/meta-ads) for Hyderabad businesses with language-specific creatives, housing-compliant property campaigns, qualifying questions and CRM or WhatsApp follow-up.',
    ],
    cards: [
      { title: 'Plot & villa project leads', desc: 'Campaigns within housing-ad rules for projects across the city’s growth corridors.', to: '/industries/real-estate' },
      { title: 'Hospital campaigns', desc: 'Department and health-camp campaigns within Meta’s rules.', to: '/industries/clinics' },
      { title: 'Restaurant & cloud-kitchen orders', desc: 'Launch, delivery and weekend campaigns.', to: '/industries/restaurants-cafes' },
      { title: 'Training institute admissions', desc: 'Course and demo campaigns for IT-training institutes.', to: '/industries/education' },
      { title: 'Startup & SaaS lead gen', desc: 'B2B lead forms and retargeting.', to: '/industries/startups-saas' },
    ],
    localH2: 'What works in Hyderabad',
    local: [
      '**Telugu creatives** for local buyers; English for tech and B2B',
      '**Site-visit focus** for plot and villa projects, with budget questions',
      '**Area targeting** — Gachibowli, Kukatpally, Secunderabad and the outskirts behave differently',
      '**Fast call-backs** — property buyers contact several projects at once',
    ],
    faqs: [
      ['Can you run Telugu Meta ads?', 'Yes — Telugu, Hindi and English creatives with matching captions.'],
      ['Do you run ads for plot projects near Hyderabad?', 'Yes, within Meta’s housing rules, with qualifying questions and site-visit follow-up.'],
    ],
    extraLinks: [{ to: '/locations/hyderabad/seo', label: 'SEO in Hyderabad' }],
  }),

  page('bengaluru', 'Bengaluru', {
    banner: 'Meta ads for Bengaluru D2C brands, startups and SaaS, real-estate projects, clinics and restaurants — testing-driven campaigns with proper tracking.',
    h2: 'Built for testing and scale',
    intro: [
      'Bengaluru has India’s most competitive Meta ad market: D2C brands testing new creatives every week, startups running lead generation, real-estate projects across the city and clinics and restaurants in every neighbourhood. Winning here depends on tracking, creative volume and fast iteration.',
      'We run [Meta ads](/services/meta-ads) for Bengaluru businesses with Conversions API tracking, structured creative testing — including AI and UGC-style video — and weekly reviews of cost per real customer.',
    ],
    cards: [
      { title: 'D2C performance campaigns', desc: 'Catalogue, Advantage+ and conversion campaigns with creative testing.', to: '/industries/ecommerce-d2c' },
      { title: 'Startup & SaaS leads', desc: 'Lead forms, demo bookings and retargeting.', to: '/industries/startups-saas' },
      { title: 'Real-estate leads', desc: 'Project campaigns within housing-ad rules.', to: '/industries/real-estate' },
      { title: 'Clinic bookings', desc: 'Consultation campaigns within Meta’s health rules.', to: '/industries/clinics' },
      { title: 'Restaurant & cafe campaigns', desc: 'Launch and delivery campaigns by neighbourhood.', to: '/industries/restaurants-cafes' },
    ],
    localH2: 'What works in Bengaluru',
    local: [
      '**Creative volume** — new hooks every week, many made with AI video',
      '**Server-side tracking** so Meta optimises for real purchases and qualified leads',
      '**English-first creatives**, with Kannada versions for local businesses',
      '**Neighbourhood targeting** for clinics and restaurants',
    ],
    faqs: [
      ['Can you scale our D2C brand on Meta?', 'Yes — with proper tracking, structured creative testing and budget moved to what brings profitable orders.'],
      ['Do you work with Bengaluru teams remotely?', 'Yes, over calls, shared dashboards and Slack or WhatsApp.'],
    ],
  }),

  page('pune', 'Pune', {
    banner: 'Meta ads for Pune real-estate projects, education institutes, D2C brands, clinics and auto dealers — English, Marathi and Hindi campaigns built for qualified leads.',
    h2: 'Leads across Pune’s growth corridors',
    intro: [
      'Pune’s big Meta advertisers are real-estate projects in Hinjewadi, Wakad, Kharadi and the city’s outskirts, colleges and training institutes, D2C brands, clinics and automobile dealers. Buyers here compare carefully and respond to clear, honest ads.',
      'We run [Meta ads](/services/meta-ads) for Pune businesses with Marathi, Hindi and English creatives, housing-compliant property campaigns, qualifying questions and fast follow-up.',
    ],
    cards: [
      { title: 'Real-estate leads', desc: 'Project campaigns within housing-ad rules for Pune’s growth corridors.', to: '/industries/real-estate' },
      { title: 'College & course admissions', desc: 'Course campaigns with eligibility questions.', to: '/industries/education' },
      { title: 'D2C sales', desc: 'Catalogue and conversion campaigns with creative testing.', to: '/industries/ecommerce-d2c' },
      { title: 'Clinic bookings', desc: 'Consultation campaigns within Meta’s health rules.', to: '/industries/clinics' },
      { title: 'Auto dealer test drives', desc: 'Model-launch and test-drive campaigns by area.' },
    ],
    localH2: 'What works in Pune',
    local: [
      '**Marathi creatives** for local audiences; English for students and IT professionals',
      '**Corridor targeting** — Hinjewadi, Kharadi and PCMC audiences differ',
      '**Honest, detailed ads** — Pune buyers compare carefully',
      '**Retargeting** for people who viewed projects or courses',
    ],
    faqs: [
      ['Can you run Marathi Meta ads?', 'Yes — Marathi, Hindi and English creatives.'],
      ['Do you work with Pune businesses remotely?', 'Yes, over calls, video meetings and WhatsApp.'],
    ],
    extraLinks: [{ to: '/locations/pune/seo', label: 'SEO in Pune' }],
  }),

  page('mumbai', 'Mumbai', {
    banner: 'Meta ads for Mumbai D2C fashion and beauty brands, real-estate projects across MMR, clinics, restaurants and service businesses — performance campaigns with proper tracking.',
    h2: 'Performance in India’s most expensive ad market',
    intro: [
      'Mumbai and the wider MMR are among the most competitive Meta ad markets in India: fashion and beauty D2C brands, real-estate projects from Thane to Navi Mumbai, aesthetic clinics, restaurants and service businesses all bid for the same scrolling audience. Every rupee has to work.',
      'We run [Meta ads](/services/meta-ads) for Mumbai businesses with server-side tracking, steady creative testing — including AI and UGC-style video — housing-compliant property campaigns and reporting on cost per real customer.',
    ],
    cards: [
      { title: 'Fashion & beauty D2C', desc: 'Catalogue and conversion campaigns with weekly creative testing.', to: '/industries/ecommerce-d2c' },
      { title: 'MMR real-estate leads', desc: 'Project campaigns within housing-ad rules, by micro-market.', to: '/industries/real-estate' },
      { title: 'Aesthetic clinic bookings', desc: 'Treatment campaigns within Meta’s health policies.', to: '/industries/skin-hair-clinics' },
      { title: 'Restaurant campaigns', desc: 'Launch, reservation and delivery campaigns by neighbourhood.', to: '/industries/restaurants-cafes' },
      { title: 'Service business leads', desc: 'Lead forms and WhatsApp campaigns for professional services.', to: '/industries/professional-services' },
    ],
    localH2: 'What works in Mumbai',
    local: [
      '**Micro-market targeting** — Andheri, Thane and Navi Mumbai audiences behave differently',
      '**Creative volume** to fight ad fatigue in a crowded feed',
      '**English, Hindi and Marathi** versions',
      '**Conversions API** so Meta learns from real purchases and qualified leads',
    ],
    faqs: [
      ['Are Meta ads expensive in Mumbai?', 'Mumbai audiences usually cost more to reach. Good tracking, strong creatives and lead filters are what keep cost per customer under control.'],
      ['Do you work with Mumbai brands remotely?', 'Yes, over calls, shared dashboards and WhatsApp.'],
    ],
  }),
];

const NAMES = { delhi: 'Delhi', noida: 'Noida', 'greater-noida': 'Greater Noida', ghaziabad: 'Ghaziabad', indirapuram: 'Indirapuram', gurugram: 'Gurugram', faridabad: 'Faridabad', lucknow: 'Lucknow', meerut: 'Meerut', agra: 'Agra', kanpur: 'Kanpur', varanasi: 'Varanasi', chandigarh: 'Chandigarh', mohali: 'Mohali', panchkula: 'Panchkula', ludhiana: 'Ludhiana', jaipur: 'Jaipur', dehradun: 'Dehradun', hyderabad: 'Hyderabad', bengaluru: 'Bengaluru', pune: 'Pune', mumbai: 'Mumbai' };

// Quick answers reuse each page's own banner, framed as a question.
const answers = Object.fromEntries(pages.map((p) => [
  `/locations/${p.city}/meta-ads`,
  {
    q: `Which agency runs Meta ads in ${NAMES[p.city]}?`,
    a: `Orizova Digital, a Delhi NCR digital marketing agency, runs Meta (Facebook and Instagram) ads in ${NAMES[p.city]}. ${p.banner} Ad accounts stay in the client’s name.`,
  },
]));

const metaAdsCities = { pages, answers, NAMES };
export default metaAdsCities;
