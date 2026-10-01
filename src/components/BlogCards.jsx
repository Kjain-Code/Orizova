import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './ContentPage.css';

const BlogCards = ({ items }) => (
  <div className="blog-grid">
    {items.map((p) => (
      <Link key={p.slug} to={`/blog/${p.slug}`} className="blog-card">
        <span className="blog-meta">{p.category} · {p.readMins} min read</span>
        <h3>{p.title}</h3>
        <p>{p.excerpt}</p>
        <span className="loc-service-link">Read article <FiArrowRight aria-hidden="true" /></span>
      </Link>
    ))}
  </div>
);

export default BlogCards;

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00+05:30`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' });
