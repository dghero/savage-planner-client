import React from 'react';
import {connect} from 'react-redux';


import AdvanceOptionsSkill from './advance-options-skill';
import AdvanceOptionsEdges from './advance-options-edges';

import {
  updateAdvanceValues
} from '../actions/char';

export function AdvanceFieldVal(props){
  let valueHtml;

  // const edgeOptions = props.edges.list.map(edge =>
  //   (<option value={edge.id} key={edge.name}>{edge.name}</option>)
  // );

  const noneOption = (<option value='none' key='none'>Select...</option>);

  const currAdv = props.currAdv;

  switch(currAdv.advType){
    case 'attr':
      valueHtml = (
        <div className="advance-field--value">
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
        <div className="advance-field--value">
          Val: <select defaultValue={currAdv.edgeId}>
            <AdvanceOptionsEdges />
          </select>
        </div>);
      break;

    case 'newskill':
      valueHtml = (
        <div className="advance-field--value">
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
        <div className="advance-field--value">
          Val: <select defaultValue={currAdv.val} onChange={e =>{
            props.dispatch(updateAdvanceValues(currAdv.xp, currAdv.advType, e.target.value, null, null));
          }}>
            <AdvanceOptionsSkill key={`${currAdv.xp}-${currAdv.advType}`} />
          </select>
        </div>);
      break;
    
    case '2skills':
      valueHtml = (
        <div className="advance-field--value">
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
        <div className="advance-field--value">
          Val: <select disabled>
            <option key='none'>Advance unselected...</option>
          </select>
        </div>
      );
      break;
  }
  return valueHtml;
}


const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(AdvanceFieldVal);
