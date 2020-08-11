import React, { Component } from 'react';
import { signUp } from '../actions/auth';
import { connect } from 'react-redux';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      confirm_password: '',
    };
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    const { email, password, confirm_password, name } = this.state;
    if (email && password && confirm_password && name) {
      this.props.dispatch(signUp(name, email, password, confirm_password));
    }
  };
  render() {
    const { error, inProgress } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        {error && <div className="alert error-dialog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="enter your name"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="enter your email"
            required
            onChange={(e) => this.handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="enter your password"
            required
            onChange={(e) => this.handleInputChange('password', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="confirm password"
            required
            onChange={(e) =>
              this.handleInputChange('confirm_password', e.target.value)
            }
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Signing Up....
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Sign Up
            </button>
          )}
        </div>
      </form>
    );
  }
}

const mapPropsToState = ({ auth }) => ({
  auth,
});

export default connect(mapPropsToState)(Signup);
