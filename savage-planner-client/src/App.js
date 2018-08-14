import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Characters from './components/characters';
import Landing from './components/landing';
import Edges from './components/edges';
import Rules from './components/rules';


export default class App extends Component {
  
  render() {  
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={()=>(<Redirect to="/index"/>)} />
            <Route exact path="/index" component={Landing}/>
            <Route path="/characters" component={Characters}/>
            <Route exact path="/edges" component={Edges}/>
            <Route exact path="/rules" component={Rules}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
