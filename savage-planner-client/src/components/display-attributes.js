import React from 'react';
import {connect} from 'react-redux';
import './display-attributes.css';

export function DisplayAttributes(props){

  // const attributes = {
  //   strength: 4,
  //   vigor: 4,
  //   agility: 4,
  //   smarts: 4,
  //   spirit: 4
  // };

  let attrListItems;

  if(Object.keys(props.character.stats).length > 0 ){
    const attributes = props.character.stats.initial.attributes;
    const attrKeys = Object.keys(attributes);

    //Get advance bumps
    const advStats = {};
    attrKeys.forEach(key =>{
      advStats[key] = 0;
    });

    props.character.stats.advances.forEach(advance =>{
      if(advance.xp <= props.character.maxXp && advance.advType){
        advStats[advance.val] += 2;
      }
    });

    attrListItems = attrKeys.map(attr =>{
      const attrName = attr.charAt(0).toUpperCase() + attr.substring(1);
      
      let attrVal = attributes[attr] + advStats[attr];
      if (attrVal > 12)
        attrVal = `12+${(attrVal-12)/2}`;

      return (
        <li key={`final-${attr}`}>
          {attrName}: d{attrVal}
        </li>
      );
    });
  }

  return (
    <div className="display-attributes">
      Final Attrs
      <ul>
        {attrListItems}
      </ul>
    </div>
  );
}



const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(DisplayAttributes);