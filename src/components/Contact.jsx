import React, { useState } from 'react';
import { supabase } from "../lib/supabase";
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiCheck, FiArrowRight } from 'react-icons/fi';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const WEB3FORMS_KEY_1 = "ec622610-4371-4411-a270-77e913f55389"; // 0rockykarak@gmail.com
const WEB3FORMS_KEY_2 = "5e075eed-208f-459f-8c9b-63d4aca6782c"; // orizovadigital@gmail.com (yahan apni key daalo)

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Email 1 - 0rockykarak@gmail.com
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY_1,
          subject: `New Lead: ${form.name} - Orizova`,
          from_name: "Orizova Website",
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });
    } catch (err) {
      console.error("Email 1 failed:", err);
    }

    // Email 2 - orizovadigital@gmail.com
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY_2,
          subject: `New Lead: ${form.name} - Orizova`,
          from_name: "Orizova Website",
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });
    } catch (err) {
      console.error("Email 2 failed:", err);
    }

    // 2. Supabase mein save karo (backup)
    try {
      await supabase.from("contact_leads").insert([{
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      }]);
    } catch (err) {
      console.error("Supabase failed:", err);
    }

    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-orb contact-orb-1" />
      <div className="contact-bg-orb contact-orb-2" />

      <div className="container">
        <div className="text-center">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's <span>Grow Together</span></h2>
          <p className="section-subtitle">
            Ready to take your business to the next level? Let's talk about how Orizova Co. can help you scale.
          </p>
        </div>

        <div className="contact-inner">
          {/* Left Side - Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p>Fill up the form and our team will get back to you within 24 hours.</p>

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
                    <a href="tel:+917060824503">+91 7060824503</a>
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
                  <a href="https://www.linkedin.com/company/orizova/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-btn social-linkedin">
                    <FaLinkedinIn size={18} /> LinkedIn
                  </a>
                  <a href="https://instagram.com/orizova0.1" target="_blank" rel="noopener noreferrer" className="social-btn social-instagram">
                    <FaInstagram size={18} /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-form-card">
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>We'd love to hear from you</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className={`form-group ${focused === 'name' ? 'focused' : ''} ${form.name ? 'filled' : ''}`}>
                    <label>Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      placeholder="John Doe" 
                      required 
                    />
                    <div className="form-line" />
                  </div>
                  <div className={`form-group ${focused === 'email' ? 'focused' : ''} ${form.email ? 'filled' : ''}`}>
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={form.email} 
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      placeholder="john@company.com" 
                      required 
                    />
                    <div className="form-line" />
                  </div>
                </div>

                <div className="form-row">
                  <div className={`form-group ${focused === 'phone' ? 'focused' : ''} ${form.phone ? 'filled' : ''}`}>
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={form.phone} 
                      onChange={handleChange}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused(null)}
                      placeholder="+91 XXXXX XXXXX" 
                    />
                    <div className="form-line" />
                  </div>
                  <div className={`form-group ${focused === 'service' ? 'focused' : ''} ${form.service ? 'filled' : ''}`}>
                    <label>Service Needed</label>
                    <select 
                      name="service" 
                      value={form.service} 
                      onChange={handleChange}
                      onFocus={() => setFocused('service')}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="">Select a Service</option>
                      <option>Website Development</option>
                      <option>App Development</option>
                      <option>Digital Marketing</option>
                      <option>Branding & Designing</option>
                      <option>SEO</option>
                      <option>E-Commerce Solutions</option>
                      <option>Content & Email Marketing</option>
                    </select>
                    <div className="form-line" />
                  </div>
                </div>

                <div className={`form-group ${focused === 'message' ? 'focused' : ''} ${form.message ? 'filled' : ''}`}>
                  <label>Your Message *</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell us about your project..." 
                    rows={4} 
                    required 
                  />
                  <div className="form-line" />
                </div>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      className="submit-success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <FiCheck size={20} />
                      <span>Message Sent Successfully!</span>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      className="submit-btn"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <span className="loading-text">Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FiArrowRight size={18} />
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
