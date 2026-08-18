import vamaImg from '../assets/portfolio/vama-clinics.jpg';
import wipoImg from '../assets/portfolio/wipo-group.jpg';
import ganeshImg from '../assets/portfolio/ganesh-creation.jpg';
import fpsImg from '../assets/portfolio/fps-subtitle.jpg';

const projects = [
  {
    id: 1,
    title: "Vama Advanced Hair & Skin Clinic",
    category: "Website Development",
    desc: "A multi-city clinic website for Vama Advanced Hair & Skin, with treatment listings, doctor profiles, and an integrated appointment booking flow across 6 locations in North India.",
    tags: ["Healthcare", "Booking Flow", "Multi-Location"],
    color: "#4C0E82",
    image: vamaImg,
    link: "https://www.vamaclinics.com/",
    result: "Live — 6 Clinics Onboarded",
  },
  {
    id: 2,
    title: "WIPO Group",
    category: "Website Development",
    desc: "An interactive fractional real-estate investment portal with a live wallet dashboard, property listings, and a coin-trading interface.",
    tags: ["Real Estate", "FinTech", "Dashboard UI"],
    color: "#8B5CF6",
    image: wipoImg,
    link: "https://wipogroupinllc.com/",
    result: "Live Investment Platform",
  },
  {
    id: 3,
    title: "Ganesh Creation",
    category: "Website Development",
    desc: "A cinematic portfolio website for a pan-India wedding and fashion photography studio, with an animated intro loader, filterable gallery, and team showcase.",
    tags: ["Photography", "Portfolio Site", "Animation"],
    color: "#C2650C",
    image: ganeshImg,
    link: "https://www.ganeshcreation.online/",
    result: "Live Studio Portfolio",
  },
  {
    id: 4,
    title: "FPS Subtitle",
    category: "Website Development",
    desc: "A corporate website for a Bollywood subtitling, translation, and localization studio, with rotating multilingual hero messaging and a full service breakdown.",
    tags: ["Localization", "Corporate Site", "Multilingual"],
    color: "#FF6B4A",
    image: fpsImg,
    link: "https://fpssubtitle.com/",
    result: "Live Corporate Site",
  },
];

export default projects;
