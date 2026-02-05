import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Check out some of my recent work</p>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div 
          ref={ref} 
          className={`projects-grid ${isVisible ? 'visible' : ''}`}
        >
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard 
                project={project} 
                onClick={setSelectedProject}
              />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;