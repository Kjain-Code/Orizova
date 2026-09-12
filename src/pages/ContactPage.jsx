import React from 'react';
import Seo from '../components/Seo';
import PageBanner from '../components/PageBanner';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

const ContactPage = () => {
  return (
    <PageTransition>
      <Seo page="contact" />

      <PageBanner
        tag="Get In Touch"
        title="Let's"
        highlight="Grow Together"
        subtitle="Ready to take your business to the next level? Let's talk about how Orizova Co. can help you scale."
      />
      <Contact />
    </PageTransition>
  );
};

export default ContactPage;
