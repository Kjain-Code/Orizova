// Social media management plans — Orizova Digital's own price list
// (given by Kritika, 24 Nov 2026). Shown on /services/social-media-marketing,
// the Instagram / Facebook / LinkedIn pages and the city pages, and sent to
// Google as Offer schema. Change prices or items HERE only.
//
// Monthly management fee only. Paid ads (Meta Ads) are a separate service and
// the ad budget is paid to Meta directly.

const socialPlans = [
  {
    id: 'essential',
    tier: 'Essential',
    name: 'Brand Presence',
    price: 6000,
    platforms: 'Instagram + Facebook',
    bestFor: 'Small businesses that need an active, professional page every week',
    items: [
      '4 Reels',
      '4 Static Posts',
      '8 Stories',
      'Content Calendar',
      'Captions & Hashtags',
      'Profile Optimization',
      'Monthly Performance Report',
    ],
  },
  {
    id: 'popular',
    tier: 'Most Popular',
    name: 'Brand Accelerator',
    price: 10000,
    popular: true,
    platforms: 'Instagram + Facebook',
    bestFor: 'Growing brands that want more reels, strategy and replies handled',
    items: [
      '8 Reels',
      '8 Static / Carousel Posts',
      '12–16 Stories',
      'Content Strategy & Calendar',
      'Reel Hooks & Scripting',
      'Captions & Hashtag Research',
      'Competitor Analysis',
      'Community Management',
      'Monthly Analytics Report',
    ],
  },
  {
    id: 'premium',
    tier: 'Premium',
    name: 'Brand Domination',
    price: 14000,
    platforms: null, // not fixed in the price list — confirmed per client
    bestFor: 'Brands that want to lead their category and turn followers into enquiries',
    items: [
      '12 Reels',
      '12 Static / Carousel Posts',
      '20–24 Stories',
      'Advanced Content Strategy',
      'Reel Scripting & Creative Direction',
      'Brand Storytelling',
      'Competitor & Trend Analysis',
      'Community Management',
      'Lead-focused Content Strategy',
      'Monthly Analytics & Consultation',
    ],
  },
];

export const formatINR = (n) => `₹${n.toLocaleString('en-IN')}`;
export const lowestPlan = socialPlans.reduce((a, b) => (a.price <= b.price ? a : b));

export default socialPlans;
