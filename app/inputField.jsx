import React from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myValue: '',
    };
  }

  changeValue(e) {
    console.log('change to:', e.target.value);
    const newVal = e.target.value; //.substr(0, this.props.charLimit);
    this.setState({myValue: newVal});
    // this.state.myValue = newVal;
    this.props.setVal(newVal);
  }
  
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="text" name={this.props.label} value={this.state.myValue} onChange={this.changeValue.bind(this)}></input>
      </div>
    );
  }
}

module.exports = InputField;