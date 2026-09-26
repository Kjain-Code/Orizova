import React from 'react';
import { Helmet } from 'react-helmet-async';
import CONTACT from '../data/contact';
import seo from '../data/seo.json';

const SITE_URL = (process.env.REACT_APP_SITE_URL || seo.defaultSiteUrl).replace(/\/$/, '');
const SITE_NAME = seo.siteName;
const DEFAULT_IMAGE = `${SITE_URL}/logo512.png`;
const AREAS_SERVED = ['Ghaziabad', 'Noida', 'Greater Noida', 'Delhi', 'Delhi NCR', 'Chandigarh', 'Mohali', 'Panchkula', 'India'];

const routesByKey = Object.fromEntries(seo.routes.map((r) => [r.key, r]));
const routesByPath = Object.fromEntries(seo.routes.map((r) => [r.path, r]));

// Kept for backwards compatibility with pages that import pageDefaults.
const pageDefaults = {
  ...routesByKey,
  notFound: {
    title: 'Page Not Found | Orizova Co.',
    description: 'The page you requested could not be found. Explore Orizova Co. web development, SEO and digital marketing services.',
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
  logo: DEFAULT_IMAGE,
  image: DEFAULT_IMAGE,
  email: CONTACT.email,
  telephone: CONTACT.phoneTel,
  priceRange: '₹₹',
  description:
    'Web development and digital marketing agency serving Ghaziabad, Noida, Delhi and Chandigarh: websites, mobile apps, SEO, Meta & Google Ads, branding and e-commerce.',
  areaServed: AREAS_SERVED.map((name) => ({ '@type': 'Place', name })),
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
  sameAs: [CONTACT.instagramUrl],
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
 * route by `path`. Titles/descriptions live in data/seo.json so the build-time
 * prerender script (scripts/prerender.js) outputs the exact same tags as
 * static HTML for Google and social previews.
 */
const Seo = ({ page, path, title, description, schema = [], breadcrumbs, noindex }) => {
  const route = (page && pageDefaults[page]) || (path && routesByPath[path]) || pageDefaults.home;
  const resolvedPath = path || route.path || '/';
  const resolvedTitle = title || route.title;
  const resolvedDescription = description || route.description;
  const isNoindex = noindex ?? route.noindex;
  const canonical = `${SITE_URL}${resolvedPath === '/' ? '/' : resolvedPath}`;

  const crumbs = breadcrumbs || (resolvedPath !== '/' ? [{ name: route.h1 || resolvedTitle, path: resolvedPath }] : []);

  const schemas = [
    businessSchema,
    websiteSchema,
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
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
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
