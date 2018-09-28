import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchCharacter} from '../actions/char';
import {fetchEdges} from '../actions/edges';

import CharacterInfo from './character-info';
import DisplayStats from './display-stats';
import StarterStats from './starter-stats';
import AdvanceList from './advance-list';

import './character.css';

class Character extends Component{
  
  componentDidMount(prevProps){
    this.props.dispatch(fetchEdges());
    this.props.dispatch(fetchCharacter(this.props.charId));
  }

  render(){

    let displayCharacter;
    let charErr;

    if(this.props.character.isStatsLoaded){
      displayCharacter =
        [
          <CharacterInfo key={'info'}/>,
          <DisplayStats key={'display'}/>,
          <StarterStats key={'starter'}/>,
          <AdvanceList key={'advances'}/>
        ];
    }else{
      displayCharacter = this.props.character.charError;
    }

    return(
      <div className="character">
        <h1>Character Builder</h1>
        {charErr}
        {displayCharacter}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const charId = props.match.params.charId;   
  return {
    character: state.character,
    charId
  };
};

export default connect(mapStateToProps)(Character);