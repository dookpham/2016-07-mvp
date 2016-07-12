import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var that = this;
    console.log('current:', this.props.current);
    var navstyle = {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: 'yellow',
    };

    var linkstyles = ['friends', 'restaurants', 'meetups'].map(function(item) {
      
      var style = {
        display: 'block',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
      };

      if (that.props.current === item) {
        console.log('make red', item);
        style.backgroundColor = 'teal';
      }
      return style;
    });


    return (
      <ul style={navstyle}>
        <div style={linkstyles[0]} className="navBtn"><Link to="/friends" >USERS</Link></div>
        <div style={linkstyles[1]} className="navBtn"><Link to="/restaurants" >RESTAURANTS</Link></div>
        <div style={linkstyles[2]} className="navBtn"><Link to="/meetups" >MEETUPS</Link></div>
      </ul>
    );
  }

  click(e) {
    console.log('clicked', e.target.innerHTML);

  }
}

// Friends  |  Restaurants |  Meetups   
module.exports = Navbar;