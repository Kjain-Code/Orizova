import React from 'react';
import { Link } from 'react-router-dom';

// Turns "see [local SEO](/services/local-seo)" into text + <Link>.
const Inline = ({ text }) => {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[3]) {
      parts.push(<strong key={i++}>{m[3]}</strong>);
    } else if (m[2].startsWith('/')) {
      parts.push(<Link key={i++} to={m[2]} className="content-link">{m[1]}</Link>);
    } else {
      parts.push(
        <a key={i++} href={m[2]} target="_blank" rel="noopener noreferrer" className="content-link">{m[1]}</a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
};

export default Inline;
