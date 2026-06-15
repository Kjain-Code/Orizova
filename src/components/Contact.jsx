import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's <span>Grow Together</span></h2>
          <p className="section-subtitle">
            Ready to take your business to the next level? Let's talk about how Orizova Co. can help you scale.
          </p>
        </div>

        <div className="contact-inner">
          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <p>We're here to help. Reach out to us through any of these channels.</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><FiMail size={20} /></div>
                <div>
                  <strong>Email Us</strong>
                  <a href="mailto:orizovadigital@gmail.com">orizovadigital@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FiPhone size={20} /></div>
                <div>
                  <strong>Call Us</strong>
                  <a href="tel:+917505802687">+91 7505802687</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><FiMapPin size={20} /></div>
                <div>
                  <strong>Location</strong>
                  <span>India (Serving Globally)</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <p>Follow us on</p>
              <div className="social-links">
                <a href="#" className="social-btn">LinkedIn</a>
                <a href="#" className="social-btn">Instagram</a>
                <a href="#" className="social-btn">Twitter</a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
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
              {sent ? '✅ Message Sent!' : <><FiSend /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;