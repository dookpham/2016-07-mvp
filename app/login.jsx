import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameValue: '',
      passwordValue: '',
      changeName: this.makeChangeName().bind(this),
      changePassword: this.makeChangePassword().bind(this),
      submitForm: this.makeSubmitForm().bind(this)
    }
  }
  makeChangeName() {
    return function(e) {
      this.setState({usernameValue: e.target.value.substr(0, 16)});
    }
  }

  makeChangePassword() {
    return function(e) {
      this.setState({passwordValue: e.target.value.substr(0, 32)});
    }
  }
  
  makeSubmitForm() {
    return function(e) {
      console.log('submit form', this.state.usernameValue, this.state.passwordValue);
      $.ajax({
        type: 'POST',
        url: '/api/login',
        data: {
          username: this.state.usernameValue,
          password: this.state.passwordValue
        },
        success: function() {
          console.log('submitForm successfully');
        }
      });
    }
  }
  
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.state.submitForm}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.usernameValue} onChange={this.state.changeName}></input>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.passwordValue} onChange={this.state.changePassword}></input>
          </div>
          <div>
            <input type="submit" value="Login"></input>
          </div>
        </form>
        <p>
          <Link to="/signup">Create an Account</Link>
        </p>
      </div>
    );
  }


}

module.exports = Login;