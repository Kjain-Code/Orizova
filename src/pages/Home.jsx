import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import FeaturedWork from '../components/FeaturedWork';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Orizova Co. | Digital Marketing & Web Development Agency India</title>
        <meta name="description" content="Orizova Co. is a full-service digital agency offering website development, app development, SEO, social media marketing, branding, and e-commerce solutions across India." />
        <meta property="og:title" content="Orizova Co. | Digital Growth Agency" />
        <meta property="og:description" content="From strategy to scale — we build growth that lasts." />
      </Helmet>

      <Hero />
      <Services />
      <WhyUs />
      <FeaturedWork />
      <CtaBand
        title="Ready to Scale Your Brand?"
        subtitle="From strategy to execution — let's build the growth engine your business deserves."
        buttonText="Get Free Consultation"
      />
    </PageTransition>
  );
};

export default Home;
