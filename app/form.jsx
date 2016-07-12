import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <form onSubmit={this.props.submitForm}>
          <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

module.exports = Form;