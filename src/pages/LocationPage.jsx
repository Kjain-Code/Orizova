import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import CtaBand from '../components/CtaBand';
import Seo, { SITE_URL, routesByPath } from '../components/Seo';
import locations from '../data/locations';
import services from '../data/services';
import projects from '../data/projects';
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
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: loc.faqs.map(([q, a]) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          },
        ]}
      />

      <PageBanner tag={`📍 ${loc.city}, ${loc.region}`} title={h1Main} highlight={h1Place} subtitle={loc.tagline} />

      <section className="loc-section">
        <div className="container">
          <div className="loc-intro">
            <div>
              <span className="section-tag">Why {loc.city} businesses choose Orizova</span>
              <h2 className="section-title">Websites, SEO &amp; ads that bring customers in {loc.city}</h2>
              <p className="loc-text">{loc.intro}</p>
              <p className="loc-text">{loc.focus}</p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: 8 }}>
                Get a free consultation <FiArrowRight />
              </Link>
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

          <div className="loc-block">
            <span className="section-tag">Services in {loc.city}</span>
            <h2 className="section-title">Everything you need to grow online in {loc.city}</h2>
            <div className="loc-services">
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="loc-service">
                  <h3>{s.title} in {loc.city}</h3>
                  <p>{s.shortDesc}</p>
                  <span className="loc-service-link">Learn more <FiArrowRight /></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="loc-block">
            <span className="section-tag">Recent work</span>
            <h2 className="section-title">Websites we have built</h2>
            <ul className="loc-projects">
              {projects.map((p) => (
                <li key={p.id}>
                  <strong>{p.title}</strong> — {p.desc}{' '}
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">View live site</a>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/portfolio" className="loc-inline-link">See full portfolio <FiArrowRight /></Link>
          </div>

          <div className="loc-block">
            <span className="section-tag">FAQs</span>
            <h2 className="section-title">Questions from {loc.city} businesses</h2>
            {loc.faqs.map(([q, a]) => (
              <details key={q} className="loc-faq">
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>

          <div className="loc-block">
            <h2 className="loc-other-title">We also serve</h2>
            <div className="loc-other">
              {others.map((o) => (
                <Link key={o.slug} to={`/locations/${o.slug}`} className="chip-link">
                  Web development &amp; digital marketing in {o.city}
                </Link>
              ))}
            </div>
          </div>
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
