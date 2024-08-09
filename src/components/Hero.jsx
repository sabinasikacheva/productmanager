import React from 'react';
import './Hero.css';
import pavel from './images/Pavel.jpg'; // Импорт изображения

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm Pavel Sikachev</h1>
          <p>Hey there! I'm a product manager and growth consultant with 9+ years of experience in the international business. Skilled in the Cross functional Product and Project management in B2B SaaS e-commerce and B2C marketplace environment. Growth strategy.
          I specialize in software as a service (SaaS) products and have experience with marketplace, mobile apps and web apps. Based in Yerevan, Armenia.</p>
          <a href="#work" className="btn">View My Work</a>
        </div>
        <div className="hero-image">
          <img src={pavel} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
