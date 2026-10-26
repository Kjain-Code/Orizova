import React, { useState } from "react";
import { m } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import projects from "../../data/work/projects";
import { waLink } from "../../data/site/contact";
import "./Projects.css";

/* /portfolio grid. Filters only appear once there are projects in more than
   one category — before, most filter buttons led to an empty grid. */

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -8% 0px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const hostOf = (url) => {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return ""; }
};

const buildLinks = [
  { to: "/services/website-development", label: "Business websites" },
  { to: "/services/ecommerce-solutions", label: "Online stores" },
  { to: "/services/app-development", label: "Web & mobile apps" },
  { to: "/services/branding-designing", label: "Branding" },
];

const Projects = () => {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="pf-section">
      <div className="container">
        {categories.length > 2 && (
          <div className="pf-filters" role="tablist" aria-label="Filter projects">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                className={`pf-filter ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="pf-grid">
          {list.map((p, i) => (
            <m.article
              key={p.slug}
              className="pf-card"
              style={{ "--c": p.color }}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (i % 2) * 0.08 }}
            >
              <Link to={`/portfolio/${p.slug}`} className="pf-shot" aria-label={`${p.title} — project details`}>
                <span className="pf-browser" aria-hidden="true">
                  <i /><i /><i />
                  {p.link && <span className="pf-url">{hostOf(p.link)}</span>}
                </span>
                <span className="pf-img-wrap">
                  {p.image && (
                    <img
                      src={p.image}
                      alt={`${p.title} website designed and developed by Orizova Digital`}
                      width="800"
                      height="338"
                      loading={i < 2 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  )}
                </span>
              </Link>

              <div className="pf-body">
                <p className="pf-kicker">{p.industry || p.category}</p>
                <h3 className="pf-title">
                  <Link to={`/portfolio/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="pf-desc">{p.desc}</p>
                <ul className="pf-tags" aria-label="Project tags">
                  {p.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>

                <div className="pf-actions">
                  <Link to={`/portfolio/${p.slug}`} className="pf-btn">
                    View case study<span className="sr-only"> for {p.title}</span> <FiArrowRight aria-hidden="true" />
                  </Link>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="pf-live">
                      <span className="pf-live-dot" aria-hidden="true" />
                      Visit live site<span className="sr-only"> of {p.title} (opens in a new tab)</span>
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </m.article>
          ))}
        </div>

        <m.div className="pf-next" {...fadeUp}>
          <div className="pf-next-copy">
            <span className="pf-next-kicker">Your project could be next</span>
            <h2>Want a Website Like These for Your Business?</h2>
            <p>Tell us what you do and who you want to reach. We&apos;ll suggest the right type of site, share examples and send a fixed, written quote.</p>
            <ul className="pf-next-links">
              {buildLinks.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="pf-next-actions">
            <a
              href={waLink("Hi Orizova Digital, I saw your portfolio. I want a website for my business — can we discuss?")}
              className="btn-gold" target="_blank" rel="noopener noreferrer"
            >
              <FiMessageCircle aria-hidden="true" /> WhatsApp Us
            </a>
            <Link to="/contact" className="pf-next-link">Get a free consultation <FiArrowRight aria-hidden="true" /></Link>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Projects;