import React from 'react';
import Navbar from './navbar.jsx';

class FriendView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render(props) {
    // console.log('props:', this.props);
    return (
      <div>
        <Navbar />
        Friend View
      </div>
      );
  }
}

module.exports = FriendView;