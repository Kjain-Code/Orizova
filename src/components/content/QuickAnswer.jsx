import React from 'react';
import { FiZap } from 'react-icons/fi';
import { routesByPath } from '../seo/Seo';
import { Inline } from './ContentBlocks';

/* ---------- AEO / GEO: answer-first summary ---------- */
const formatDay = (iso) => {
  const d = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
};

/**
 * Short, self-contained answer shown near the top of a page (copy lives in
 * data/<section>/answers.js). Answer engines — Google featured snippets / AI Overviews,
 * ChatGPT, Perplexity, voice assistants — prefer a direct 40–80 word answer
 * they can quote, plus a visible "last updated" date as a freshness signal.
 * The .qa-q / .qa-a classes are referenced by the page's `speakable` schema
 * (pass `speakable` to <Seo> on pages that render this).
 *
 * `answers` is the section's map from data/<section>/answers.js, so each page
 * only loads the answers it needs (keeps the main bundle small).
 */
const QuickAnswer = ({ answers, path, label = 'Quick answer', className = '' }) => {
  const item = answers && answers[path];
  if (!item) return null;
  const updated = (routesByPath[path] || {}).lastmod;
  return (
    <section className={`qa ${className}`} aria-label={label}>
      <span className="qa-label"><FiZap aria-hidden="true" /> {label}</span>
      <h2 className="qa-q">{item.q}</h2>
      <p className="qa-a"><Inline text={item.a} /></p>
      {item.takeaways && item.takeaways.length > 0 && (
        <>
          <h3 className="qa-sub">Key takeaways</h3>
          <ul className="qa-list">
            {item.takeaways.map((t) => <li key={t.slice(0, 40)}><Inline text={t} /></li>)}
          </ul>
        </>
      )}
      {updated && (
        <p className="qa-meta">
          By Orizova Digital · Last updated <time dateTime={updated}>{formatDay(updated)}</time>
        </p>
      )}
    </section>
  );
};

export default QuickAnswer;
