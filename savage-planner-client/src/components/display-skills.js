import React from 'react';
import {connect} from 'react-redux';

export function DisplaySkills(props){

  //Helper function for formatting
  const getAttrAbbrev = function(attr){
    switch(attr){
      case 'strength': return 'St';
      case 'agility': return 'Ag';
      case 'vigor': return 'Vi';
      case 'smarts': return 'Sm';
      case 'spirit': return 'Sp';
      default: return '??';
    }
  };
  
  let skillListItems;
  const skills = props.character.stats.initial.skills;
  const skillKeys = Object.keys(skills).sort();

  //Get advance bumps
  const advStats = {};
  skillKeys.forEach(key =>{
    advStats[key] = 0;
  });

  props.character.stats.advances.forEach(advance =>{
    if(advance.xp <= props.character.maxXp){
      switch(advance.advType){
        case 'newskill': advStats[advance.val] += 4; break;
        case '1skill': advStats[advance.val] += 2; break;
        case '2skills':
              advStats[advance.val] +=2;
              advStats[advance.val2] +=2;
              break;
        default:
      }
    }
  });

  //Generate li elements
  skillListItems = skillKeys.map(skill =>{
    const skillName = skill.charAt(0).toUpperCase() + skill.substring(1);
    const linkedAttr = getAttrAbbrev(skills[skill].attr);

    let skillVal = skills[skill].val + advStats[skill];
    if (skillVal > 12)
      skillVal = `12+${(skillVal-12)/2}`;

    return (
      [<div key={`final-${skill}-name`} className="stat-name display-skills--name">
        {skillName} ({linkedAttr}) -
      </div>,
      <div key={`final-${skill}-value`} className="stat-value display-skills--val">
        d{skillVal}
      </div>]
    );
  });
  
  return (
    <div className="statbox skills-box display-skills">
      <h3>Skills</h3>
      <div className="display-skills-list statbox-list">
        {skillListItems}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(DisplaySkills);