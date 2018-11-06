import React, { Component } from 'react';
import PropTypes from "prop-types"

class Brewery extends Component {  
 
  //sends data to firebase wishlist api when button is clicked
  wishlistAdd = () => {  
    const wishlistData = {
      method: "POST",
      body: JSON.stringify({
        id: this.props.brewery.id,
        name: this.props.brewery.name,
        street: this.props.brewery.street,
        city: this.props.brewery.city,
        state: this.props.brewery.state,
        postal_code: this.props.brewery.postal_code,
      })
    };

    const wishlistBrewery = fetch(
      "https://brewmap-d8faf.firebaseio.com/wishlist.json", wishlistData)
      .then(r => r.json());
  }

  //sends data to firebase visited api when button is clicked
  visitedAdd = () => {  
    const visitedData = {
      method: "POST",
      body: JSON.stringify({
        id: this.props.brewery.id,
        name: this.props.brewery.name,
        street: this.props.brewery.street,
        city: this.props.brewery.city,
        state: this.props.brewery.state,
        postal_code: this.props.brewery.postal_code,
      })
    };

    const visitedBrewery = fetch(
      "https://brewmap-d8faf.firebaseio.com/visited.json", visitedData)
      .then(r => r.json());
  }

  //returns individual breweries from the search form with two buttons
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