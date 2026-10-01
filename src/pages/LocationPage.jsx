import React from 'react';
import { useParams } from 'react-router-dom';
import { FiCheckCircle, FiMapPin } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import CtaBand from '../components/CtaBand';
import { Blocks, Cards, CtaButtons, Faqs, LinkChips, RealWork, faqSchema } from '../components/ContentBlocks';
import { cityServicesIndex as cityServices } from '../data/siteIndex';
import Seo, { SITE_URL, routesByPath } from '../components/Seo';
import locations from '../data/locations';
import services from '../data/services';
import NotFound from './NotFound';
import './LocationPage.css';

const LocationPage = () => {
  const { city } = useParams();
  const loc = locations.find((l) => l.slug === city);
  if (!loc) return <NotFound />;

  const path = `/locations/${loc.slug}`;
  const route = routesByPath[path] || {};
  const [h1Main, h1Place] = (route.h1 || `Digital Agency in ${loc.city}`).split(/ (?=in [A-Z])/);
  const others = locations.filter((l) => l.slug !== loc.slug);

  return (
    <PageTransition>
      <Seo
        path={path}
        breadcrumbs={[{ name: `Digital agency in ${loc.city}`, path }]}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `Website Development & Digital Marketing in ${loc.city}`,
            serviceType: ['Website Development', 'Digital Marketing', 'SEO', 'App Development', 'Branding'],
            provider: { '@id': `${SITE_URL}/#organization` },
            areaServed: [
              { '@type': 'City', name: loc.city },
              ...loc.areas.map((name) => ({ '@type': 'Place', name: `${name}, ${loc.city}` })),
            ],
            url: `${SITE_URL}${path}`,
          },
          faqSchema(loc.faqs),
        ]}
      />

      <PageBanner title={h1Main} highlight={h1Place} subtitle={loc.tagline} chips={loc.areas.slice(0, 5)} />

      <section className="loc-section content-section">
        <div className="container">
          <div className="loc-intro">
            <div>
              <span className="section-tag">Why {loc.city} businesses choose Orizova</span>
              <h2 className="section-title">Websites, SEO &amp; ads that bring customers in {loc.city}</h2>
              <p className="loc-text">{loc.intro}</p>
              <p className="loc-text">{loc.focus}</p>
              <CtaButtons />
            </div>
            <aside className="loc-card">
              <h3>Areas we serve in {loc.city}</h3>
              <ul className="loc-areas">
                {loc.areas.map((a) => (
                  <li key={a}><FiMapPin size={14} /> {a}</li>
                ))}
              </ul>
              <h3 style={{ marginTop: 24 }}>Industries we work with</h3>
              <ul className="loc-areas">
                {loc.industries.map((a) => (
                  <li key={a}><FiCheckCircle size={14} /> {a}</li>
                ))}
              </ul>
            </aside>
          </div>

          <Blocks blocks={loc.sections || []} />

          <Cards
            tag={`Services in ${loc.city}`}
            h2={`Everything you need to grow online in ${loc.city}`}
            items={services.map((s) => ({ title: `${s.title} in ${loc.city}`, desc: s.shortDesc, to: `/services/${s.slug}` }))}
          />

          <RealWork />

          <Faqs faqs={loc.faqs} h2={`Questions from ${loc.city} businesses`} />

          <LinkChips
            h2={`Specialist pages for ${loc.city}`}
            links={cityServices.filter((c) => c.city === loc.slug).map((c) => ({ to: `/locations/${loc.slug}/${c.service}`, label: c.label }))}
          />
          <LinkChips
            h2="We also serve"
            links={others.map((o) => ({ to: `/locations/${o.slug}`, label: `Digital marketing in ${o.city}` }))}
          />
        </div>
      </section>

      <CtaBand
        title={`Grow Your ${loc.city} Business Online`}
        subtitle="Tell us about your business — we'll suggest the right website and marketing plan, free."
        buttonText="Get Free Consultation"
      />
    </PageTransition>
  );
};

export default LocationPage;
