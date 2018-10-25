import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Navigation from './navigation';
import LoginForm from './login-form';
import RegisterForm from './register-form';

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
      <main role="main">
        <div className="landing">
          <header><h1>Welcome to Savage Planner</h1></header>
          <p>Savage Planner is a character builder for the Tabletop RPG
            game system, Savage Worlds. For more information, please see
            the Rules page.
          </p>
          <p>Please login or register below.</p>
          
          <div className="formContainer">
            <h2>Login</h2>
            <LoginForm />
          </div>
          <div className="formContainer">
            <h2>Register</h2>
            <RegisterForm />
          </div>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = state => { 
  return {
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(LoginRegister);