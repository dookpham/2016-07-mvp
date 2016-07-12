import React from 'react';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render(props) {
    // console.log('props:', this.props);
    return (
      <div>
        {this.props.username}
      </div>
      );
  }
}

module.exports = Friend;