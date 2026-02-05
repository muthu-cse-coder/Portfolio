import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card fade-in-up" onClick={() => onClick(project)}>
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-overlay">
          <button className="view-details-btn">View Details</button>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3>{project.title}</h3>
          {project.featured && <span className="featured-badge">Featured</span>}
        </div>
        
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-tag">+{project.technologies.length - 3}</span>
          )}
        </div>

        <div className="project-links">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="project-link"
          >
            <FaGithub /> Code
          </a>
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="project-link"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;