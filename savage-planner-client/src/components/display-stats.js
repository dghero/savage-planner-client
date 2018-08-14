import React from 'react';
import DisplayAttributes from './display-attributes';
import DisplaySkills from './display-skills';
import DisplayEdges from './display-edges';
import DisplayXpDropdown from './display-xp-dropdown';

import './display-stats.css';

export default function DisplayStats(props){

  return (
    <div className="display-stats">
      <DisplayAttributes />
      <DisplaySkills />
      <DisplayEdges />
      <DisplayXpDropdown />
    </div> 
  );
}
