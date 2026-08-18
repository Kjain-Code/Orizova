import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import projects from "../data/projects";
import { SquiggleUnderline } from "./Doodles";
import "./Projects.css";

const featured = projects.slice(0, 3);

const FeaturedWork = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">
            Projects That <span>Speak Results<SquiggleUnderline className="title-squiggle" /></span>
          </h2>
          <p className="section-subtitle">
            Real projects. Real results. A quick look at how we've helped businesses grow.
          </p>
        </motion.div>

        <div className="projects-grid" style={{ marginTop: 50 }}>
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              {project.image ? (
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <span
                    className="project-category project-category-badge"
                    style={{ color: project.color, background: '#fff' }}
                  >
                    {project.category}
                  </span>
                </div>
              ) : (
                <div className="project-top" style={{ background: `${project.color}15` }}>
                  <span className="project-emoji">{project.emoji}</span>
                  <span className="project-category" style={{ color: project.color }}>
                    {project.category}
                  </span>
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div
                  className="project-result"
                  style={{ borderColor: `${project.color}40`, color: project.color }}
                >
                  ✅ {project.result}
                </div>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                    {project.linkLabel || "Visit Website"} <FiExternalLink />
                  </a>
                ) : (
                  <Link to="/portfolio" className="project-btn">
                    View Project <FiExternalLink />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link to="/portfolio">
            <button className="btn-primary">
              View Full Portfolio <FiArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
