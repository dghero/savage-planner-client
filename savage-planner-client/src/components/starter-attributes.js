import React from 'react';
import {connect} from 'react-redux';
import './starter-attributes.css';

import {updateStarterAttr} from '../actions/char';
// import StarterAttributeDropdown from './starter-attribute-dropdown'

export function StarterAttribues(props){

  const generateDropdown = function(attr, currentVal){
    return(
      <select defaultValue={currentVal} onChange={e=>
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
      <li key={`final-${attr}`}>
        {attrName}: {generateDropdown(attr, attrVal)}
      </li>
    );
  });

  return (
    <div className="starter-attributes">
      Starter Attributes
      <ul>
        {attrListItems}
      </ul>
    </div>
  );
}


const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(StarterAttribues);