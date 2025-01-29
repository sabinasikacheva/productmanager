import React from 'react';
import './About.css';
import resume from './images/Resume.pdf'; // Импортируйте ваш файл PDF

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>I'm Pavel Sikachev
      Seasoned Director of Product Management with over seven years of international experience in B2C and B2B software development for mobile and web applications. Expert in transforming strategic visions into reality, having spearheaded the localization and international scaling of a SaaS product at Jivochat, a competitor to Intercom, leading to a revenue growth of 180%. Successfully built the top HealthTech ecosystem in Europe at Kinship (a division of Mars Inc.). Adept at leading cross-functional teams encompassing product management, product design, engineering, research, and data across both startup and corporate environments.
Key areas of expertise include Subscription Models, Marketplaces, Mobile Apps, Direct-to-Consumer (D2C), Business-to-Business (B2B), Ecosystem Development, E-Commerce, HealthTech, and AI.
I also enjoy mentoring young technologists looking to start careers in the tech.</p>
      <h2>Resume</h2>
      <p>You can download my resume by clicking the button below:</p>
      {/* <a href={resume} download className="btn">Download Resume</a> */}
    </section>
  );
}

export default About;
