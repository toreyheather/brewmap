import React, { Component } from 'react';
import PropTypes from "prop-types";
import Brewery from './Brewery.js';

class Wishlist extends Component {
  
  render() {
      return (
        <div>
          <h3>Wishlist: list of places I would like to try </h3>
          <ul>
            {this.props.breweries
                 .filter(brewery => !this.props.isFilteredWishlist || brewery.wishlist)
                 .map((brewery, index) => 
                <Brewery 
                  key={brewery.id} 
                  brewery={brewery}
                  wishlist={brewery.wishlist}
                  handleWishlist= {() => this.props.toggleWishlistAt(index)} />
              )
            }
          </ul>;
        </div>      
      );
    }
  }

Wishlist.propTypes = {
  brewery: PropTypes.object.isRequired,
  toggleWishlistAt: PropTypes.func.isRequired,
  isFilteredWishlist: PropTypes.bool.isRequired
}
  

  export default Wishlist;