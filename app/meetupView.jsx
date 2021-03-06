import React from 'react';
import Navbar from './navbar.jsx';
import MeetupList from './meetupList.jsx';

class MeetupView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render(props) {
    // console.log('props:', this.props);
    return (
      <div>
        <Navbar current="meetups"/>
        Meetup View
        <MeetupList />
      </div>
      );
  }
}

module.exports = MeetupView;