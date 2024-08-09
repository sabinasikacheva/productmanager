import React from 'react';
import './Work.css';

// Импорт изображений
import work1 from './images/Mars.png';
import work2 from './images/Jume.png';
import work3 from './images/Mars.png';
import work4 from './images/Jume.png';

function Work() {
  return (
    <section id="work" className="work">
      <h2>My Work</h2>
      <div className="work-gallery">
        <div className="work-item">
          <img src={work1} alt="Project 1" />
          <h3>Project Title 1</h3>
        </div>
        <div className="work-item">
          <img src={work2} alt="Project 2" />
          <h3>Project Title 2</h3>
        </div>
        <div className="work-item">
          <img src={work3} alt="Project 3" />
          <h3>Project Title 3</h3>
        </div>
        <div className="work-item">
          <img src={work4} alt="Project 4" />
          <h3>Project Title 4</h3>
        </div>
      </div>
    </section>
  );
}

export default Work;

