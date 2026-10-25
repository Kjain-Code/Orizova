import React from 'react';
import QuickAnswer from '../../components/content/QuickAnswer';
import sectionAnswers from '../../data/site/answers';
import Seo, { SITE_URL } from '../../components/seo/Seo';
import PageBanner from '../../components/common/PageBanner';
import Contact from '../../components/sections/Contact';
import PageTransition from '../../components/layout/PageTransition';
import { Faqs, Process, faqSchema } from '../../components/content/ContentBlocks';

const contactFaqs = [
  ['How quickly will you reply?', 'We aim to reply to WhatsApp messages and enquiries as soon as possible on working days. For urgent questions, calling is fastest.'],
  ['Is the first consultation free?', 'Yes. The first conversation about your requirement and our suggested approach is free.'],
  ['What should I share in my first message?', 'Your business name, city, what you want (website, SEO, ads, social media, video) and your timeline. A link to your current website or Instagram helps too.'],
  ['Do you work with businesses in other cities?', 'Yes. Most of our work happens online, so we can work with businesses anywhere in India.'],
];

const ContactPage = () => {
  return (
    <PageTransition>
      <Seo speakable
        page="contact"
        breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Orizova Digital',
            url: `${SITE_URL}/contact`,
            about: { '@id': `${SITE_URL}/#organization` },
          },
          faqSchema(contactFaqs),
        ]}
      />

      <PageBanner crumbs={[{ name: 'Contact', path: '/contact' }]}
        title="Contact Orizova Digital —"
        highlight="Free Consultation"
        subtitle="Tell us about your business on WhatsApp, a call or the form below — we'll reply with a clear plan and a fixed quote for your website and marketing."
        chips={['WhatsApp', 'Call', 'Email', 'Free consult', 'Pan-India']}
        actions={false}
      />
      <Contact />
      <section className="loc-section content-section">
        <div className="container">
          <Process
            tag="What happens next"
            h2="After you get in touch"
            steps={[
              { title: 'We reply', desc: 'A quick response on WhatsApp, phone or email to understand your requirement.' },
              { title: 'Short call', desc: 'We discuss your goals, customers, budget range and timeline.' },
              { title: 'Clear proposal', desc: 'You receive a written scope and fixed quote — no surprises.' },
              { title: 'Kick-off', desc: 'Once approved, we share a timeline and start work.' },
            ]}
          />
          <QuickAnswer answers={sectionAnswers} path="/contact" />
          <Faqs faqs={contactFaqs} h2="Before you contact us" />
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;
