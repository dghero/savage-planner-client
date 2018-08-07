import React from 'react';
import {connect} from 'react-redux';
import './advance-list.css';

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

export function AdvanceList(props){

  //Helper function for generating dropdown options
  const generateTypeDropdown = function(currentType){
    return (
      <select defaultValue={currentType}>
        <option value="none">None</option>
        <option value="edge">New Edge</option>
        <option value="attr">Attribute</option>
        <option value="newskill">Buy d4 Skill</option>
        <option value="1skill">Upgrade Skill</option>
        <option value="2skills">Upg. 2 Skills</option>
      </select>
    );
  };

  const generateValDropdown = function(currentType, currAdv){
    let valueHtml;
    const skills = props.character.stats.initial.skills;
    const skillKeys = Object.keys(skills);
    const skillOptions = skillKeys.map(skill =>(
      <option value={skill}>
        {skill.charAt(0).toUpperCase() + skill.substring(1)}
        ({getAttrAbbrev(skills[skill].attr)})
      </option>
    ));
    const edgeOptions = props.edges.list.map(edge =>
      (<option value={edge.id}>{edge.name}</option>)
    );
        
    switch(currentType){
      case 'attr':
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.val}>
              <option value='none'>Select...</option>
              <option value='strength'>Strength</option>
              <option value='agility'>Agility</option>
              <option value='vigor'>Vigor</option>
              <option value='smarts'>Smarts</option>
              <option value='spirit'>Spirit</option>
            </select>
          </div>);
        break;
      
      case 'edge':
        //TODO: Find out why this won't select properly
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.edgeId}>
              <option value="none">Select...</option>
              {edgeOptions}
            </select>
          </div>);
        break;

      case 'newskill':
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.val}>
              <option value="none">Select...</option>
              {skillOptions}
            </select>
          </div>);
        break;

      case '1skill':
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.val}>
              <option value="none">Select...</option>
              {skillOptions}
            </select>
          </div>);
        break;
      
      case '2skills':
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.val}>
              <option value="none">Select...</option>
              {skillOptions}
            </select>
            <select defaultValue={currAdv.val2}>
              <option value="none">Select...</option>
              {skillOptions}
            </select>
          </div>);
          break;

      default: //catches type 'none'
        valueHtml = (
          <div className="advance-item--value">
            Val: <select disabled>
              <option>Choose advance type...</option>
            </select>
          </div>
        );
        break;
    }
    return valueHtml;
  };

  let advanceListItems = [];

  if(Object.keys(props.character.stats).length > 0){
    const advances = props.character.stats.advances;
    
    //XP increments by 5, starts at 5. 75/5 = 15 items
    for(let i = 0; i<= 75/5-1; i++){
      const currentAdvance = advances[i];
      const advTypeDropdown = generateTypeDropdown(currentAdvance.advType);
      const advValDropdown = generateValDropdown(currentAdvance.advType, currentAdvance);
      const currentItem = (
        <li key={`adv-${currentAdvance.xp}`}>
          XP: {currentAdvance.xp}
          <br/>Type: {advTypeDropdown}
          <br/>{advValDropdown}
        </li>
      );

      advanceListItems.push(currentItem);
    }
  }

  return (
    <div className="advance-list">
      Advances
      <ul>
        {advanceListItems}
      </ul>
    </div>
  ); 
}

const mapStateToProps = state => ({
  character: state.character,
  edges: state.edges
});

export default connect(mapStateToProps)(AdvanceList);