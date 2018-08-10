import React from 'react';
import {connect} from 'react-redux';
import { setMaxDisplayXp } from '../actions/char';

export function DisplayXpDropdown(props){

  const dropOptions = props.character.stats.advances.map(adv =>(
      <option key={adv.xp} value={adv.xp}>{adv.xp} XP</option>
    ));

  return (
    <div className="display-stats">
      <select defaultValue={props.character.maxXp} onChange={e =>{
        props.dispatch(setMaxDisplayXp(e.target.value));
      }}>
        <option key={0} value="0">0 XP</option>
        {dropOptions}
      </select>
    </div>
  );
}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(DisplayXpDropdown);