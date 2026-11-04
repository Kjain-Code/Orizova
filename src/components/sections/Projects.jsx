import React, { useState } from "react";
import { m } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiMessageCircle, FiTrendingUp } from "react-icons/fi";
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

/* Lighthouse-style score rings (Google PageSpeed Insights). */
const LABELS = [["performance", "Performance"], ["accessibility", "Accessibility"], ["bestPractices", "Best practices"], ["seo", "SEO"]];
export const psiUrl = (url) => `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`;

export const ScoreRings = ({ scores, device = "mobile", compact = false }) => {
  const set = scores && scores[device];
  if (!set) return null;
  return (
    <ul className={`pf-scores${compact ? " pf-scores--compact" : ""}`} aria-label={`Google PageSpeed scores (${device})`}>
      {LABELS.map(([k, label]) => {
        const v = set[k];
        const tone = v >= 90 ? "good" : v >= 50 ? "ok" : "low";
        return (
          <li key={k} className={`pf-score pf-score--${tone}`}>
            <span className="pf-ring" style={{ "--v": v }}><b>{v}</b></span>
            <small>{label}</small>
          </li>
        );
      })}
    </ul>
  );
};

const buildLinks = [
  { to: "/services/website-development", label: "Business websites" },
  { to: "/services/ecommerce-solutions", label: "Online stores" },
  { to: "/services/app-development", label: "Web & mobile apps" },
  { to: "/services/branding-designing", label: "Branding" },
];

const Projects = () => {
  const own = projects.find((p) => p.own);
  const clientProjects = projects.filter((p) => !p.own);
  const categories = ["All", ...Array.from(new Set(clientProjects.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const list = active === "All" ? clientProjects : clientProjects.filter((p) => p.category === active);

  return (
    <section className="pf-section">
      <div className="container">
        {own && (
          <m.article className="pf-feature" {...fadeUp}>
            <div className="pf-feature-copy">
              <span className="pf-feature-kicker"><FiTrendingUp aria-hidden="true" /> Case study · our own website</span>
              <h2><Link to={`/portfolio/${own.slug}`}>{own.title}: built to rank, tested by Google</Link></h2>
              <p>{own.desc}</p>
              <ScoreRings scores={own.scores} />
              <p className="pf-score-note">
                Google PageSpeed, mobile · tested {own.scores.checked} ·{" "}
                <a href={psiUrl(own.link)} target="_blank" rel="noopener noreferrer">check it yourself <FiArrowUpRight aria-hidden="true" /></a>
              </p>
              {own.results && (
                <ul className="pf-results">
                  {own.results.slice(0, 2).map((r) => <li key={r}>{r}</li>)}
                </ul>
              )}
              <div className="pf-actions pf-actions--plain">
                <Link to={`/portfolio/${own.slug}`} className="pf-btn">Read the case study <FiArrowRight aria-hidden="true" /></Link>
              </div>
            </div>
            <Link to={`/portfolio/${own.slug}`} className="pf-feature-shot" aria-label={`${own.title} case study (${hostOf(own.link)})`}>
              <span className="pf-browser" aria-hidden="true"><i /><i /><i /><span className="pf-url">{hostOf(own.link)}</span></span>
              <span className="pf-img-wrap"><img src={own.image} alt="Orizova Digital website home page" width="800" height="338" loading="eager" decoding="async" /></span>
            </Link>
          </m.article>
        )}

        <div className="pf-sub text-center">
          <span className="section-tag">Client Websites</span>
          <h2 className="section-title">Live Sites <span>We Designed &amp; Built</span></h2>
        </div>

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
                {p.scope && (
                  <p className="pf-scope"><span>What we did:</span> {p.scope.join(" · ")}</p>
                )}
                {p.scores ? (
                  <div className="pf-card-scores">
                    <ScoreRings scores={p.scores} compact />
                    <a className="pf-score-note" href={psiUrl(p.link)} target="_blank" rel="noopener noreferrer">
                      Google PageSpeed (mobile), {p.scores.checked} <FiArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                ) : (
                  <ul className="pf-tags" aria-label="Project tags">
                    {p.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                )}

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
