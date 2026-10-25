import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import CONTACT, { whatsappLink } from '../../data/site/contact';
import './Footer.css';
import logo from '../../assets/logo.webp';
import services from '../../data/services/services';
import { industriesIndex as industries, citiesIndex } from '../../data/site/siteIndex';

const quickLinks = [
  { name: 'About', to: '/about' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Creative Work', to: '/creative-work' },
  { name: 'Blog', to: '/blog' },
  { name: 'FAQ', to: '/faq' },
  { name: 'Contact', to: '/contact' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Orizova Digital – web development & digital marketing agency" width="65" height="48" loading="lazy" decoding="async" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <p>Website development, SEO and digital marketing agency for businesses across India — based in Delhi NCR, working with clients in every major city.</p>
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
          <h2 className="footer-heading">Company</h2>
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
          <h2 className="footer-heading">Industries</h2>
          <ul>
            {industries.filter((ind) => ind.featured).map((ind) => (
              <li key={ind.slug}><Link to={`/industries/${ind.slug}`}>{ind.name}</Link></li>
            ))}
            <li><Link to="/industries">All industries</Link></li>
          </ul>
        </div>
      </div>

      {/* Pan-India strip: one quiet line of city links instead of a big
          "Locations" section. Keeps every city page linked site-wide. */}
      <div className="container footer-areas">
        <h2 className="footer-areas-title">Serving businesses across India</h2>
        <p className="footer-areas-list">
          {citiesIndex.map((c, i) => (
            <React.Fragment key={c.slug}>
              {i > 0 && <span aria-hidden="true"> · </span>}
              <Link to={`/locations/${c.slug}`}>{c.city}</Link>
            </React.Fragment>
          ))}
          <span aria-hidden="true"> · </span>
          <Link to="/locations">All cities</Link>
        </p>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Orizova Digital. All Rights Reserved. | Designed with ❤️ in India</p>
          <nav className="footer-legal" aria-label="Legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/faq">FAQ</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
