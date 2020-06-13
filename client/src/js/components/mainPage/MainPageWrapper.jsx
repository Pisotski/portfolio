import React from 'react';
import Banner from './mainPageComponents/Banner';
import Menu from './mainPageComponents/Menu'
import RightSide from './mainPageComponents/RightSide';
import Projects from './mainPageComponents/Projects';
import Routes from './Router';


import '../../../css/mainPage/MainPageWrapper.css';

function MainPageWrapper(props) {
  return (
    <div className="main-page-wrapper">
      <Banner />
      {/* <div className="left-panel">
        <Menu />
      </div> */}
        {/* <Projects /> */}
      <Routes />
      <RightSide />
    </div>
  );
}

export default MainPageWrapper;
