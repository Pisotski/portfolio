import React from 'react';
import { Link } from 'react-router-dom';

import '../../../css/mainPage/HelloScreenWrapper.css';

function HelloScreenWrapper(props) {
  return (
    <div className="hello-screen-wrapper">
      <div className="hero-wrapper">
        <div>CANVAS</div>
        <div className="hero-photo">
          <Link to="/home">hi</Link>
        </div>
      </div>
      <div className="form-wrapper">FORM</div>
    </div>
  );
}

export default HelloScreenWrapper;
