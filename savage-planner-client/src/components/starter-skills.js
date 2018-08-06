import React from 'react';
import './starter-skills.css';

export default function StarterSkills(props){

  //dummy data for keys
  const skills = {
    athletics:{val:8, attr: 'strength'},
    fighting:{val:10, attr: 'agility'},
    healing:{val:8, attr: 'smarts'},
    intimidation:{val:4, attr: 'spirit'},
    investigation:{val:4, attr: 'smarts'},
    notice:{val:0, attr: 'smarts'},
    persuasion:{val:0, attr: 'spirit'},
    repair:{val:0, attr: 'smarts'},
    riding:{val:0, attr: 'agility'},
    shooting:{val:0, attr: 'agility'},
    stealth:{val:0, attr: 'agility'},
    streetwise:{val:0, attr: 'smarts'},
    survival:{val:0, attr: 'smarts'},
    taunt:{val:0, attr: 'spirit'},
    throwing:{val:0, attr: 'agility'},
    tracking:{val:0, attr: 'smarts'}
  };

  //Helper function for formatting
  const getAttrAbbrev = function(attr){
    switch(attr){
      case 'strength': return 'St';
      case 'agility': return 'Ag';
      case 'smarts': return 'Sm';
      case 'spirit': return 'Sp';
      case 'vigor': return 'Vi';
    }
  };

  //Helper function for generating dropdown options
  const generateDropdown = function(currentVal){
    return(
      <select>
        <option value="0" selected={currentVal===0 ? true : false}>0</option>
        <option value="4" selected={currentVal===4 ? true : false}>4</option>
        <option value="6" selected={currentVal===6 ? true : false}>6</option>
        <option value="8" selected={currentVal===8 ? true : false}>8</option>
        <option value="10" selected={currentVal===10 ? true : false}>10</option>
        <option value="12" selected={currentVal===12 ? true : false}>12</option>
      </select>
    );
  };

  //get keys
  const skillKeys = Object.keys(skills).sort();

  //get data and generate skills
  const skillListItems = skillKeys.map(skill =>{
    const skillName = skill.charAt(0).toUpperCase() + skill.substring(1);
    const linkedAttr = getAttrAbbrev(skills[skill].attr);
    const skillVal = skills[skill].val;
    return (
      <li key={`final-${skill}`}>
        {skillName} ({linkedAttr}): d{generateDropdown(skillVal)}
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
