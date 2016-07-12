import React from 'react';
import Navbar from './navbar.jsx';
import FriendList from './friendList.jsx';

class FriendView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render(props) {
    // console.log('props:', this.props);
    return (
      <div>
        <Navbar current="friends"/>
        Friend View
        <FriendList />
      </div>
      );
  }
}

module.exports = FriendView;