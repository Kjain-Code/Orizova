import React, { useState } from 'react';
import { m } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { ChatCharacter } from './Doodles';
import CONTACT, { whatsappLink } from '../data/contact';
import services from '../data/services';
import './Contact.css';

// Optional: set REACT_APP_WEB3FORMS_KEY (free key from web3forms.com) in
// .env.production to receive enquiries by email without a backend.
// Without a key, the form hands the enquiry to WhatsApp — far more reliable
// on phones than the old mailto: link. {{TODO: add REACT_APP_WEB3FORMS_KEY}}
const FORM_KEY = process.env.REACT_APP_WEB3FORMS_KEY;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const trackLead = () => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') window.fbq('track', 'Lead');
  };

  const sendToWhatsApp = () => {
    const text = `Hi Orizova Digital, I'm ${form.name}.${form.service ? ` I'm interested in ${form.service}.` : ''}\n\n${form.message}\n\nPhone: ${form.phone || '-'}\nEmail: ${form.email}`;
    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORM_KEY) {
      sendToWhatsApp();
      trackLead();
      setStatus('sent');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: FORM_KEY,
          subject: `New enquiry from ${form.name || 'website'}${form.service ? ` — ${form.service}` : ''}`,
          from_name: 'Orizova Digital website',
          ...form,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Failed');
      trackLead();
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-inner">
          <m.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ChatCharacter className="contact-chat-character" />
            <h3>Contact Information</h3>
            <p>We're here to help. Reach out to us through any of these channels.</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><FiMail size={20} /></div>
                <div>
                  <strong>Email Us</strong>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FiPhone size={20} /></div>
                <div>
                  <strong>Call Us</strong>
                  <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FiMapPin size={20} /></div>
                <div>
                  <strong>Location</strong>
                  <span>{CONTACT.location}</span>
                </div>
              </div>
              {CONTACT.hours && (
                <div className="info-item">
                  <div className="info-icon"><FiClock size={20} /></div>
                  <div>
                    <strong>Working hours</strong>
                    <span>{CONTACT.hours}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="contact-social">
              <p>Follow us on</p>
              <div className="social-links">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="social-btn">
                  <FaWhatsapp size={16} /> WhatsApp
                </a>
                <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-btn">
                  <FaInstagram size={16} /> Instagram
                </a>
              </div>
            </div>
          </m.div>

          <m.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-name">Your Name *</label>
                <input id="cf-name" type="text" name="name" autoComplete="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="cf-email">Email Address *</label>
                <input id="cf-email" type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-phone">Phone Number</label>
                <input id="cf-phone" type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="form-group">
                <label htmlFor="cf-service">Service Needed</label>
                <select id="cf-service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a Service</option>
                  {services.map((svc) => <option key={svc.slug}>{svc.title}</option>)}
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cf-message">Your Message *</label>
              <textarea id="cf-message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} required />
            </div>
            <button type="submit" className="btn-primary submit-btn" disabled={status === 'sending'}>
              <FiSend aria-hidden="true" /> {status === 'sending' ? 'Sending…' : FORM_KEY ? 'Send Message' : 'Send via WhatsApp'}
            </button>
            <p className="form-status" role="status" aria-live="polite">
              {status === 'sent' && (FORM_KEY
                ? 'Thank you — your enquiry has been sent. We will get back to you soon.'
                : 'WhatsApp has opened with your message — just tap send. If it did not open, call or email us.')}
              {status === 'error' && 'Sorry, something went wrong. Please WhatsApp or call us instead.'}
            </p>
            <p className="form-note">Prefer email? Write to <a href={`mailto:${CONTACT.email}`} className="content-link">{CONTACT.email}</a>. See our <a href="/privacy-policy" className="content-link">privacy policy</a>.</p>
          </m.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
