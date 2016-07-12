import React from 'react';
import { browserHistory } from 'react-router';
import Restaurant from './restaurant.jsx';
import $ from 'jquery';

class RestaurantResults extends React.Component {
  constructor(props) {
    super(props);
  }

  makeClickRestaurant(item) {
    var that = this;
    return function() {
      console.log('add:', item.restaurant.name);
      $.ajax({
        type: 'POST',
        url: '/api/addrestaurant',
        data: {
          restaurant: item.restaurant,
        },
      }).done(function(data) {
        var results = JSON.parse(data);
        console.log('ajax POST done', results);
        browserHistory.push('/');
        // that.props.history.push('/restaurants');
      });
    };
  }

  render() {
    var that = this;
    const items = this.props.restaurants.map(function(data, i) {
      const clickItem = that.makeClickRestaurant(data);
      var item = data.restaurant;
      item['user_rating'] = item.user_rating.aggregate_rating;
      item.address = item.location.address;
      return (<Restaurant key={i} clickItem={clickItem} {...item} />);
    });

    return (
      <ul>
        {items}
      </ul>
      );
  }
}

module.exports = RestaurantResults;