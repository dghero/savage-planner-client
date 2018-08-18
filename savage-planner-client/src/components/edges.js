import React, { Component } from 'react';
import './edges.css';

import {connect} from 'react-redux';
import {fetchEdges} from '../actions/edges';

import Navigation from './navigation';
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
      <div>
        <Navigation currPage={'edges'} />
        <main>
          <div className="edges">
            <h1>Edges</h1>
            <ul>
              {formattedEdges}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  edges: state.edges.list
});

export default connect(mapStateToProps)(Edges);