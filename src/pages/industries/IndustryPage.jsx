import React from 'react';
import QuickAnswer from '../../components/content/QuickAnswer';
import sectionAnswers from '../../data/industries/answers';
import { FiCheckCircle } from 'react-icons/fi';
import PageBanner, { splitHeading } from '../../components/common/PageBanner';
import PageTransition from '../../components/layout/PageTransition';
import CtaBand from '../../components/common/CtaBand';
import Seo, { routesByPath } from '../../components/seo/Seo';
import {
  Blocks, CtaButtons, RelatedGuides, Inline, LinkChips, collectFaqs, faqSchema, serviceSchema,
} from '../../components/content/ContentBlocks';
import industries from '../../data/industries/industries';
import { Link, useParams } from 'react-router-dom';
import { citiesIndex as locations } from '../../data/site/siteIndex';
import NotFound from '../core/NotFound';

// Hero chips are decorative: keep them short so they don't overlap.
const shortChip = (t) => {
  const base = t.split(/[(—&]/)[0].trim();
  return base.length > 24 ? base.split(' ').slice(0, 2).join(' ') : base;
};

const IndustryPage = () => {
  const { slug } = useParams();
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return <NotFound />;

  const path = `/industries/${ind.slug}`;
  const route = routesByPath[path] || {};
  const [h1Main, h1Place] = splitHeading(route.h1 || ind.name, / (?=for [A-Z]|— )/);
  const faqs = collectFaqs(ind.blocks);
  const crumbs = [{ name: 'Industries', path: '/industries' }, { name: ind.name, path }];
  const serviceCards = ind.blocks.find((b) => b.type === 'cards');

  return (
    <PageTransition>
      <Seo speakable
        path={path}
        breadcrumbs={crumbs}
        schema={[
          serviceSchema({
            name: route.h1 || ind.name,
            description: route.description,
            path,
            serviceType: `Digital marketing for ${ind.name}`,
            areaServed: { '@type': 'Country', name: 'India' },
          }),
          faqSchema(faqs),
        ]}
      />
      <PageBanner crumbs={crumbs} title={h1Main} highlight={h1Place} subtitle={ind.banner} chips={(serviceCards ? serviceCards.items : []).map((it) => shortChip(it.title)).slice(0, 5)} />

      <section className="loc-section content-section">
        <div className="container">
          <div className="loc-intro">
            <div>
              <span className="section-tag">{ind.name}</span>
              <h2 className="section-title content-h2">{ind.intro.h2}</h2>
              {ind.intro.paras.map((p) => <p className="loc-text" key={p.slice(0, 30)}><Inline text={p} /></p>)}
              <CtaButtons message={`Hi Orizova Digital, I run a business in ${ind.name}. I'd like a plan for my website and marketing.`} />
            </div>
            <aside className="loc-card">
              <h3>We help with</h3>
              <ul className="loc-areas">
                {(serviceCards ? serviceCards.items : []).map((it) => (
                  <li key={it.title}><FiCheckCircle size={14} aria-hidden="true" /> {it.title}</li>
                ))}
              </ul>
              <h3 style={{ marginTop: 24 }}>Working across India</h3>
              <ul className="loc-areas">
                {locations.slice(0, 9).map((l) => <li key={l.slug}><Link to={`/locations/${l.slug}`}>{l.city}</Link></li>)}
                <li><Link to="/locations">+ {locations.length - 9} more cities</Link></li>
              </ul>
            </aside>
          </div>
          <QuickAnswer answers={sectionAnswers} path={path} />

          <Blocks blocks={ind.blocks} />

          <RelatedGuides path={path} />

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
