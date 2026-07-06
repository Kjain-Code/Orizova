import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <div className="navbar-logo">
  <img src={logo} alt="Orizova Co." style={{ height: '50px', objectFit: 'contain' }} />
</div>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="nav-link"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <a href="tel:+918527290722" className="navbar-cta">
          <FiPhone size={16} />
          Call Us
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={600}
            offset={-80}
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <a href="tel:+918527290722" className="mobile-cta">
          <FiPhone size={16} /> +91 8527290722
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;