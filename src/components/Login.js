import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Login</span>

        <div className="field">
          <input type="email" placeholder="enter your email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="enter your password" required />
        </div>
        <div className="field">
          <button>Log In</button>
        </div>
      </form>
    );
  }
}
