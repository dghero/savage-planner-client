import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Navigation from './navigation';
import LoginForm from './login-form';

import './login-register.css';

export function LoginRegister(props){
  return(
    <div>
      <Navigation currPage="login"/>
      {
        props.loggedIn
          ? <Redirect to="/characters" />
          : ''
      }
      <main>
        <div className="landing">
          <h1>Welcome to Savage Planner</h1>
          <p>Savage Planner is a character builder for the Tabletop RPG
            game system, Savage Worlds. For more information, please see
            the Rules page.
          </p>
          <p>Please login or register to continue.</p>
          
          <h2>Login</h2>
          <LoginForm />
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = state => { 
  return {
    // auth: state.auth,
    // hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(LoginRegister);