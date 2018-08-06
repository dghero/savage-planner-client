import React from 'react';
import DisplayAttributes from './display-attributes';
import DisplaySkills from './display-skills';


export default function DisplayStats(props){

  return (
    <div className="display-stats">
      <DisplayAttributes />
      <DisplaySkills />
    </div>
  );

}


