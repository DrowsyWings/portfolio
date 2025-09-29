import React from 'react';
import ProjectCard from './projectCard';
import { projectsData } from '../projects/project';
import './projects.scss';

// Update your projectsData interface to match the new structure
export interface ProjectData {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  skills: string[]; // Changed from 'tags' to 'skills'
  links: {
    preview?: string;
    github?: string;
  };
}

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      {/* Keep your header if you want it, but the original doesn't have one */}
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
        <div className="title-underline"></div>
      </div>
      
      {/* Main container matching original structure */}
      <div className="projects-container">
        {projectsData.map(proj => (
          <ProjectCard
            title={proj.title}
            description={proj.description}
            skills={proj.skills}
            links={proj.links}
            image={proj.image}
            imageAlt={proj.imageAlt}
            key={proj.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;