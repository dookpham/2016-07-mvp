import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <input onClick={this.props.handleClick} type="button" value="Submit"></input>
    );
  }
}

module.exports = Button;