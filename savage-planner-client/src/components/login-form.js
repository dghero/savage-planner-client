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

  // onSubmit(values) {
  //   console.log(values);
  //   // return this.props.dispatch(login(values.username, values.password));
  // }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div class="login-form-container">
        <form
          className="login"
          onSubmit={e =>{
            e.preventDefault();
            console.log('Submit!', this.state.username, this.state.password);
            this.props.dispatch(login(this.state.username, this.state.password));
        }}>
          {error}
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
              type="text"
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(LoginForm);
