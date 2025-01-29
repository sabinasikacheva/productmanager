import React from 'react';
import './Hero.css';
import pavel from './images/Pavel_BW.webp'; // Импорт изображения

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Pavel Sikachev • Product Leader</h1>
          <p>I'm happy to share my experience with you. I have expertise in building an International career, leading AI products, Transferring from CPO to CEO and back, Managing ambiguity, and setting goals when nothing is clear. Based in Yerevan, Armenia.</p>
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
