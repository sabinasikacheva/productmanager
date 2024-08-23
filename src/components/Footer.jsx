import React from 'react';
import './Footer.css';
// Импорт изображений
import facebookIcon from './images/Facebook.png';
import linkedinIcon from './images/LinkedIn.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-signature">
            <h2>Pavel Sikachev</h2>
            <p>Aspiring Product Manager</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-contact">
            <h3>Let's Talk!</h3>
            <p>I am always open to connect with people in tech, learn more about product management, and discuss navigating this rewarding career path.</p>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com/sikachev" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/sikachev" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pavel Sikachev. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;



