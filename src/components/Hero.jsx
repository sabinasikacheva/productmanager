import React from 'react';
import './Hero.css';
import pavel from './images/Pavel_BW.webp'; // Импорт изображения

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Pavel Sikachev • Product Leader</h1>
          <p>I’m a tech enthusiast specializing in product management, product advisory, and staffing. 
Demonstrated success in leading global teams to build scalable, AI-powered solutions that drive measurable business outcomes, including revenue growth, user retention, and operational efficiency.
I'm passionate about creating products that give value to customers and grow busineses. Whether you need a product from scratch, a change in the product strategy, or team enhancement, I've got you covered. Let's team up and elevate your digital game!</p>
          <a href="#work" className="btn">Contact me</a>
        </div>
        <div className="hero-image">
          <img src={pavel} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
