import React from 'react';
import Banner from './mainPageComponents/Banner';
import LeftSide from './mainPageComponents/LeftSide';
import Center from './mainPageComponents/Center';
import RightSide from './mainPageComponents/RightSide';

import '../../../css/mainPage/MainPageWrapper.css';

function MainPageWrapper(props) {
  return (
    <div className="main-page-wrapper">
      <h1>I am you MAIN PAGE!</h1>
      <Banner />
      <div className="main-panel">
        <LeftSide />
        <Center />
        <RightSide />
      </div>
    </div>
  );
}

export default MainPageWrapper;
