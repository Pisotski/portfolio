import React, { useState } from 'react';
import Project from './Project';
import data from '../../../../assets/mockdata';

function Projects() {
  const [actives, setActives] = useState('');
  function handleActive(id) {
    setActives(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <div className="projects-grid">
      {data.map(project => (
        <div key={project.id} onClick={() => handleActive(project.id)}>
          <Project
            key={project.id}
            project={project}
            className={actives[project.id] ? 'text-show' : 'text-hide'}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
