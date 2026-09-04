import wipoImg from '../assets/portfolio/wipo-group.jpg';
import ganeshImg from '../assets/portfolio/ganesh-creation.jpg';
import fpsImg from '../assets/portfolio/fps-subtitle.jpg';

const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
