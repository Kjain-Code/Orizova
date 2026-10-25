import React, { useState } from 'react';
import { m } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import CONTACT, { whatsappLink } from '../../data/site/contact';
import services from '../../data/services/services';
import './Contact.css';

// Optional: set REACT_APP_WEB3FORMS_KEY (free key from web3forms.com) in
// .env.production to receive enquiries by email without a backend.
// Without a key, the form hands the enquiry to WhatsApp — far more reliable
// on phones than a mailto: link. {{TODO: add REACT_APP_WEB3FORMS_KEY}}
const FORM_KEY = process.env.REACT_APP_WEB3FORMS_KEY;

const BUDGETS = ['Not sure yet', 'Under ₹25,000', '₹25,000 – ₹75,000', '₹75,000 – ₹2 lakh', 'Above ₹2 lakh', 'Monthly marketing retainer'];
const EMPTY = { name: '', phone: '', email: '', city: '', service: '', budget: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const trackLead = () => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') window.fbq('track', 'Lead');
  };

  const sendToWhatsApp = () => {
    const lines = [
      `Hi Orizova Digital, I'm ${form.name}${form.city ? ` from ${form.city}` : ''}.`,
      form.service && `Interested in: ${form.service}`,
      form.budget && `Budget: ${form.budget}`,
      '',
      form.message,
      '',
      `Phone: ${form.phone || '-'}`,
      form.email && `Email: ${form.email}`,
    ].filter((l) => l !== false && l !== undefined && l !== null);
    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Spam trap: real visitors never see or tick this hidden box; bots do.
    if (e.currentTarget.elements.botcheck && e.currentTarget.elements.botcheck.checked) { setStatus('sent'); return; }
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
      setForm(EMPTY);
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="contact-kicker">Talk to a real person</span>
            <h2 className="contact-h2">Choose how you&apos;d like to reach us</h2>
            <p className="contact-lead">Most clients start on WhatsApp — send a voice note or a few lines about your business and we&apos;ll take it from there.</p>

            <div className="contact-channels">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cc cc--wa">
                <span className="cc-ico" aria-hidden="true"><FaWhatsapp /></span>
                <span className="cc-body">
                  <strong>WhatsApp</strong>
                  <span>Fastest — usually a reply within minutes</span>
                </span>
                <FiArrowRight className="cc-arrow" aria-hidden="true" />
              </a>
              <a href={`tel:${CONTACT.phoneTel}`} className="cc cc--call">
                <span className="cc-ico" aria-hidden="true"><FiPhone /></span>
                <span className="cc-body">
                  <strong>{CONTACT.phoneDisplay}</strong>
                  <span>Call us for a quick discussion</span>
                </span>
                <FiArrowRight className="cc-arrow" aria-hidden="true" />
              </a>
              <a href={`mailto:${CONTACT.email}`} className="cc cc--mail">
                <span className="cc-ico" aria-hidden="true"><FiMail /></span>
                <span className="cc-body">
                  <strong>{CONTACT.email}</strong>
                  <span>For briefs, documents and detailed requirements</span>
                </span>
                <FiArrowRight className="cc-arrow" aria-hidden="true" />
              </a>
            </div>

            <ul className="contact-meta">
              <li><FiMapPin aria-hidden="true" /> {CONTACT.location}</li>
              {CONTACT.hours && <li><FiClock aria-hidden="true" /> {CONTACT.hours}</li>}
              <li>
                <FaInstagram aria-hidden="true" /> <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer">@orizova.digital on Instagram</a>
              </li>
            </ul>

            <div className="contact-promise">
              <p className="contact-promise-title">What you can expect</p>
              <ul>
                <li><FiCheckCircle aria-hidden="true" /> A free first consultation — no obligation</li>
                <li><FiCheckCircle aria-hidden="true" /> A written plan with a fixed quote</li>
                <li><FiCheckCircle aria-hidden="true" /> Domain, website and ad accounts in your name</li>
              </ul>
            </div>
          </m.div>

          <m.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <div className="form-head">
              <h2 className="form-title">Tell us about your project</h2>
              <p className="form-sub">Takes under a minute. Fields marked * are required.</p>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-name">Your name *</label>
                <input id="cf-name" type="text" name="name" autoComplete="name" value={form.name} onChange={handleChange} placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="cf-phone">Phone / WhatsApp *</label>
                <input id="cf-phone" type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder="you@company.com" />
              </div>
              <div className="form-group">
                <label htmlFor="cf-city">City</label>
                <input id="cf-city" type="text" name="city" autoComplete="address-level2" value={form.city} onChange={handleChange} placeholder="e.g. Noida, Lucknow, Jaipur" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-service">What do you need?</label>
                <select id="cf-service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  {services.map((svc) => <option key={svc.slug}>{svc.title}</option>)}
                  <option>Not sure yet — need advice</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="cf-budget">Budget range</label>
                <select id="cf-budget" name="budget" value={form.budget} onChange={handleChange}>
                  <option value="">Select a range</option>
                  {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cf-message">About your business *</label>
              <textarea id="cf-message" name="message" value={form.message} onChange={handleChange} placeholder="What does your business do, and what would you like to achieve? A link to your current website or Instagram helps." rows={5} required />
            </div>
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
            <button type="submit" className="btn-primary submit-btn" disabled={status === 'sending'}>
              {FORM_KEY ? <FiSend aria-hidden="true" /> : <FaWhatsapp aria-hidden="true" />}
              {status === 'sending' ? 'Sending…' : FORM_KEY ? 'Send enquiry' : 'Send enquiry on WhatsApp'}
            </button>
            <p className="form-status" role="status" aria-live="polite">
              {status === 'sent' && (FORM_KEY
                ? 'Thank you — your enquiry has been sent. We will get back to you soon.'
                : 'WhatsApp has opened with your message — just tap send. If it did not open, call or email us.')}
              {status === 'error' && 'Sorry, something went wrong. Please WhatsApp or call us instead.'}
            </p>
            <p className="form-note">We only use your details to reply to your enquiry. See our <a href="/privacy-policy" className="content-link">privacy policy</a>.</p>
          </m.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
