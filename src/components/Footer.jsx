import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import CONTACT, { whatsappLink } from '../data/contact';
import './Footer.css';
import logo from '../assets/logo.png';

const quickLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Creative Work', to: '/creative-work' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Orizova Co." style={{ height: '48px', objectFit: 'contain' }} />
          </Link>
          <p>Your trusted digital growth partner. We build brands, drive traffic, and scale businesses across India and globally.</p>
          <div className="footer-contacts">
            <a href={`mailto:${CONTACT.email}`}><FiMail size={14}/> {CONTACT.email}</a>
            <a href={`tel:${CONTACT.phoneTel}`}><FiPhone size={14}/> {CONTACT.phoneDisplay}</a>
            <span><FiMapPin size={14}/> {CONTACT.location}</span>
          </div>
          <div className="footer-socials">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={18} />
            </a>
            <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map(l => (
              <li key={l.name}>
                <Link to={l.to}>{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            {['Website Development','App Development','Digital Marketing','Branding & Designing','SEO','E-Commerce Solutions'].map(s => (
              <li key={s}><Link to="/services">{s}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Orizova Co. All Rights Reserved. | Designed with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
