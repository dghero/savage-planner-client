import React from 'react';
import StarterAttribues from './starter-attributes';
import StarterSkills from './starter-skills';
import PointBuy from './point-buy';

export default function StarterStats(props){
  
  return (
    <div className="starter-stats stat-section">
      <h2>Starting Statistics</h2>
      <PointBuy />   
      <StarterAttribues />
      <StarterSkills />
    </div>
  );
}
