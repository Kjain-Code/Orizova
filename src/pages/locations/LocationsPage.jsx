import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import QuickAnswer from '../../components/content/QuickAnswer';
import locationAnswers from '../../data/locations/answers';
import PageBanner from '../../components/common/PageBanner';
import PageTransition from '../../components/layout/PageTransition';
import CtaBand from '../../components/common/CtaBand';
import Seo, { SITE_URL } from '../../components/seo/Seo';
import { CtaButtons, LinkChips } from '../../components/content/ContentBlocks';
import locations from '../../data/locations/locations';
import { cityServicesIndex } from '../../data/site/siteIndex';

/* Hub for every local (city) page. Main service pages target all of India;
   these pages target "<service> in <city>" searches. Keeping one hub that
   links to every city page gives a clean hub → city → city×service structure. */
const LocationsPage = () => (
  <PageTransition>
    <Seo
      speakable
      page="locations"
      breadcrumbs={[{ name: 'Locations', path: '/locations' }]}
      schema={[{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Cities served by Orizova Digital',
        url: `${SITE_URL}/locations`,
        about: { '@id': `${SITE_URL}/#organization` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: locations.map((l, idx) => ({
            '@type': 'ListItem', position: idx + 1, name: `Digital marketing agency in ${l.city}`, url: `${SITE_URL}/locations/${l.slug}`,
          })),
        },
      }]}
    />
    <PageBanner crumbs={[{ name: 'Locations', path: '/locations' }]}
      title="Cities We Serve —"
      highlight="Local Websites, SEO & Ads"
      subtitle="We work with businesses across India online. These are the cities where we work most closely — each with local areas, industries and questions answered."
      chips={locations.map((l) => l.city)}
    />
    <section className="loc-section content-section">
      <div className="container">
        <QuickAnswer answers={locationAnswers} path="/locations" />

        <div className="content-prose">
          <h2 className="section-title content-h2">Online for all of India, local where it matters</h2>
          <p className="loc-text">
            Most of our projects — websites, SEO, Google and Meta ads — run over calls, video meetings and WhatsApp, so we can work with a business in any Indian city. See our <Link to="/services" className="content-link">services</Link> for what we do everywhere.
          </p>
          <p className="loc-text">
            Local search is different: someone looking for a clinic, a coaching centre or a builder searches with an area name. For the cities below we have pages that cover the localities, industries and questions specific to that market.
          </p>
        </div>

        <div className="loc-block">
          <div className="loc-services">
            {locations.map((l) => (
              <Link key={l.slug} to={`/locations/${l.slug}`} className="loc-service">
                <h3><FiMapPin aria-hidden="true" style={{ verticalAlign: '-2px', marginRight: 6 }} />Digital agency in {l.city}</h3>
                <p>{l.areas.slice(0, 5).join(' · ')}</p>
                <span className="loc-service-link">See {l.city} page <FiArrowRight aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>

        <LinkChips
          h2="Website development & SEO by city"
          links={cityServicesIndex.map((c) => ({ to: `/locations/${c.city}/${c.service}`, label: c.label }))}
        />

        <div className="loc-block content-prose">
          <h2 className="section-title content-h2">Your city isn&apos;t listed?</h2>
          <p className="loc-text">
            We still work with you. Tell us your city and business, and we&apos;ll suggest a plan — including local pages and Google Business Profile work for the areas you serve.
          </p>
          <CtaButtons />
        </div>
      </div>
    </section>
    <CtaBand title="Grow your business online — wherever you are" subtitle="Websites, SEO and ads for businesses across India." buttonText="Get Free Consultation" />
  </PageTransition>
);

export default LocationsPage;
