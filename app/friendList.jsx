import React from 'react';
import Friend from './friend.jsx';
import $ from 'jquery';

class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.serverRequest = $.get('/api/friends', function(result) {
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
      return (<Friend key={i} {...item} />);
    });
    return (
      <div>
        FriendList with Router       
        {items}
      </div>
      );
  }
}

module.exports = FriendList;