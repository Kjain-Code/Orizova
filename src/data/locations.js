// City landing pages — each one targets "web development / digital marketing
// agency in <city>" searches with unique, genuinely local content.
// Keep the copy honest: we SERVE these cities; don't claim an office address
// here unless one actually exists (add it to data/contact.js if it does).

const locations = [
  {
    slug: 'ghaziabad',
    city: 'Ghaziabad',
    region: 'Uttar Pradesh',
    tagline: 'Websites & marketing for Ghaziabad businesses',
    intro:
      "From clinics in Indirapuram to showrooms in Raj Nagar and manufacturers in Sahibabad, Ghaziabad businesses are competing for the same local customers online. Orizova builds fast, mobile-first websites and runs SEO and Meta/Google Ads campaigns that help Ghaziabad brands show up first when people search — and turn those visits into calls, WhatsApp chats and walk-ins.",
    areas: ['Indirapuram', 'Vaishali', 'Vasundhara', 'Kaushambi', 'Raj Nagar', 'Raj Nagar Extension', 'Crossings Republik', 'Kavi Nagar', 'Sahibabad', 'Modinagar'],
    industries: ['Clinics & healthcare', 'Coaching & schools', 'Real estate & builders', 'Showrooms & retail', 'Manufacturers & traders', 'Restaurants & cafes'],
    focus:
      'Most Ghaziabad customers search on their phone and decide within seconds, so we prioritise page speed, click-to-call and WhatsApp buttons, Google Business Profile optimisation and "near me" local SEO.',
    faqs: [
      ['How much does a website cost in Ghaziabad?', 'It depends on the number of pages and features. A business website or landing page costs far less than a custom web app or e-commerce store. Share your requirements and we will send a clear, fixed quote.'],
      ['Do you run Facebook, Instagram and Google Ads for Ghaziabad businesses?', 'Yes. We plan, design and manage Meta and Google lead-generation campaigns targeted to Ghaziabad areas like Indirapuram, Vaishali and Raj Nagar Extension.'],
      ['Can you help my business rank on Google Maps in Ghaziabad?', 'Yes. Local SEO — Google Business Profile optimisation, reviews strategy, local keywords and location pages — is part of our SEO service.'],
    ],
  },
  {
    slug: 'noida',
    city: 'Noida',
    region: 'Uttar Pradesh',
    tagline: 'Web, app & growth marketing for Noida',
    intro:
      "Noida is home to startups, IT companies, schools, real-estate projects and fast-growing D2C brands. Orizova works with Noida businesses to design and develop websites, web apps and mobile apps, and to grow them with SEO, content and performance marketing — with clear timelines and reporting you can actually read.",
    areas: ['Sector 18', 'Sector 62', 'Sector 63', 'Sector 16', 'Sector 76', 'Sector 137', 'Noida Extension (Greater Noida West)', 'Greater Noida', 'Noida Expressway'],
    industries: ['Startups & SaaS', 'IT & services companies', 'Education & edtech', 'Real estate', 'D2C & e-commerce brands', 'Healthcare'],
    focus:
      'For Noida clients we often combine a conversion-focused website or product landing page with Google Ads and SEO, so paid campaigns bring leads today while organic rankings build up for the long term.',
    faqs: [
      ['Do you build mobile apps for Noida startups?', 'Yes. We build Android, iOS and cross-platform apps (React Native / Flutter), along with the admin panel or website that goes with them.'],
      ['Which is the best digital marketing service for a Noida business?', 'It depends on your goal. Google Ads and SEO capture people already searching for your service; Meta ads create demand and generate leads. We recommend a mix after understanding your audience and budget.'],
      ['Can you redesign my existing website?', 'Yes. We can redesign and speed up an existing site, fix technical SEO issues and keep the content and rankings you already have.'],
    ],
  },
  {
    slug: 'delhi',
    city: 'Delhi',
    region: 'Delhi',
    tagline: 'Web design & digital marketing across Delhi',
    intro:
      "Delhi is one of the most competitive markets in India — whether you run a boutique in Lajpat Nagar, a clinic in Rajouri Garden, a restaurant in Hauz Khas or a wholesale business in Chandni Chowk. Orizova helps Delhi businesses stand out with professionally designed, SEO-ready websites and marketing campaigns that bring measurable enquiries, not just likes.",
    areas: ['Connaught Place', 'South Delhi', 'Lajpat Nagar', 'Saket', 'Nehru Place', 'Karol Bagh', 'Rajouri Garden', 'Janakpuri', 'Dwarka', 'Rohini', 'Pitampura', 'Chandni Chowk'],
    industries: ['Fashion & retail', 'Clinics & wellness', 'Restaurants & cafes', 'Wholesale & trading', 'Professional services', 'Education & coaching'],
    focus:
      'Our Delhi campaigns are hyper-local: we target the neighbourhoods your customers actually come from and build landing pages for each offer so ad spend turns into calls and bookings.',
    faqs: [
      ['Are you a web design company in Delhi?', 'Orizova is a Delhi NCR digital agency. We design and develop websites for Delhi businesses and manage them end-to-end — domain, hosting, speed and SEO.'],
      ['Do you offer SEO services in Delhi?', 'Yes — local SEO, technical SEO, keyword research and content, plus Google Business Profile optimisation so you show up in Google Maps results.'],
      ['How soon can my website go live?', 'A focused business website or landing page can typically go live in a couple of weeks once content is ready; larger builds are planned in clear milestones.'],
    ],
  },
  {
    slug: 'chandigarh',
    city: 'Chandigarh',
    region: 'Chandigarh (Tricity)',
    tagline: 'Websites & lead generation for the Tricity',
    intro:
      "Chandigarh, Mohali and Panchkula have a thriving mix of real-estate developers, immigration and study-abroad consultants, clinics, architects and hospitality brands. Orizova designs premium, fast websites for Tricity businesses and runs SEO and lead-generation campaigns that bring qualified enquiries instead of random clicks.",
    areas: ['Sector 17', 'Sector 22', 'Sector 35', 'Industrial Area', 'Mohali', 'Panchkula', 'Zirakpur', 'Kharar', 'New Chandigarh'],
    industries: ['Real estate & architecture', 'Immigration & study-abroad', 'Clinics & healthcare', 'Hotels & restaurants', 'Education', 'Interior design'],
    focus:
      'For Tricity brands we focus on trust — portfolio-led website design, reviews, case studies and fast mobile pages — combined with Meta and Google lead forms that qualify enquiries before they reach you.',
    faqs: [
      ['Do you work with businesses in Mohali and Panchkula too?', 'Yes. We work with clients across the Chandigarh Tricity — Chandigarh, Mohali, Panchkula and Zirakpur.'],
      ['Can you build a portfolio website for architects or interior designers?', 'Yes. We build animated, image-rich portfolio websites that still load fast and rank on Google.'],
      ['Do you handle Meta lead ads for real-estate and immigration businesses?', 'Yes. We create the ad creatives, lead forms and landing pages, and optimise campaigns for lead quality, not just cheap leads.'],
    ],
  },
];

export default locations;
