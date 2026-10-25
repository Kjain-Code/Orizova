// Mumbai: city hub + city × service pages (original copy).
const hub = {
  slug: 'mumbai',
  city: 'Mumbai',
  region: 'Maharashtra',
  tagline: 'Websites, SEO & performance marketing for Mumbai D2C and fashion brands, financial services, real estate, clinics, restaurants and media businesses — Andheri to Lower Parel, Thane to Navi Mumbai',
  intro:
    "Mumbai is India’s commercial capital: finance and professional services in BKC, Nariman Point and Lower Parel, fashion and D2C brands, media and entertainment in Andheri and Goregaon, and one of the country’s most expensive real-estate markets stretching from South Mumbai to Thane and Navi Mumbai. Orizova Digital works remotely with Mumbai businesses on websites, e-commerce, SEO and Google and Meta campaigns that are measured on leads and revenue.",
  areas: ['Andheri', 'Bandra', 'Lower Parel', 'BKC', 'Powai', 'Goregaon & Malad', 'Borivali', 'Dadar', 'Thane', 'Navi Mumbai'],
  industries: ['D2C, fashion & lifestyle brands', 'Financial & professional services', 'Real estate', 'Aesthetic & dental clinics', 'Restaurants & cafes', 'Media & creators'],
  focus:
    'Mumbai campaigns are expensive and audiences are sophisticated. We focus on brand-quality creative and websites, precise targeting by area and audience, and tracking that shows true cost per customer.',
  sections: [
    {
      type: 'prose',
      tag: 'The Mumbai market',
      h2: 'High stakes, high standards',
      paras: [
        'In Mumbai, customers compare your brand with the best in the country. A fashion label’s website sits next to large D2C brands in a buyer’s mind; a financial advisor competes with national platforms; a real-estate project competes with dozens of launches every quarter. Execution quality — design, speed, clarity, follow-up — decides who wins.',
        'Geography matters, too. The western suburbs, central Mumbai, Thane and Navi Mumbai are distinct markets with different buyers. Local businesses should target the catchment they can actually serve rather than "Mumbai" as a whole.',
      ],
    },
    {
      type: 'cards',
      tag: 'Where to start',
      h2: 'Popular starting points in Mumbai',
      items: [
        { title: 'Website development in Mumbai', desc: 'Brand sites, D2C stores and professional services websites.', to: '/locations/mumbai/website-development', cta: 'Websites in Mumbai' },
        { title: 'SEO in Mumbai', desc: 'E-commerce, professional services and local SEO.', to: '/locations/mumbai/seo', cta: 'SEO company in Mumbai' },
        { title: 'D2C & e-commerce', desc: 'Stores and performance marketing.', to: '/industries/ecommerce-d2c' },
        { title: 'Financial services', desc: 'Trust-first websites and compliant lead generation.', to: '/industries/finance-loan-agents' },
      ],
    },
  ],
  faqs: [
    ['Do you work with Mumbai businesses remotely?', 'Yes. Our team is based in Delhi NCR and works with Mumbai clients over video calls, shared dashboards and WhatsApp.'],
    ['Can you build a Shopify store for a fashion brand?', 'Yes — collection structure, size guides, lookbooks, fast product pages and UPI checkout. See [D2C & e-commerce](/industries/ecommerce-d2c).'],
    ['Do you work with financial advisors and CA firms?', 'Yes, with content and ads that follow the rules for your profession. See [professional services](/industries/professional-services).'],
    ['Can you run ads only in Thane or Navi Mumbai?', 'Yes, by radius, pin code or locality on both Meta and Google.'],
  ],
};

