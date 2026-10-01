// City landing pages — each one targets "digital marketing agency in <city>"
// searches with unique, genuinely local content.
// Keep the copy honest: we SERVE these cities; don't claim an office address
// here unless one actually exists (add it to data/contact.js if it does).

const locations = [
  {
    slug: 'ghaziabad',
    city: 'Ghaziabad',
    region: 'Uttar Pradesh',
    tagline: 'Websites, SEO & ads for Ghaziabad businesses — from Indirapuram and Vaishali to Raj Nagar Extension and Sahibabad',
    intro:
      "From clinics in Indirapuram to showrooms in Raj Nagar and manufacturers in Sahibabad, Ghaziabad businesses are competing for the same local customers online. Orizova builds fast, mobile-first websites and runs SEO and Meta/Google Ads campaigns that help Ghaziabad brands show up first when people search — and turn those visits into calls, WhatsApp chats and walk-ins.",
    areas: ['Indirapuram', 'Vaishali', 'Vasundhara', 'Kaushambi', 'Raj Nagar', 'Raj Nagar Extension', 'Crossings Republik', 'Kavi Nagar', 'Sahibabad', 'Modinagar'],
    industries: ['Clinics & healthcare', 'Coaching & schools', 'Real estate & builders', 'Showrooms & retail', 'Manufacturers & traders', 'Restaurants & cafes'],
    focus:
      'Most Ghaziabad customers search on their phone and decide within seconds, so we prioritise page speed, click-to-call and WhatsApp buttons, Google Business Profile optimisation and "near me" local SEO.',
    sections: [
      {
        type: 'prose',
        tag: 'The Ghaziabad market',
        h2: 'Why marketing in Ghaziabad needs a hyper-local plan',
        paras: [
          'Ghaziabad is really several markets in one. The trans-Hindon townships — Indirapuram, Vaishali, Vasundhara and Kaushambi — are dense residential areas where families choose clinics, coaching centres, salons and restaurants within a few kilometres of home. Raj Nagar Extension and Crossings Republik have newer high-rise societies and a steady flow of new residents searching for everything from interior designers to tiffin services. Sahibabad, Meerut Road and Loni have industrial and trading businesses that sell to other businesses across NCR.',
          'Because customers rarely travel far for everyday services, a Ghaziabad campaign works best when it is built around neighbourhoods: Google Business Profile categories and posts for the exact locality, ads targeted a few kilometres around your location, and website pages that mention the areas you actually serve.',
        ],
      },
      {
        type: 'cards',
        tag: 'Where to start',
        h2: 'What usually works first for Ghaziabad businesses',
        items: [
          { title: 'Google Maps visibility', desc: 'A complete, active Google Business Profile with genuine reviews is the fastest win for clinics, salons, cafes and shops.', to: '/locations/ghaziabad/seo' },
          { title: 'A fast mobile website', desc: 'Clear services, timings, location and WhatsApp button — built to load quickly on mobile data.', to: '/locations/ghaziabad/website-development' },
          { title: 'Local Meta ads', desc: 'Instagram and Facebook ads within a radius of your outlet for launches, offers and admissions.', to: '/services/meta-ads' },
        ],
      },
    ],
    faqs: [
      ['How much does a website cost in Ghaziabad?', 'It depends on the number of pages and features. A business website or landing page costs far less than a custom web app or e-commerce store. Share your requirements and we will send a clear, fixed quote.'],
      ['Do you run Facebook, Instagram and Google Ads for Ghaziabad businesses?', 'Yes. We plan, design and manage Meta and Google lead-generation campaigns targeted to Ghaziabad areas like Indirapuram, Vaishali and Raj Nagar Extension.'],
      ['Can you help my business rank on Google Maps in Ghaziabad?', 'Yes. Local SEO — Google Business Profile optimisation, reviews strategy, local keywords and location pages — is part of our SEO service.'],
      ['Do you work with B2B businesses in Sahibabad and Loni?', 'Yes. For manufacturers and traders we focus on a credible website, product pages, Google search ads for specific products and listings on B2B directories.'],
      ['Do I need to visit an office to work with you?', 'No. Most projects run over calls, WhatsApp and shared documents; meetings can be arranged when needed.'],
    ],
  },
  {
    slug: 'noida',
    city: 'Noida',
    region: 'Uttar Pradesh',
    tagline: 'Web, app & growth marketing for Noida, Greater Noida and Greater Noida West',
    intro:
      "Noida is home to startups, IT companies, schools, real-estate projects and fast-growing D2C brands. Orizova works with Noida businesses to design and develop websites, web apps and mobile apps, and to grow them with SEO, content and performance marketing — with clear timelines and reporting you can actually read.",
    areas: ['Sector 18', 'Sector 62', 'Sector 63', 'Sector 16', 'Sector 76', 'Sector 137', 'Noida Extension (Greater Noida West)', 'Greater Noida', 'Noida Expressway'],
    industries: ['Startups & SaaS', 'IT & services companies', 'Education & edtech', 'Real estate', 'D2C & e-commerce brands', 'Healthcare'],
    focus:
      'For Noida clients we often combine a conversion-focused website or product landing page with Google Ads and SEO, so paid campaigns bring leads today while organic rankings build up for the long term.',
    sections: [
      {
        type: 'prose',
        tag: 'The Noida market',
        h2: 'Two very different Noidas — and how we market to each',
        paras: [
          'The office corridors around Sectors 62, 63, 132 and the Expressway are full of IT companies, SaaS startups and service firms that sell to clients across India and abroad. Their buyers compare options carefully, so they need a sharp website, case-study style content, LinkedIn presence and search campaigns for specific services.',
          'The residential side — Sector 50s and 70s, the Expressway societies, Greater Noida West and Greater Noida — is a consumer market of young families. Here clinics, schools, gyms, cafes, home-service providers and real-estate resellers win with Google Maps visibility, Instagram reels and tightly targeted Meta ads around specific societies and sectors.',
          'Many of our Noida plans therefore start by deciding which of these two audiences you serve, because the website copy, channels and budget split are completely different.',
        ],
      },
      {
        type: 'cards',
        tag: 'Where to start',
        h2: 'Common starting points for Noida businesses',
        items: [
          { title: 'Product & service websites', desc: 'Fast sites and landing pages for startups and service firms.', to: '/locations/noida/website-development' },
          { title: 'SEO for Noida searches', desc: 'Service pages, location pages and Google Maps for local customers.', to: '/locations/noida/seo' },
          { title: 'Real-estate lead generation', desc: 'Project pages and Meta lead forms for Noida and Greater Noida West.', to: '/industries/real-estate' },
        ],
      },
    ],
    faqs: [
      ['Do you build mobile apps for Noida startups?', 'Yes. We build Android, iOS and cross-platform apps (React Native / Flutter), along with the admin panel or website that goes with them.'],
      ['Which is the best digital marketing service for a Noida business?', 'It depends on your goal. Google Ads and SEO capture people already searching for your service; Meta ads create demand and generate leads. We recommend a mix after understanding your audience and budget.'],
      ['Can you redesign my existing website?', 'Yes. We can redesign and speed up an existing site, fix technical SEO issues and keep the content and rankings you already have.'],
      ['Do you work with businesses in Greater Noida West?', 'Yes. Greater Noida West, Greater Noida and the Noida Expressway are part of the area we serve.'],
      ['Can you help with LinkedIn for B2B companies?', 'Yes. We manage company and founder LinkedIn pages as part of [social media marketing](/services/social-media-marketing).'],
    ],
  },
  {
    slug: 'delhi',
    city: 'Delhi',
    region: 'Delhi',
    tagline: 'Web design & digital marketing across Delhi — South, West, North and Central',
    intro:
      "Delhi is one of the most competitive markets in India — whether you run a boutique in Lajpat Nagar, a clinic in Rajouri Garden, a restaurant in Hauz Khas or a wholesale business in Chandni Chowk. Orizova helps Delhi businesses stand out with professionally designed, SEO-ready websites and marketing campaigns that bring measurable enquiries, not just likes.",
    areas: ['Connaught Place', 'South Delhi', 'Lajpat Nagar', 'Saket', 'Nehru Place', 'Karol Bagh', 'Rajouri Garden', 'Janakpuri', 'Dwarka', 'Rohini', 'Pitampura', 'Chandni Chowk'],
    industries: ['Fashion & retail', 'Clinics & wellness', 'Restaurants & cafes', 'Wholesale & trading', 'Professional services', 'Education & coaching'],
    focus:
      'Our Delhi campaigns are hyper-local: we target the neighbourhoods your customers actually come from and build landing pages for each offer so ad spend turns into calls and bookings.',
    sections: [
      {
        type: 'prose',
        tag: 'The Delhi market',
        h2: 'In Delhi, competition is block by block',
        paras: [
          'Search "dermatologist" or "cafe" in Delhi and you will find dozens of options within a few kilometres. That makes broad, city-wide targeting expensive and inefficient. A South Delhi boutique, a Dwarka clinic and a Karol Bagh wholesaler have almost nothing in common — not the customer, not the search terms, not the time people take to decide.',
          'We plan Delhi campaigns around the zone you serve and the way your customers buy. Retail and food businesses lean on Instagram, Google Maps and reviews. Professional services and clinics need trust: detailed service pages, doctor or expert profiles, and Google search ads for specific treatments or services. Wholesale and trading businesses benefit from product-level pages and B2B search terms.',
        ],
      },
      {
        type: 'cards',
        tag: 'Where to start',
        h2: 'Popular services with Delhi businesses',
        items: [
          { title: 'Web design for Delhi businesses', desc: 'Premium-looking, fast websites for retail, clinics and professionals.', to: '/locations/delhi/website-development' },
          { title: 'SEO & Google Maps in Delhi', desc: 'Neighbourhood-level local SEO and content.', to: '/locations/delhi/seo' },
          { title: 'Restaurants & cafes', desc: 'Maps, reels and local ads for food businesses.', to: '/industries/restaurants-cafes' },
        ],
      },
    ],
    faqs: [
      ['Are you a web design company in Delhi?', 'Orizova Digital is a Delhi NCR digital agency. We design and develop websites for Delhi businesses and manage them end-to-end — domain, hosting, speed and SEO.'],
      ['Do you offer SEO services in Delhi?', 'Yes — local SEO, technical SEO, keyword research and content, plus Google Business Profile optimisation so you show up in Google Maps results.'],
      ['How soon can my website go live?', 'A focused business website or landing page can typically go live in a couple of weeks once content is ready; larger builds are planned in clear milestones.'],
      ['Can you target ads to specific Delhi areas only?', 'Yes. Both Meta and Google let us target by radius or pin code, so ads reach the neighbourhoods you actually serve.'],
      ['Do you work with wholesalers in Old Delhi and Karol Bagh?', 'Yes. Product catalogues, B2B enquiry pages and search ads for specific products work well for trading businesses.'],
    ],
  },
  {
    slug: 'chandigarh',
    city: 'Chandigarh',
    region: 'Chandigarh (Tricity)',
    tagline: 'Websites & lead generation for Chandigarh, Mohali, Panchkula and Zirakpur',
    intro:
      "Chandigarh, Mohali and Panchkula have a thriving mix of real-estate developers, immigration and study-abroad consultants, clinics, architects and hospitality brands. Orizova designs premium, fast websites for Tricity businesses and runs SEO and lead-generation campaigns that bring qualified enquiries instead of random clicks.",
    areas: ['Sector 17', 'Sector 22', 'Sector 35', 'Industrial Area', 'Mohali', 'Panchkula', 'Zirakpur', 'Kharar', 'New Chandigarh'],
    industries: ['Real estate & architecture', 'Immigration & study-abroad', 'Clinics & healthcare', 'Hotels & restaurants', 'Education', 'Interior design'],
    focus:
      'For Tricity brands we focus on trust — portfolio-led website design, reviews, case studies and fast mobile pages — combined with Meta and Google lead forms that qualify enquiries before they reach you.',
    sections: [
      {
        type: 'prose',
        tag: 'The Tricity market',
        h2: 'A premium market that researches before it buys',
        paras: [
          'Customers in the Tricity often compare several providers before they call — whether they are choosing an architect for a Mohali kothi, a visa consultant, a clinic in Panchkula or a venue in Zirakpur. They read reviews, browse Instagram and check whether a website looks established. A weak online presence quietly sends them to a competitor.',
          'Distances in the Tricity are short, so customers will travel across Chandigarh, Mohali and Panchkula for the right business. That makes Tricity-wide targeting sensible, but it also means competition from across the region. Our approach is to win on trust: portfolio-rich websites, active Google profiles with genuine reviews, and lead forms that ask the right questions before the enquiry reaches you.',
        ],
      },
      {
        type: 'cards',
        tag: 'Where to start',
        h2: 'Popular starting points in the Tricity',
        items: [
          { title: 'Premium websites', desc: 'Portfolio-led sites for architects, developers and consultants.', to: '/locations/chandigarh/website-development' },
          { title: 'SEO across Chandigarh, Mohali & Panchkula', desc: 'Local SEO and content for Tricity searches.', to: '/locations/chandigarh/seo' },
          { title: 'Architects & interior designers', desc: 'Websites and Instagram built around your projects.', to: '/industries/architects' },
        ],
      },
    ],
    faqs: [
      ['Do you work with businesses in Mohali and Panchkula too?', 'Yes. We work with clients across the Chandigarh Tricity — Chandigarh, Mohali, Panchkula and Zirakpur.'],
      ['Can you build a portfolio website for architects or interior designers?', 'Yes. We build animated, image-rich portfolio websites that still load fast and rank on Google.'],
      ['Do you handle Meta lead ads for real-estate and immigration businesses?', 'Yes. We create the ad creatives, lead forms and landing pages, and optimise campaigns for lead quality, not just cheap leads.'],
      ['Are you based in Chandigarh?', 'Our team is based in Delhi NCR and works with Tricity clients remotely over calls, video meetings and WhatsApp.'],
      ['Can you manage Google Ads for immigration consultants?', 'Yes, within Google’s policies for immigration services. Clear disclosures and honest claims keep accounts in good standing.'],
    ],
  },
];

export default locations;
