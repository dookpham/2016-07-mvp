import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Login from './login.jsx';
import Signup from './signup.jsx';
import FrontView from './frontView.jsx';
import MeetupView from './meetupView.jsx';
import FriendView from './friendView.jsx';
import RestaurantView from './restaurantView.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={FrontView}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/friends" component={FriendView}/>
    <Route path="/restaurants" component={RestaurantView}/>
    <Route path="/meetups" component={MeetupView}/>
  </Router>
), document.getElementById('main'));