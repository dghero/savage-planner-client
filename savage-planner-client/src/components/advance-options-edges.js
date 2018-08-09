import React from 'react';
import {connect} from 'react-redux';


export function AdvanceOptionsEdges(props){
  
  const edgeOptions = props.edges.map(edge =>
    (<option value={edge.id} key={edge.name}>{edge.name}</option>)
  );

  const noneOption = (<option value='none' key='none'>Select...</option>);

  return ([noneOption, ...edgeOptions]);
}


const mapStateToProps = state => ({
  edges: state.edges.list
});

export default connect(mapStateToProps)(AdvanceOptionsEdges);