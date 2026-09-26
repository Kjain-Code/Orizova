import React from 'react';
import Seo, { SITE_URL, AREAS_SERVED } from '../components/Seo';
import services from '../data/services';
import PageBanner from '../components/PageBanner';
import ServicesDetail from '../components/ServicesDetail';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';

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
        tag="What We Do"
        title="Web Development, SEO &"
        highlight="Digital Marketing Services"
        subtitle="Every service comes with a full set of specialised sub-services — pick what your business needs, or let us build the complete package."
      />
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
