import React from 'react';
import {connect} from 'react-redux';

import {updateName} from '../actions/char';

export function CharacterInfo(props){

  return (
    <div className="character-info">
      <form>
        <label for="char-name">Name: </label> 
        <input  
          id="char-name"
          type='text'
          name='char-name'
          defaultValue={props.character.name}
          onBlur={e =>{
            props.dispatch( updateName(e.target.value.trim()) );
          }}
        >
        </input>
      </form>
    </div>
  );
}

const mapStateToProps = state => {  
  return {
    character: state.character.stats
  };
};

export default connect(mapStateToProps)(CharacterInfo);