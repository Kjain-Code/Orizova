import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'projects', 'about', 'whyus', 'contact'];
      let current = 'home';
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = sections[i];
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Projects', to: 'projects' },
    { name: 'About', to: 'about' },
    { name: 'Why Us', to: 'whyus' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <div className="navbar-logo">
            <img src={logo} alt="Orizova" className="navbar-logo-img" />
            <div className="navbar-logo-text-group">
              <span className="navbar-logo-text">ORIZOVA</span>
              <span className="navbar-logo-subtext">DIGITAL AGENCY</span>
            </div>
          </div>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className={`nav-link ${activeSection === link.to ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a href="#contact" className="navbar-cta">
            Get in Touch
            <FiArrowRight size={14} />
          </a>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-bg" onClick={() => setMenuOpen(false)} />
        <div className="mobile-menu-panel">
          <div className="mobile-menu-header">
            <img src={logo} alt="Orizova" className="navbar-logo-img" />
            <div className="navbar-logo-text-group">
              <span className="navbar-logo-text">ORIZOVA</span>
              <span className="navbar-logo-subtext">DIGITAL AGENCY</span>
            </div>
            <button className="mobile-close" onClick={() => setMenuOpen(false)}>
              <FiX size={22} />
            </button>
          </div>

          <div className="mobile-menu-links">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className={`mobile-link ${activeSection === link.to ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${i * 0.06}s` : '0s' }}
              >
                <span>{link.name}</span>
                <FiArrowRight size={16} />
              </Link>
            ))}
          </div>

          <a href="#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
