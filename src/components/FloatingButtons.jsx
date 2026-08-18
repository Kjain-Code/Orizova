import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import CONTACT, { whatsappLink } from '../data/contact';
import './FloatingButtons.css';

/* Permanent floating action buttons, present on every page. Real icons,
   real links — no placeholders. */
const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        href={CONTACT.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-insta"
        aria-label="Message us on Instagram"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
};

export default FloatingButtons;
