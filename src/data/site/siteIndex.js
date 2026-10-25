// Lightweight index of content pages, used by the navbar, footer and home
// page (which ship in the main bundle). The long-form copy lives in
// data/services, data/locations, data/industries and data/blog and is only loaded on the pages that need it.

// group: used to organise /industries; featured: shown in the navbar,
// footer and home page (the rest are on /industries and inside pages).
export const industryGroups = [
  'Healthcare',
  'Property, design & home',
  'Food, hospitality & events',
  'Retail, e-commerce & manufacturing',
  'Education',
  'Beauty & wellness',
  'Finance, professional & tech',
];

export const industriesIndex = [
  { slug: 'clinics', group: 'Healthcare', featured: true, name: 'Clinics & Doctors', short: 'Websites, Google Maps visibility and patient-friendly marketing for clinics, dermatologists, physiotherapists, hospitals and diagnostic centres.' },
  { slug: 'dental-clinics', group: 'Healthcare', featured: true, name: 'Dental Clinics', short: 'Treatment pages, Google Maps ranking, genuine reviews and Google Ads for implants, aligners, root canals and family dentistry.' },
  { slug: 'skin-hair-clinics', group: 'Healthcare', name: 'Skin, Hair & Aesthetic Clinics', short: 'Compliant marketing for dermatology, hair transplant, laser and aesthetic clinics — treatment pages, consultations and qualified leads.' },
  { slug: 'real-estate', group: 'Property, design & home', featured: true, name: 'Real Estate', short: 'Project landing pages, Meta lead ads, Google search and WhatsApp follow-up for builders, brokers and channel partners.' },
  { slug: 'architects', group: 'Property, design & home', featured: true, name: 'Architects & Interior Designers', short: 'Portfolio-led websites, Instagram and local SEO for architects, interior designers and design-build studios.' },
  { slug: 'home-services', group: 'Property, design & home', name: 'Home Services', short: 'Leads for packers and movers, AC and appliance repair, pest control, cleaning, modular kitchens and other home services.' },
  { slug: 'restaurants-cafes', group: 'Food, hospitality & events', featured: true, name: 'Restaurants & Cafes', short: 'Google Maps, reviews, Instagram reels and local ads for restaurants, cafes, bakeries and cloud kitchens.' },
  { slug: 'hotels-travel', group: 'Food, hospitality & events', name: 'Hotels, Homestays & Travel', short: 'Direct-booking websites, Google hotel visibility and campaigns for hotels, homestays, resorts, tour operators and travel agents.' },
  { slug: 'events-weddings', group: 'Food, hospitality & events', name: 'Wedding & Event Businesses', short: 'Websites, Instagram and enquiry campaigns for banquet halls, wedding planners, photographers, decorators and caterers.' },
  { slug: 'ecommerce-d2c', group: 'Retail, e-commerce & manufacturing', featured: true, name: 'E-commerce & D2C Brands', short: 'Shopify and custom stores, product SEO and performance marketing for D2C, fashion, beauty, food and lifestyle brands.' },
  { slug: 'retail-showrooms', group: 'Retail, e-commerce & manufacturing', name: 'Retailers, Showrooms & Dealers', short: 'Store-visit marketing for jewellers, furniture, electronics, fashion and auto showrooms, dealers and distributors.' },
  { slug: 'manufacturers-exporters', group: 'Retail, e-commerce & manufacturing', featured: true, name: 'Manufacturers & Exporters', short: 'Catalogue websites, product SEO and B2B lead generation for manufacturers, exporters, traders and industrial suppliers.' },
  { slug: 'education', group: 'Education', featured: true, name: 'Schools, Colleges & Coaching', short: 'Admission-focused websites, course SEO and enquiry campaigns for schools, colleges, coaching institutes and training centres.' },
  { slug: 'salons-beauty', group: 'Beauty & wellness', name: 'Salons & Beauty Studios', short: 'Bookings from Google Maps and Instagram for salons, nail studios, makeup artists, spas and beauty academies.' },
  { slug: 'fitness-wellness', group: 'Beauty & wellness', name: 'Gyms, Fitness & Wellness', short: 'Membership and trial-class marketing for gyms, yoga and fitness studios, dietitians and wellness coaches.' },
  { slug: 'finance-loan-agents', group: 'Finance, professional & tech', name: 'Finance & Loan Agents', short: 'Trust-first websites, compliant lead generation and WhatsApp follow-up for loan agents, DSAs, insurance and financial advisors.' },
  { slug: 'professional-services', group: 'Finance, professional & tech', name: 'CAs, Consultants & Professional Firms', short: 'Credible websites and expertise-led content for CA and tax firms, consultants, HR and compliance firms and law practices.' },
  { slug: 'immigration-consultants', group: 'Finance, professional & tech', name: 'Immigration & Study-Abroad Consultants', short: 'Policy-compliant ads, qualifying lead forms and trust-building websites for visa, immigration, study-abroad and IELTS/PTE businesses.' },
  { slug: 'startups-saas', group: 'Finance, professional & tech', name: 'Startups, SaaS & IT Companies', short: 'Positioning-led websites, product pages, SEO and demand generation for startups, SaaS products and IT service companies.' },
];

