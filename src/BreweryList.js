import React, { Component } from 'react';
import PropTypes from "prop-types"
import Brewery from "./Brewery"

class BreweryList extends Component {
 render() {
   return(
     <ul className="breweryList">
       {this.props.breweries.map((brewery, index) => 
        <Brewery 
          key={brewery.id} 
          brewery={brewery}
          wishlist={brewery.wishlist}
          visited={brewery.visited}
          handleWishlist= {() => this.props.toggleWishlistAt(index)}
          handleVisited= {() => this.props.toggleVisitedAt(index)} />
        )}
     </ul>
   );
 }
}

Brewery.propTypes = {
 brewery: PropTypes.object.isRequired,
 toggleWishlistAt: PropTypes.func.isRequired,
 toggleVisitedAt: PropTypes.func.isRequired
}

export default BreweryList;

