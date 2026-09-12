import React from 'react';
import { Helmet } from 'react-helmet-async';
import CONTACT from '../data/contact';

const SITE_URL = (process.env.REACT_APP_SITE_URL || 'https://orizovadigital.co.in').replace(/\/$/, '');
const SITE_NAME = 'Orizova Co.';
const DEFAULT_IMAGE = `${SITE_URL}/logo512.png`;

const pageDefaults = {
  home: {
    title: 'Digital Agency for Web Development, SEO & Marketing | Orizova Co.',
    description: 'Orizova Co. builds websites, apps, ecommerce experiences, brands and search-led digital marketing for businesses in India and globally.',
    path: '/',
  },
  services: {
    title: 'Web, App, SEO, Marketing & Branding Services | Orizova Co.',
    description: 'Explore Orizova Co. services for website and app development, SEO, digital marketing, branding, design and ecommerce solutions.',
    path: '/services',
  },
  portfolio: {
    title: 'Web Development Portfolio | Orizova Co.',
    description: 'See selected website development work by Orizova Co., including an investment platform, photography portfolio and localization studio website.',
    path: '/portfolio',
  },
  creativeWork: {
    title: 'Video Editing, Brand Films & Motion Work | Orizova Co.',
    description: 'Explore Orizova Co. creative work across brand films, reels, typography, advertising and informative video content.',
    path: '/creative-work',
  },
  about: {
    title: 'About Orizova Co. | Digital Agency Serving India and Globally',
    description: 'Learn how Orizova Co. helps businesses build their digital presence through web development, marketing, branding and creative services.',
    path: '/about',
  },
  contact: {
    title: 'Contact Orizova Co. | Discuss Your Digital Project',
    description: 'Talk to Orizova Co. about website development, apps, SEO, digital marketing, branding, ecommerce or creative video work.',
    path: '/contact',
  },
  notFound: {
    title: 'Page Not Found | Orizova Co.',
    description: 'The page you requested could not be found. Visit Orizova Co. to explore our digital services and work.',
    path: '/',
    noindex: true,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_IMAGE,
  email: CONTACT.email,
  telephone: CONTACT.phoneDisplay,
  sameAs: [CONTACT.instagramUrl],
  description: 'Digital agency offering web development, app development, SEO, digital marketing, branding, design and ecommerce solutions.',
};

const breadcrumbSchema = (name, path) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    ...(path !== '/' ? [{ '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` }] : []),
  ],
});

const Seo = ({ page = 'home', schema = [], title, description, path }) => {
  const defaults = pageDefaults[page] || pageDefaults.home;
  const resolvedTitle = title || defaults.title;
  const resolvedDescription = description || defaults.description;
  const resolvedPath = path || defaults.path;
  const canonical = `${SITE_URL}${resolvedPath}`;
  const schemas = [
    organizationSchema,
    { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    breadcrumbSchema(resolvedTitle, resolvedPath),
    ...schema,
  ];

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="robots" content={defaults.noindex ? 'noindex, follow' : 'index, follow'} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
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

export { SITE_URL, pageDefaults };
export default Seo;
