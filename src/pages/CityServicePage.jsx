import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import CtaBand from '../components/CtaBand';
import Seo, { routesByPath } from '../components/Seo';
import {
  Blocks, CtaButtons, Inline, LinkChips, collectFaqs, faqSchema, serviceSchema,
} from '../components/ContentBlocks';
import cityServices from '../data/pages/cityServices';
import locations from '../data/locations';
import services from '../data/services';
import NotFound from './NotFound';

const CityServicePage = () => {
  const { city, service } = useParams();
  const page = cityServices.find((c) => c.city === city && c.service === service);
  const loc = locations.find((l) => l.slug === city);
  const svc = services.find((s) => s.slug === service);
  if (!page || !loc || !svc) return <NotFound />;

  const path = `/locations/${city}/${service}`;
  const route = routesByPath[path] || {};
  const [h1Main, h1Place] = (route.h1 || page.label).split(/ (?=in [A-Z])/);
  const faqs = collectFaqs(page.blocks);
  const crumbs = [
    { name: `Digital agency in ${loc.city}`, path: `/locations/${loc.slug}` },
    { name: page.label, path },
  ];
  const sameServiceOtherCities = cityServices.filter((c) => c.service === service && c.city !== city);
  const otherServiceSameCity = cityServices.filter((c) => c.city === city && c.service !== service);

  return (
    <PageTransition>
      <Seo
        path={path}
        breadcrumbs={crumbs}
        schema={[
          serviceSchema({
            name: route.h1 || page.label,
            description: route.description,
            path,
            serviceType: svc.title,
            areaServed: [
              { '@type': 'City', name: loc.city },
              ...loc.areas.map((name) => ({ '@type': 'Place', name: `${name}, ${loc.city}` })),
            ],
          }),
          faqSchema(faqs),
        ]}
      />
      <PageBanner title={h1Main} highlight={h1Place} subtitle={page.banner} chips={loc.areas.slice(0, 5)} />

      <section className="loc-section content-section">
        <div className="container">
          <div className="loc-intro">
            <div>
              <span className="section-tag">{page.label}</span>
              <h2 className="section-title content-h2">{page.intro.h2}</h2>
              {page.intro.paras.map((p) => <p className="loc-text" key={p.slice(0, 30)}><Inline text={p} /></p>)}
              <CtaButtons />
            </div>
            <aside className="loc-card">
              <h3>Areas we serve in {loc.city}</h3>
              <ul className="loc-areas">
                {loc.areas.map((a) => (
                  <li key={a}><FiMapPin size={14} aria-hidden="true" /> {a}</li>
                ))}
              </ul>
              <p className="loc-text" style={{ marginTop: 18, fontSize: 15 }}>
                Part of our <Link to={`/services/${svc.slug}`} className="content-link">{svc.title.toLowerCase()} services</Link>.
              </p>
            </aside>
          </div>

          <Blocks blocks={page.blocks} />

          <LinkChips
            h2={`More for ${loc.city} businesses`}
            links={[
              { to: `/locations/${loc.slug}`, label: `Digital marketing agency in ${loc.city}` },
              ...otherServiceSameCity.map((c) => ({ to: `/locations/${c.city}/${c.service}`, label: c.label })),
            ]}
          />
          <LinkChips
            h2="Other cities"
            links={sameServiceOtherCities.map((c) => ({ to: `/locations/${c.city}/${c.service}`, label: c.label }))}
          />
        </div>
      </section>

      <CtaBand
        title={`${page.label} — let's talk`}
        subtitle="Message us on WhatsApp or send your requirement — we'll reply with a clear plan and fixed quote."
        buttonText="Get Free Consultation"
      />
    </PageTransition>
  );
};

export default CityServicePage;
