import React from 'react';

class Meetup extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render(props) {
    // console.log('props:', this.props);
    return (
      <div>
        Meetup at {this.props.Restaurant.name} for {this.props.size}
      </div>
      );
  }
}

module.exports = Meetup;