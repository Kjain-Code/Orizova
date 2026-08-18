import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';
import CreativeWorkSections from '../components/CreativeWorkSections';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';

const CreativeWork = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Creative Work | Orizova Co. — Branding, Video Editing & Animation</title>
        <meta name="description" content="Orizova Co.'s branding, video editing, animated typography, and shoot work — organised by style." />
      </Helmet>

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
