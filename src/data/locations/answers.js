// Answer-first summaries ("Quick answer" box) for AEO / GEO.
// Rules: lead with the direct answer, 40–80 words, name the brand and the
// place, facts only (no invented prices, numbers, clients or results).
// Rendered by components/content/QuickAnswer.jsx; also used for /llms.txt.
// Section: city and city × service pages (local).

import moreCities from './cities';

const answers = {
  '/locations': {
    q: 'Which cities does Orizova Digital serve?',
    a: 'Orizova Digital works with businesses across India over calls, video and WhatsApp. Its team is based in Delhi NCR, and it has local pages for 22 cities and areas — including Delhi, Noida, Gurugram, Ghaziabad, Lucknow, Meerut, Agra, Kanpur, Varanasi, Chandigarh, Mohali, Ludhiana, Jaipur, Dehradun, Hyderabad, Pune, Bengaluru and Mumbai — each with website development and SEO pages.',
  },
  '/locations/ghaziabad': {
    q: 'Which digital marketing agency serves Ghaziabad businesses?',
    a: 'Orizova Digital is a website development and digital marketing agency serving Ghaziabad — including Indirapuram, Vaishali, Vasundhara, Kaushambi, Raj Nagar Extension, Crossings Republik and Sahibabad. It builds fast mobile websites and runs local SEO, Google Business Profile optimisation and Meta and Google Ads for clinics, coaching centres, builders, showrooms, manufacturers and restaurants.',
  },
  '/locations/noida': {
    q: 'Which digital agency works with Noida businesses?',
    a: 'Orizova Digital works with startups, IT companies, schools, real-estate projects, D2C brands and clinics in Noida, Greater Noida and Greater Noida West. It designs and develops websites, web apps and mobile apps, and grows them with SEO, content and Google and Meta ads — often pairing a landing page and ads for leads now with SEO for the long term.',
  },
  '/locations/delhi': {
    q: 'Which agency does web design and digital marketing in Delhi?',
    a: 'Orizova Digital designs SEO-ready websites and runs hyper-local marketing for Delhi businesses across South, West, North and Central Delhi — including Connaught Place, Lajpat Nagar, Saket, Karol Bagh, Rajouri Garden, Dwarka and Rohini. It works with fashion and retail brands, clinics, restaurants, wholesalers, professional services and coaching institutes.',
  },
  '/locations/chandigarh': {
    q: 'Which digital marketing agency serves Chandigarh, Mohali and Panchkula?',
    a: 'Orizova Digital serves the Chandigarh Tricity — Chandigarh, Mohali, Panchkula, Zirakpur, Kharar and New Chandigarh. It builds premium, fast, portfolio-led websites and runs SEO and qualified lead-generation campaigns on Meta and Google for real-estate firms, architects, immigration consultants, clinics, hotels, restaurants and education businesses.',
  },
  '/locations/varanasi': {
    q: 'Which agency builds websites for Varanasi businesses?',
    a: 'Orizova Digital builds fast websites and Google visibility for Varanasi businesses — hotels and homestays near the ghats, Banarasi silk and saree sellers, coaching institutes, hospitals, clinics and travel operators in areas like Sigra, Lanka, Cantt, Assi and Sarnath. The focus is on being found by pilgrims, tourists, students and online buyers before they reach the city.',
  },
  '/locations/ghaziabad/website-development': {
    q: 'Who builds business websites in Ghaziabad?',
    a: 'Orizova Digital is a website development company for Ghaziabad that builds business websites, landing pages and online stores for clinics, coaching centres, showrooms, builders and traders in Indirapuram, Vaishali, Raj Nagar Extension, Sahibabad and nearby areas. Sites are fast on mobile, have click-to-call and WhatsApp buttons, and are set up for Google from launch.',
  },
  '/locations/ghaziabad/seo': {
    q: 'Who provides SEO services in Ghaziabad?',
    a: 'Orizova Digital provides SEO and local SEO for Ghaziabad businesses: Google Business Profile optimisation, genuine reviews, locality and service pages, and technical fixes — so clinics, coaching centres, showrooms and service businesses in Indirapuram, Vaishali, Raj Nagar and Crossings Republik appear for "near me" and area searches.',
  },
  '/locations/noida/website-development': {
    q: 'Who develops websites for Noida companies?',
    a: 'Orizova Digital develops websites, landing pages and web apps for Noida startups, IT and service companies, schools, real-estate projects and D2C brands across Noida, Greater Noida and Greater Noida West. Sites are custom-coded, fast and SEO-ready, and can be paired with Google Ads landing pages so campaigns convert from day one.',
  },
  '/locations/noida/seo': {
    q: 'Who does SEO in Noida?',
    a: 'Orizova Digital does SEO for Noida companies and local businesses. National-market companies get technical SEO, detailed service pages and link-worthy content; local businesses like clinics and schools get Google Business Profile, reviews and locality pages. Every engagement starts with a keyword map and a monthly plan for Noida, Greater Noida and Greater Noida West.',
  },
  '/locations/delhi/website-development': {
    q: 'Which company does website designing in Delhi?',
    a: 'Orizova Digital is a website designing and development company for Delhi boutiques, clinics, restaurants, consultants and traders. Its Delhi sites focus on a strong first impression — photography, typography, a clear statement of what you do and where, and an obvious next step — backed by clean custom code, fast loading and on-page SEO.',
  },
  '/locations/delhi/seo': {
    q: 'How should a Delhi business approach SEO?',
    a: 'In Delhi, broad terms like "best dentist in Delhi" are very competitive, so Orizova Digital targets specific services and neighbourhoods first — for example a treatment plus a locality — where a business can win, then grows into broader terms. That means strong service pages, the best Google Business Profile in your area and genuine reviews.',
  },
  '/locations/chandigarh/website-development': {
    q: 'Who builds websites in Chandigarh, Mohali and Panchkula?',
    a: 'Orizova Digital is a website development and web design company serving Chandigarh, Mohali, Panchkula and Zirakpur. It plans, writes, designs and codes fast, premium websites that put your strongest proof first — projects, credentials and genuine reviews — for architects, visa consultants, clinics, real-estate firms and venues, with WhatsApp and call enquiries built in.',
  },
  '/locations/chandigarh/seo': {
    q: 'Who provides SEO in the Chandigarh Tricity?',
    a: 'Orizova Digital provides SEO and Google Maps optimisation across Chandigarh, Mohali, Panchkula and Zirakpur. Because customers search across the whole Tricity, it builds a focused set of service and area pages (without thin duplicates for every sector), strengthens your Google Business Profile and grows genuine reviews.',
  },
  '/locations/varanasi/website-development': {
    q: 'Who builds websites in Varanasi?',
    a: 'Orizova Digital is a website development company working with Varanasi hotels, homestays, Banarasi silk sellers, coaching institutes, hospitals and travel businesses. It plans, writes, designs and codes fast websites set up for Google from day one and connected to WhatsApp, so searches from across India turn into direct calls, bookings and orders without portal commissions.',
  },
};

moreCities.forEach((c) => Object.assign(answers, c.answers));

export default answers;
