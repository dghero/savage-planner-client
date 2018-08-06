import React from 'react';
import {connect} from 'react-redux';
import './starter-attributes.css';

export function StarterAttribues(props){

  //dummy data to get keys
  // const attributes = {
  //   strength: 6,
  //   vigor: 6,
  //   agility: 6,
  //   smarts: 8,
  //   spirit: 4
  // };

  const generateDropdown = function(currentVal){
    return(
      <select defaultValue={currentVal}>
        <option value="4">d4</option>
        <option value="6">d6</option>
        <option value="8">d8</option>
        <option value="10">d10</option>
        <option value="12">d12</option>
      </select>
    );
  };

  let attrListItems;

  if(Object.keys(props.character).length > 1 ){
    const attributes = props.character.initial.attributes;
    const attrKeys = Object.keys(attributes);

    attrListItems = attrKeys.map(attr =>{
      const attrName = attr.charAt(0).toUpperCase() + attr.substring(1);
      const attrVal = attributes[attr];
      return (
        <li key={`final-${attr}`}>
          {attrName}: {generateDropdown(attrVal)}
        </li>
      );
    });
}
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