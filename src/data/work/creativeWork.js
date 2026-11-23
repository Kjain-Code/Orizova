// Web-optimised copies (720p H.264, ~3–8 MB each) generated from the
// originals in src/assets/videos/. The originals were 1080p (several in HEVC,
// which many browsers can't play) and ~370 MB in total.
import pehnawaReelEdit from '../../assets/videos-web/pehnawa-brand-film.mp4';
import drPathLab from '../../assets/videos-web/diagnostic-lab.mp4';
import raviTraderReel3 from '../../assets/videos-web/ravi-traders.mp4';
import carEditing from '../../assets/videos-web/car-reel.mp4';
import reel1 from '../../assets/videos-web/doctor-informative.mp4';
import reel2 from '../../assets/videos-web/showroom.mp4';
import video0727 from '../../assets/videos-web/paint-dealers.mp4';
import typography from '../../assets/videos-web/typography-1.mp4';
import typography2 from '../../assets/videos-web/typography-2.mp4';
import magzine from '../../assets/videos-web/magazine-ad.mp4';
import hamper from '../../assets/videos-web/hamper-ad.mp4';
import pPehnawa from '../../assets/videos-web/posters/pehnawa-brand-film.webp';
import pDrPath from '../../assets/videos-web/posters/diagnostic-lab.webp';
import pRavi from '../../assets/videos-web/posters/ravi-traders.webp';
import pCar from '../../assets/videos-web/posters/car-reel.webp';
import pReel1 from '../../assets/videos-web/posters/doctor-informative.webp';
import pReel2 from '../../assets/videos-web/posters/showroom.webp';
import p0727 from '../../assets/videos-web/posters/paint-dealers.webp';
import pTypo from '../../assets/videos-web/posters/typography-1.webp';
import pTypo2 from '../../assets/videos-web/posters/typography-2.webp';
import pMag from '../../assets/videos-web/posters/magazine-ad.webp';
import pHamper from '../../assets/videos-web/posters/hamper-ad.webp';
// AI videos (added 21 Nov 2026) — AI presenter, UGC-style real-estate ads.
import aiPlots from '../../assets/videos-web/ai-plots-ugc-shadnagar.mp4';
import aiVilla from '../../assets/videos-web/ai-villa-ugc-hyderabad.mp4';
import pAiPlots from '../../assets/videos-web/posters/ai-plots-ugc-shadnagar.webp';
import pAiVilla from '../../assets/videos-web/posters/ai-villa-ugc-hyderabad.webp';

// Only real, local videos from src/assets/videos/ — nothing here links out to Instagram.

// Categories drive the filter buttons on /creative-work (only categories that
// have at least one video are shown). `client` is the brand / type of business.
//
// AI videos: use category "AI Videos" and add `kind` — 'ugc', 'product',
// 'avatar', 'reel' or 'explainer'. They then also appear on the AI video
// service pages (/services/ai-video-production and the UGC / product / avatar
// pages show their own kind first) and the city AI video pages. Example:
//   import aiSkincare from '../../assets/videos-web/ai-skincare-ugc.mp4';
//   import pAiSkincare from '../../assets/videos-web/posters/ai-skincare-ugc.webp';
//   { id: 12, title: 'Skincare UGC Ad', client: 'D2C skincare brand', category: 'AI Videos', kind: 'ugc', video: aiSkincare, poster: pAiSkincare },
// Keep files web-sized: 720p H.264 MP4 (~3–8 MB) + a 360×640 WebP poster.
//
// POSTERS / static ad creatives (images): put the file in src/assets/creatives/
// (WebP or JPG, max ~1080px wide, under ~300 KB), import it, and add an entry
// with `image` instead of `video` + `poster`, category "Ad Posters". A
// "Ad Posters" filter button appears on /creative-work by itself. Example:
//   import cPlotOffer from '../../assets/creatives/plot-offer-hyderabad.webp';
//   { id: 14, title: 'Plot Offer Poster', client: 'Villa plots, Hyderabad', category: 'Ad Posters', image: cPlotOffer },
// Any shape works (1:1, 4:5, 9:16) — it is shown whole, never cropped.
const creativeWork = [
  { id: 12, title: "AI Presenter Plot Ad", client: "Villa plots, Shadnagar", category: "AI Videos", kind: "ugc", video: aiPlots, poster: pAiPlots },
  { id: 13, title: "AI Luxury Villa Ad", client: "Villa project, Hyderabad", category: "AI Videos", kind: "ugc", video: aiVilla, poster: pAiVilla },
  { id: 11, title: "AI Gift Hamper Ad", client: "Festive gift hampers", category: "AI Videos", kind: "product", video: hamper, poster: pHamper },
  { id: 1, title: "Shopping Mall Brand Film", client: "Pehnawa Shopping Mall", category: "Brand Films & Ads", video: pehnawaReelEdit, poster: pPehnawa },
  { id: 2, title: "Diagnostic Lab Promo", client: "Diagnostic lab", category: "Brand Films & Ads", video: drPathLab, poster: pDrPath },
  { id: 10, title: "Magazine-Style Ad", client: "Ad creative", category: "Brand Films & Ads", video: magzine, poster: pMag },
  { id: 3, title: "Paint Dealer Reel", client: "Ravi Traders", category: "Reels & Social", video: raviTraderReel3, poster: pRavi },
  { id: 7, title: "Paint Finish Product Reel", client: "Paint dealer", category: "Reels & Social", video: video0727, poster: p0727 },
  { id: 4, title: "Cinematic Car Reel", client: "Automobile", category: "Reels & Social", video: carEditing, poster: pCar },
  { id: 9, title: "Showroom Walkthrough Reel", client: "Retail showroom", category: "Reels & Social", video: reel2, poster: pReel2 },
  { id: 5, title: "Doctor Explainer Video", client: "Healthcare", category: "Informative & Typography", video: reel1, poster: pReel1 },
  { id: 8, title: "Kinetic Typography Reel", client: "Educational content", category: "Informative & Typography", video: typography, poster: pTypo },
  { id: 6, title: "Animated Typography Reel", client: "Educational content", category: "Informative & Typography", video: typography2, poster: pTypo2 },
];

export default creativeWork;
