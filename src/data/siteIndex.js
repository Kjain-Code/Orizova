// Lightweight index of content pages, used by the navbar, footer and home
// page (which ship in the main bundle). The long-form copy lives in
// data/pages/* and data/blog/* and is only loaded on the pages that need it.

export const industriesIndex = [
  { slug: 'clinics', name: 'Clinics & Doctors', short: 'Websites, Google Maps visibility and patient-friendly marketing for clinics, dentists, dermatologists, physiotherapists and diagnostic centres.' },
  { slug: 'architects', name: 'Architects & Interior Designers', short: 'Portfolio-led websites, Instagram and local SEO for architects, interior designers and design-build studios.' },
  { slug: 'real-estate', name: 'Real Estate', short: 'Project landing pages, Meta lead ads, Google search and WhatsApp follow-up for builders, brokers and channel partners.' },
  { slug: 'restaurants-cafes', name: 'Restaurants & Cafes', short: 'Google Maps, reviews, Instagram reels and local ads for restaurants, cafes, bakeries and cloud kitchens.' },
  { slug: 'finance-loan-agents', name: 'Finance & Loan Agents', short: 'Trust-first websites, compliant lead generation and WhatsApp follow-up for loan agents, DSAs, insurance and financial advisors.' },
];

export const cityServicesIndex = [
  { city: 'ghaziabad', service: 'website-development', label: 'Website development in Ghaziabad' },
  { city: 'ghaziabad', service: 'seo', label: 'SEO company in Ghaziabad' },
  { city: 'noida', service: 'website-development', label: 'Website development in Noida' },
  { city: 'noida', service: 'seo', label: 'SEO company in Noida' },
  { city: 'delhi', service: 'website-development', label: 'Web design in Delhi' },
  { city: 'delhi', service: 'seo', label: 'SEO company in Delhi' },
  { city: 'chandigarh', service: 'website-development', label: 'Website development in Chandigarh' },
  { city: 'chandigarh', service: 'seo', label: 'SEO company in Chandigarh' },
];

export const postsIndex = [
  { slug: 'website-cost-in-delhi-ncr', category: 'Websites', readMins: 8, title: 'How Much Does a Website Cost in Delhi NCR? A Practical Guide for 2026', excerpt: 'Why website quotes in Delhi NCR range so widely, what actually drives the price, and how to compare quotes without getting burnt.' },
  { slug: 'google-business-profile-guide', category: 'Local SEO', readMins: 9, title: 'Google Business Profile Optimisation: A Step-by-Step Guide for Local Businesses', excerpt: 'How to set up and optimise your Google Business Profile so you appear in Google Maps and the local pack — categories, photos, reviews, posts and common mistakes.' },
  { slug: 'meta-ads-vs-google-ads', category: 'Ads', readMins: 8, title: 'Meta Ads vs Google Ads: Which Is Better for Your Local Business?', excerpt: 'Google catches demand; Meta creates it. A plain-language comparison with examples for clinics, real estate, cafes, coaching and service businesses.' },
];

// Short guide titles + which pages each guide supports. Used by
// <RelatedGuides> so every blog post gets contextual links from the service,
// industry and city pages it helps (previously most posts were reachable only
// from /blog and their siblings).
export const guideIndex = [
  { slug: 'website-cost-in-delhi-ncr', label: 'Guide: what a website costs in Delhi NCR', pages: ['/services/website-development', '/services/ecommerce-solutions', '/locations/ghaziabad/website-development', '/locations/noida/website-development', '/locations/delhi/website-development', '/locations/chandigarh/website-development'] },
  { slug: 'google-business-profile-guide', label: 'Guide: optimise your Google Business Profile', pages: ['/services/local-seo', '/services/seo', '/industries/clinics', '/industries/restaurants-cafes', '/locations/ghaziabad', '/locations/noida', '/locations/delhi', '/locations/chandigarh', '/locations/ghaziabad/seo', '/locations/noida/seo', '/locations/delhi/seo', '/locations/chandigarh/seo'] },
  { slug: 'local-seo-checklist', label: 'Local SEO checklist: 25 steps', pages: ['/services/local-seo', '/services/seo', '/locations/ghaziabad/seo', '/locations/noida/seo', '/locations/delhi/seo', '/locations/chandigarh/seo', '/locations/ghaziabad', '/locations/noida', '/locations/delhi', '/locations/chandigarh'] },
  { slug: 'meta-ads-vs-google-ads', label: 'Meta Ads vs Google Ads: which first?', pages: ['/services/meta-ads', '/services/google-ads', '/services/digital-marketing'] },
  { slug: 'get-more-patients-clinic-online', label: 'How clinics get more patients online', pages: ['/industries/clinics', '/services/local-seo', '/services/google-ads'] },
  { slug: 'real-estate-leads-meta-ads', label: 'Better real-estate leads from Meta ads', pages: ['/industries/real-estate', '/services/meta-ads'] },
  { slug: 'instagram-ideas-restaurants-cafes', label: '30 Instagram ideas for restaurants & cafes', pages: ['/industries/restaurants-cafes', '/services/social-media-marketing', '/services/video-editing'] },
  { slug: 'architect-portfolio-website-tips', label: 'Portfolio website tips for architects', pages: ['/industries/architects', '/services/website-development', '/services/branding-designing'] },
  { slug: 'loan-agent-lead-generation', label: 'Lead generation for loan agents & DSAs', pages: ['/industries/finance-loan-agents', '/services/meta-ads', '/services/digital-marketing'] },
];
export const guidesFor = (path) => guideIndex.filter((g) => g.pages.includes(path));

const bySlug = (list) => Object.fromEntries(list.map((x) => [x.slug, x]));
export const industryMeta = bySlug(industriesIndex);
