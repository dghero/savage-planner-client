import React from 'react';
import {connect} from 'react-redux';
import {register} from '../actions/auth';

import './register-form.css';

export class registerForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username: null,
      password: null
    };
  }

  render() {
    let message;
    if (this.props.auth.regMessage) {
      message = (
        <div className="form-error" aria-live="polite">
          {this.props.auth.regMessage}
        </div>
      );
    }
    return (
      <div className="register-form-container">
        <form
          className="register"
          onSubmit={e =>{
            e.preventDefault();
            this.props.dispatch(register(this.state.username, this.state.password));
        }}>
          
          <div>
            <label htmlFor="register-username">Username</label>
            <input
              type="text"
              name="register-username"
              id="register-username"
              onChange={e =>{
                const username = e.target.value;
                this.setState({
                  username
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="register-password">Password</label>
            <input
              type="password"
              name="register-password"
              id="register-password"
              onChange={e =>{
                const password = e.target.value;
                this.setState({
                  password
                });
              }}
            />
          </div>
          <div>
            <input className="button" name="register" type="submit" value="Register"/>
          </div>
        </form>
        <div aria-live="polite">{message}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(registerForm);
