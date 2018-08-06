import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DisplayStats from './components/display-stats';
import StarterStats from './components/starter-stats';

import {connect} from 'react-redux';
import {fetchCharacter} from './actions/char';

class App extends Component {
  componentDidMount(prevProps){
    this.props.dispatch(fetchCharacter('5b64b162560e648424b32a61'));
    //TODO: Change data fetchpoint
  }

  render() {
    return (
      <div className="App">
        <DisplayStats />
        <StarterStats />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(App);