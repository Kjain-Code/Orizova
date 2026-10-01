import React from 'react';
import { useParams } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import CtaBand from '../components/CtaBand';
import Seo, { AREAS_SERVED, routesByPath } from '../components/Seo';
import {
  Blocks, CtaButtons, Inline, LinkChips, collectFaqs, faqSchema, serviceSchema,
} from '../components/ContentBlocks';
import industries from '../data/pages/industries';
import locations from '../data/locations';
import NotFound from './NotFound';

const IndustryPage = () => {
  const { slug } = useParams();
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return <NotFound />;

  const path = `/industries/${ind.slug}`;
  const route = routesByPath[path] || {};
  const [h1Main, h1Place] = (route.h1 || ind.name).split(/ (?=for [A-Z]|— )/);
  const faqs = collectFaqs(ind.blocks);
  const crumbs = [{ name: 'Industries', path: '/industries' }, { name: ind.name, path }];
  const serviceCards = ind.blocks.find((b) => b.type === 'cards');

  return (
    <PageTransition>
      <Seo
        path={path}
        breadcrumbs={crumbs}
        schema={[
          serviceSchema({
            name: route.h1 || ind.name,
            description: route.description,
            path,
            serviceType: `Digital marketing for ${ind.name}`,
            areaServed: AREAS_SERVED.map((name) => ({ '@type': 'Place', name })),
          }),
          faqSchema(faqs),
        ]}
      />
      <PageBanner title={h1Main} highlight={h1Place} subtitle={ind.banner} chips={(serviceCards ? serviceCards.items : []).map((it) => it.title.split(/[(—]/)[0].trim()).slice(0, 5)} />

      <section className="loc-section content-section">
        <div className="container">
          <div className="loc-intro">
            <div>
              <span className="section-tag">{ind.name}</span>
              <h2 className="section-title content-h2">{ind.intro.h2}</h2>
              {ind.intro.paras.map((p) => <p className="loc-text" key={p.slice(0, 30)}><Inline text={p} /></p>)}
              <CtaButtons />
            </div>
            <aside className="loc-card">
              <h3>We help with</h3>
              <ul className="loc-areas">
                {(serviceCards ? serviceCards.items : []).map((it) => (
                  <li key={it.title}><FiCheckCircle size={14} aria-hidden="true" /> {it.title}</li>
                ))}
              </ul>
              <h3 style={{ marginTop: 24 }}>Cities</h3>
              <ul className="loc-areas">
                {locations.map((l) => <li key={l.slug}>{l.city}</li>)}
              </ul>
            </aside>
          </div>

          <Blocks blocks={ind.blocks} />

          <LinkChips
            h2="Other industries we work with"
            links={industries.filter((i) => i.slug !== ind.slug).map((i) => ({ to: `/industries/${i.slug}`, label: i.name }))}
          />
        </div>
      </section>

      <CtaBand
        title={`${ind.name}: let's grow your business online`}
        subtitle="Tell us about your practice or business — we'll suggest the right first steps, free."
        buttonText="Get Free Consultation"
      />
    </PageTransition>
  );
};

export default IndustryPage;
