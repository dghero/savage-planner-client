import React from 'react';
import {connect} from 'react-redux';

import AdvanceFieldType from './advance-field-type';
import AdvanceFieldVal from './advance-field-val';

export function AdvanceListItem(props){
  const currAdv = props.currentAdvance;
  const prevAdvs = props.character.advances.filter(adv => adv.xp < currAdv.xp);

  const initSkills = props.character.initial.skills;
  const initAttrs = props.character.initial.attributes;
  const skillKeys = Object.keys(initSkills).sort();
  const attrKeys = Object.keys(initAttrs);

  const prevStats = {skills:{}, attrs:{}, edges:[]};

  //Get stats before current advance
  skillKeys.forEach(key =>prevStats.skills[key] = initSkills[key].val);
  attrKeys.forEach(key => prevStats.attrs[key] = initAttrs[key]);
  
  props.character.advances.forEach(advance =>{
    if(advance.xp < currAdv.xp){
      switch(advance.advType){
        case 'edge': 
              if(advance.edgeId)
                prevStats.edges.push(advance.edgeId);
              break;
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

  let invalidRequirement = [];
  let max;
  let count;
  let attrKey;
  let edgeName;
  let skillName;
  let attrName;

  switch(currAdv.advType){
    case 'edge':
      if(currAdv.edgeId){
        if(prevStats.edges.map(edge=>edge.id).includes(currAdv.edgeId.id)){
          invalidRequirement.push('Duplicate edge');
        }

        if(currAdv.edgeId.req.xp > currAdv.xp){
          invalidRequirement.push(`Minimum XP: ${currAdv.edgeId.req.xp}`);
        }
        if(currAdv.edgeId.req.edges.length > 0){
          currAdv.edgeId.req.edges
            .map(reqEdge=>reqEdge.edgeId) //filter out the mongodb _id for array.... I think
            .forEach(reqEdge =>{
              if(!prevStats.edges.map(edge=>edge.id).includes(reqEdge)){
                edgeName = props.edges.find(edge=>edge.id===reqEdge).name;
                invalidRequirement.push(`Missing edge: ${edgeName}`);
              }
            });
        }
        if(currAdv.edgeId.req.skills.length > 0){
          currAdv.edgeId.req.skills
            .forEach(reqSkill=>{
              if(prevStats.skills[reqSkill.skill] < reqSkill.val){
                skillName = reqSkill.skill.charAt(0).toUpperCase() + reqSkill.skill.substring(1);
                invalidRequirement.push(`Min ${skillName}: ${reqSkill.val}`);
              }
            });
        }
        if(currAdv.edgeId.req.attrs.length > 0){
          currAdv.edgeId.req.attrs
            .forEach(reqAttr=>{
              if(prevStats.attrs[reqAttr.attr] < reqAttr.val){
                attrName = reqAttr.attr.charAt(0).toUpperCase() + reqAttr.attr.substring(1);
                invalidRequirement.push(`Min ${attrName}: ${reqAttr.val}`);
              }
            });
        }
      }
      break;
    
    case 'attr':
      count = prevAdvs.filter(adv => adv.advType === 'attr').length;
      max = Math.floor( (currAdv.xp)/20 );
      if(count > max)
        invalidRequirement.push('Only one +attr per rank');
      break;

    case 'newskill':
      if(prevStats.skills[currAdv.val] > 0)
        invalidRequirement.push('Skill not at d0');
      break;

    case '1skill':
      if(currAdv.val){
        attrKey = initSkills[currAdv.val].attr;
        if(prevStats.skills[currAdv.val] < prevStats.attrs[attrKey])
          invalidRequirement.push('Skill below associated attribute');
      }
      break;

    case '2skills':
      invalidRequirement = [];
      if(currAdv.val === currAdv.val2 && currAdv.val !== null)
        invalidRequirement.push('Must choose two different skills');
      if(currAdv.val){
        attrKey = initSkills[currAdv.val].attr;
        if(prevStats.skills[currAdv.val] >= prevStats.attrs[attrKey])
          invalidRequirement.push('Skill 1 not below associated attribute');
      }
      if(currAdv.val2){
        attrKey = initSkills[currAdv.val2].attr;
        if(prevStats.skills[currAdv.val2] >= prevStats.attrs[attrKey])
          invalidRequirement.push('Skill 2 not below associated attribute');
      }
      break;
    
    case 'none': 
      break;
    default:
      invalidRequirement.push('Unknown Advance');
      
  }

  invalidRequirement = invalidRequirement.join(', ');

  let isInvalid;
  isInvalid = invalidRequirement.length > 0;

  return(
    <li className={`advance-item ${isInvalid? 'invalid-advance' : ''}`}>
      <div className={`advance-field ${isInvalid? 'advance-field--invalid' : ''}`}>
        <label>XP:</label> <span>{currAdv.xp}</span>
        <AdvanceFieldType currAdv={currAdv} />
        <AdvanceFieldVal currAdv={currAdv} />
      </div>
      <div aria-live="polite" className="advance-item--feedback">
        {isInvalid ?
          invalidRequirement
          : ''}
        </div>
    </li>
  );
}

const mapStateToProps = state => ({
  character: state.character.stats,
  edges: state.edges.list
});

export default connect(mapStateToProps)(AdvanceListItem);
