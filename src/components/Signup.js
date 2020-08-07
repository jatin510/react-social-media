import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>

        <div className="field">
          <input type="text" placeholder="enter your name" required />
        </div>
        <div className="field">
          <input type="email" placeholder="enter your email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="enter your password" required />
        </div>
        <div className="field">
          <button>Sign Up</button>
        </div>
      </form>
    );
  }
}
