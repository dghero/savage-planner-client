import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayStats from './components/display-stats';
import InitialStats from './components/initial-stats';
class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayStats />
        <InitialStats />
      </div>
    );
  }
}

export default App;
