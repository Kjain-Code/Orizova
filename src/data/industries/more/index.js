// Additional industry pages (one file per industry). Each holds the page copy,
// its quick answer and SEO meta (titles also live in data/site/seo.json).
// name / short / group come from data/site/siteIndex.js (industriesIndex).
import dentalClinics from './dental-clinics';
import skinHairClinics from './skin-hair-clinics';
import homeServices from './home-services';
import hotelsTravel from './hotels-travel';
import eventsWeddings from './events-weddings';
import ecommerceD2c from './ecommerce-d2c';
import retailShowrooms from './retail-showrooms';
import manufacturersExporters from './manufacturers-exporters';
import education from './education';
import salonsBeauty from './salons-beauty';
import fitnessWellness from './fitness-wellness';
import professionalServices from './professional-services';
import immigrationConsultants from './immigration-consultants';
import startupsSaas from './startups-saas';

const moreIndustries = [
  dentalClinics, skinHairClinics, homeServices, hotelsTravel, eventsWeddings, ecommerceD2c, retailShowrooms,
  manufacturersExporters, education, salonsBeauty, fitnessWellness, professionalServices, immigrationConsultants, startupsSaas,
];

export default moreIndustries;
