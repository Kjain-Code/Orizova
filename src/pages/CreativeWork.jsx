import React from 'react';
import Seo from '../components/Seo';
import PageBanner from '../components/PageBanner';
import CreativeWorkSections from '../components/CreativeWorkSections';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';

const CreativeWork = () => {
  return (
    <PageTransition>
      <Seo page="creativeWork" />

      <PageBanner
        tag="Creative Work"
        title="Videos That"
        highlight="Do the Talking"
        subtitle="Animated typography, brand reels, and our best shoots — organised by style so you can see exactly what we do best."
      />
      <CreativeWorkSections />
      <CtaBand
        title="Want a Reel Like This for Your Brand?"
        subtitle="Tell us your vision and we'll bring it to life — shoot, edit, and animate."
        buttonText="Start Your Project"
      />
    </PageTransition>
  );
};

export default CreativeWork;
