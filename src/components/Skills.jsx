import React from 'react';
import './Skills.css';

function Skills() {
  const skillsData = [
    {
      title: 'Product Strategy',
      description: 'Roadmapping,  A/B Tests, Project Management.',
      image: 'strategy.png' // Имя файла изображения
    },
    {
      title: 'Product Design',
      description: 'User Stories, User Flows, Wireframes, Persona Writing.',
      image: 'design.png'
    },
    {
      title: 'Market & User Research',
      description: 'Market Analysis, Experiment Design,Usability Testing.',
      image: 'research.png'
    },
    {
      title: 'Analytics & Programming',
      description: 'Software Development and Management.',
      image: 'analytics.png'
    },
  ];

  return (
    <section className="skills">
      <div className="skills-content">
        <div className="skills-description">
          <h2>Building products for humans</h2>
          <p>With my startup background, I bring a lean mindset for building products fast. My background uniquely connects me to building products that understand and enhance user experiences</p>
        </div>
        <div className="skills-cards">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={require(`./images/${skill.image}`)} alt={skill.title} />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;


// import React from 'react';
// import './Skills.css';

// function Skills() {
//   return (
//     <section className="skills">
//       <h2>Skills</h2>
//       <div className="skills-list">
//         <div className="skill">JavaScript</div>
//         <div className="skill">React</div>
//         <div className="skill">CSS</div>
//         <div className="skill">HTML</div>
//         {/* Добавьте другие навыки */}
//       </div>
//     </section>
//   );
// }

// export default Skills;
