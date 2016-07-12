import React from 'react';
import { Link } from 'react-router';

const itemStyle = {
  margin: '20px',
};

const plusStyle = {
  position: 'relative',
  fontSize: '100px',
  color: 'red',
  left: '10px',
  top: '-170px',
  cursor: 'pointer'
};

const imgStyle = {
  width: '200px',
  borderRadius: '10px',
  cursor: 'pointer'
};

const nameStyle = {
  fontSize: '20px',
  fontWeight: 700,
};

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
          // <div onClick={this.props.clickItem} style={plusStyle}>+</div>
  render(props) {
    // console.log('props:', this.props);
    return (
      <div style={itemStyle}> 

          <img onClick={this.props.clickItem} style={imgStyle} src={this.props.featured_image}></img>

        <div style={nameStyle}>{this.props.name}</div> 
        <div>Cuisine: {this.props.cuisines}</div>
        <div>Address: {this.props.address}</div>
        <Link to={this.props.menu_url}>Menu</Link>
        <div>rating = {this.props.user_rating || 'none'}</div>
      </div>

      );
  }
}

module.exports = Restaurant;