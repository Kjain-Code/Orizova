import React from 'react';
import QuickAnswer from '../../components/content/QuickAnswer';
import sectionAnswers from '../../data/site/answers';
import Seo from '../../components/seo/Seo';
import PageBanner from '../../components/common/PageBanner';
import CreativeWorkSections from '../../components/sections/CreativeWorkSections';
import CtaBand from '../../components/common/CtaBand';
import PageTransition from '../../components/layout/PageTransition';
import { Prose } from '../../components/content/ContentBlocks';

const CreativeWork = () => {
  return (
    <PageTransition>
      <Seo speakable page="creativeWork" breadcrumbs={[{ name: 'Creative Work', path: '/creative-work' }]} />

      <PageBanner
        crumbs={[{ name: 'Creative Work', path: '/creative-work' }]}
        title="Video Editing & Reels That"
        highlight="Do the Talking"
        subtitle="Brand reels, ad videos, animated typography and AI videos — organised by style so you can see exactly what we do best."
        chips={['Reels', 'Ad videos', 'AI videos', 'Brand films', 'Typography']}
      />
      <section className="loc-section content-section pad-b-0">
        <div className="container">
          <Prose
            h2="Reels, ad videos and brand films from Orizova Digital"
            paras={[
              'This gallery collects video edits we have made for brands — fast-paced Instagram reels, ad creatives, product and lifestyle edits, and kinetic typography where the words themselves move. Each one was cut for a specific platform and purpose, from stopping the scroll in a feed to telling a longer brand story.',
              'Want something similar? Our [video editing service](/services/video-editing) explains how sending footage, revisions and formats work, and our [social media marketing](/services/social-media-marketing) team can plan how the videos fit into your monthly content.',
              'No footage? We also make videos without a shoot — see [AI video production](/services/ai-video-production) for [AI UGC ads](/services/ai-ugc-videos), [AI product videos](/services/ai-product-videos) and [AI avatar videos](/services/ai-avatar-videos).',
            ]}
          />
          <QuickAnswer answers={sectionAnswers} path="/creative-work" />
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
