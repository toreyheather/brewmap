import React, { Component } from 'react';
import PropTypes from "prop-types"
import Brewery from "./Brewery"

class BreweryList extends Component {
 render() {
   return(
     <ul>
       {this.props.breweries.map((brewery) => <Brewery key={brewery.id} brewery={brewery}></Brewery>)}
     </ul>
   );
 }
}

Brewery.propTypes = {
 brewery: PropTypes.object.isRequired
}

export default BreweryList;

