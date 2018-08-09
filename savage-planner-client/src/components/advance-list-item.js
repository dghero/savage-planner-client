import React from 'react';
import {connect} from 'react-redux';

import AdvanceOptionsSkill from './advance-options-skill';

import {
  updateAdvanceType,
  updateAdvanceValues
} from '../actions/char';

export function AdvanceListItem(props){

  const generateTypeDropdown = function(currAdv){
    return (
      <select defaultValue={currAdv.advType} onChange={e =>{
        props.dispatch(updateAdvanceType(currAdv.xp, e.target.value));
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

  const generateValDropdown = function(currAdv){
    let valueHtml;

    const edgeOptions = props.edges.list.map(edge =>
      (<option value={edge.id} key={edge.name}>{edge.name}</option>)
    );

    const noneOption = (<option value='none' key='none'>Select...</option>);

    switch(currAdv.advType){
      case 'attr':
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.val} onChange={e =>{
              props.dispatch(updateAdvanceValues(currAdv.xp, currAdv.advType, e.target.value, null, null));
            }}>
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
            Val:
            <select defaultValue={currAdv.val} onChange={e =>{
              props.dispatch(updateAdvanceValues(currAdv.xp, currAdv.advType, e.target.value, null, null));
            }}>
              <AdvanceOptionsSkill key={`${currAdv.xp}`} />
            </select>
          </div>);
        break;

      case '1skill':
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.val} onChange={e =>{
              props.dispatch(updateAdvanceValues(currAdv.xp, currAdv.advType, e.target.value, null, null));
            }}>
              <AdvanceOptionsSkill key={`${currAdv.xp}-${currAdv.advType}`} />
            </select>
          </div>);
        break;
      
      case '2skills':
        valueHtml = (
          <div className="advance-item--value">
            Val: <select defaultValue={currAdv.val} onChange={e =>{
              props.dispatch(updateAdvanceValues(currAdv.xp, currAdv.advType, e.target.value, currAdv.val2, null));
            }}>
              <AdvanceOptionsSkill key={`${currAdv.xp}-${currAdv.advType}-1`} />
            </select>
            <select defaultValue={currAdv.val2} onChange={e =>{
              props.dispatch(updateAdvanceValues(currAdv.xp, currAdv.advType, currAdv.val, e.target.value, null));
            }}>
              <AdvanceOptionsSkill key={`${currAdv.xp}-${currAdv.advType}-2`} />
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
  const advTypeDropdown = generateTypeDropdown(currentAdvance);
  const advValDropdown = generateValDropdown(currentAdvance);

  return(
    <li>
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