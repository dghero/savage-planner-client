import React from 'react';
import {connect} from 'react-redux';
import './starter-skills.css';

import {updateStarterSkill} from '../actions/char';

export function StarterSkills(props){

  //dummy data for keys
  // const skills = {
  //   athletics:{val:8, attr: 'strength'},
  //   fighting:{val:10, attr: 'agility'},
  //   healing:{val:8, attr: 'smarts'},
  //   intimidation:{val:4, attr: 'spirit'},
  //   investigation:{val:4, attr: 'smarts'},
  //   notice:{val:0, attr: 'smarts'},
  //   persuasion:{val:0, attr: 'spirit'},
  //   repair:{val:0, attr: 'smarts'},
  //   riding:{val:0, attr: 'agility'},
  //   shooting:{val:0, attr: 'agility'},
  //   stealth:{val:0, attr: 'agility'},
  //   streetwise:{val:0, attr: 'smarts'},
  //   survival:{val:0, attr: 'smarts'},
  //   taunt:{val:0, attr: 'spirit'},
  //   throwing:{val:0, attr: 'agility'},
  //   tracking:{val:0, attr: 'smarts'}
  // };

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
      <select defaultValue={currentVal} onChange={e=>
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
      <li key={`final-${skill}`}>
        {skillName} ({linkedAttr}): {generateDropdown(skill, skillVal)}
      </li>
    );
  });
  
  return (
    <div className="starter-skills">
      Starter Skills
      <ul>
        {skillListItems}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(StarterSkills);