// Case studies (/case-studies) + the "Results" strip on the home page.
//
// RULES (keep the site honest):
//  - Only real numbers, straight from the ad account / WhatsApp. No rounding up.
//  - Write "enquiries", not "leads".
//  - No client name or logo unless the client has said yes in writing.
//
// Two kinds: kind: 'ads' (numbers calculated from enquiries + adSpend) and
// kind: 'seo' (give `big` + 3 `stats` straight from Search Console).
//
// HOW TO ADD A NEW CASE STUDY: copy an object below, paste it at the TOP of
// the list (newest first) and change the values. Cost per enquiry and the
// "~₹2.6K" style spend are calculated automatically from `enquiries` and
// `adSpend`, so they always match.
//
//   slug        short unique id, used as #anchor on /case-studies
//   industry    e.g. 'Real Estate'
//   type        what was promoted, e.g. 'Villa Plots'
//   city        e.g. 'Hyderabad'
//   headline    the result in one line
//   enquiries   number of enquiries (the big number)
//   enquiryLabel  what the big number means
//   days        how many days the ads ran
//   adSpend     total ad spend in ₹ (approx is fine — set approx: true)
//   approx      true → numbers shown with "~"
//   whatWeDid   exactly 3 short points
//   start / end dates as 'YYYY-MM-DD'
//   service     link to the service page that matches the work
//   creatives   optional: ids from creativeWork.js of the ads used in THIS
//               campaign — shown under the card as "The ads behind this result"
//   note        optional: one honest line on how results were counted
//
// PROOF (optional — each part shows only when you fill it, so nothing fake):
//   meta        numbers copied from Meta Ads Manager for the same dates:
//               { reach: 18500, impressions: 42000, linkClicks: 610, ctr: 1.45 }
//               (fill only the ones you have; leave the rest out)
//   daily       enquiries per day from Ads Manager (Breakdown → By time → Day):
//               [{ date: '2026-11-18', enquiries: 5 }, ...] → small bar chart
//   campaigns   rows exactly as in Ads Manager (same dates) → report table +
//               chart: [{ name, results, costPerResult, spent }]
//   proof       screenshots in src/assets/case-studies/ — BLUR client name,
//               phone numbers and faces first. Import at the top of this file:
//               import adsShot from '../../assets/case-studies/hyd-plots-ads-manager.webp';
//               proof: [{ image: adsShot, caption: 'Meta Ads Manager — 18–23 Nov 2026' }]
//   proofNote   optional line under the screenshots, e.g. what was blurred
import hydAdsManager from '../../assets/case-studies/hyd-plots-ads-manager.webp';
import orizovaGsc from '../../assets/case-studies/orizova-search-console-3-months.webp';

