import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';
import About from '../components/About';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';

const AboutPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About Us | Orizova Co. — Digital Growth Agency, India</title>
        <meta name="description" content="Meet Orizova Co. — a full-service digital agency helping brands across India grow smarter and stronger online." />
      </Helmet>

      <PageBanner
        tag="About Orizova"
        title="A Team That Turns"
        highlight="Vision Into Reality"
        subtitle="We're a full-service digital agency helping businesses grow smarter, faster, and stronger in the digital world."
      />
      <About />
      <CtaBand
        title="Let's Work Together"
        subtitle="Have a project in mind? We'd love to hear about it."
      />
    </PageTransition>
  );
};

export default AboutPage;
