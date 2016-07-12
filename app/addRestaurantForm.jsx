import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import InputField from './inputField.jsx';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantName: '',
      submitForm: this.makeSubmitForm().bind(this)
    };
  }
  
  makeSubmitForm() {
    return function(e) {
      console.log('submit form', this.state.restaurantName);
      $.ajax({
        type: 'POST',
        url: '/api/addrestaurant',
        data: {
          restaurant: this.state.restaurantName,
        },
        success: function() {
          console.log('submitForm successfully');
        }
      });
    };
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.state.submitForm}>
          <InputField label="Restaurant Name" limit={50} setVal={(val) => { this.state.restaurantName = val; }} />
          <div>
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = Signup;