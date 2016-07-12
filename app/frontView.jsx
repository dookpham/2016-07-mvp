import React from 'react';
import Navbar from './navbar.jsx';
import { Link } from 'react-router';

class FrontView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render(props) {
    // console.log('props:', this.props);
    return (
      <div>
        <Navbar />
        <h2>Login</h2>

            <div>
              <label for="username">Username:</label>
              <input type="text" name="username"></input>
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" name="password"></input>
            </div>
            <div>
              <input type="submit" value="Login"></input>
            </div>

        <p>
          <Link to="/signup">Create an Account</Link>
        </p>
      </div>
    );
  }
}

module.exports = FrontView;