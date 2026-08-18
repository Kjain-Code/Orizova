import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { ChatCharacter } from './Doodles';
import CONTACT, { whatsappLink } from '../data/contact';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend yet — this opens the visitor's email client with the enquiry
  // pre-filled, addressed to us. Once the backend is ready this can be
  // swapped for a real API call without touching the form UI.
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New Enquiry from ${form.name || 'Website'}${form.service ? ` — ${form.service}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || '-'}\nService: ${form.service || '-'}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-inner">
          <motion.div
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
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="form-group">
                <label>Service Needed</label>
                <select name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a Service</option>
                  <option>Website Development</option>
                  <option>App Development</option>
                  <option>Digital Marketing</option>
                  <option>Branding & Designing</option>
                  <option>SEO</option>
                  <option>E-Commerce Solutions</option>
                  <option>Content & Email Marketing</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Your Message *</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} required />
            </div>
            <button type="submit" className="btn-primary submit-btn">
              {sent ? "✅ Opening your email app..." : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
