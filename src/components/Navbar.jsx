import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import CONTACT from '../data/contact';
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
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Creative Work', to: '/creative-work' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Orizova Co." style={{ height: '50px', objectFit: 'contain' }} />
        </Link>

        <ul className="navbar-links">
          {navLinks.map((link) => (
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

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
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
