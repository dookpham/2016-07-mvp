import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import GroupList from './meetupList.jsx';
import Navbar from './navbar.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Navbar}/>
    <Route path="/meetups" component={GroupList}/>
  </Router>
), document.getElementById('main'));

// ReactDOM.render(<GroupList />, document.getElementById('main'));