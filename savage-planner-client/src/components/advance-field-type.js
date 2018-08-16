import React from 'react';
import {connect} from 'react-redux';
import {
  updateAdvanceType
} from '../actions/char';

export function AdvanceFieldType(props){
  const typeSelect = (
    <select defaultValue={props.currAdv.advType} onChange={e =>{
      props.dispatch(updateAdvanceType(props.currAdv.xp, e.target.value));
    }}>
      <option value="none" key='none'>None</option>
      <option value="edge" key='edge'>New Edge</option>
      <option value="attr" key='attr'>Attribute</option>
      <option value="newskill" key='newskill'>Buy d4 Skill</option>
      <option value="1skill" key='1skill'>Upgrade Skill</option>
      <option value="2skills" key='2skills'>Upg. 2 Skills</option>
    </select>
  );

  return (
    [
      <span>Type:</span>,
      <span>{typeSelect}</span>
    ]
  );
}


const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(AdvanceFieldType);