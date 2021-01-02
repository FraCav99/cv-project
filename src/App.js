import React, { Component } from 'react';
import Menu from './components/Menu';
import Main from './components/Main';
import './scss/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Main />
      </div>
    )
  }
}

export default App;

