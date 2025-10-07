import React from 'react';
import './projectCard.scss';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  skills: string[];
  links: {
    preview?: string;
    github?: string;
  };
}

const ProjectSkill: React.FC<{ skill: string }> = ({ skill }) => {
  return <span className="project-skill">{skill}</span>;
};

const ProjectSkills: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <div className="project-skills">
      {skills.map((skill, index) => (
        <ProjectSkill skill={skill} key={index} />
      ))}
    </div>
  );
};

const ProjectLinks: React.FC<{ links: { preview?: string; github?: string } }> = ({ links }) => {
  const { github, preview } = links;
  return (
    <div className="project-links">
      {preview && (
        <a
          href={preview}
          rel="noopener noreferrer"
          target="_blank"
          className="project-link"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          Explore <FiExternalLink />
        </a>
      )}
      {github && (
        <a
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="project-link secondary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          View Source <FaGithub />
        </a>
      )}
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  imageAlt,
  skills,
  links
}) => {
  return (
    <div className="project-card">
      <img className="project-image" src={image} alt={imageAlt || ''} />
      <div className="project-background" />
      <div className="project-content">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <ProjectSkills skills={skills} />
        <ProjectLinks links={links} />
      </div>
    </div>
  );
};

export default ProjectCard;
