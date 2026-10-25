// Single source of truth for contact details used across the site
// (navbar, footer, contact page, floating buttons, WhatsApp links).

const CONTACT = {
  phoneDisplay: '+91 70608 24503',
  phoneTel: '+917060824503',
  whatsappNumber: '917060824503',
  whatsappMessage: 'Hi Orizova Digital, I want to discuss a project',
  email: 'orizovadigital@gmail.com',
  instagramUrl: 'https://www.instagram.com/orizova.digital/',
  linkedinUrl: 'https://www.linkedin.com/company/orizova',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61594433301407',
  location: 'Delhi NCR, India — working with clients across India',
  // {{TODO: confirm business hours}} — shown on the contact page only when set.
  hours: null, // e.g. 'Mon–Sat, 10:00 am – 7:00 pm'
  // Every official profile URL goes here (used for schema "sameAs").
  // {{TODO: add Clutch, GoodFirms, YouTube and Google Business Profile URLs once live}}
  sameAs: [
    'https://www.instagram.com/orizova.digital/',
    'https://www.linkedin.com/company/orizova',
    'https://www.facebook.com/profile.php?id=61594433301407',
  ],
};

/** WhatsApp link with a pre-written message (used for service-, city- and
 *  goal-specific "talk to us" buttons so the chat starts with context). */
export const waLink = (message) => `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message || CONTACT.whatsappMessage)}`;

export const whatsappLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

export default CONTACT;
