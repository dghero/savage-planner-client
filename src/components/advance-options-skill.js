import React from 'react';
import {connect} from 'react-redux';

const getAttrAbbrev = function(attr){
  switch(attr){
    case 'strength': return 'St';
    case 'agility': return 'Ag';
    case 'smarts': return 'Sm';
    case 'spirit': return 'Sp';
    case 'vigor': return 'Vi';
    default: return '??';
  }
};

export function AdvanceOptionsSkill(props){
  const skills = props.character.stats.initial.skills;
  const skillKeys = Object.keys(skills);

  const skillOptions = skillKeys.map(skill =>(
    <option value={skill} key={`${skill}`}>
      {skill.charAt(0).toUpperCase() + skill.substring(1)}
      ({getAttrAbbrev(skills[skill].attr)})
    </option>
  ));

  const noneOption = (<option value='none' key='none'>Select...</option>);

  return ([noneOption, ...skillOptions]);
}


const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(AdvanceOptionsSkill);