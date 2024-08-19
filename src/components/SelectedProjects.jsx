import React from 'react';
import work1 from '../components/images/Mars.png';
import work2 from '../components/images/Jume.png';
import './SelectedProjects.css';

function SelectedProjects() {
  return (
    <section className="selected-projects">
      <h2>Selected Projects</h2>
      <div className="projects">
        <div className="project">
          <img src={work1} alt="MARS" />
          <h3>MARS</h3>
          <h4>Workworkwork</h4>
        </div>
        <div className="project">
          <img src={work2} alt="Jume Platform" />
          <h3>Jume Platform</h3>
          <h4>Workworkwork</h4>

        </div>
      </div>
    </section>
  );
}

export default SelectedProjects;
