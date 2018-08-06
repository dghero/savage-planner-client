import React from 'react';
import './display-attributes.css';

export default function DisplayAttributes(props){

  const attributes = {
    strength: 4,
    vigor: 4,
    agility: 4,
    smarts: 4,
    spirit: 4
  };

  const attrKeys = Object.keys(attributes).sort();

  const attrListItems = attrKeys.map(attr =>{
    const attrName = attr.charAt(0).toUpperCase() + attr.substring(1);
    const attrVal = attributes[attr];
    return (
      <li key={`final-${attr}`}>
        {attrName}: d{attrVal}
      </li>
    );
  });

  return (
    <div className="display-attributes">
      Final Attrs
      <ul>
        {attrListItems}
      </ul>
    </div>
  );
}
