import React from 'react';
import Navbar from './navbar.jsx';
import RestaurantList from './restaurantList.jsx';
import AddRestaurantForm from './addRestaurantForm.jsx';

class RestaurantView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render(props) {
    // console.log('props:', this.props);
    return (
      <div>
        <Navbar current="restaurants"/>
        <button>Add Restaurant</button>
        <AddRestaurantForm />
        <RestaurantList />
      </div>
    );
  }
}

module.exports = RestaurantView;