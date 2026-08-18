import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Projects.css";

const categories = [
  "All",
  "Website Development",
  "App Development",
  "E-Commerce",
  "Digital Marketing",
  "Branding",
  "SEO",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="projects-section">
      <div className="container">

        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="projects-grid"
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="project-card"
              >
                <div className="project-card-glow" />

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
                  <div
                    className="project-top"
                    style={{
                      background: `${project.color}15`,
                    }}
                  >
                    <span className="project-emoji">
                      {project.emoji}
                    </span>

                    <span
                      className="project-category"
                      style={{
                        color: project.color,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                )}

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className="project-result"
                    style={{
                      borderColor: `${project.color}40`,
                      color: project.color,
                    }}
                  >
                    ✅ {project.result}
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                    >
                      {project.linkLabel || "Visit Website"}
                      <FiExternalLink />
                    </a>
                  ) : (
                    <Link to="/contact" className="project-btn">
                      Start a Project Like This
                      <FiExternalLink />
                    </Link>
                  )}

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="projects-cta text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Want results like these for your business?
          </p>

          <Link to="/contact">
            <button className="btn-primary">
              Start Your Project
              <FiArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
