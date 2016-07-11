import React from 'react';
import Navbar from './navbar.jsx';


class FrontView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
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