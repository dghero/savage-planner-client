import React from 'react';
import {connect} from 'react-redux';

export function PointBuy(props){

  function pointCalc(total, attrVal){
    return (attrVal-4)/2;
  }

  console.log(props.character.stats.initial.attributes);

  const attrPoints = 5;
  // const attrPoints = props.character.stats.initial.attributes;

  return(
    <div className="point-buy">
      Attribute Points Spent: {attrPoints}/5
    </div>
  );

}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(PointBuy);
