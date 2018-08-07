import React from 'react';
import './display-skills.css';
import {connect} from 'react-redux';

export function DisplaySkills(props){

  //dummy data
  // const skills = {
  //   athletics:{val:0, attr: 'strength'},
  //   fighting:{val:0, attr: 'agility'},
  //   healing:{val:0, attr: 'smarts'},
  //   intimidation:{val:0, attr: 'spirit'},
  //   investigation:{val:0, attr: 'smarts'},
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
  
  let skillListItems;
  
  if(Object.keys(props.character.stats).length > 0 ){
    const skills = props.character.stats.initial.skills;
    const skillKeys = Object.keys(skills).sort();

    skillListItems = skillKeys.map(skill =>{
      const skillName = skill.charAt(0).toUpperCase() + skill.substring(1);
      const linkedAttr = getAttrAbbrev(skills[skill].attr);
      const skillVal = skills[skill].val;
      return (
        <li key={`final-${skill}`}>
          {skillName} ({linkedAttr}): <span className="display-skills--value">d{skillVal}</span>
        </li>
      );
    });
  }

  return (
    <div className="display-skills">
      Final Skills
      <ul>
        {skillListItems}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(DisplaySkills);