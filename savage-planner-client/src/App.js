import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Navigation from './components/navigation';
import Characters from './components/characters';
import Landing from './components/landing';
import Edges from './components/edges';
import Rules from './components/rules';


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
            <Route path="/character" component={Characters}/>
            <Route exact path="/edges" component={Edges}/>
            <Route exact path="/rules" component={Rules}/>
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