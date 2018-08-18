import React from 'react';
import {connect} from 'react-redux';
// import {Field, reduxForm, focus} from 'redux-form';
// import Input from './input';
import {login} from '../actions/auth';
// import {required, nonEmpty} from '../validators';

import './login-form.css';

export class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username: null,
      password: null
    };
  }

  render() {
    let error;
    if (this.props.auth.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.auth.error}
        </div>
      );
    }
    return (
      <div className="login-form-container">
        <form
          className="login"
          onSubmit={e =>{
            e.preventDefault();
            this.props.dispatch(login(this.state.username, this.state.password));
        }}>
          
          <div>
            <label htmlFor="login-username">Username</label>
            <input
              type="text"
              name="login-username"
              id="login-username"
              onChange={e =>{
                const username = e.target.value;
                this.setState({
                  username
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              name="login-password"
              id="login-password"
              onChange={e =>{
                const password = e.target.value;
                this.setState({
                  password
                });
              }}
            />
          </div>
          <div>
            <input className="button" name="login" type="submit" value="Login"/>
          </div>
        </form>
        <div aria-live="polite">{error}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(LoginForm);