const pages = [
  {
    city: 'mumbai',
    service: 'website-development',
    label: 'Website development company in Mumbai',
    banner: 'Brand websites, Shopify and custom D2C stores, professional services sites and real-estate microsites for Mumbai businesses — premium, fast and built to convert.',
    intro: {
      h2: 'Websites that match a Mumbai brand’s ambition',
      paras: [
        'Mumbai brands often invest heavily in product, shoots and campaigns — and then send that traffic to a website that undersells them. Slow lookbooks, cluttered product pages and weak trust signals lose customers who were ready to buy.',
        'We build premium, fast websites that carry your brand properly: refined design, smooth browsing on mobile, clear product and service pages, and conversion tracking that tells you which campaigns drive real sales.',
      ],
    },
    blocks: [
      {
        type: 'cards',
        tag: 'Popular in Mumbai',
        h2: 'Websites we build for Mumbai businesses',
        items: [
          { title: 'Fashion & lifestyle stores', desc: 'Collections, lookbooks, size guides and fast checkout.', to: '/industries/ecommerce-d2c' },
          { title: 'Professional services sites', desc: 'Trust-first websites for CAs, advisors and consultants.', to: '/industries/professional-services' },
          { title: 'Real-estate microsites', desc: 'Project pages with RERA details, amenities and site-visit booking.', to: '/industries/real-estate' },
          { title: 'Clinic websites', desc: 'Aesthetic and dental treatments, doctors and booking.', to: '/industries/skin-hair-clinics' },
          { title: 'Restaurant websites', desc: 'Menus, reservations and private events.', to: '/industries/restaurants-cafes' },
          { title: 'Creator & media portfolios', desc: 'Showreels, case studies and brand enquiries.', to: '/industries/events-weddings' },
        ],
      },
      {
        type: 'process',
        h2: 'How we work',
        steps: [
          { title: 'Brand & goals', desc: 'What the site must achieve.' },
          { title: 'Structure', desc: 'Pages, journeys and copy.' },
          { title: 'Design', desc: 'Premium UI approved by you.' },
          { title: 'Build', desc: 'Fast code, tracking and SEO.' },
          { title: 'Optimise', desc: 'Improve based on data.' },
        ],
      },
      { type: "prose", tag: "Mumbai areas", h2: "Website development across Mumbai", bullets: ["**Lower Parel, BKC & Fort** — finance, professional services and corporates", "**Bandra, Khar & Juhu** — fashion, lifestyle, restaurants and clinics", "**Andheri, Goregaon & Malad** — media, creators, startups and D2C brands", "**Thane & Navi Mumbai** — schools, clinics, retail and real estate"] },
      { type: "prose", tag: "Cost", h2: "Website development cost in Mumbai", paras: ["Price depends on design depth, number of templates, product count and integrations such as ERPs or CRMs. We share a fixed, itemised quote after discovery, with clear milestones."] },
      {
        type: 'faq',
        faqs: [
          ['Shopify or custom?', 'Shopify for most fashion and lifestyle brands; custom when you need unusual features or maximum performance.'],
          ['Can you migrate our existing store?', 'Yes, including products, customers and URL redirects to protect SEO.'],
          ['What does it cost?', 'Fixed, itemised quote after discovery.'],
          ['Do you do SEO?', 'Yes — see [SEO in Mumbai](/locations/mumbai/seo).'],
        ],
      },
    ],
  },
  {
    city: 'mumbai',
    service: 'seo',
    label: 'SEO company in Mumbai',
    banner: 'E-commerce, professional services and local SEO for Mumbai businesses — from category pages to Google Maps.',
    intro: {
      h2: 'Win the searches your competitors overlook',
      paras: [
        'Broad Mumbai keywords are dominated by large brands and aggregators. Smaller businesses win by targeting specific products, services and neighbourhoods — "linen co-ord sets", "CA for startups in Andheri", "dermatologist in Powai" — where intent is high and competition manageable.',
        'We build that focused keyword map, fix technical issues, create pages that deserve to rank and strengthen local signals where they matter.',
      ],
    },
    blocks: [
      {
        type: 'prose',
        tag: 'What we do',
        h2: 'Our SEO services in Mumbai',
        bullets: [
          'Category and product SEO for D2C and fashion brands',
          'Service and expertise content for professional services',
          'Google Business Profile and reviews by area',
          'Technical SEO for Shopify and custom sites',
          'Digital PR and earned mentions',
          'Reporting on revenue and leads',
        ],
      },
      {
        type: 'cards',
        tag: 'Industries',
        h2: 'Mumbai businesses we often help',
        items: [
          { title: 'D2C & fashion', desc: 'Category and product SEO.', to: '/industries/ecommerce-d2c' },
          { title: 'Professional services', desc: 'Expertise-led content.', to: '/industries/professional-services' },
          { title: 'Clinics', desc: 'Area-level Maps visibility.', to: '/industries/skin-hair-clinics' },
          { title: 'Restaurants', desc: 'Maps, reviews and menus.', to: '/industries/restaurants-cafes' },
        ],
      },
      { type: "prose", tag: "Mumbai specifics", h2: "Western suburbs, island city, Thane and Navi Mumbai", paras: ["Mumbai behaves like several cities. Someone in Borivali will rarely travel to Colaba for a dentist, and a Thane family searches for schools and clinics in Thane, not ‘Mumbai’. Local SEO should be built around your real catchment: the Google profile for each branch, area pages only where you genuinely serve, and reviews that mention the locality.", "For D2C and professional services, the city matters less than competition. Specific product and service pages, original expertise and earned mentions in publications usually decide rankings."], bullets: ["**Andheri, Goregaon & Malad** — media, creators, startups and retail", "**Bandra, Khar & Juhu** — premium clinics, restaurants and fashion", "**Lower Parel, BKC & Fort** — finance, professional services and corporates", "**Thane & Navi Mumbai** — families, schools, clinics and residential projects"] },
      {
        type: 'faq',
        faqs: [
          ['How long does SEO take in Mumbai?', 'Local work shows earlier; competitive product and service searches take several months.'],
          ['Do you guarantee rankings?', 'No. We guarantee consistent work and honest reporting.'],
          ['Do you do SEO for Shopify?', 'Yes — collections, product content, speed and structured data.'],
          ['Do you run ads?', 'Yes — [Google Ads](/services/google-ads) and [Meta Ads](/services/meta-ads).'],
        ],
      },
    ],
  },
];

