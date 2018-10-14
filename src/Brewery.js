import React, { Component } from 'react';
import PropTypes from "prop-types"

class Brewery extends Component {
  render() {
    return(
      <li>{this.props.brewery.name}</li>
    );
  }
}



Brewery.propTypes = {
  brewery: PropTypes.object.isRequired
}

export default Brewery;