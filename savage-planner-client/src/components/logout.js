import React from 'react';
import {connect} from 'react-redux';

import {logout} from '../actions/auth';

import Navigation from './navigation';


export function Logout(props){

  if(props.auth.authToken && !props.auth.loading){
    props.dispatch(logout());
  }

  return(
    <div>
      <Navigation currPage="logout"/>
      <div className="logout">
      <h1>Logged Out</h1>
        <p>Logged out. Thank you for using Savage Planner!</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps)(Logout);