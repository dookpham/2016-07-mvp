import React from 'react';
import Meetup from './meetup.jsx';
import $ from 'jquery';

class MeetupList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.serverRequest = $.get('/api/meetups', function(result) {
      console.log('data:', result);
      this.setState({'data': result});
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    const items = this.state.data.map(function(item, i) {
      delete item.createdAt;
      delete item.updatedAt;
      return (<Meetup key={i} {...item} />);
    });
    return (
      <div>
        MeetupList with Router       
        {items}
      </div>
      );
  }
}

module.exports = MeetupList;