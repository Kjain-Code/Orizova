import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import FeaturedWork from '../components/FeaturedWork';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <Seo page="home" />

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
