import React from 'react';
import Seo from '../components/Seo';
import PageBanner from '../components/PageBanner';
import About from '../components/About';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';

const AboutPage = () => {
  return (
    <PageTransition>
      <Seo page="about" />

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
