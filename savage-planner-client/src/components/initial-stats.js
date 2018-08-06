import React from 'react';
import InitialAttributes from './initial-attributes';
import InitialSkills from './initial-skills';

export default function InitialStats(props){

  return (
    <div class="initial-stats">
      <InitialAttributes />
      <InitialSkills />
    </div>
  );
}
