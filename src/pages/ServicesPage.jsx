import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';
import ServicesDetail from '../components/ServicesDetail';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';

const ServicesPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Our Services | Orizova Co. — Web, App, SEO, Branding & Marketing</title>
        <meta name="description" content="Explore Orizova Co.'s full range of services — website development, app development, digital marketing, branding, SEO, and e-commerce solutions, each with detailed sub-services." />
      </Helmet>

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
