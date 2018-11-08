import React, { Component } from 'react';

//pulls and deletes data from the firebase wishlist api 
class Wishlist extends Component {
  
  state = {
    wishlistBreweries: []
  }

  async componentDidMount() {
   await this.getBreweries();
  }

  deleteBrewery = async (itemId) => {
    await fetch(
      `https://brewmap-d8faf.firebaseio.com/wishlist/${itemId}.json`,
      {
        method: "DELETE",
      }
    );
    await this.getBreweries();
  }

  getBreweries = async () => {
    const wishlistBreweries = await fetch(
      "https://brewmap-d8faf.firebaseio.com/wishlist.json"
    ).then(r => r.json());
    
    const wishlistArr = Object.entries(wishlistBreweries)
      .map(([id, attrs]) => 
      ({ ...attrs, id}));  

    this.setState({
      wishlistBreweries: wishlistArr
    }); 
  }

  render() {
      return (
        <div>
          <h3>Wishlist: list of places I would like to try </h3><br/>
          <ul className = "breweryList">{this.state.wishlistBreweries.map((item, id) => 
            <li key={item.id} className="brewery">
              {item.name} <br/>
              {item.street} <br/>
              {item.city}, {item.state} {item.postal_code}<br/>
              
              <button 
                className="deleteButton"
                onClick={() => this.deleteBrewery(item.id)}
              > Delete from Wishlist </button><br/>
              <br/>
            </li>)}
          </ul>
        </div>      
      );
    }
  }

  export default Wishlist;