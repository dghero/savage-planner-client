import React, { Component } from 'react';
import './App.css';

import DisplayStats from './components/display-stats';
import StarterStats from './components/starter-stats';
import AdvanceList from './components/advance-list';

import {connect} from 'react-redux';
import {fetchCharacter} from './actions/char';
import {fetchEdges} from './actions/edges';

class App extends Component {
  componentDidMount(prevProps){
    this.props.dispatch(fetchEdges());
    this.props.dispatch(fetchCharacter('5b64b162560e648424b32a61'));
  }

  render() {

    let displayCharacter;
    console.log(this.props.character);
    if(Object.keys(this.props.character.stats).length > 0 ){
      displayCharacter =
        [
          <DisplayStats key={'display'}/>,
          <StarterStats key={'starter'}/>,
          <AdvanceList key={'advances'}/>
        ];
    }
    return (
      <div className="App">
        {displayCharacter}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(App);