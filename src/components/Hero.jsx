import React from 'react';
import './Hero.css';
import pavel from './images/Pavel.jpg'; // Импорт изображения

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm Pavel Sikachev</h1>
          <p>Seasoned Director of Product Management with over seven years of international experience. Based in Yerevan, Armenia.</p>
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
