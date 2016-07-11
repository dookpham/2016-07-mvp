import React from 'react';
import Navbar from './navbar.jsx';

class RestaurantView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render(props) {
    // console.log('props:', this.props);
    return (
      <div>
        <Navbar />
        Restaurant View
      </div>
      );
  }
}

module.exports = RestaurantView;