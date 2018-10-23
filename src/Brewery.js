import React, { Component } from 'react';
import PropTypes from "prop-types"

class Brewery extends Component {
  render() {
    return(
      <li>{this.props.brewery.name} {this.props.brewery.street} {this.props.brewery.city} {this.props.brewery.state} {this.props.brewery.postal_code}</li>
    );
  }
}



Brewery.propTypes = {
  brewery: PropTypes.object.isRequired
}

export default Brewery;