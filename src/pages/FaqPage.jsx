import React from 'react';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import CtaBand from '../components/CtaBand';
import Seo from '../components/Seo';
import { CtaButtons, Faqs, faqSchema } from '../components/ContentBlocks';
import faqGroups from '../data/pages/faqs';

const FaqPage = () => (
  <PageTransition>
    <Seo
      page="faq"
      breadcrumbs={[{ name: 'FAQ', path: '/faq' }]}
      schema={[faqSchema(faqGroups.flatMap((g) => g.faqs))]}
    />
    <PageBanner
      title="Questions About Websites, SEO"
      highlight="& Digital Marketing"
      subtitle="Straight answers to what business owners ask us most — costs, timelines, rankings, ads and how we work."
      chips={['Costs', 'Timelines', 'SEO', 'Ads', 'Process']}
      actions={false}
      />
    <section className="loc-section content-section">
      <div className="container">
        {faqGroups.map((g) => (
          <Faqs key={g.title} tag={g.title} h2={`${g.title}: common questions`} faqs={g.faqs} />
        ))}
        <div className="loc-block">
          <h2 className="section-title content-h2">Still have a question?</h2>
          <CtaButtons label="Ask us directly" />
        </div>
      </div>
    </section>
    <CtaBand title="Let's talk about your business" subtitle="A short conversation is often the fastest way to an answer." buttonText="Contact Us" />
  </PageTransition>
);

export default FaqPage;
