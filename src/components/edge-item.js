import React from 'react';
import {connect} from 'react-redux';

export function EdgeItem(props){
  const edge = props.edge;
  const edgeList = props.edges;

  let xpReq;
  
  switch(edge.req.xp){
    case 0: xpReq='Novice'; break;
    case 20: xpReq='Seasoned'; break;
    case 40: xpReq='Veteran'; break;
    case 60: xpReq='Heroic'; break;
    default:
  }

  const edgeReqNames = edge.req.edges.map(reqEdge=>
    edgeList.find(targetEdge => targetEdge.id === reqEdge.edgeId).name
  );
  
  const attrReqs = edge.req.attrs.map(attrReq => 
    `d${attrReq.val} ${attrReq.attr.charAt(0).toUpperCase() + attrReq.attr.substring(1)}`  
  );
  
  const skillReqs = edge.req.skills.map(skillReq => 
    `d${skillReq.val} ${skillReq.skill.charAt(0).toUpperCase() + skillReq.skill.substring(1)}`  
  );

  const finalReqs = [
    xpReq,
    ...edgeReqNames,
    ...attrReqs,
    ...skillReqs,
  ]
  .join(', ');

  return (
    <article className="edge-item">
      <h2>{edge.name}</h2>
      <span>Requirements:</span> {finalReqs}
      <p>{edge.description}</p>
    </article>
  );

}

const mapStateToProps = state => ({
  edges: state.edges.list
});

export default connect(mapStateToProps)(EdgeItem);