import React, { Component } from 'react';
import {connect} from 'react-redux';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Characters from './components/characters';
import Landing from './components/landing';
import Edges from './components/edges';
import Rules from './components/rules';

import './App.css';

class App extends Component {
  
  render() {  
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={()=>(<Redirect to="/index"/>)} />
            <Route exact path="/index" render={()=>(<Redirect to="/characters"/>)} />
            {/* <Route exact path="/index" component={Landing}/> */}
            <Route path="/characters" component={Characters}/>
            <Route exact path="/edges" component={Edges}/>
            <Route exact path="/rules" component={Rules}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return {
    character: state.character,
    edges: state.edges,
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);