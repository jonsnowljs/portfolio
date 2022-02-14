import React from 'react'
import './ProjectCard.css'

function ProjectCard({project}) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className='project-link' href={project.demo}>
              <div className='link-button'>
                <i class="fi fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
        </div>
      </div>
      <img src={project.image} className="project-photo" alt={project.title} />
    </div>
  );
}

export default ProjectCard