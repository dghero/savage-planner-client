import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// import {refreshAuthToken, clearAuth, authSetWarning, logout, setAuthToken, getAuthTokenFromLocal} from './actions/auth';
import {getAuthTokenFromLocal} from './actions/auth';

import Characters from './components/characters';
import LoginRegister from './components/login-register';
import Edges from './components/edges';
import Rules from './components/rules';
import Logout from './components/logout';

import './App.css';
import { loadAuthToken } from './local-storage';

class App extends Component {
  componentWillMount(){
    // const token = loadAuthToken();
    // console.log('compwillmount token: ', token);
    this.props.dispatch(getAuthTokenFromLocal());
  }

  // componentDidUpdate(prevProps) {
  //   if (!prevProps.loggedIn && this.props.loggedIn) {
  //     // When we are logged in, refresh the auth token periodically
  //     console.log('Begin refresh');
  //     this.startPeriodicRefresh();
  //   } else if (prevProps.loggedIn && !this.props.loggedIn) {
  //     // Stop refreshing when we log out
  //     console.log('Stop refresh');
  //     this.stopPeriodicRefresh();
  //     // this.props.dispatch(logout());
  //   }
  // }

  // componentWillUnmount() {
  //   this.stopPeriodicRefresh();
  // }

  // startPeriodicRefresh() {
  //   this.refreshInterval = setInterval(
  //     () => this.props.dispatch(refreshAuthToken()),
  //     60 * 60 * 1000 // 1 hr
  //   );
  // }

  // stopPeriodicRefresh() {
  //   if (!this.refreshInterval) {
  //     return;
  //   }

  //   clearInterval(this.refreshInterval);
  // }

  render() {  
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={()=>(<Redirect to="/index"/>)} />
            {/* <Route exact path="/index" render={()=>(<Redirect to="/characters"/>)} /> */}
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