import React from 'react';
import {connect} from 'react-redux';
import DisplayAttributes from './display-attributes';
import DisplaySkills from './display-skills';
import DisplayXpDropdown from './display-xp-dropdown';

export function DisplayStats(props){

  let display;
  if(Object.keys(props.character.stats).length > 0 ){
    display = 
      [<DisplayAttributes />,
        <DisplaySkills />,
        <DisplayXpDropdown />];
  }

  return (
    <div className="display-stats">
      {display}
    </div> 
  );
}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(DisplayStats);

