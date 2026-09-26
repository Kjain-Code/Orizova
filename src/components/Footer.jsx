import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import CONTACT, { whatsappLink } from '../data/contact';
import './Footer.css';
import logo from '../assets/logo.webp';
import services from '../data/services';
import locations from '../data/locations';

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
            <img src={logo} alt="Orizova Co. – web development & digital marketing agency" width="65" height="48" loading="lazy" decoding="async" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <p>Website development, SEO and digital marketing agency serving Ghaziabad, Noida, Delhi &amp; Chandigarh — and businesses across India and globally.</p>
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
          <h2 className="footer-heading">Quick Links</h2>
          <ul>
            {quickLinks.map(l => (
              <li key={l.name}>
                <Link to={l.to}>{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h2 className="footer-heading">Services</h2>
          <ul>
            {services.map((svc) => (
              <li key={svc.slug}><Link to={`/services/${svc.slug}`}>{svc.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h2 className="footer-heading">Areas We Serve</h2>
          <ul>
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link to={`/locations/${loc.slug}`}>Digital agency in {loc.city}</Link>
              </li>
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
