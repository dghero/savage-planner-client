import React from 'react';
import {connect} from 'react-redux';

import AdvanceFieldType from './advance-field-type';
import AdvanceFieldVal from './advance-field-val';

export function AdvanceListItem(props){

  const currAdv = props.currentAdvance;

  let invalidRequirement;

  const prevAdvs = props.character.advances.filter(adv => adv.xp < currAdv.xp);

  // console.log(prevAdvs);

  let max;
  let key;
  let attr;
  let count; //can be used for many different things

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
      if(currAdv.val){
        count = prevAdvs
          .filter(adv =>(  
              currAdv.val === adv.val
            ||currAdv.val === adv.val2))
          .length;

        if(count > 0 || props.character.initial.skills[currAdv.val].val > 0)
          invalidRequirement = 'Skill not at d0';
      }
      break;

    case '1skill':
      if(currAdv.val){
        key = props.character.initial.skills[currAdv.val].attr;
        count = props.character.initial.skills[currAdv.val].val;
        attr = props.character.initial.attributes[key];

        prevAdvs.forEach(adv =>{
          if(adv.advType === 'attr' && adv.val === key)
            attr += 2;          
          if(adv.advType === 'newskill' && adv.val === currAdv.val)
            count += 4;
          if(adv.advType === '1skill' || adv.advType === '2skills'){
            if(adv.val === currAdv.val)
              count +=2;
            if(adv.val2 === currAdv.val)
              count +=2;
          }
        });

        if(count < attr){
          invalidRequirement = 'Skill below associated attribute';
        }
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
