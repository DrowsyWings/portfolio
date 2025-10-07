import React from 'react';
import './terminal.scss';

const Terminal: React.FC = () => {
  return (
    <div className="terminal-container">
      <div className="hero-section">
        <div className="hero-header">
          <span className="terminal-prompt">&gt;</span>
          <span className="terminal-name">
            Anish Tak
            <span className="terminal-cursor">█</span>
          </span>
        </div>

        <div className="hero-content">
          <p className="intro-line">Student by enrollment, developer by trial.</p>
          <p className="intro-line">I create, crash, debug, and deploy</p>
          <p className="intro-line">Open-source contributor by choice.</p>
        </div>
      </div>

      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="terminal-buttons">
            <span className="btn-close"></span>
            <span className="btn-minimize"></span>
            <span className="btn-maximize"></span>
          </div>
        </div>

        <div className="terminal-body">
          <div className="terminal-line">
            <span className="prompt">&gt;</span>
            <span className="property"> drowsy.status</span>
          </div>
          <div className="terminal-line value">
            <span className="string">"Open to opportunities"</span>
          </div>

          <div className="terminal-line">
            <span className="prompt">&gt;</span>
            <span className="property"> drowsy.contact</span>
          </div>
          <div className="terminal-line value">
            [
            "<a href="mailto:anishtak282@gmail.com">anishtak282@gmail.com</a>",{" "}
            "<a
              href="https://www.linkedin.com/in/anish-tak-28a984287/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>",{" "}
            "<a
              href="https://github.com/DrowsyWings/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>"
            ]
          </div>

          <div className="terminal-line">
            <span className="prompt">&gt;</span>
            <span className="property"> drowsy.resume</span>
          </div>
          <div className="terminal-line value">
            "<a href="https://drive.google.com/file/d/1Z-ib1a4aWnzSyjQYrHE55LiiQLbuglJF/view?usp=sharing" target="_blank">drowsy.pdf</a>"
          </div>

          <div className="terminal-line">
            <span className="prompt">&gt;</span>
            <span className="property"> drowsy.languages</span>
          </div>
          <div className="terminal-line value">
            [
            <span className="string">"TypeScript"</span>,{" "}
            <span className="string">"C++"</span>,{" "}
            <span className="string">"Go"</span>,{" "}
            <span className="string">"React"</span>
            ]
          </div>

          <div className="terminal-line">
            <span className="prompt">&gt;</span>
            <span className="property"> drowsy.education</span>
          </div>
          <div className="terminal-line value">
            <span className="string">"Undergraduate from IIT Roorkee"</span>
          </div>

          <div className="terminal-line">
            <span className="prompt">&gt;</span>
            <span className="property"> drowsy.interests</span>
          </div>
          <div className="terminal-line value">
            [
            <span className="string">"ricing"</span>,{" "}
            <span className="string">"distro-hoping"</span>,{" "}
            <span className="string">"badminton"</span>,{" "}
            <span className="string">"traveling"</span>
            ]
          </div>

          <div className="terminal-line">
            <span className="prompt">&gt;</span>
            <span className="terminal-cursor-bottom"> █</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
