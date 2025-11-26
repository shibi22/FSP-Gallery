import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  GalleryVerticalEnd,
  School,
  BookOpen,
  Code2,
  LayoutTemplate,
  GitBranch,
  CheckCircle2,
  Github,
  FolderGit2,
  Linkedin,
  ExternalLink,
  Terminal
} from 'lucide-react';
import './App.css';

function App() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="app-root">
      {/* Background Elements */}
      <div className="bg-gradient-orb orb-1" />
      <div className="bg-gradient-orb orb-2" />

      {/* Navigation */}
      <nav className="nav-glass">
        <div className="nav-content">
          <div className="nav-logo">
            <GalleryVerticalEnd className="nav-icon" size={24} />
            <span className="nav-title">FSP Gallery</span>
          </div>
          <div className="nav-badge">
            <School size={14} className="badge-icon" />
            <span>Mentorship Program</span>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {/* Hero Section */}
        <motion.section
          className="hero-section"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="hero-container">
            <motion.div className="hero-badge-pill" variants={itemVariants}>
              <Terminal size={14} />
              <span>LEARNING PROGRAM • REACT + VITE + GIT</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Student Project <span className="text-gradient">Showcase</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={itemVariants}>
              A collection of React applications built by students mastering modern frontend development.
              Focusing on component architecture, clean UI, and professional Git workflows.
            </motion.p>

            <motion.div className="hero-features" variants={itemVariants}>
              <div className="feature-item">
                <LayoutTemplate size={20} className="feature-icon" />
                <span>Component-based UI</span>
              </div>
              <div className="feature-item">
                <GitBranch size={20} className="feature-icon" />
                <span>Git Workflow</span>
              </div>
              <div className="feature-item">
                <Sparkles size={20} className="feature-icon" />
                <span>Portfolio Ready</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Project Overview */}
        <motion.section
          className="overview-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card overview-card">
            <div className="card-header">
              <BookOpen className="card-icon-large" size={32} />
              <h2>About This Project</h2>
            </div>
            <div className="card-body">
              <p>
                Each student has built their own independent React + Vite frontend application.
                The code is organized structurally under <code>/students/&lt;name&gt;</code> within the FSP Gallery monorepo.
              </p>
              <div className="overview-grid">
                <div className="overview-item">
                  <CheckCircle2 className="check-icon" size={18} />
                  <span>Hands-on React Components</span>
                </div>
                <div className="overview-item">
                  <CheckCircle2 className="check-icon" size={18} />
                  <span>Real-world Git Operations</span>
                </div>
                <div className="overview-item">
                  <CheckCircle2 className="check-icon" size={18} />
                  <span>Scalable Folder Structure</span>
                </div>
                <div className="overview-item">
                  <CheckCircle2 className="check-icon" size={18} />
                  <span>Modern CSS & Responsive Design</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Participants Section */}
        <section className="participants-section">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Participants</h2>
            <p>Talented developers building the future of web.</p>
          </motion.div>

          <div className="participants-grid">
            {/* Nivetha */}
            <ParticipantCard
              name="Nivetha"
              role="React Frontend – Student Developer"
              github="https://github.com/NIVETHA-123662"
              project="https://github.com/shibi22/FSP-Gallery/tree/main/students/Nivetha"
              linkedin="https://www.linkedin.com/in/nivetha-g/"
            />

            {/* Tharunika */}
            <ParticipantCard
              name="Tharunika"
              role="React Frontend – Student Developer"
              github="https://github.com/dtharunika"
              project="https://github.com/shibi22/FSP-Gallery/tree/main/students/Tharunika/"
              linkedin="https://www.linkedin.com/in/d-tharunika/"
            />

            {/* Logeswari */}
            <ParticipantCard
              name="Logeswari"
              role="React Frontend – Student Developer"
              github="https://github.com/Logeswari-hub"
              project="https://github.com/shibi22/FSP-Gallery/tree/main/students/Logeswari"
              linkedin="https://www.linkedin.com/in/logeswari-m/"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Part of the FSP learning ecosystem – React • Vite • Git • Real-world practice.</p>
      </footer>
    </div>
  );
}

function ParticipantCard({ name, role, github, project, linkedin }) {
  return (
    <motion.div
      className="glass-card participant-card"
      whileHover="hover"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      variants={{
        hover: {
          y: -8,
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        }
      }}
    >
      <div className="participant-header">
        <div className="avatar-placeholder">
          {name.charAt(0)}
        </div>
        <div className="participant-info">
          <h3>{name}</h3>
          <span className="role-text">{role}</span>
        </div>
      </div>

      <div className="participant-actions">
        <a href={github} target="_blank" rel="noreferrer" className="btn-pill btn-github">
          <Github size={16} />
          <span>GitHub</span>
        </a>
        <a href={project} target="_blank" rel="noreferrer" className="btn-pill btn-project">
          <FolderGit2 size={16} />
          <span>Project Repo</span>
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer" className="btn-pill btn-linkedin">
          <Linkedin size={16} />
          <span>LinkedIn</span>
        </a>
      </div>
    </motion.div>
  );
}

export default App;
