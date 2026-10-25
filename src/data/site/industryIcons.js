// Icon + colour for each industry and industry group (decorative, used on the
// home page and /industries). Kept separate from siteIndex.js so the plain
// data file has no React imports.
import {
  FiActivity, FiSmile, FiDroplet, FiHome, FiPenTool, FiTruck, FiCoffee, FiKey, FiGift,
  FiShoppingBag, FiShoppingCart, FiTool, FiBookOpen, FiScissors, FiHeart, FiDollarSign,
  FiBriefcase, FiGlobe, FiCpu,
} from 'react-icons/fi';

export const industryIcons = {
  clinics: [FiActivity, '#E11D48'],
  'dental-clinics': [FiSmile, '#0EA5E9'],
  'skin-hair-clinics': [FiDroplet, '#DB2777'],
  'real-estate': [FiHome, '#C2650C'],
  architects: [FiPenTool, '#7C3AED'],
  'home-services': [FiTruck, '#0D9488'],
  'restaurants-cafes': [FiCoffee, '#D97706'],
  'hotels-travel': [FiKey, '#0284C7'],
  'events-weddings': [FiGift, '#EC4899'],
  'ecommerce-d2c': [FiShoppingBag, '#C026D3'],
  'retail-showrooms': [FiShoppingCart, '#EA580C'],
  'manufacturers-exporters': [FiTool, '#475569'],
  education: [FiBookOpen, '#16A34A'],
  'salons-beauty': [FiScissors, '#BE185D'],
  'fitness-wellness': [FiHeart, '#EF4444'],
  'finance-loan-agents': [FiDollarSign, '#15803D'],
  'professional-services': [FiBriefcase, '#1D4ED8'],
  'immigration-consultants': [FiGlobe, '#0369A1'],
  'startups-saas': [FiCpu, '#4C0E82'],
};

export const groupMeta = {
  Healthcare: { icon: FiActivity, color: '#E11D48', desc: 'Patients search, compare reviews and book within minutes — and medical advertising has strict rules.' },
  'Property, design & home': { icon: FiHome, color: '#C2650C', desc: 'Big-ticket, visual decisions: portfolios, site visits and fast follow-up win the deal.' },
  'Food, hospitality & events': { icon: FiCoffee, color: '#D97706', desc: 'Chosen on Google Maps and Instagram — photos, reviews and timing matter most.' },
  'Retail, e-commerce & manufacturing': { icon: FiShoppingBag, color: '#C026D3', desc: 'From store visits and online orders to B2B buyers sourcing suppliers across India.' },
  Education: { icon: FiBookOpen, color: '#16A34A', desc: 'Admissions are decided months in advance — visibility and follow-up must be ready early.' },
  'Beauty & wellness': { icon: FiScissors, color: '#BE185D', desc: 'Appointment businesses that grow on nearby searches, reels and repeat visits.' },
  'Finance, professional & tech': { icon: FiBriefcase, color: '#1D4ED8', desc: 'Trust-first buyers, compliance-heavy ads and long research cycles.' },
};
