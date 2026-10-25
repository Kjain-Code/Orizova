import React from 'react';
import QuickAnswer from '../../components/content/QuickAnswer';
import sectionAnswers from '../../data/site/answers';
import Seo, { SITE_URL, AREAS_SERVED } from '../../components/seo/Seo';
import services from '../../data/services/services';
import PageBanner from '../../components/common/PageBanner';
import ServicesDetail from '../../components/sections/ServicesDetail';
import CtaBand from '../../components/common/CtaBand';
import PageTransition from '../../components/layout/PageTransition';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { waLink } from '../../data/site/contact';
import ServiceIllustration from '../../components/home/ServiceIllustrations';
import GoalPicker from '../../components/common/GoalPicker';

const GROUPS = [
  { name: 'Build', n: '01', desc: 'The digital assets you own — the place every ad, search and post sends people to.', cta: 'Need a website, store or app?', ask: 'Hi Orizova Digital, I need a website / online store / app. Can we discuss?' },
  { name: 'Grow', n: '02', desc: 'How customers find and choose you — search, maps, ads and social, all tracked to enquiries.', cta: 'Want more enquiries?', ask: 'Hi Orizova Digital, I want more enquiries for my business. Can you suggest a plan?' },
  { name: 'Create', n: '03', desc: 'Content that stops the scroll and builds trust — reels, ad videos and a brand people remember.', cta: 'Need reels or a new logo?', ask: 'Hi Orizova Digital, I need video editing / branding. Can you share a quote?' },
];

const ServicesPage = () => {
  return (
    <PageTransition>
      <Seo speakable
        page="services"
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        schema={services.map((service) => ({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.fullDesc,
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: AREAS_SERVED.map((name) => ({ '@type': 'Place', name })),
          url: `${SITE_URL}/services/${service.slug}`,
        }))}
      />

      <PageBanner
        crumbs={[{ name: 'Services', path: '/services' }]}
        title="Web Development, SEO &"
        highlight="Digital Marketing Services"
        subtitle="Websites, apps, SEO, ads, social media, branding and video for businesses across India — pick what you need, or let us plan the complete package."
        chips={['Build', 'Grow', 'Create', 'SEO', 'Ads']}
      />
      <section className="loc-section content-section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="cb-prose">
            <span className="section-tag">What we do</span>
            <h2 className="section-title content-h2">Build, grow and create — with one team</h2>
            <p className="loc-text">
              Our services fall into three groups. <strong>Build</strong> covers the assets you own: websites, online stores and apps. <strong>Grow</strong> covers how customers find you: SEO, local SEO, Google Ads, Meta Ads and social media. <strong>Create</strong> covers the content that makes people stop and trust you: video editing and branding.
            </p>
            <p className="loc-text">
              Most businesses do not need everything at once. We usually start with the one or two services that will bring the quickest, most measurable improvement, then add the rest as you grow.
            </p>
          </div>
          <div className="sg">
            {GROUPS.map((g) => {
              const list = services.filter((x) => x.group === g.name);
              return (
                <div key={g.name} className={`sg-row sg-row--${g.name.toLowerCase()}`}>
                  <div className="sg-head">
                    <span className="sg-num" aria-hidden="true">{g.n}</span>
                    <h3>{g.name}</h3>
                    <p>{g.desc}</p>
                  </div>
                  <ul className="sg-items">
                    {list.map((x) => (
                      <li key={x.slug}>
                        <Link to={`/services/${x.slug}`} className="sg-item">
                          <span className="sg-art"><ServiceIllustration slug={x.slug} /></span>
                          <span className="sg-txt">
                            <strong>{x.title}</strong>
                            <span>{x.shortDesc}</span>
                          </span>
                          <FiArrowUpRight className="sg-arrow" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                    {list.length % 3 !== 0 && (
                      <li className="sg-fill">
                        <a href={waLink(g.ask)} target="_blank" rel="noopener noreferrer" className="sg-item sg-item--cta">
                          <FaWhatsapp className="sg-cta-ico" aria-hidden="true" />
                          <span className="sg-txt">
                            <strong>{g.cta}</strong>
                            <span>Message us on WhatsApp — we reply with ideas and a fixed quote.</span>
                          </span>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
          <QuickAnswer answers={sectionAnswers} path="/services" />
        </div>
      </section>
      <GoalPicker id="services-goal" title="Not sure which service you need?" tag="Let's figure it out" />
      <ServicesDetail />
      <CtaBand
        title="Not Sure Which Service You Need?"
        subtitle="Tell us about your goals and we'll recommend the right mix of services for your business."
        buttonText="Talk To Us"
      />
    </PageTransition>
  );
};

export default ServicesPage;
