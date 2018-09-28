import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import {getAuthTokenFromLocal} from './actions/auth';

import Characters from './components/characters';
import LoginRegister from './components/login-register';
import Edges from './components/edges';
import Rules from './components/rules';
import Logout from './components/logout';

import './App.css';

class App extends Component {
  componentWillMount(){
    this.props.dispatch(getAuthTokenFromLocal());
  }

  render() {  
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={()=>(<Redirect to="/index"/>)} />
            <Route exact path="/index" component={LoginRegister}/>
            <Route path="/characters" component={Characters}/>
            <Route exact path="/edges" component={Edges}/>
            <Route exact path="/rules" component={Rules}/>
            <Route exact path="/logout" component={Logout}/>
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
    auth: state.auth,
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(App);