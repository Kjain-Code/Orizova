// Single source of truth for contact details used across the site
// (navbar, footer, contact page, floating buttons, WhatsApp links).

const CONTACT = {
  phoneDisplay: '+91 70608 24503',
  phoneTel: '+917060824503',
  whatsappNumber: '917060824503',
  whatsappMessage: 'Hi Orizova Digital, I want to discuss a project',
  email: 'orizovadigital@gmail.com',
  instagramUrl: 'https://www.instagram.com/orizova.digital/',
  location: 'Delhi NCR, India — working with clients across India',
  // {{TODO: confirm business hours}} — shown on the contact page only when set.
  hours: null, // e.g. 'Mon–Sat, 10:00 am – 7:00 pm'
  // Every official profile URL goes here (used for schema "sameAs").
  // {{TODO: add LinkedIn, Facebook, YouTube and Google Business Profile URLs once created}}
  sameAs: ['https://www.instagram.com/orizova.digital/'],
};

export const whatsappLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

export default CONTACT;
