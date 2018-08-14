import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {fetchCharacterList} from '../actions/char'; 
import {newCharacter} from '../actions/char'; 

import './character-list.css';

class CharacterList extends Component{
  componentDidMount(prevProps){
    this.props.dispatch(fetchCharacterList());
  }

  render(){
    let charList = this.props.character.list.map(char =>(
        <li key={char.id}><a href={`/characters/${char.id}`}>
          {char.name ? char.name : 'Unnamed Character'}
        </a></li>
    ));

    let redirect;
    if(this.props.character.charId){
      console.log('whaddup');
      redirect = (
        <Redirect to={`/characters/${this.props.charId}`} />
      );
    }

    return (
      <div className="character-list">
        {redirect}
        <h2>Characters</h2>
        <div className="new-char">
          <button onClick={() =>{
            this.props.dispatch(newCharacter());
            console.log('clicky');
          }}> 
            New Character
          </button>
        </div>
        <ul>
          {charList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(CharacterList);