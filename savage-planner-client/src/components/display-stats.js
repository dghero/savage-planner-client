import React from 'react';
import {connect} from 'react-redux';
import DisplayAttributes from './display-attributes';
import DisplaySkills from './display-skills';
import DisplayXpDropdown from './display-xp-dropdown';

export default function DisplayStats(props){

  return (
    <div className="display-stats">
      <DisplayAttributes />
      <DisplaySkills />
      <DisplayXpDropdown />
    </div> 
  );
}
