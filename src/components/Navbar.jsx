import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  FiMenu, FiX, FiPhone, FiChevronDown, FiArrowRight, FiMonitor, FiSmartphone, FiTrendingUp,
  FiPenTool, FiSearch, FiShoppingCart, FiInstagram, FiTarget, FiMousePointer, FiMapPin, FiVideo,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import CONTACT, { whatsappLink } from '../data/contact';
import services from '../data/services';
import { industriesIndex } from '../data/siteIndex';
import './Navbar.css';
import logo from '../assets/logo.webp';

const ICONS = {
  FiMonitor, FiSmartphone, FiTrendingUp, FiPenTool, FiSearch, FiShoppingCart,
  FiInstagram, FiTarget, FiMousePointer, FiMapPin, FiVideo,
};
const GROUPS = [
  { name: 'Build', note: 'Websites, stores & apps' },
  { name: 'Grow', note: 'SEO, ads & social' },
  { name: 'Create', note: 'Video & branding' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false);
  const closeTimer = React.useRef(null);
  const { pathname } = useLocation();

  // close menus whenever the page changes
  useEffect(() => { setMegaOpen(false); setMenuOpen(false); }, [pathname]);

  const openMega = () => { clearTimeout(closeTimer.current); setMegaOpen(true); };
  const closeMega = () => { clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setMegaOpen(false), 140); };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Industries', to: '/industries' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Creative Work', to: '/creative-work' },
    { name: 'Blog', to: '/blog' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Orizova Digital home" width="68" height="50" fetchPriority="high" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        <ul className="navbar-links">
          {navLinks.map((link) => link.name === 'Services' ? (
            <li
              key={link.name}
              className={`has-mega ${megaOpen ? 'is-open' : ''}`}
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
              onFocus={openMega}
              onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) closeMega(); }}
              onKeyDown={(e) => { if (e.key === 'Escape') setMegaOpen(false); }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) => `nav-link nav-link--mega ${isActive || pathname.startsWith('/services') ? 'active' : ''}`}
                aria-haspopup="true"
                aria-expanded={megaOpen}
              >
                {link.name} <FiChevronDown className="nav-caret" aria-hidden="true" />
              </NavLink>
              <div className="mega" role="region" aria-label="Services menu">
                <div className="mega-inner">
                  {GROUPS.map((g) => (
                    <div className="mega-col" key={g.name}>
                      <p className="mega-head">{g.name}<span>{g.note}</span></p>
                      <ul>
                        {services.filter((x) => x.group === g.name).map((x) => {
                          const Icon = ICONS[x.icon] || FiArrowRight;
                          return (
                            <li key={x.slug}>
                              <Link to={`/services/${x.slug}`} className="mega-item" onClick={() => setMegaOpen(false)}>
                                <span className="mega-ico" style={{ '--c': x.color }}><Icon aria-hidden="true" /></span>
                                <span className="mega-txt">
                                  <strong>{x.title}</strong>
                                  <small>{x.shortDesc}</small>
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                  <div className="mega-side">
                    <p className="mega-head mega-head--light">By industry</p>
                    <ul className="mega-ind">
                      {industriesIndex.map((i) => (
                        <li key={i.slug}><Link to={`/industries/${i.slug}`} onClick={() => setMegaOpen(false)}>{i.name} <FiArrowRight aria-hidden="true" /></Link></li>
                      ))}
                    </ul>
                    <div className="mega-cta">
                      <strong>Not sure where to start?</strong>
                      <span>Tell us your goal — we&apos;ll suggest the right mix, free.</span>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" /> WhatsApp us</a>
                    </div>
                  </div>
                </div>
                <div className="mega-foot">
                  <Link to="/services" onClick={() => setMegaOpen(false)}>View all services <FiArrowRight aria-hidden="true" /></Link>
                  <span>Websites · SEO · Google &amp; Meta Ads · Social Media · Video — for businesses across India</span>
                </div>
              </div>
            </li>
          ) : (
            <li key={link.name}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <a href={`tel:${CONTACT.phoneTel}`} className="navbar-cta">
          <FiPhone size={16} />
          Call Us
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => link.name === 'Services' ? (
          <div key="svc" className={`mobile-group ${mobileSvcOpen ? 'open' : ''}`}>
            <button type="button" className="mobile-link mobile-group-btn" aria-expanded={mobileSvcOpen} onClick={() => setMobileSvcOpen(!mobileSvcOpen)}>
              Services <FiChevronDown aria-hidden="true" />
            </button>
            <div className="mobile-sub">
              <div>
                <Link to="/services" className="mobile-sub-link mobile-sub-all" onClick={() => setMenuOpen(false)}>All services</Link>
                {GROUPS.map((g) => (
                  <React.Fragment key={g.name}>
                    <p className="mobile-sub-head">{g.name}</p>
                    {services.filter((x) => x.group === g.name).map((x) => (
                      <Link key={x.slug} to={`/services/${x.slug}`} className="mobile-sub-link" onClick={() => setMenuOpen(false)}>{x.title}</Link>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <NavLink
            key={link.name}
            to={link.to}
            end={link.to === '/'}
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <a href={`tel:${CONTACT.phoneTel}`} className="mobile-cta">
          <FiPhone size={16} /> {CONTACT.phoneDisplay}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
