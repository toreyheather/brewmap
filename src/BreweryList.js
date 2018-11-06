import React, { Component } from 'react';
import PropTypes from "prop-types"
import Brewery from "./Brewery"

//creates a list of the individual breweries from the brewery component
class BreweryList extends Component {
 render() {
   return(
     <ul className="breweryList">
       {this.props.breweries.map((brewery, index) => 
          <Brewery 
            key={brewery.id} 
            brewery={brewery} 
          />
        )}
     </ul>
   );
 }
}

Brewery.propTypes = {
 brewery: PropTypes.object.isRequired,
 
}

export default BreweryList;

