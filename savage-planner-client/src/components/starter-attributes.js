import React from 'react';
import './starter-attributes.css';

export default function StarterAttribues(props){

  //dummy data to get keys
  const attributes = {
    strength: 6,
    vigor: 6,
    agility: 6,
    smarts: 8,
    spirit: 4
  };

  const generateDropdown = function(currentVal){
    return(
      <select>
        <option value="4" selected={currentVal===4 ? true : false}>4</option>
        <option value="6" selected={currentVal===6 ? true : false}>6</option>
        <option value="8" selected={currentVal===8 ? true : false}>8</option>
        <option value="10" selected={currentVal===10 ? true : false}>10</option>
        <option value="12" selected={currentVal===12 ? true : false}>12</option>
      </select>
    );
  };

  const attrKeys = Object.keys(attributes);

  const attrListItems = attrKeys.map(attr =>{
    const attrName = attr.charAt(0).toUpperCase() + attr.substring(1);
    const attrVal = attributes[attr];
    return (
      <li key={`final-${attr}`}>
        {attrName}: d{generateDropdown(attrVal)}
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