export const cityServicesIndex = [
  { city: 'ghaziabad', service: 'website-development', label: 'Website development company in Ghaziabad' },
  { city: 'ghaziabad', service: 'seo', label: 'SEO company in Ghaziabad' },
  { city: 'noida', service: 'website-development', label: 'Website development company in Noida' },
  { city: 'noida', service: 'seo', label: 'SEO company in Noida' },
  { city: 'delhi', service: 'website-development', label: 'Website designing company in Delhi' },
  { city: 'delhi', service: 'seo', label: 'SEO company in Delhi' },
  { city: 'chandigarh', service: 'website-development', label: 'Website development company in Chandigarh' },
  { city: 'chandigarh', service: 'seo', label: 'SEO company in Chandigarh' },
  { city: 'varanasi', service: 'website-development', label: 'Website development company in Varanasi' },
  { city: 'lucknow', service: 'website-development', label: 'Website development company in Lucknow' },
  { city: 'lucknow', service: 'seo', label: 'SEO company in Lucknow' },
  { city: 'indirapuram', service: 'website-development', label: 'Website development company in Indirapuram' },
  { city: 'indirapuram', service: 'seo', label: 'SEO company in Indirapuram' },
  { city: 'gurugram', service: 'website-development', label: 'Website development company in Gurugram' },
  { city: 'gurugram', service: 'seo', label: 'SEO company in Gurugram' },
  { city: 'faridabad', service: 'website-development', label: 'Website development company in Faridabad' },
  { city: 'faridabad', service: 'seo', label: 'SEO company in Faridabad' },
  { city: 'greater-noida', service: 'website-development', label: 'Website development company in Greater Noida' },
  { city: 'greater-noida', service: 'seo', label: 'SEO company in Greater Noida' },
  { city: 'meerut', service: 'website-development', label: 'Website development company in Meerut' },
  { city: 'meerut', service: 'seo', label: 'SEO company in Meerut' },
  { city: 'mohali', service: 'website-development', label: 'Website development company in Mohali' },
  { city: 'mohali', service: 'seo', label: 'SEO company in Mohali' },
  { city: 'panchkula', service: 'website-development', label: 'Website development company in Panchkula' },
  { city: 'panchkula', service: 'seo', label: 'SEO company in Panchkula' },
  { city: 'jaipur', service: 'website-development', label: 'Website development company in Jaipur' },
  { city: 'jaipur', service: 'seo', label: 'SEO company in Jaipur' },
  { city: 'agra', service: 'website-development', label: 'Website development company in Agra' },
  { city: 'agra', service: 'seo', label: 'SEO company in Agra' },
  { city: 'kanpur', service: 'website-development', label: 'Website development company in Kanpur' },
  { city: 'kanpur', service: 'seo', label: 'SEO company in Kanpur' },
  { city: 'dehradun', service: 'website-development', label: 'Website development company in Dehradun' },
  { city: 'dehradun', service: 'seo', label: 'SEO company in Dehradun' },
  { city: 'ludhiana', service: 'website-development', label: 'Website development company in Ludhiana' },
  { city: 'ludhiana', service: 'seo', label: 'SEO company in Ludhiana' },
  { city: 'hyderabad', service: 'website-development', label: 'Website development company in Hyderabad' },
  { city: 'hyderabad', service: 'seo', label: 'SEO company in Hyderabad' },
  { city: 'pune', service: 'website-development', label: 'Website development company in Pune' },
  { city: 'pune', service: 'seo', label: 'SEO company in Pune' },
  { city: 'bengaluru', service: 'website-development', label: 'Website development company in Bengaluru' },
  { city: 'bengaluru', service: 'seo', label: 'SEO company in Bengaluru' },
  { city: 'mumbai', service: 'website-development', label: 'Website development company in Mumbai' },
  { city: 'mumbai', service: 'seo', label: 'SEO company in Mumbai' },
];

