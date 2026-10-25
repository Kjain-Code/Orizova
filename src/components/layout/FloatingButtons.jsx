import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import CONTACT, { whatsappLink } from '../../data/site/contact';
import './FloatingButtons.css';

/* Floating contact buttons on every page (Instagram above WhatsApp, bottom
   right), plus a small greeting bubble that appears a few seconds after the
   page loads — like a salesperson saying hello. Closing it hides it for the
   rest of the visit (sessionStorage, wrapped in try/catch so private mode
   never breaks the page). */
const SEEN_KEY = 'orz-greet-closed';

const FloatingButtons = () => {
  const [greet, setGreet] = useState(false);

  useEffect(() => {
    let closed = false;
    try { closed = sessionStorage.getItem(SEEN_KEY) === '1'; } catch (e) { /* storage blocked */ }
    if (closed) return undefined;
    const t = setTimeout(() => setGreet(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const closeGreet = () => {
    setGreet(false);
    try { sessionStorage.setItem(SEEN_KEY, '1'); } catch (e) { /* storage blocked */ }
  };

  return (
    <>
      <a
        href={CONTACT.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-insta"
        aria-label="Message us on Instagram"
      >
        <FaInstagram size={24} />
      </a>

      {greet && (
        <div className="float-greet" role="status">
          <button type="button" className="float-greet-close" onClick={closeGreet} aria-label="Close message">
            <FiX aria-hidden="true" />
          </button>
          <p className="float-greet-title">Hi there 👋</p>
          <p className="float-greet-text">Need a website, more enquiries or better Google ranking? Ask us anything — we usually reply within minutes.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="float-greet-btn" onClick={closeGreet}>
            <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
          </a>
        </div>
      )}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={26} />
        <span className="float-tooltip">Chat with us</span>
      </a>
    </>
  );
};

export default FloatingButtons;
