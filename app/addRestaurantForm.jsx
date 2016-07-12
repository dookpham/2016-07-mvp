import React from 'react';
import $ from 'jquery';
import InputField from './inputField.jsx';
import Button from './button.jsx';
import RestaurantResults from './restaurantResults.jsx';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantName: '',
      submitForm: this.makeSubmitForm().bind(this),
      restaurantAdded: false,
      restaurantData: {},
      noResultsError: ''
    };
  }
  
  makeSubmitForm() {
    return function(e) {
      console.log('submit form', this.state.restaurantName);
      $.ajax({
        type: 'POST',
        url: '/api/searchrestaurant',
        data: {
          restaurant: this.state.restaurantName,
        },
      }).done(function(data) {
        var results = JSON.parse(data);
        console.log('ajax POST done', results);
        if (results.results_found) {
          this.setState({restaurantAdded: true, restaurantData: results.restaurants, noResultsError: ''});
        } else {
          this.setState({noResultsError: 'No Results Found'});
        }
      }.bind(this)
      );
    };
  }
  
  render() {
    if (this.state.restaurantAdded) {
      return (
        <div>
          <RestaurantResults restaurants={this.state.restaurantData} />
        </div>
      );
    } else {
      return (
        <div>
          <div>{this.state.noResultsError}</div>
          <InputField label="Restaurant Name" limit={50} setVal={(val) => { this.state.restaurantName = val; }} />
          <Button handleClick={this.state.submitForm}/>
        </div>
      );
    }
  }
}

module.exports = Signup;