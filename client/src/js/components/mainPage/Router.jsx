import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './mainPageComponents/Menu';
import Introduction from './mainPageComponents/Introduction';
import Goals from './mainPageComponents/Goals';
import Projects from './mainPageComponents/Projects';
import TechSkills from './mainPageComponents/TechSkills';
import About from './mainPageComponents/About';


import '../../../css/mainPage/MainPageWrapper.css';

function Routes(props) {
  return (
    <Router>
      <Menu />
      <div className="center-panel">
        <Switch>
          <Route path="/Introduction" exact component={Introduction} />
          <Route path="/goals" component={Goals} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/" component={TechSkills} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
