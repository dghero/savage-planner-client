import React from 'react';
import {connect} from 'react-redux';

export function DisplayAttributes(props){

  let attrListItems;

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
        <span className="stat-name display-attrs--name">{attrName}:</span> <span className="stat-value display-attrs--value">d{attrVal}</span>
      </li>
    );
  });
  
  return (
    <div className="statbox display-attributes">
      <h3>Final Attrs</h3>
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