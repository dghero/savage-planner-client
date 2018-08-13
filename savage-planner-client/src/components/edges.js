import React, { Component } from 'react';
import './edges.css';

import {connect} from 'react-redux';
import {fetchEdges} from '../actions/edges';

import EdgeItem from './edge-item';

class Edges extends Component {
  componentDidMount(prevProps){
    this.props.dispatch(fetchEdges());
  }

  render() {
    // console.log(this.props.edges);
    const formattedEdges = this.props.edges.map(edge =>(
      <li key={edge.name}>
        <EdgeItem edge={edge} />
      </li>
    ));
    
    return (
      <main>
        <div className="edges">
          <h2>Edges</h2>
          <ul>
            {formattedEdges}
          </ul>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  edges: state.edges.list
});

export default connect(mapStateToProps)(Edges);