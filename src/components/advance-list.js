import React from 'react';
import {connect} from 'react-redux';
import './advance-list.css';

import AdvanceListItem from './advance-list-item';

export function AdvanceList(props){
  let advanceListItems = [];

  if(Object.keys(props.character.stats).length > 0){
    const advances = props.character.stats.advances;
    
    //XP increments by 5, starts at 5. 75/5 = 15 items
    for(let i = 0; i<= 75/5-1; i++){
      const currentAdvance = advances[i];
      const currentItem = (
        <AdvanceListItem key={`adv-${currentAdvance.xp}`} currentAdvance={currentAdvance} />
      );

      advanceListItems.push(currentItem);
    }
  }

  return (
    <section className="advance-list">
      <h2>Advances</h2>
      <ul>
        {advanceListItems}
      </ul>
    </section>
  ); 
}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(AdvanceList);