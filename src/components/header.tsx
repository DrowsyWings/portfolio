import React from 'react';
import './header.scss';

const Header: React.FC = () => {
  return (
    <>
    <header className="header">
      <nav className="navigation">
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
    </>
  );
};

export default Header;