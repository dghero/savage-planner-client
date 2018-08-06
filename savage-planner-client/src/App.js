import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayStats from './components/display-stats';
import StarterStats from './components/starter-stats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayStats />
        <StarterStats />
      </div>
    );
  }
}

export default App;
