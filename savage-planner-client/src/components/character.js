import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchCharacter} from '../actions/char';
import {fetchEdges} from '../actions/edges';

import DisplayStats from './display-stats';
import StarterStats from './starter-stats';
import AdvanceList from './advance-list';

class Character extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(prevProps){
    this.props.dispatch(fetchEdges());
    this.props.dispatch(fetchCharacter(this.props.charId));
  }

  render(){
    console.log(this.props.charId);
    console.log(this.props.character);

    let displayCharacter;
    let charErr;

    if(this.props.character.isLoaded){
      displayCharacter =
        [
          <DisplayStats key={'display'}/>,
          <StarterStats key={'starter'}/>,
          <AdvanceList key={'advances'}/>
        ];
    }else{
      displayCharacter = this.props.character.charError;
    }

    return(
      <div className="character">
        <h2>Character Builder</h2>
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

// const mapStateToProps = state => ({
//   character: state.character
// });

export default connect(mapStateToProps)(Character);