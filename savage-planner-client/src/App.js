import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Character from './components/character';
import Landing from './components/landing';
import Edges from './components/edges';


class App extends Component {
  componentDidMount(prevProps){
    // this.props.dispatch(fetchEdges());
    // this.props.dispatch(fetchCharacter('5b64b162560e648424b32a61'));
  }

  render() {
    
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={()=>(<Redirect to="/index"/>)} />
            <Route exact path="/index" component={Landing}/>
            <Route exact path="/character" component={Character}/>
            <Route exact path="/edges" component={Edges}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(App);