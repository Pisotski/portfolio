import React from 'react';
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
        <HelloScreenWrapper />
        <MainPageWrapper />
      </div>
    );
  }
}

export default App;