const answers = {
  '/locations/mumbai': {
    q: 'Which digital marketing agency works with Mumbai businesses?',
    a: 'Orizova Digital works remotely with Mumbai businesses — D2C, fashion and lifestyle brands, financial and professional services, real-estate projects, aesthetic and dental clinics, restaurants and media businesses across Andheri, Bandra, Lower Parel, Powai, Thane and Navi Mumbai — on websites, e-commerce, SEO and Google and Meta campaigns measured on leads and revenue.',
  },
  '/locations/mumbai/website-development': {
    q: 'Who builds websites for Mumbai brands?',
    a: 'Orizova Digital builds premium, fast websites for Mumbai businesses: Shopify and custom stores for fashion and D2C brands, trust-first sites for CAs, advisors and consultants, real-estate microsites, clinic and restaurant websites, and creator portfolios — with conversion tracking and SEO from launch.',
  },
  '/locations/mumbai/seo': {
    q: 'Who provides SEO services in Mumbai?',
    a: 'Orizova Digital provides SEO for Mumbai businesses by targeting specific products, services and neighbourhoods where intent is high: category and product SEO for D2C brands, expertise content for professional services, Google Business Profile by area for clinics and restaurants, technical SEO and digital PR, with reporting on revenue and leads.',
  },
};

const meta = {
  '/locations/mumbai': { title: 'Digital Marketing Agency in Mumbai | Orizova Digital', description: 'Websites, SEO and performance marketing for Mumbai D2C and fashion brands, professional services, real estate, clinics and restaurants.', h1: 'Digital Marketing Agency in Mumbai' },
  '/locations/mumbai/website-development': { title: 'Website Development Company in Mumbai | Orizova', description: 'Premium websites for Mumbai brands: Shopify and custom stores, professional services sites, real-estate microsites, clinic and restaurant websites.', h1: 'Website Development Company in Mumbai' },
  '/locations/mumbai/seo': { title: 'SEO Company in Mumbai – E-commerce & Local SEO', description: 'Focused SEO for Mumbai D2C brands, professional services, clinics and restaurants — products, services and neighbourhoods with real intent.', h1: 'SEO Company in Mumbai' },
};

const city = { hub, pages, answers, meta };
export default city;
