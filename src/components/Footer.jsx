import React from 'react';
import { Link } from 'react-scroll';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">◎</span>
            <span>Orizova <span className="gold">Co.</span></span>
          </div>
          <p>Your trusted digital growth partner. We build brands, drive traffic, and scale businesses across India and globally.</p>
          <div className="footer-contacts">
            <a href="mailto:orizovadigital@gmail.com"><FiMail size={14}/> orizovadigital@gmail.com</a>
            <a href="tel:+917505802687"><FiPhone size={14}/> +91 7505802687</a>
            <span><FiMapPin size={14}/> India (Serving Globally)</span>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {['home','services','about','whyus','contact'].map(l => (
              <li key={l}>
                <Link to={l} smooth duration={600} offset={-80}>
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            {['Website Development','App Development','Digital Marketing','Branding & Designing','SEO','E-Commerce Solutions','Content & Email Marketing'].map(s => (
              <li key={s}><a href="#">{s}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2025 Orizova Co. All Rights Reserved. | Designed with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;