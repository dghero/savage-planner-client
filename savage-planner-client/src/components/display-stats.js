import React from 'react';
import DisplayAttributes from './display-attributes';
import DisplaySkills from './display-skills';
import DisplayEdges from './display-edges';
import DisplayXpDropdown from './display-xp-dropdown';


export default function DisplayStats(props){

  return (
    <div className="display-stats stat-section">
      <h2>Final Statistics</h2>
      <DisplayXpDropdown />
      <DisplayAttributes />
      <DisplaySkills />
      <DisplayEdges />
    </div> 
  );
}
