import pehnawaShoeAd from '../assets/portfolio/pehnawa-shoe-ad.png';
import bharatCamp from '../assets/portfolio/bharat-healthcare-camp.png';
import bharatNeuro from '../assets/portfolio/bharat-healthcare-neurosurgeon.jpg';
import retargetingTypo from '../assets/portfolio/retargeting-typography.jpg';

// Flat list, filterable by category (same pattern as data/projects.js).
// Item shape: { title, category, thumbnail, link, linkLabel }
//   thumbnail -> import an image from ../assets/portfolio/ (optional — falls back to an icon)
//   link      -> Instagram Reel / YouTube URL
//   linkLabel -> defaults to "Watch Video"

const creativeWork = [
  {
    id: 1,
    title: "Retargeting Strategy — Meta Ads Series",
    category: "Kinetic & Animated Typography",
    thumbnail: retargetingTypo,
    link: "https://www.instagram.com/reel/Dbqj48Dv4Nt/",
  },
  {
    id: 2,
    title: "Pehnawa Shopping Mall — Shoe Section",
    category: "Brand Films & Ads",
    thumbnail: pehnawaShoeAd,
    link: "https://www.instagram.com/reel/DcLM2YtT-MS/",
  },
  {
    id: 3,
    title: "Bharat Health Care — Diagnostic Camp",
    category: "Brand Films & Ads",
    thumbnail: bharatCamp,
    link: "https://www.instagram.com/reel/DcFue2dysu4/",
  },
  {
    id: 4,
    title: "Gift Hamper — Product Showcase",
    category: "Brand Films & Ads",
    link: "https://www.instagram.com/reel/DcA7wmcSBCQ/",
  },
  {
    id: 5,
    title: "Brain & Spine Health Awareness — Dr. Asha Bakshi",
    category: "Reels & Social Content",
    thumbnail: bharatNeuro,
    link: "https://www.instagram.com/reel/DbxWPkZtVWY/",
  },
];

export default creativeWork;
