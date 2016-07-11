import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log('make Navbar');
  }
  render(props) {
    // console.log('props:', this.props);
    var navstyle = {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: '#333',
    }

    var linkstyle = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
    }

    return (
      <ul style={navstyle}>
        <li style={linkstyle}><Link to="/friends" onClick={this.click}>FRIENDS</Link></li>
        <li style={linkstyle}><Link to="/restaurants" >RESTAURANTS</Link></li>
        <li style={linkstyle}><Link to="/meetups" >MEETUPS</Link></li>
      </ul>
    );
  }

  click(e) {
    console.log('clicked', e.target.innerHTML);

  }
}

// Friends  |  Restaurants |  Meetups   
module.exports = Navbar;