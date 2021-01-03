import React, { Component } from 'react';
import Menu from './components/Menu';
import Main from './components/Main';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import './scss/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Main />
        <PersonalInfo />
        <Education />
      </div>
    )
  }
}

export default App;

