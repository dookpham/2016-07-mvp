import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import GroupList from './meetupList.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={GroupList}/>
    <Route path="/meetups" component={GroupList}/>
  </Router>
), document.getElementById('main'));

// ReactDOM.render(<GroupList />, document.getElementById('main'));