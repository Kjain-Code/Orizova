import wipoImg from '../../assets/portfolio/wipo-group.webp';
import ganeshImg from '../../assets/portfolio/ganesh-creation.webp';
import fpsImg from '../../assets/portfolio/fps-subtitle.webp';
import morphicImg from '../../assets/portfolio/morphic-spaces.webp';
import orizovaImg from '../../assets/portfolio/orizova-digital.webp';

// Real, live projects only. `built` lists what is visible on the live site.
// `scope`  — what we did on the project (shown on the card).
// `scores` — Google PageSpeed Insights (Lighthouse) scores, copied from a real
//            test at pagespeed.web.dev. Re-test and update `checked` when you
//            change a site. Leave `scores` out until a site has been tested.
// `results` — short, verifiable result lines (source in brackets).
// Results/metrics and client quotes must come from the client:
// {{TODO: add real client result + testimonial (with permission) for each project}}
const projects = [
  {
    id: 4,
    slug: 'morphic-spaces',
    title: "Morphic Spaces",
    category: "Website Development",
    industry: 'Architecture & interior design',
    desc: "A premium, image-led website for a Chandigarh Tricity spatial design studio working on contemporary residential, commercial and hospitality projects — with a cinematic full-screen hero, editorial serif typography and a project showcase.",
    tags: ["Architecture", "Interior Design", "Premium Portfolio"],
    color: "#4C0E82",
    image: morphicImg,
    link: "https://www.morphicspaces.com/",
    result: "Live Studio Website",
    scope: ['UI design', 'Development', 'Mobile-first', 'SEO setup'],
    scores: {
      checked: '3 Nov 2026',
      mobile: { performance: 94, accessibility: 100, bestPractices: 100, seo: 100 },
      desktop: { performance: 96, accessibility: 100, bestPractices: 100, seo: 100 },
    },
    brief: 'Morphic Spaces, a spatial design studio working across Chandigarh and the Tricity, focused on contemporary residential, commercial and hospitality projects, needed a website that feels as premium as the spaces it designs — and lets the architecture speak first.',
    built: [
      'A full-screen cinematic hero with large-format architectural imagery and a bold editorial serif headline',
      'A minimal, letter-spaced navigation with a services dropdown, projects, about and contact pages',
      'Project pages that present residential, commercial and hospitality work through photography',
      'A restrained dark, luxury visual language that keeps the focus on the studio’s work',
      'Responsive layouts so the imagery and typography hold up on phones as well as large screens',
    ],
    takeaway: 'For architects and interior designers the website is the portfolio. Big imagery, confident typography and very little clutter let prospective clients feel the quality of the work before they read a word — see our approach for [architects & interior designers](/industries/architects) and our [website development services in Chandigarh](/locations/chandigarh/website-development).',
    clientResult: null, // {{TODO: add real client result}}
    testimonial: null, // {{TODO: add client quote with permission}}
  },
  {
    id: 1,
    slug: 'wipo-group',
    title: "WIPO Group",
    category: "Website Development",
    industry: 'Real estate / FinTech',
    desc: "An interactive fractional real-estate investment portal with a live wallet dashboard, property listings, and a coin-trading interface.",
    tags: ["Real Estate", "FinTech", "Dashboard UI"],
    color: "#8B5CF6",
    image: wipoImg,
    link: "https://wipogroupinllc.com/",
    result: "Live Investment Platform",
    scope: ['UI design', 'Development', 'Dashboard UI', 'Responsive'],
    brief: 'WIPO Group needed an investment portal that makes fractional real-estate ownership feel simple and trustworthy for users who are new to the idea.',
    built: [
      'A wallet dashboard that shows a user’s balance and holdings in one place',
      'Property listings that present each investment opportunity clearly',
      'A coin-trading interface for buying and selling fractional units',
      'Responsive layouts so the dashboard works on phones as well as desktops',
    ],
    takeaway: 'Financial products depend on clarity. Dashboards, listings and trading screens were designed to keep numbers readable and actions obvious — the same principles we apply to any site handling money or sensitive decisions.',
    clientResult: null, // {{TODO: add real client result}}
    testimonial: null, // {{TODO: add client quote with permission}}
  },
  {
    id: 2,
    slug: 'ganesh-creation',
    title: "Ganesh Creation",
    category: "Website Development",
    industry: 'Photography',
    desc: "A cinematic portfolio website for a pan-India wedding and fashion photography studio, with an animated intro loader, filterable gallery, and team showcase.",
    tags: ["Photography", "Portfolio Site", "Animation"],
    color: "#C2650C",
    image: ganeshImg,
    link: "https://www.ganeshcreation.online/",
    result: "Live Studio Portfolio",
    scope: ['UI design', 'Development', 'Animation', 'Gallery'],
    brief: 'A wedding and fashion photography studio working across India wanted a website that feels as cinematic as its work and lets couples browse by the kind of shoot they are planning.',
    built: [
      'An animated intro loader that sets a cinematic tone',
      'A filterable gallery so visitors can browse by category',
      'A team showcase introducing the people behind the camera',
      'Image-led layouts designed around large photography',
    ],
    takeaway: 'Portfolio businesses sell with images. The same approach — curated galleries, filtering and a sense of the people behind the work — carries over to [architects and interior designers](/industries/architects).',
    clientResult: null, // {{TODO: add real client result}}
    testimonial: null, // {{TODO: add client quote with permission}}
  },
  {
    id: 3,
    slug: 'fps-subtitle',
    title: "FPS Subtitle",
    category: "Website Development",
    industry: 'Media & localisation',
    desc: "A corporate website for a Bollywood subtitling, translation, and localization studio, with rotating multilingual hero messaging and a full service breakdown.",
    tags: ["Localization", "Corporate Site", "Multilingual"],
    color: "#FF6B4A",
    image: fpsImg,
    link: "https://fpssubtitle.com/",
    result: "Live Corporate Site",
    scope: ['UI design', 'Development', 'Multilingual', 'Service pages'],
    brief: 'A subtitling, translation and localisation studio serving the film industry needed a corporate website that communicates its multilingual capability at a glance.',
    built: [
      'Rotating multilingual hero messaging that demonstrates the service immediately',
      'A full breakdown of subtitling, translation and localisation services',
      'A corporate structure suited to B2B clients from studios and production houses',
    ],
    takeaway: 'B2B service companies need clear service pages and instant credibility. Showing the capability — here, multiple languages — is more convincing than describing it.',
    clientResult: null, // {{TODO: add real client result}}
    testimonial: null, // {{TODO: add client quote with permission}}
  },
  {
    id: 5,
    slug: 'orizova-digital',
    own: true,
    title: "Orizova Digital",
    category: "Website Development",
    industry: 'Our own website · SEO & AEO',
    desc: "Our own agency website, rebuilt in October 2026 for speed, SEO and AI search — 120+ pre-rendered pages for services, industries and cities, scoring 100 on all four Google PageSpeed tests.",
    tags: ["SEO", "AEO / AI Search", "Pre-rendered React"],
    color: "#4C0E82",
    image: orizovaImg,
    link: "https://orizovadigital.co.in/",
    result: "100/100 on Google PageSpeed",
    scope: ['Design', 'Development', 'SEO', 'AEO / GEO', 'Content'],
    scores: {
      checked: '3 Nov 2026',
      mobile: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
      desktop: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
    },
    results: [
      'Daily Google impressions grew from under 20 in early October 2026 to 40–100 a day in the last week of October (Google Search Console)',
      '1,100+ Google impressions in the last 3 months, with new pages still being indexed (Google Search Console)',
      '100 / 100 / 100 / 100 on Google PageSpeed for both mobile and desktop (3 Nov 2026)',
    ],
    brief: 'We needed our own website to prove what we sell: fast, clear pages that rank on Google, show up in AI answers and turn visitors into WhatsApp and call enquiries — for businesses across India, not just one city.',
    built: [
      'A React site pre-rendered to plain HTML at build time, so every page loads instantly and is fully readable by Google and AI crawlers',
      'Dedicated pages for 12 services, 19 industries and 22+ cities, each with original content, FAQs and answer-first summaries',
      'Schema markup (Organization, Service, FAQ, Breadcrumb), XML sitemap, IndexNow and llms.txt',
      'WhatsApp, call and form enquiries on every page, with pre-filled messages so the conversation starts with context',
      'Original SVG illustrations instead of heavy images, keeping pages light on mobile data',
    ],
    takeaway: 'Speed, clear answers and a page for every search your customers make are what move rankings — the same approach we use for [website development](/services/website-development), [SEO](/services/seo) and [AI search optimization](/services/ai-search-optimization) for clients.',
    clientResult: null,
    testimonial: null,
  },
];

export default projects;