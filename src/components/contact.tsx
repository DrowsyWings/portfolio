import React from 'react';
import './contact.scss';
import { FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contact me!</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="contact-links">
          <a href="mailto:anishtak282@gmail.com" className="contact-link">
            anishtak282@gmail.com
          </a>
          
          <span className="separator">||</span>
          
          <a 
            href="https://www.linkedin.com/in/anish-tak-28a984287/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
          
          <span className="separator">||</span>
          
          <a 
            href="https://github.com/drowsywings" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link github-link"
          >
            <FaGithub/>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;