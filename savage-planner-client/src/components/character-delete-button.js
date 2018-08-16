import React from 'react';
import { connect } from 'react-redux';

import {deleteCharacterReloadList} from '../actions/char';

export function CharacterDeleteButton(props) {
  const id = props.id;

  return(
    <button className="button" onClick={() =>{
      props.dispatch( deleteCharacterReloadList(id) );
    }}>
    Delete
    </button>
  );
}

const mapStateToProps = state => {  
  return {
    
  };
};

export default connect(mapStateToProps)(CharacterDeleteButton);