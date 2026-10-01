import React from 'react';
import Seo from '../components/Seo';
import PageBanner from '../components/PageBanner';
import CreativeWorkSections from '../components/CreativeWorkSections';
import CtaBand from '../components/CtaBand';
import PageTransition from '../components/PageTransition';
import { Prose } from '../components/ContentBlocks';

const CreativeWork = () => {
  return (
    <PageTransition>
      <Seo page="creativeWork" />

      <PageBanner
        title="Video Editing & Reels That"
        highlight="Do the Talking"
        subtitle="Animated typography, brand reels, and our best shoots — organised by style so you can see exactly what we do best."
        chips={['Reels', 'Ad videos', 'Brand films', 'Typography', 'Shorts']}
      />
      <section className="loc-section content-section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Prose
            h2="Reels, ad videos and brand films from Orizova Digital"
            paras={[
              'This gallery collects video edits we have made for brands — fast-paced Instagram reels, ad creatives, product and lifestyle edits, and kinetic typography where the words themselves move. Each one was cut for a specific platform and purpose, from stopping the scroll in a feed to telling a longer brand story.',
              'Want something similar? Our [video editing service](/services/video-editing) explains how sending footage, revisions and formats work, and our [social media marketing](/services/social-media-marketing) team can plan how the videos fit into your monthly content.',
            ]}
          />
        </div>
      </section>
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
