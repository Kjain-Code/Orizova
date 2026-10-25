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
import { citiesIndex, cityZones, cityServicesIndex } from '../../data/site/siteIndex';

/* Pan-India hub. Not in the main navigation (we work everywhere, so a
   "Locations" menu item looked odd) — reached from the footer strip, the home
   page and in-page links. It links every city page and every city × service
   page, giving Google a clean hub → city → city×service structure. */
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
          itemListElement: citiesIndex.map((l, idx) => ({
            '@type': 'ListItem', position: idx + 1, name: `Digital marketing agency in ${l.city}`, url: `${SITE_URL}/locations/${l.slug}`,
          })),
        },
      }]}
    />
    <PageBanner crumbs={[{ name: 'Locations', path: '/locations' }]}
      title="Working Across India —"
      highlight="Websites, SEO & Ads in Your City"
      subtitle="Our team is based in Delhi NCR and works with businesses all over India over calls, video and WhatsApp. These city pages cover the local markets, areas and industries we know well."
      chips={['Delhi NCR', 'Lucknow', 'Chandigarh', 'Jaipur', 'Bengaluru']}
    />
    <section className="loc-section content-section">
      <div className="container">
        <div className="content-prose">
          <h2 className="section-title content-h2">Online for all of India, local where it matters</h2>
          <p className="loc-text">
            Websites, SEO, Google Ads and Meta Ads don’t need us to be in the same room — so we work with businesses in any Indian city. See our <Link to="/services" className="content-link">services</Link> for what we do everywhere, and <Link to="/industries" className="content-link">industries</Link> for how we adapt it to your kind of business.
          </p>
          <p className="loc-text">
            Local search is different: someone looking for a clinic, a coaching centre or a builder searches with an area name, and every city has its own neighbourhoods, industries and habits. That is what the city pages below cover.
          </p>
        </div>

        {cityZones.map((zone) => {
          const list = citiesIndex.filter((c) => c.zone === zone);
          if (!list.length) return null;
          return (
            <div className="loc-block" key={zone}>
              <h2 className="cb-chips-title">{zone}</h2>
              <div className="loc-services">
                {list.map((c) => {
                  const pages = cityServicesIndex.filter((cs) => cs.city === c.slug);
                  return (
                    <div key={c.slug} className="loc-service">
                      <h3>
                        <Link to={`/locations/${c.slug}`} className="loc-city-link">
                          <FiMapPin aria-hidden="true" style={{ verticalAlign: '-2px', marginRight: 6 }} />Digital agency in {c.city}
                        </Link>
                      </h3>
                      <p>{c.region}</p>
                      <ul className="loc-city-pages">
                        {pages.map((cs) => (
                          <li key={cs.service}><Link to={`/locations/${cs.city}/${cs.service}`}>{cs.label}</Link></li>
                        ))}
                      </ul>
                      <Link to={`/locations/${c.slug}`} className="loc-service-link">See {c.city} page <FiArrowRight aria-hidden="true" /></Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <QuickAnswer answers={locationAnswers} path="/locations" />

        <LinkChips
          h2="Services we offer everywhere"
          links={[
            { to: '/services/website-development', label: 'Website development' },
            { to: '/services/seo', label: 'SEO services' },
            { to: '/services/local-seo', label: 'Local SEO & Google Maps' },
            { to: '/services/google-ads', label: 'Google Ads' },
            { to: '/services/meta-ads', label: 'Meta Ads' },
            { to: '/services/ecommerce-solutions', label: 'E-commerce stores' },
          ]}
        />

        <div className="loc-block content-prose">
          <h2 className="section-title content-h2">Your city isn&apos;t listed?</h2>
          <p className="loc-text">
            We still work with you. Tell us your city and business, and we&apos;ll suggest a plan — including Google Business Profile and local pages for the areas you actually serve.
          </p>
          <CtaButtons />
        </div>
      </div>
    </section>
    <CtaBand title="Grow your business online — wherever you are" subtitle="Websites, SEO and ads for businesses across India." buttonText="Get Free Consultation" />
  </PageTransition>
);

export default LocationsPage;