// Which industries to link from each main service page ("Industries we do
// this for"), so services, industries and cities are all cross-linked.
export const serviceIndustries = {
  'website-development': ['clinics', 'dental-clinics', 'real-estate', 'architects', 'education', 'hotels-travel', 'manufacturers-exporters', 'startups-saas', 'professional-services'],
  'ecommerce-solutions': ['ecommerce-d2c', 'retail-showrooms', 'manufacturers-exporters'],
  'app-development': ['startups-saas', 'ecommerce-d2c', 'education', 'fitness-wellness', 'restaurants-cafes'],
  'digital-marketing': ['clinics', 'real-estate', 'education', 'ecommerce-d2c', 'immigration-consultants', 'finance-loan-agents', 'restaurants-cafes', 'skin-hair-clinics'],
  'social-media-marketing': ['restaurants-cafes', 'salons-beauty', 'fitness-wellness', 'events-weddings', 'ecommerce-d2c', 'architects', 'skin-hair-clinics'],
  'meta-ads': ['real-estate', 'education', 'immigration-consultants', 'skin-hair-clinics', 'ecommerce-d2c', 'finance-loan-agents', 'salons-beauty', 'events-weddings'],
  'google-ads': ['dental-clinics', 'clinics', 'home-services', 'manufacturers-exporters', 'education', 'immigration-consultants', 'startups-saas', 'skin-hair-clinics'],
  seo: ['manufacturers-exporters', 'startups-saas', 'ecommerce-d2c', 'clinics', 'education', 'hotels-travel', 'professional-services'],
  'local-seo': ['clinics', 'dental-clinics', 'restaurants-cafes', 'salons-beauty', 'home-services', 'retail-showrooms', 'fitness-wellness'],
  'ai-search-optimization': ['clinics', 'dental-clinics', 'professional-services', 'immigration-consultants', 'education', 'startups-saas', 'ecommerce-d2c', 'manufacturers-exporters'],
  'video-editing': ['restaurants-cafes', 'events-weddings', 'real-estate', 'skin-hair-clinics', 'salons-beauty', 'retail-showrooms', 'ecommerce-d2c'],
  'branding-designing': ['startups-saas', 'ecommerce-d2c', 'restaurants-cafes', 'architects', 'salons-beauty', 'professional-services'],
};

export const cityZones = ['Delhi NCR', 'Uttar Pradesh', 'Punjab, Haryana & Chandigarh Tricity', 'Rajasthan & Uttarakhand', 'South & West India'];

