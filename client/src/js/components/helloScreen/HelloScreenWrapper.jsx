import React from 'react';
import GreetingsForm from './helloScreenComponents/GreetingsForm';

import '../../../css/helloPage/HelloScreenWrapper.css';

function HelloScreenWrapper(props) {
  return (
    <div className="hello-screen-wrapper">
      <div className="hero-wrapper">
        <div>CANVAS</div>
        <div className="hero-photo-frame" />
      </div>
      <GreetingsForm />
    </div>
  );
}

export default HelloScreenWrapper;
