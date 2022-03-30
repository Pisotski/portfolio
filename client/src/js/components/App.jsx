import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import MainPageWrapper from './mainPage/MainPageWrapper';
import HelloScreenWrapper from './helloScreen/HelloScreenWrapper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sayHi: 'Hello World',
    };
  }

  render() {
    const { sayHi } = this.state;
    return (
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HelloScreenWrapper />}/>
          <Route path="/home" element={<MainPageWrapper />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