const caseStudies = [
  {
    kind: 'ads',
    slug: 'real-estate-villa-plots-hyderabad',
    industry: 'Real Estate',
    type: 'Villa Plots',
    city: 'Hyderabad',
    headline: '39 Enquiries in Just 6 Days',
    enquiries: 39,
    enquiryLabel: 'WhatsApp enquiries from interested plot buyers',
    days: 6,
    adSpend: 2626.75,
    approx: true,
    whatWeDid: [
      'Click-to-WhatsApp ads on Facebook & Instagram',
      'Project-focused creatives with price & location highlighted',
      'Targeted buyers in and around the project area',
    ],
    start: '2026-11-18',
    end: '2026-11-23',
    service: { label: 'Meta Ads', to: '/services/meta-ads' },
    creatives: [],
    note: 'Enquiries = new WhatsApp chats started by people who clicked the ads.',
    meta: null,
    daily: [],
    // Copied from Meta Ads Manager, 18–23 Nov 2026 (result = messaging conversations started).
    campaigns: [
      { name: 'Campaign 1 — "project 2"', results: 12, costPerResult: 79.77, spent: 957.24 },
      { name: 'Campaign 2 — "New Engagement campaign"', results: 27, costPerResult: 61.83, spent: 1669.51 },
    ],
    proof: [
      { image: hydAdsManager, caption: 'Meta Ads Manager — 18–23 Nov 2026 (account name blurred)' },
    ],
    proofNote: 'Only the ad account name and profile picture are blurred, for the client’s privacy.',
  },
  {
    // SEO case study: numbers copied from Google Search Console (screenshot below).
    kind: 'seo',
    slug: 'orizova-digital-seo-search-console',
    industry: 'Digital Agency',
    type: 'Our Own Website',
    city: 'Delhi NCR',
    headline: 'From Almost Zero to 200+ Google Impressions a Day',
    big: { value: '4,030', label: 'Google search impressions in 3 months' },
    stats: [
      { value: '90', label: 'Clicks from Google' },
      { value: '2.2%', label: 'Average CTR' },
      { value: '30.5', label: 'Average position' },
    ],
    whatWeDid: [
      'Rebuilt the site as fast, pre-rendered pages for every service, city and industry',
      'Schema markup, answer-first summaries, sitemap and instant indexing (IndexNow)',
      'Helpful blogs on costs and how-tos that link to the right service pages',
    ],
    note: 'Search Console shows the last 3 months: impressions stay near zero in September and climb past 200 a day by mid-November.',
    start: '2026-09-11',
    end: '2026-11-22',
    service: { label: 'SEO', to: '/services/seo' },
    more: { label: 'Full website case study', to: '/portfolio/orizova-digital' },
    proof: [
      { image: orizovaGsc, caption: 'Google Search Console — Performance, last 3 months (to 22 Nov 2026)' },
    ],
  },
];

/* ---------- helpers (no need to edit) ---------- */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const parse = (d) => { const [y, mo, da] = d.split('-').map(Number); return { y, m: mo - 1, d: da }; };

/** '18–23 Nov 2026', '28 Nov – 3 Dec 2026', '28 Dec 2026 – 4 Jan 2027' */
export const formatRange = (start, end) => {
  const a = parse(start); const b = parse(end);
  if (a.y !== b.y) return `${a.d} ${MONTHS[a.m]} ${a.y} – ${b.d} ${MONTHS[b.m]} ${b.y}`;
  if (a.m !== b.m) return `${a.d} ${MONTHS[a.m]} – ${b.d} ${MONTHS[b.m]} ${b.y}`;
  return `${a.d}–${b.d} ${MONTHS[b.m]} ${b.y}`;
};

/** 2600 → '₹2.6K', 125000 → '₹1.25L', 650 → '₹650' */
export const formatRupees = (n) => {
  if (n >= 100000) return `₹${+(n / 100000).toFixed(2)}L`;
  if (n >= 1000) return `₹${+(n / 1000).toFixed(1)}K`;
  return `₹${Math.round(n)}`;
};

/** Adds ready-to-show values: big number, 3 stats and the date range.
 *  Ads case studies calculate them; SEO ones give `big` and `stats` directly. */
export const withStats = (cs) => {
  if (cs.kind === 'seo') return { ...cs, period: formatRange(cs.start, cs.end) };
  const tilde = cs.approx ? '~' : '';
  const cpe = cs.enquiries ? Math.round(cs.adSpend / cs.enquiries) : null;
  return {
    ...cs,
    costPerEnquiry: cpe,
    cpeText: cpe != null ? `${tilde}₹${cpe}` : '—',
    spendText: `${tilde}${formatRupees(cs.adSpend)}`,
    period: formatRange(cs.start, cs.end),
    big: { value: String(cs.enquiries), label: cs.enquiryLabel },
    stats: [
      { value: String(cs.days), label: 'Days of ads' },
      { value: cpe != null ? `${tilde}₹${cpe}` : '—', label: 'Avg cost per enquiry' },
      { value: `${tilde}${formatRupees(cs.adSpend)}`, label: 'Total ad spend' },
    ],
  };
};

export const caseStudiesWithStats = caseStudies.map(withStats);

export default caseStudies;
