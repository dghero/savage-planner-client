import React from 'react';
import {connect} from 'react-redux';

import {updateAdvanceType} from '../actions/char';

export function AdvanceListItem(props){

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
  const generateTypeDropdown = function(currentType){
    return (
      <select defaultValue={currentType} onChange={e =>{
        props.dispatch(updateAdvanceType(currentAdvance.xp, e.target.value));
      }}>
        <option value="none" key='none'>None</option>
        <option value="edge" key='edge'>New Edge</option>
        <option value="attr" key='attr'>Attribute</option>
        <option value="newskill" key='newskill'>Buy d4 Skill</option>
        <option value="1skill" key='1skill'>Upgrade Skill</option>
        <option value="2skills" key='2skills'>Upg. 2 Skills</option>
      </select>
    );
  };

  const generateValDropdown = function(currentType, currAdv){
    let valueHtml;
    const skills = props.character.stats.initial.skills;
    const skillKeys = Object.keys(skills);

    const skillOptions = skillKeys.map(skill =>(
      <option value={skill} key={skill}>
        {skill.charAt(0).toUpperCase() + skill.substring(1)}
        ({getAttrAbbrev(skills[skill].attr)})
      </option>
    ));

    const edgeOptions = props.edges.list.map(edge =>
      (<option value={edge.id} key={edge.name}>{edge.name}</option>)
    );

    const noneOption = (<option value='none' key='none'>Select...</option>);

    switch(currentType){
      case 'attr':
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.val}>
              {noneOption}
              <option value='strength' key={'strength'}>Strength</option>
              <option value='agility' key={'agility'}>Agility</option>
              <option value='vigor' key={'vigor'}>Vigor</option>
              <option value='smarts' key={'smarts'}>Smarts</option>
              <option value='spirit' key={'spirit'}>Spirit</option>
            </select>
          </div>);
        break;
      
      case 'edge':
        //TODO: Find out why this won't select properly
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.edgeId}>
              {noneOption}
              {edgeOptions}
            </select>
          </div>);
        break;

      case 'newskill':
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.val}>
              {noneOption}
              {skillOptions}
            </select>
          </div>);
        break;

      case '1skill':
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.val}>
              {noneOption}
              {skillOptions}
            </select>
          </div>);
        break;
      
      case '2skills':
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.val}>
              {noneOption}
              {skillOptions}
            </select>
            <select defaultValue={currAdv.val2}>
              {noneOption}
              {skillOptions}
            </select>
          </div>);
          break;

      default: //catches type 'none'
        valueHtml = (
          <div className="advance-item--value">
            Val: <select disabled>
              <option key='none'>Choose advance type...</option>
            </select>
          </div>
        );
        break;
    }
    return valueHtml;
  };

  const currentAdvance = props.currentAdvance;
  const advTypeDropdown = generateTypeDropdown(currentAdvance.advType);
  const advValDropdown = generateValDropdown(currentAdvance.advType, currentAdvance);

  return(
    <li key={`adv-${currentAdvance.xp}`}>
      XP: {currentAdvance.xp}
      <br/>Type: {advTypeDropdown}
      <br/>{advValDropdown}
    </li>
  );
}


const mapStateToProps = state => ({
  character: state.character,
  edges: state.edges
});

export default connect(mapStateToProps)(AdvanceListItem);