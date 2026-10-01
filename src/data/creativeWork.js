// Web-optimised copies (720p H.264, ~3–8 MB each) generated from the
// originals in src/assets/videos/. The originals were 1080p (several in HEVC,
// which many browsers can't play) and ~370 MB in total.
import pehnawaReelEdit from '../assets/videos-web/pehnawa-brand-film.mp4';
import drPathLab from '../assets/videos-web/diagnostic-lab.mp4';
import raviTraderReel3 from '../assets/videos-web/ravi-traders.mp4';
import carEditing from '../assets/videos-web/car-reel.mp4';
import reel1 from '../assets/videos-web/doctor-informative.mp4';
import reel2 from '../assets/videos-web/showroom.mp4';
import video0727 from '../assets/videos-web/paint-dealers.mp4';
import typography from '../assets/videos-web/typography-1.mp4';
import typography2 from '../assets/videos-web/typography-2.mp4';
import magzine from '../assets/videos-web/magazine-ad.mp4';
import hamper from '../assets/videos-web/hamper-ad.mp4';
import pPehnawa from '../assets/videos-web/posters/pehnawa-brand-film.webp';
import pDrPath from '../assets/videos-web/posters/diagnostic-lab.webp';
import pRavi from '../assets/videos-web/posters/ravi-traders.webp';
import pCar from '../assets/videos-web/posters/car-reel.webp';
import pReel1 from '../assets/videos-web/posters/doctor-informative.webp';
import pReel2 from '../assets/videos-web/posters/showroom.webp';
import p0727 from '../assets/videos-web/posters/paint-dealers.webp';
import pTypo from '../assets/videos-web/posters/typography-1.webp';
import pTypo2 from '../assets/videos-web/posters/typography-2.webp';
import pMag from '../assets/videos-web/posters/magazine-ad.webp';
import pHamper from '../assets/videos-web/posters/hamper-ad.webp';

// Only real, local videos from src/assets/videos/ — nothing here links out to Instagram.
// A couple of titles are guesses from the filename (marked "rename me") — fix them to the real name.

const creativeWork = [
  {
    id: 1,
    title: "Pehnawa Shopping Mall",
    category: "Advanced Brand Films",
    video: pehnawaReelEdit,
    poster: pPehnawa,
  },
  {
    id: 2,
    title: "Diagnostic Lab",
    category: "Advanced Brand Films",
    video: drPathLab,
    poster: pDrPath,
  },
  {
    id: 3,
    title: "Brand Films & Ads",
    category: "Ravi Traders",
    video: raviTraderReel3,
    poster: pRavi,
  },
  {
    id: 4,
    title: "Car Reel",
    category: "Cinematic Beats Edit",
    video: carEditing,
    poster: pCar,
  },
  {
    id: 5,
    title: "Doctor Informative",
    category: "Informative Content",
    video: reel1,
    poster: pReel1,
  },
  {
    id: 6,
    title: "Typography 2",
    category: "Informative Content",
    video: typography2,
    poster: pTypo2,
  },
  {
    id: 7,
    title: "Paint Dealers",
    category: "Cinematic Beats Edit",
    video: video0727,
    poster: p0727,
  },
  {
    id: 8,
    title: "Typography",
    category: "Informative Content",
    video: typography,
    poster: pTypo,
  },
  {
    id: 9,
    title: "Showroom",
    category: "Advanced Workshop ",
    video: reel2,
    poster: pReel2,
  },
  {
    id: 10,
    title: "Magazine Ad",
    category: "Ad Content",
    video: magzine,
    poster: pMag,
  },
  {
    id: 11,
    title: "Hamper Ad",
    category: "Ad Content",
    video: hamper,
    poster: pHamper,
  },

];

export default creativeWork;