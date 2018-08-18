import React from 'react';
import {connect} from 'react-redux';

import {updateStarterAttr} from '../actions/char';
// import StarterAttributeDropdown from './starter-attribute-dropdown'

export function StarterAttribues(props){

  const generateDropdown = function(attr, currentVal){
    return(
      <select id={`starter-${attr}`} name={`starter-${attr}`} defaultValue={currentVal} onChange={e=>
            props.dispatch(updateStarterAttr(attr, e.target.value))
          }>
        <option value="4">d4</option>
        <option value="6">d6</option>
        <option value="8">d8</option>
        <option value="10">d10</option>
        <option value="12">d12</option>
      </select>
    );
  };

  let attrListItems;

  const attributes = props.character.stats.initial.attributes;
  const attrKeys = Object.keys(attributes);

  attrListItems = attrKeys.map(attr =>{
    const attrName = attr.charAt(0).toUpperCase() + attr.substring(1);
    const attrVal = attributes[attr];
    return (
      [<div key={`starter-${attr}-name`} className="stat stat-name starter-attrs--name">
        <label htmlFor={`starter-${attr}`}>{attrName}</label> -
      </div>,
      <div key={`starter-${attr}-value`} className="stat stat-value starter-attrs--value">
        {generateDropdown(attr, attrVal)}
      </div>]
    );
  });

  return (
    <div className="statbox starter-attributes">
      <h3>Attributes</h3>
      <form className="starter-attributes-list statbox-list">
        {attrListItems}
      </form>
    </div>
  );
}


const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(StarterAttribues);