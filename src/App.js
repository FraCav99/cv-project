import React, { Component } from 'react';
import Menu from './components/Menu';
import Main from './components/Main';
import PersonalInfo from './components/PersonalInfo';
import './scss/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Main />
        <PersonalInfo />
      </div>
    )
  }
}

export default App;

