import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Link } from "react-scroll";
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
    <section id="projects" className="projects-section">
      <div className="container">

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Our Work</span>

          <h2 className="section-title">
            Projects That <span>Speak Results</span>
          </h2>

          <p className="section-subtitle">
            Real projects. Real results. See how we've helped businesses grow
            across industries.
          </p>
        </motion.div>

        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${
                active === cat ? "active" : ""
              }`}
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
                exit={{
                  opacity: 0,
                  scale: .8,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="project-card"
              >

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

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>{project.desc}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="project-tag"
                      >
                        {tag}
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

                  <button className="project-btn">
                    View Project
                    <FiExternalLink />
                  </button>

                </div>

              </motion.div>

            ))}

          </AnimatePresence>
        </motion.div>

        <motion.div
          className="projects-cta text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <p>
            Want results like these for your business?
          </p>

          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
          >
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