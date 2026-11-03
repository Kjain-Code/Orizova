import React, { useEffect, useState } from 'react';
import CONTACT from '../../data/site/contact';

/* The email address is never written as one plain "name@domain" string in
   the page HTML, so address-harvesting bots (and audit tools such as
   SEOptimer's "Remove clear text email addresses") don't pick it up.
   People still see and can copy the normal address — the "@" is just its
   own <span> — and the mailto: link is attached right after the page loads. */

const split = (email) => {
  const at = String(email).indexOf('@');
  return at > 0 ? [email.slice(0, at), email.slice(at + 1)] : [email, ''];
};

/** Visible address: user<span>@</span>domain */
export const EmailText = ({ email = CONTACT.email }) => {
  const [user, domain] = split(email);
  // One wrapping span keeps it a single piece of text inside flex layouts.
  return <span className="email-text">{user}{domain && <><span>@</span>{domain}</>}</span>;
};

/** <a> that becomes a mailto: link once the page is running. Before that
 *  (pre-rendered HTML, no JavaScript) it points to the contact page. */
const EmailLink = ({ email = CONTACT.email, children, ...rest }) => {
  const [href, setHref] = useState('/contact');
  useEffect(() => {
    const [user, domain] = split(email);
    setHref(`mailto:${user}${domain ? `@${domain}` : ''}`);
  }, [email]);
  return <a href={href} {...rest}>{children || <EmailText email={email} />}</a>;
};

export default EmailLink;
