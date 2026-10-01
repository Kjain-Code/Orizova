import React from 'react';
import Seo, { SITE_URL, AREAS_SERVED } from '../components/Seo';
import services from '../data/services';
import PageBanner from '../components/PageBanner';
import ServicesDetail from '../components/ServicesDetail';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

const ServicesPage = () => {
  return (
    <PageTransition>
      <Seo
        page="services"
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
        title="Web Development, SEO &"
        highlight="Digital Marketing Services"
        subtitle="Every service comes with a full set of specialised sub-services — pick what your business needs, or let us build the complete package."
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
          <div className="svc-groups">
            {[
              ['Build', '01', 'The digital assets you own.'],
              ['Grow', '02', 'How customers find and choose you.'],
              ['Create', '03', 'Content that stops the scroll.'],
            ].map(([g, n, d]) => (
              <div key={g} className={`svc-group svc-group--${g.toLowerCase()} spot`}>
                <div className="svc-group-head"><h3>{g}</h3><span aria-hidden="true">{n}</span></div>
                <p>{d}</p>
                <ul>
                  {services.filter((x) => x.group === g).map((x) => (
                    <li key={x.slug}>
                      <Link to={`/services/${x.slug}`}>{x.title} <FiArrowUpRight aria-hidden="true" /></Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
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