export const citiesIndex = [
  { slug: 'delhi', city: 'Delhi', region: 'Delhi', zone: 'Delhi NCR' },
  { slug: 'noida', city: 'Noida', region: 'Uttar Pradesh', zone: 'Delhi NCR' },
  { slug: 'greater-noida', city: 'Greater Noida', region: 'Gautam Buddh Nagar, Uttar Pradesh', zone: 'Delhi NCR' },
  { slug: 'ghaziabad', city: 'Ghaziabad', region: 'Uttar Pradesh', zone: 'Delhi NCR' },
  { slug: 'indirapuram', city: 'Indirapuram', region: 'Ghaziabad, Uttar Pradesh', zone: 'Delhi NCR' },
  { slug: 'gurugram', city: 'Gurugram', region: 'Haryana (Delhi NCR)', zone: 'Delhi NCR' },
  { slug: 'faridabad', city: 'Faridabad', region: 'Haryana (Delhi NCR)', zone: 'Delhi NCR' },
  { slug: 'lucknow', city: 'Lucknow', region: 'Uttar Pradesh', zone: 'Uttar Pradesh' },
  { slug: 'meerut', city: 'Meerut', region: 'Uttar Pradesh', zone: 'Uttar Pradesh' },
  { slug: 'agra', city: 'Agra', region: 'Uttar Pradesh', zone: 'Uttar Pradesh' },
  { slug: 'kanpur', city: 'Kanpur', region: 'Uttar Pradesh', zone: 'Uttar Pradesh' },
  { slug: 'varanasi', city: 'Varanasi', region: 'Varanasi (Banaras), Uttar Pradesh', zone: 'Uttar Pradesh' },
  { slug: 'chandigarh', city: 'Chandigarh', region: 'Chandigarh (Tricity)', zone: 'Punjab, Haryana & Chandigarh Tricity' },
  { slug: 'mohali', city: 'Mohali', region: 'SAS Nagar, Punjab (Chandigarh Tricity)', zone: 'Punjab, Haryana & Chandigarh Tricity' },
  { slug: 'panchkula', city: 'Panchkula', region: 'Haryana (Chandigarh Tricity)', zone: 'Punjab, Haryana & Chandigarh Tricity' },
  { slug: 'ludhiana', city: 'Ludhiana', region: 'Punjab', zone: 'Punjab, Haryana & Chandigarh Tricity' },
  { slug: 'jaipur', city: 'Jaipur', region: 'Rajasthan', zone: 'Rajasthan & Uttarakhand' },
  { slug: 'dehradun', city: 'Dehradun', region: 'Uttarakhand', zone: 'Rajasthan & Uttarakhand' },
  { slug: 'hyderabad', city: 'Hyderabad', region: 'Telangana', zone: 'South & West India' },
  { slug: 'bengaluru', city: 'Bengaluru', region: 'Karnataka', zone: 'South & West India' },
  { slug: 'pune', city: 'Pune', region: 'Maharashtra', zone: 'South & West India' },
  { slug: 'mumbai', city: 'Mumbai', region: 'Maharashtra', zone: 'South & West India' },
];

export const postsIndex = [
  { slug: 'get-recommended-by-chatgpt-google-ai', category: 'AI Search', readMins: 9, title: 'How to Get Your Business Recommended by ChatGPT and Google AI Overviews (2026 Guide)', excerpt: 'What AI answers actually rely on — and a practical checklist to make your business one they can find, trust and name.' },
  { slug: 'website-visitors-but-no-enquiries', category: 'Websites', readMins: 8, title: 'Website Gets Visitors but No Enquiries? 15 Fixes That Actually Work', excerpt: 'Traffic without calls usually means the page is unclear, slow, hard to trust or hard to act on. 15 practical fixes, in the order we check them.' },
  { slug: 'how-to-choose-digital-marketing-agency', category: 'Marketing', readMins: 8, title: 'How to Choose a Digital Marketing Agency in India: 15 Questions to Ask First', excerpt: 'Ask these 15 questions about ownership, reporting, pricing, lead quality and promises before you sign with any agency.' },
  { slug: 'website-cost-in-delhi-ncr', category: 'Websites', readMins: 8, title: 'How Much Does a Website Cost in Delhi NCR? A Practical Guide for 2026', excerpt: 'Why website quotes in Delhi NCR range so widely, what actually drives the price, and how to compare quotes without getting burnt.' },
  { slug: 'google-business-profile-guide', category: 'Local SEO', readMins: 9, title: 'Google Business Profile Optimisation: A Step-by-Step Guide for Local Businesses', excerpt: 'How to set up and optimise your Google Business Profile so you appear in Google Maps and the local pack — categories, photos, reviews, posts and common mistakes.' },
  { slug: 'meta-ads-vs-google-ads', category: 'Ads', readMins: 8, title: 'Meta Ads vs Google Ads: Which Is Better for Your Local Business?', excerpt: 'Google catches demand; Meta creates it. A plain-language comparison with examples for clinics, real estate, cafes, coaching and service businesses.' },
];

