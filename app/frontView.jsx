import React from 'react';
import Navbar from './navbar.jsx';
import { Link } from 'react-router';

class FrontView extends React.Component {
  constructor(props) {
    super(props);
    // this.props = props;
  }
  render(props) {
    // console.log('props:', this.props);
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

module.exports = FrontView;