import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.emailInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('this.emailInputRef ', this.emailInputRef);
    console.log('this.passwordInputRef ', this.passwordInputRef);
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Login</span>

        <div className="field">
          <input
            type="email"
            placeholder="enter your email"
            ref={this.emailInputRef}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="enter your password"
            ref={this.passwordInputRef}
            required
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}
