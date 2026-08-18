// Single source of truth for contact details used across the site
// (navbar, footer, contact page, floating buttons, WhatsApp links).

const CONTACT = {
  phoneDisplay: '+91 70608 24503',
  phoneTel: '+917060824503',
  whatsappNumber: '917060824503',
  whatsappMessage: 'Hi Orizova Co., I want to discuss a project',
  email: 'orizovadigital@gmail.com',
  instagramUrl: 'https://www.instagram.com/orizova.digital/',
  location: 'India (Serving Globally)',
};

export const whatsappLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

export default CONTACT;
