import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {fetchCharacterList} from '../actions/char'; 
import {newCharacter} from '../actions/char'; 
import CharacterDeleteButton from './character-delete-button';

import './character-list.css';

class CharacterList extends Component{
  componentDidMount(prevProps){
    this.props.dispatch(fetchCharacterList());
  }

  render(){
    let charList = [];
    this.props.character.list.forEach(char =>{  
      charList.push(<div className="character-list-item--name">
        <a href={`/characters/${char.id}`}>
          {char.name ? char.name : 'Unnamed Character'}
        </a>
      </div>);

      charList.push(<div className="character-list-item--delete">
        <CharacterDeleteButton id={char.id} />
      </div>);
    });

    let redirect;
    if(this.props.character.charId){
      redirect = (
        <Redirect to={`/characters/${this.props.character.charId}`} />
      );
    }

    console.log(charList);

    return (
      <div className="characters">
        {redirect}
        <h1>Characters</h1>
        <div className="new-char">
          <button className="button" onClick={() =>{
            this.props.dispatch(newCharacter());
          }}> 
            New Character
          </button>
        </div>
        <div className="character-list">
          <div className="character-list-items">
            {charList}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return {
    character: state.character
  };
};

export default connect(mapStateToProps)(CharacterList);