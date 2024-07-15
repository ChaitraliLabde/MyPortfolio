import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Chaitrali's Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
  /**/