// Short guide titles + which pages each guide supports. Used by
// <RelatedGuides> so every blog post gets contextual links from the service,
// industry and city pages it helps (previously most posts were reachable only
// from /blog and their siblings).
export const guideIndex = [
  { slug: 'get-recommended-by-chatgpt-google-ai', label: 'Guide: get recommended by ChatGPT & Google AI', pages: ["/services/ai-search-optimization", "/services/seo", "/services/local-seo", "/industries/clinics", "/industries/dental-clinics", "/industries/professional-services", "/industries/immigration-consultants", "/industries/education", "/industries/startups-saas", "/locations/delhi/seo", "/locations/noida/seo", "/locations/gurugram/seo", "/locations/lucknow/seo", "/locations/jaipur/seo", "/locations/chandigarh/seo", "/locations/hyderabad/seo", "/locations/bengaluru/seo", "/locations/mumbai/seo", "/locations/pune/seo"] },
  { slug: 'website-visitors-but-no-enquiries', label: 'Guide: website visitors but no enquiries — 15 fixes', pages: ["/services/website-development", "/services/google-ads", "/services/meta-ads", "/services/digital-marketing", "/industries/clinics", "/industries/real-estate", "/industries/home-services", "/industries/retail-showrooms", "/locations/delhi/website-development", "/locations/noida/website-development", "/locations/gurugram/website-development", "/locations/lucknow/website-development", "/locations/jaipur/website-development", "/locations/chandigarh/website-development", "/locations/hyderabad/website-development", "/locations/bengaluru/website-development", "/locations/mumbai/website-development", "/locations/pune/website-development"] },
  { slug: 'how-to-choose-digital-marketing-agency', label: 'Checklist: 15 questions before hiring an agency', pages: ["/services/digital-marketing", "/services/seo", "/services/meta-ads", "/services/google-ads", "/services/social-media-marketing", "/about", "/locations", "/locations/delhi", "/locations/noida", "/locations/gurugram", "/locations/lucknow", "/locations/jaipur", "/locations/chandigarh", "/locations/hyderabad", "/locations/bengaluru", "/locations/mumbai", "/locations/pune"] },
  { slug: 'how-to-get-a-business-website-india', label: 'Guide: how to get a business website made', pages: ['/services/website-development', '/locations/varanasi/website-development', '/locations/delhi/website-development', '/locations/noida/website-development', '/locations/ghaziabad/website-development', '/locations/varanasi', '/locations/lucknow/website-development', '/locations/indirapuram/website-development', '/locations/gurugram/website-development', '/locations/faridabad/website-development', '/locations/greater-noida/website-development', '/locations/meerut/website-development', '/locations/mohali/website-development', '/locations/panchkula/website-development', '/locations/jaipur/website-development', '/locations/agra/website-development', '/locations/kanpur/website-development', '/locations/dehradun/website-development', '/locations/ludhiana/website-development', '/locations/hyderabad/website-development', '/locations/pune/website-development', '/locations/bengaluru/website-development', '/locations/mumbai/website-development', '/industries/startups-saas', '/industries/professional-services'] },
  { slug: 'website-development-cost-chandigarh', label: 'Guide: website development cost in Chandigarh', pages: ['/locations/chandigarh/website-development', '/locations/chandigarh', '/services/website-development', '/locations/mohali/website-development', '/locations/panchkula/website-development', '/locations/mohali', '/locations/panchkula'] },
  { slug: 'choose-web-development-company-chandigarh', label: 'Checklist: choosing a web development company in Chandigarh', pages: ['/locations/chandigarh/website-development', '/locations/chandigarh', '/industries/architects'] },
  { slug: 'website-cost-in-delhi-ncr', label: 'Guide: what a website costs in Delhi NCR', pages: ['/services/website-development', '/services/ecommerce-solutions', '/locations/ghaziabad/website-development', '/locations/noida/website-development', '/locations/delhi/website-development', '/locations/chandigarh/website-development', '/locations/varanasi/website-development', '/locations/indirapuram/website-development', '/locations/gurugram/website-development', '/locations/faridabad/website-development', '/locations/greater-noida/website-development', '/locations/meerut/website-development'] },
  { slug: 'google-business-profile-guide', label: 'Guide: optimise your Google Business Profile', pages: ['/services/local-seo', '/services/seo', '/industries/clinics', '/industries/restaurants-cafes', '/locations/ghaziabad', '/locations/noida', '/locations/delhi', '/locations/chandigarh', '/locations/ghaziabad/seo', '/locations/noida/seo', '/locations/delhi/seo', '/locations/chandigarh/seo', '/locations/lucknow/seo', '/locations/indirapuram/seo', '/locations/gurugram/seo', '/locations/faridabad/seo', '/locations/greater-noida/seo', '/locations/meerut/seo', '/locations/mohali/seo', '/locations/panchkula/seo', '/locations/jaipur/seo', '/locations/agra/seo', '/locations/kanpur/seo', '/locations/dehradun/seo', '/locations/ludhiana/seo', '/locations/hyderabad/seo', '/locations/pune/seo', '/locations/bengaluru/seo', '/locations/mumbai/seo', '/industries/dental-clinics', '/industries/salons-beauty', '/industries/home-services', '/industries/fitness-wellness', '/industries/retail-showrooms'] },
  { slug: 'local-seo-checklist', label: 'Local SEO checklist: 25 steps', pages: ['/services/local-seo', '/services/seo', '/locations/ghaziabad/seo', '/locations/noida/seo', '/locations/delhi/seo', '/locations/chandigarh/seo', '/locations/ghaziabad', '/locations/noida', '/locations/delhi', '/locations/chandigarh', '/locations/lucknow/seo', '/locations/indirapuram/seo', '/locations/gurugram/seo', '/locations/faridabad/seo', '/locations/greater-noida/seo', '/locations/meerut/seo', '/locations/mohali/seo', '/locations/panchkula/seo', '/locations/jaipur/seo', '/locations/agra/seo', '/locations/kanpur/seo', '/locations/dehradun/seo', '/locations/ludhiana/seo', '/locations/hyderabad/seo', '/locations/pune/seo', '/locations/bengaluru/seo', '/locations/mumbai/seo', '/locations/lucknow', '/locations/indirapuram', '/locations/gurugram', '/locations/faridabad', '/locations/greater-noida', '/locations/meerut', '/locations/mohali', '/locations/panchkula', '/locations/jaipur', '/locations/agra', '/locations/kanpur', '/locations/dehradun', '/locations/ludhiana', '/locations/hyderabad', '/locations/pune', '/locations/bengaluru', '/locations/mumbai'] },
  { slug: 'meta-ads-vs-google-ads', label: 'Meta Ads vs Google Ads: which first?', pages: ['/services/meta-ads', '/services/google-ads', '/services/digital-marketing', '/industries/ecommerce-d2c', '/industries/education', '/industries/skin-hair-clinics', '/industries/immigration-consultants'] },
  { slug: 'get-more-patients-clinic-online', label: 'How clinics get more patients online', pages: ['/industries/clinics', '/services/local-seo', '/services/google-ads', '/industries/dental-clinics', '/industries/skin-hair-clinics'] },
  { slug: 'real-estate-leads-meta-ads', label: 'Better real-estate leads from Meta ads', pages: ['/industries/real-estate', '/services/meta-ads', '/industries/immigration-consultants'] },
  { slug: 'instagram-ideas-restaurants-cafes', label: '30 Instagram ideas for restaurants & cafes', pages: ['/industries/restaurants-cafes', '/services/social-media-marketing', '/services/video-editing', '/industries/salons-beauty', '/industries/fitness-wellness', '/industries/events-weddings'] },
  { slug: 'architect-portfolio-website-tips', label: 'Portfolio website tips for architects', pages: ['/industries/architects', '/services/website-development', '/services/branding-designing', '/industries/events-weddings', '/industries/home-services'] },
  { slug: 'loan-agent-lead-generation', label: 'Lead generation for loan agents & DSAs', pages: ['/industries/finance-loan-agents', '/services/meta-ads', '/services/digital-marketing'] },
];
export const guidesFor = (path) => guideIndex.filter((g) => g.pages.includes(path));

const bySlug = (list) => Object.fromEntries(list.map((x) => [x.slug, x]));
export const industryMeta = bySlug(industriesIndex);
