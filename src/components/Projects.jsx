import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import projects from '../data/projects';
import './Projects.css';

const categories = ['All', 'Website Development', 'App Development', 'E-Commerce', 'Digital Marketing', 'Branding', 'SEO'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">Projects That <span>Speak Results</span></h2>
          <p className="section-subtitle">
            Real projects. Real results. See how we've helped businesses grow across industries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
              >
                {/* Top */}
                <div className="project-top" style={{ background: project.color + '15' }}>
                  <span className="project-emoji">{project.emoji}</span>
                  <span className="project-category" style={{ color: project.color }}>
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>

                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Result Badge */}
                  <div className="project-result" style={{ borderColor: project.color + '40', color: project.color }}>
                    ✅ {project.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="projects-cta text-center">
          <p>Want results like these for your business?</p>
          <a href="#contact">
            <button className="btn-primary">
              Start Your Project <FiArrowRight />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;