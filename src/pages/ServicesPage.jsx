import React from 'react';
import Seo from '../components/Seo';
import { SITE_URL } from '../components/Seo';
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
          provider: { '@type': 'Organization', name: 'Orizova Co.' },
          areaServed: 'India and global clients',
          url: `${SITE_URL}/services`,
        }))}
      />

      <PageBanner
        tag="What We Do"
        title="Services Built"
        highlight="Around Your Growth"
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
