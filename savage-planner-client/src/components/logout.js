import React from 'react';
import {connect} from 'react-redux';

import {logout} from '../actions/auth';

import Navigation from './navigation';

import {loadAuthToken} from '../local-storage';

export function Logout(props){

  if(props.auth.authToken && !props.auth.loading){
    console.log('Logging out...', props.auth);
    props.dispatch(logout());
  }

  return(
    <div>
      <Navigation currPage="logout"/>
      <div className="logout">
      <h1>Logged Out</h1>
        <p>Logged out. Thank you for using Savage Planner!</p>
      </div>

      {/* <button onClick={e => {
        console.log('AuthToken Click: ', loadAuthToken());
      }}>
        cLICK ME
      </button> */}
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps)(Logout);