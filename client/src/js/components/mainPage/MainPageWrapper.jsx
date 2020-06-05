import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './mainPageComponents/Banner';
import Menu from './mainPageComponents/Menu';
import RightSide from './mainPageComponents/RightSide';
import Introduction from './mainPageComponents/Introduction';
import Goals from './mainPageComponents/Goals';

import '../../../css/mainPage/MainPageWrapper.css';

function MainPageWrapper(props) {
  return (
    <div className="main-page-wrapper">
      <Banner />
      <div className="main-panel">
        <Router>
          <Menu />
          <Switch>
            <Route path="/" exact component={Introduction} />
            <Route path="/goals" component={Goals} />
          </Switch>
        </Router>
        <RightSide />
      </div>
    </div>
  );
}

export default MainPageWrapper;
