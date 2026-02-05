import React, { useEffect } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="modal-body">
          <div className="modal-header">
            <h2>{project.title}</h2>
            {project.featured && <span className="featured-badge">Featured</span>}
          </div>

          <p className="modal-description">{project.longDescription}</p>

          <div className="modal-section">
            <h3>Technologies Used</h3>
            <div className="modal-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag-large">{tech}</span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3>Category</h3>
            <p className="category-tag">{project.category}</p>
          </div>

          <div className="modal-links">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="modal-link"
            >
              <FaGithub /> View Code
            </a>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="modal-link primary"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;