import React, { Component } from 'react';

//pulls data from the firebase wishlist api
class Wishlist extends Component {
  
  state = {
    wishlistDelete: []
  }

  async componentDidMount() {
    const wishlistBreweries = await fetch(
      "https://brewmap-d8faf.firebaseio.com/wishlist.json"
    ).then(r => r.json());
    
    const wishlistArr = Object.entries(wishlistBreweries)
      .map(([id, attrs]) => 
      ({id, ...attrs,}));  

    this.setState({
      wishlistDelete: wishlistArr
    }); 
  }

  render() {
      return (
        <div>
          <h3>Wishlist: list of places I would like to try </h3><br/>
          <ul className = "breweryList">{this.state.wishlistDelete.map((item, id) => 
            <li key={item.id} className="brewery">
              {item.name} <br/>
              {item.street} <br/>
              {item.city}, {item.state} {item.postal_code}<br/>
              
              <button 
                className="deleteButton"
                onClick={item.wishlistDelete}
              > Delete from Wishlist </button><br/>
              <br/>
            </li>)}
          </ul>
        </div>      
      );
    }
  }

  export default Wishlist;