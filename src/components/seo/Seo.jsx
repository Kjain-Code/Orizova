import React from 'react';
import { Helmet } from 'react-helmet-async';
import CONTACT from '../../data/site/contact';
import seo from '../../data/site/seo.json';
import services from '../../data/services/services';
import { citiesIndex } from '../../data/site/siteIndex';

const SITE_URL = (process.env.REACT_APP_SITE_URL || seo.defaultSiteUrl).replace(/\/$/, '');
const SITE_NAME = seo.siteName;
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const LOGO = `${SITE_URL}/logo512.png`;
// Pan-India, plus every city we have a local page for (kept in sync with
// data/site/siteIndex.js so new city pages are picked up automatically).
const AREAS_SERVED = ['India', 'Delhi NCR', ...citiesIndex.map((c) => c.city)];

const routesByKey = Object.fromEntries(seo.routes.map((r) => [r.key, r]));
const routesByPath = Object.fromEntries(seo.routes.map((r) => [r.path, r]));

// Kept for backwards compatibility with pages that import pageDefaults.
const pageDefaults = {
  ...routesByKey,
  notFound: {
    title: 'Page Not Found | Orizova Digital',
    description: 'The page you requested could not be found. Explore Orizova Digital web development, SEO and digital marketing services.',
    path: '/',
    noindex: true,
  },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ['Orizova', 'Orizova Digital'],
  url: SITE_URL,
  logo: LOGO,
  image: LOGO,
  email: CONTACT.email,
  telephone: CONTACT.phoneTel,
  priceRange: '₹₹',
  description:
    'Web development and digital marketing agency based in Delhi NCR, serving businesses across India: websites, mobile apps, e-commerce, SEO, Meta & Google Ads, social media, branding and video.',
  areaServed: AREAS_SERVED.map((name) => ({ '@type': name === 'India' ? 'Country' : (name === 'Delhi NCR' ? 'Place' : 'City'), name })),
  knowsAbout: [
    'Website Development', 'Web Design', 'Mobile App Development', 'Search Engine Optimization',
    'Local SEO', 'Digital Marketing', 'Performance Marketing', 'Meta Ads', 'Google Ads',
    'Social Media Marketing', 'Branding', 'E-commerce Development',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT.phoneTel,
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  knowsLanguage: ['en-IN', 'hi-IN'],
  // Explicit service list — helps search and AI engines map the brand to
  // every service it offers (entity understanding for GEO).
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website development and digital marketing services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, url: `${SITE_URL}/services/${s.slug}` },
    })),
  },
  sameAs: CONTACT.sameAs,
  // {{TODO: add "address" (PostalAddress) + "geo" only if you have a real public office, and "openingHoursSpecification" once hours are confirmed}}
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'en-IN',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const breadcrumbSchema = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${SITE_URL}${c.path === '/' ? '/' : c.path}`,
  })),
});

/**
 * Per-page <head> tags. Resolve order: explicit props → route by `page` key →
 * route by `path`. Titles/descriptions live in data/site/seo.json so the build-time
 * prerender script (scripts/prerender.js) outputs the exact same tags as
 * static HTML for Google and social previews.
 */
const Seo = ({ page, path, title, description, schema = [], breadcrumbs, noindex, type = 'website', speakable = false }) => {
  const route = (page && pageDefaults[page]) || (path && routesByPath[path]) || pageDefaults.home;
  const resolvedPath = path || route.path || '/';
  const resolvedTitle = title || route.title;
  const resolvedDescription = description || route.description;
  const isNoindex = noindex ?? route.noindex;
  const canonical = `${SITE_URL}${resolvedPath === '/' ? '/' : resolvedPath}`;

  const crumbs = breadcrumbs || (resolvedPath !== '/' ? [{ name: route.h1 || resolvedTitle, path: resolvedPath }] : []);

  // WebPage node with a modified date (freshness) and, where the page has a
  // quick answer, `speakable` pointing at it (voice assistants / AEO).
  const ownPageType = schema.some((s) => ['AboutPage', 'ContactPage', 'CollectionPage'].includes(s['@type']));
  const webPageSchema = ownPageType || isNoindex ? null : {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: resolvedTitle,
    description: resolvedDescription,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    primaryImageOfPage: { '@type': 'ImageObject', url: DEFAULT_IMAGE },
    ...((routesByPath[resolvedPath] || {}).lastmod ? { dateModified: routesByPath[resolvedPath].lastmod } : {}),
    ...(speakable ? { speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.qa-q', '.qa-a'] } } : {}),
  };

  const schemas = [
    businessSchema,
    websiteSchema,
    ...(webPageSchema ? [webPageSchema] : []),
    ...(crumbs.length ? [breadcrumbSchema(crumbs)] : []),
    ...schema,
  ];

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta
        name="robots"
        content={isNoindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'}
      />
      {!isNoindex && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} — websites, SEO & digital marketing`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      {schemas.map((item, index) => (
        <script type="application/ld+json" key={`${item['@type']}-${index}`}>
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export { SITE_URL, SITE_NAME, AREAS_SERVED, pageDefaults, routesByPath };
export default Seo;
