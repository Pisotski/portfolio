/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../../../../css/mainPage/Project.css';

function Project(props) {
  const { project, className } = props;
  const {
    id, imgUri, name, bulletPoints, text,
  } = project;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="project-wrapper" name={id}>
      <div className="project-snapshot-wrapper">
        <img className="project-image" src={imgUri} alt={name} />
        <ul className="project-list">
          <h2>{name}</h2>
          {bulletPoints.map(bulletPoint => <li key={id + bulletPoint[bulletPoint.length - 1]}>{bulletPoint}</li>)}
        </ul>
      </div>
      <p className={className}>{text}</p>
      <div className="arrow-pointer">&#812;</div>
    </div>
  );
}

export default Project;
