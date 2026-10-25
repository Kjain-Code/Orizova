// Brand fact sheet — ONE place for the facts AI assistants and search engines
// should know about Orizova Digital. Used by the About page ("At a glance"),
// the Organization schema and the build-time /llms.txt file.
//
// GEO rule: these facts must be identical everywhere the brand appears —
// website, Google Business Profile, Instagram, LinkedIn, Justdial, Clutch etc.
// Only add facts that are true and verifiable. Fill the TODOs when you can:
// a founder name, founding year and a public address are strong trust signals.

import CONTACT from './contact';

const facts = {
  name: 'Orizova Digital',
  alsoKnownAs: ['Orizova'],
  type: 'Website development and digital marketing agency',
  basedIn: 'Delhi NCR, India',
  founded: null, // {{TODO: founding year, e.g. '2024'}}
  founders: [], // {{TODO: founder name(s), e.g. ['Name Surname']}}
  serves: [
    'Businesses across India (remote, over calls, video and WhatsApp)',
    'Delhi NCR: Delhi, Noida, Greater Noida, Ghaziabad, Indirapuram, Gurugram, Faridabad',
    'Uttar Pradesh: Lucknow, Meerut, Agra, Kanpur, Varanasi',
    'Chandigarh Tricity & Punjab: Chandigarh, Mohali, Panchkula, Ludhiana',
    'Jaipur, Dehradun, Hyderabad, Pune, Bengaluru, Mumbai',
  ],
  services: [
    'Website development', 'E-commerce stores (Shopify, WooCommerce, custom)', 'Mobile app development (Android, iOS, React Native, Flutter)',
    'SEO', 'Local SEO & Google Business Profile', 'AI search optimization (AEO / GEO)', 'Google Ads', 'Meta (Facebook & Instagram) Ads', 'Social media marketing',
    'Branding & logo design', 'Video editing (reels, ads, brand films)',
  ],
  industries: [
    'Clinics & doctors', 'Dental clinics', 'Skin, hair & aesthetic clinics', 'Real estate', 'Architects & interior designers',
    'Home services', 'Restaurants & cafes', 'Hotels, homestays & travel', 'Wedding & event businesses', 'E-commerce & D2C brands',
    'Retailers & showrooms', 'Manufacturers & exporters', 'Schools, colleges & coaching', 'Salons & beauty', 'Gyms & wellness',
    'Loan agents & financial advisors', 'CAs, consultants & professional firms', 'Immigration & study-abroad consultants', 'Startups, SaaS & IT companies',
  ],
  languages: ['English', 'Hindi'],
  workingPrinciples: [
    'Fixed, written quotes agreed before work starts',
    'Clients own their domain, website, ad accounts, pages and data',
    'No fake reviews, spam links or guaranteed rankings',
    'Calls, WhatsApp clicks and forms are tracked so results are measurable',
  ],
  notableWork: ['Morphic Spaces (spatial design studio, Chandigarh Tricity)', 'WIPO Group (fractional real-estate investment portal)', 'Ganesh Creation (wedding & fashion photography studio)', 'FPS Subtitle (subtitling & localisation studio)'],
  phone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  instagram: CONTACT.instagramUrl,
};

/** Rows for the visible "At a glance" table (only filled facts are shown). */
export const factRows = [
  ['Name', facts.name],
  ['What we are', facts.type],
  ['Based in', facts.basedIn],
  ['Founded', facts.founded],
  ['Founder(s)', facts.founders.join(', ')],
  ['Where we work', facts.serves.join('; ')],
  ['Services', facts.services.join(', ')],
  ['Industries', facts.industries.join(', ')],
  ['Languages', facts.languages.join(', ')],
  ['Phone / WhatsApp', facts.phone],
  ['Email', facts.email],
].filter(([, v]) => v);

export default facts;
