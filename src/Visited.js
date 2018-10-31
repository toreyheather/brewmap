import React, { Component } from 'react';
import PropTypes from "prop-types";
import Brewery from './Brewery.js';

class Visited extends Component {
  
  render() {
      return (
        <div>
          <h3>Visited: list of places I have been to </h3>
          <ul>
            {this.props.breweries
                 .filter(brewery => !this.props.isFilteredVisited || brewery.visited)
                 .map((brewery, index) => 
                <Brewery 
                  key={brewery.id} 
                  brewery={brewery}
                  visited={brewery.visited}
                  handleVisited= {() => this.props.toggleVisitedAt(index)} />
              )
            }
          </ul>;
        </div>      
      );
    }
  }

Visited.propTypes = {
  brewery: PropTypes.object.isRequired,
  toggleWishlistAt: PropTypes.func.isRequired,
  isFilteredWishlist: PropTypes.bool.isRequired
}
  

  export default Visited;