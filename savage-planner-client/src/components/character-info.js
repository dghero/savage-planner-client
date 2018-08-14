import React from 'react';
import {connect} from 'react-redux';

import {updateName} from '../actions/char';

export function CharacterInfo(props){

  return (
    <div className="character-info">
      Name: 
      {/* {props.character.name} */}
      <input  type='text'
              name='name'
              defaultValue={props.character.name}
              onBlur={e =>{
                props.dispatch( updateName(e.target.value.trim()) );
              }}
      >
      </input>
    </div>
  );
}

const mapStateToProps = state => {  
  return {
    character: state.character.stats
  };
};

export default connect(mapStateToProps)(CharacterInfo);