import React from 'react';
import {connect} from 'react-redux';

import {updateStarterSkill} from '../actions/char';

export function StarterSkills(props){

  //Helper function for formatting
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

  //Helper function for generating dropdown options
  const generateDropdown = function(skill, currentVal){
    return(
      <select id={`starter-${skill}`} name={`starter-${skill}`} defaultValue={currentVal} onChange={e=>
        props.dispatch(updateStarterSkill(skill, e.target.value))
      }>
        <option value="0">d0</option>
        <option value="4">d4</option>
        <option value="6">d6</option>
        <option value="8">d8</option>
        <option value="10">d10</option>
        <option value="12">d12</option>
      </select>
    );
  };

  //Skill data
  let skillListItems;
  const skills = props.character.stats.initial.skills;
  const skillKeys = Object.keys(skills).sort();

  //generate DOM elements for each skill
  skillListItems = skillKeys.map(skill =>{
    const skillName = skill.charAt(0).toUpperCase() + skill.substring(1);
    const linkedAttr = getAttrAbbrev(skills[skill].attr);
    const skillVal = skills[skill].val;
    
    return (
      [<div key={`starter-${skill}-name`} className="stat stat-name starter-skills--name">
        <label htmlFor={`starter-${skill}`}> {skillName} ({linkedAttr})</label> -
      </div>,
      <div key={`starter-${skill}-value`} className="stat stat-value starter-skills--value">
        {generateDropdown(skill, skillVal)}
      </div>]
    );
  });
  
  return (
    <div className="statbox skills-box starter-skills">
      <h3>Skills</h3>
      <form className="starter-skills-list statbox-list">
        {skillListItems}
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(StarterSkills);