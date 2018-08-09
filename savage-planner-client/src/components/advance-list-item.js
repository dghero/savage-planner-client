import React from 'react';

import AdvanceFieldType from './advance-field-type';
import AdvanceFieldVal from './advance-field-val';

export default function AdvanceListItem(props){

  const currentAdvance = props.currentAdvance;

  return(
    <li>
      XP: {currentAdvance.xp}
      <div className="advance-field">
        <AdvanceFieldType currAdv={currentAdvance} />
        <AdvanceFieldVal currAdv={currentAdvance} />
      </div>
    </li>
  );
}
