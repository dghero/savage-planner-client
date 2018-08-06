import React from 'react';
import DisplayAttributes from './display-attributes';
import DisplaySkills from './display-skills';


export default function DisplayStats(props){

  return (
    <div class="display-stats">
      <DisplayAttributes />
      <DisplaySkills />
    </div>
  );

}


