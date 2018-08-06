import React from 'react';
import StarterAttribues from './starter-attributes';
import StarterSkills from './starter-skills';

export default function StarterStats(props){

  return (
    <div className="starter-stats">
      <StarterAttribues />
      <StarterSkills />
    </div>
  );
}
