// Additional city / locality pages. Each file holds one market's hub page,
// its city × service pages, quick answers and SEO meta (titles also live in
// data/site/seo.json, which the pre-renderer reads — run the sync step when
// adding a city). Order here = display order after the original five cities.
import lucknow from './lucknow';
import indirapuram from './indirapuram';
import gurugram from './gurugram';
import faridabad from './faridabad';
import greaterNoida from './greater-noida';
import meerut from './meerut';
import mohali from './mohali';
import panchkula from './panchkula';
import jaipur from './jaipur';
import agra from './agra';
import kanpur from './kanpur';
import dehradun from './dehradun';
import ludhiana from './ludhiana';
import hyderabad from './hyderabad';
import pune from './pune';
import bengaluru from './bengaluru';
import mumbai from './mumbai';

const cities = [
  lucknow, indirapuram, gurugram, faridabad, greaterNoida, meerut, mohali, panchkula,
  jaipur, agra, kanpur, dehradun, ludhiana, hyderabad, pune, bengaluru, mumbai,
];

export default cities;
