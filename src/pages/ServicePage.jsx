import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import PageBanner, { splitHeading } from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import CtaBand from '../components/CtaBand';
import Seo, { AREAS_SERVED, routesByPath } from '../components/Seo';
import {
  Blocks, CtaButtons, RelatedGuides, Inline, LinkChips, collectFaqs, faqSchema, serviceSchema,
} from '../components/ContentBlocks';
import services from '../data/services';
import servicePages from '../data/pages/servicePages';
import locations from '../data/locations';
import NotFound from './NotFound';

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  const page = servicePages[slug];

  if (!service || !page) {
    return <NotFound />;
  }

  const path = `/services/${service.slug}`;
  const route = routesByPath[path] || {};
  const [h1Main, h1Place] = splitHeading(route.h1 || service.title, / (?=in [A-Z]|— )/);
  const faqs = collectFaqs(page.blocks);
  const others = services.filter((s) => s.slug !== service.slug && s.group === service.group);

  return (
    <PageTransition>
      <Seo
        path={path}
        breadcrumbs={[{ name: 'Services', path: '/services' }, { name: service.title, path }]}
        schema={[
          serviceSchema({
            name: route.h1 || service.title,
            description: route.description || service.fullDesc,
            path,
            serviceType: service.title,
            areaServed: AREAS_SERVED.map((name) => ({ '@type': 'Place', name })),
          }),
          ...(faqs.length ? [faqSchema(faqs)] : []),
        ]}
      />
      <PageBanner title={h1Main} highlight={h1Place} subtitle={page.banner} chips={service.subServices.map((x) => x.split(/[(/]/)[0].trim()).slice(0, 5)} />

      <section className="loc-section content-section">
        <div className="container">
          <div className="loc-intro">
            <div>
              <span className="section-tag">{service.title}</span>
              <h2 className="section-title content-h2">{page.intro.h2}</h2>
              {page.intro.paras.map((p) => <p className="loc-text" key={p.slice(0, 30)}><Inline text={p} /></p>)}
              <CtaButtons />
            </div>
            <aside className="loc-card">
              <h3>What&apos;s included</h3>
              <ul className="loc-areas">
                {service.subServices.map((item) => (
                  <li key={item}><FiCheckCircle size={14} aria-hidden="true" /> {item}</li>
                ))}
              </ul>
              <h3 style={{ marginTop: 24 }}>Available in</h3>
              <ul className="loc-areas">
                {locations.map((loc) => (
                  <li key={loc.slug}><Link to={`/locations/${loc.slug}`}>{loc.city}</Link></li>
                ))}
              </ul>
            </aside>
          </div>

          <Blocks blocks={page.blocks} />

          <RelatedGuides path={path} />

          <LinkChips
            h2={`${service.title} across Delhi NCR & Chandigarh`}
            links={locations.map((loc) => ({ to: `/locations/${loc.slug}`, label: `Digital agency in ${loc.city}` }))}
          />
          {others.length > 0 && (
            <LinkChips h2="Related services" links={others.map((s) => ({ to: `/services/${s.slug}`, label: s.title }))} />
          )}
        </div>
      </section>

      <CtaBand
        title={`Talk to us about ${service.title}`}
        subtitle="Share your goal on WhatsApp or the contact form — we'll reply with a clear plan and a fixed quote."
        buttonText="Get Free Consultation"
      />
    </PageTransition>
  );
};

export default ServicePage;
