import React from 'react';

import Navigation from './navigation';
import LoginForm from './login-form';

export default function Landing(props){
  return(
    <div>
      <Navigation currPage="landing"/>
      <div className="landing">
        <h1>Welcome to Savage Planner</h1>
        <p>Please login or register to continue</p>
        
        <h2>Login</h2>
        <LoginForm />

      </div>
    </div>
  );
}
