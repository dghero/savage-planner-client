import React, { Component } from 'react';

import Navigation from './navigation';
import DisplayStats from './display-stats';
import StarterStats from './starter-stats';
import AdvanceList from './advance-list';

import {connect} from 'react-redux';
import {fetchCharacter} from '../actions/char';
import {fetchEdges} from '../actions/edges';

import './character.css';

class Character extends Component {
  componentDidMount(prevProps){
    this.props.dispatch(fetchEdges());
    this.props.dispatch(fetchCharacter('5b64b162560e648424b32a61'));
  }

  render() {

    let displayCharacter;
    console.log(this.props.character);
    if(this.props.character.stats){
      if(Object.keys(this.props.character.stats).length > 0 ){
        displayCharacter =
          [
            <DisplayStats key={'display'}/>,
            <StarterStats key={'starter'}/>,
            <AdvanceList key={'advances'}/>
          ];
      }
    }
    
    return (
      <div>
        <Navigation currPage={'character'} />
        <main>
          <div className="character">
            <h2>Character Builder</h2>
            {displayCharacter}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(Character);