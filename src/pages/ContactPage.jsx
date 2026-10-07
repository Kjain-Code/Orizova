import React from 'react';
import Seo, { SITE_URL } from '../components/Seo';
import PageBanner from '../components/PageBanner';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';
import { Faqs, Process, faqSchema } from '../components/ContentBlocks';

const contactFaqs = [
  ['How quickly will you reply?', 'We aim to reply to WhatsApp messages and enquiries as soon as possible on working days. For urgent questions, calling is fastest.'],
  ['Is the first consultation free?', 'Yes. The first conversation about your requirement and our suggested approach is free.'],
  ['What should I share in my first message?', 'Your business name, city, what you want (website, SEO, ads, social media, video) and your timeline. A link to your current website or Instagram helps too.'],
  ['Do you work with businesses outside Delhi NCR and Chandigarh?', 'Yes. Most of our work happens online, so we can work with businesses anywhere in India.'],
];

const ContactPage = () => {
  return (
    <PageTransition>
      <Seo
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

      <PageBanner
        title="Contact Orizova Digital —"
        highlight="Free Website & Marketing Consultation"
        subtitle="Call, WhatsApp or send the form — tell us about your business and we'll suggest the right website and marketing plan for it."
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
          <Faqs faqs={contactFaqs} h2="Before you contact us" />
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;
