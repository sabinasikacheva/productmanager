import React from 'react';
import './About.css';
import resume from './images/Resume.pdf'; // Импортируйте ваш файл PDF

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>I'm Pavel Sikachev
      Seasoned Director of Product Management with over seven years of international experience. When not advising companies or speaking at conferences about technology, I love surfing, tennis and snowboarding and exploring the world while travelling.
I also enjoy mentoring young technologists looking to start careers in the tech.</p>
      <h2>Resume</h2>
      <p>You can download my resume by clicking the button below:</p>
      {/* <a href={resume} download className="btn">Download Resume</a> */}
    </section>
  );
}

export default About;
