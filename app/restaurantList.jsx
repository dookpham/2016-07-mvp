import React from 'react';
import Restaurant from './restaurant.jsx';
import $ from 'jquery';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.serverRequest = $.get('/api/restaurants', function(result) {
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
      return (<Restaurant key={i} {...item} />);
    });
    return (
      <div>
        RestaurantList with Router       
        {items}
      </div>
      );
  }
}

module.exports = RestaurantList;