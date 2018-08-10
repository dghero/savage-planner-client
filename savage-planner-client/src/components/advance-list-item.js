import React from 'react';
import {connect} from 'react-redux';

import AdvanceFieldType from './advance-field-type';
import AdvanceFieldVal from './advance-field-val';

export function AdvanceListItem(props){

  let invalidRequirement;
  const currAdv = props.currentAdvance;
  const prevAdvs = props.character.advances.filter(adv => adv.xp < currAdv.xp);

  const initSkills = props.character.initial.skills;
  const initAttrs = props.character.initial.attributes;
  const skillKeys = Object.keys(initSkills).sort();
  const attrKeys = Object.keys(initAttrs);

  const prevStats = {skills:{}, attrs:{}};

  //Get stats before current advance
  skillKeys.forEach(key =>prevStats.skills[key] = initSkills[key].val);
  attrKeys.forEach(key => prevStats.attrs[key] = initAttrs[key]);
  
  props.character.advances.forEach(advance =>{
    if(advance.xp < currAdv.xp){
      switch(advance.advType){
        case 'attr': prevStats.attrs[advance.val] += 2; break;
        case 'newskill': prevStats.skills[advance.val] += 4; break;
        case '1skill': prevStats.skills[advance.val] += 2; break;
        case '2skills':
              prevStats.skills[advance.val] +=2;
              prevStats.skills[advance.val2] +=2;
              break;
        default:
      }
    }
  });

  console.log('final ', currAdv.xp, prevStats);

  let max;
  let count;
  let attrKey;

  switch(currAdv.advType){
    case 'edge':

      break;
    
    case 'attr':
      count = prevAdvs.filter(adv => adv.advType === 'attr').length;
      max = Math.floor( (currAdv.xp)/20 );
      if(count > max)
        invalidRequirement = 'Only one +attr per rank';
      break;

    case 'newskill':
      if(prevStats.skills[currAdv.val] > 0)
        invalidRequirement = 'Skill not at d0';
      break;

    case '1skill':
      if(currAdv.val){
        attrKey = initSkills[currAdv.val].attr;
        if(prevStats.skills[currAdv.val] < prevStats.attrs[attrKey])
          invalidRequirement = 'Skill below associated attribute';
      }
      break;

    case '2skills':

      break;

  }

  return(
    <li>
      <div className="advance-field">
        XP: {currAdv.xp}
        <AdvanceFieldType currAdv={currAdv} />
        <AdvanceFieldVal currAdv={currAdv} />
      </div>
      {invalidRequirement}
    </li>
  );
}

const mapStateToProps = state => ({
  character: state.character.stats
});

export default connect(mapStateToProps)(AdvanceListItem);
