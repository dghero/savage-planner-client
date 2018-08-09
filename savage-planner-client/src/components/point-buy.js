import React from 'react';
import {connect} from 'react-redux';
import { totalmem } from 'os';

export function PointBuy(props){

  

  const attrPointCost = 
    Object.keys(props.character.stats.initial.attributes)
    .map(key => (props.character.stats.initial.attributes[key]-4)/2 )
    .reduce((total, point) => total+point);

  const skillPointCost =
    Object.keys(props.character.stats.initial.skills)
    .map(key => {
      const skillVal = props.character.stats.initial.skills[key].val;
      const attrKey = props.character.stats.initial.skills[key].attr;
      const attrVal = props.character.stats.initial.attributes[attrKey];

      if(skillVal < 4) 
        return 0;
      let pointCost = (skillVal-2)/2;
      if(skillVal > attrVal)
        pointCost += (skillVal-attrVal)/2;
      
      return pointCost;
    })
    .reduce((total,point)=> total+point);  

  return(
    <div className="point-buy">
      Attribute Points Spent: {attrPointCost}/5
      <br />Skill Points Spent: {skillPointCost}/15
    </div>
  );

}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(PointBuy);
