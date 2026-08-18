import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

const ContactPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us | Orizova Co. — Let's Grow Together</title>
        <meta name="description" content="Get in touch with Orizova Co. for website development, app development, digital marketing, branding, SEO, and e-commerce projects." />
      </Helmet>

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
