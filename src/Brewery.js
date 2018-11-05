import React, { Component } from 'react';
import PropTypes from "prop-types"

class Brewery extends Component {  
  
  wishlistAdd(){
    const wishlistBrewery = fetch(
      "https://brewmap-d8faf.firebaseio.com/wishlist.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: "{this.props.brewery.name}",
          street: "{this.props.brewery.street}",
          city: "{this.props.brewery.city}",
          state: "{this.props.brewery.state}",
          postal_code: "{this.props.brewery.postal_code}",
        }),
      },
    ).then(r => r.json());
  }

  visitedAdd(){
    const visitedBrewery = fetch(
      "https://brewmap-d8faf.firebaseio.com/visited.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: "{this.props.brewery.name}",
          street: "{this.props.brewery.street}",
          city: "{this.props.brewery.city}",
          state: "{this.props.brewery.state}",
          postal_code: "{this.props.brewery.postal_code}",
        }),
      },
    ).then(r => r.json());
  }

  render() {
    return(
      <li className="brewery">
        {this.props.brewery.name} <br/>
        {this.props.brewery.street} <br/>
        {this.props.brewery.city}, {this.props.brewery.state} {this.props.brewery.postal_code}<br/>
        <button 
          className="wishlistButton"
          onClick={this.wishlistAdd}
        > Add to Wishlist </button><br/>
        <button 
          className="visitedButton"
          onClick={this.visitedAdd}
        > Add to Visited </button><br/>
      </li>    
    );
  }
}

Brewery.propTypes = {
  brewery: PropTypes.object.isRequired,
}

export default Brewery;