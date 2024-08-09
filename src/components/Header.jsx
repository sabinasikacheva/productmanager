import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Your Logo</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
