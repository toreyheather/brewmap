import React, { Component } from 'react';
import PropTypes from "prop-types"

class Brewery extends Component {
  render() {
    return(
      <li className="brewery">
        {this.props.brewery.name} <br/>
        {this.props.brewery.street} <br/>
        {this.props.brewery.city}, {this.props.brewery.state} {this.props.brewery.postal_code}<br/>
        <label>
          <input 
            type="checkbox" 
            checked={this.props.brewery.wishlist} 
            onChange= {this.props.handleWishlist}/> Wishlist
        </label>  
        <label>
          <input 
            type="checkbox" 
            checked={this.props.brewery.visited}
            onChange= {this.props.handleVisited} /> Visited
        </label> <br/><br/>
      </li>    
    );
  }
}



Brewery.propTypes = {
  brewery: PropTypes.object.isRequired,
  wishlist: PropTypes.bool.isRequired,
  handleWishlist: PropTypes.func.isRequired,
  visited: PropTypes.bool.isRequired,
  handleVisited: PropTypes.func.isRequired
}

export default Brewery;