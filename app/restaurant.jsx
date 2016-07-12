import React from 'react';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render(props) {
    // console.log('props:', this.props);
    return (
      <div>
        {this.props.name}
      </div>
      );
  }
}

module.exports = Restaurant;