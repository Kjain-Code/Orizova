import wipoImg from '../assets/portfolio/wipo-group.webp';
import ganeshImg from '../assets/portfolio/ganesh-creation.webp';
import fpsImg from '../assets/portfolio/fps-subtitle.webp';
import morphicImg from '../assets/portfolio/morphic-spaces.webp';

// Real, live projects only. `built` lists what is visible on the live site.
// Results/metrics and client quotes must come from the client:
// {{TODO: add real client result + testimonial (with permission) for each project}}
const projects = [
  {
    id: 4,
    slug: 'morphic-spaces',
    title: "Morphic Spaces",
    category: "Website Development",
    industry: 'Architecture & interior design',
    desc: "A premium, image-led website for a spatial design studio working on contemporary residential, commercial and hospitality projects — with a cinematic full-screen hero, editorial serif typography and a project showcase.",
    tags: ["Architecture", "Interior Design", "Premium Portfolio"],
    color: "#4C0E82",
    image: morphicImg,
    link: "https://www.morphicspaces.com/",
    result: "Live Studio Website",
    brief: 'Morphic Spaces, a spatial design studio focused on contemporary residential, commercial and hospitality projects, needed a website that feels as premium as the spaces it designs — and lets the architecture speak first.',
    built: [
      'A full-screen cinematic hero with large-format architectural imagery and a bold editorial serif headline',
      'A minimal, letter-spaced navigation with a services dropdown, projects, about and contact pages',
      'Project pages that present residential, commercial and hospitality work through photography',
      'A restrained dark, luxury visual language that keeps the focus on the studio’s work',
      'Responsive layouts so the imagery and typography hold up on phones as well as large screens',
    ],
    takeaway: 'For architects and interior designers the website is the portfolio. Big imagery, confident typography and very little clutter let prospective clients feel the quality of the work before they read a word — see our approach for [architects & interior designers](/industries/architects).',
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
];

export default projects;
