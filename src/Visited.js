import React, { Component } from 'react';

//pulls and deletes data from the firebase visited api
class Visited extends Component {
  
  state = {
    visitedBreweries: []
  }

  async componentDidMount() {
    await this.getBreweries();
  }

  deleteBrewery = async (itemId) => {
    await fetch(
      `https://brewmap-d8faf.firebaseio.com/visited/${itemId}.json`,
      {
        method: "DELETE",
      }
    );
    await this.getBreweries();
  }

  getBreweries = async () => {
    const visitedBreweries = await fetch(
      "https://brewmap-d8faf.firebaseio.com/visited.json"
    ).then(r => r.json());
    
    const visitedArr = Object.entries(visitedBreweries)
      .map(([id, attrs]) => 
      ({...attrs, id}));  

    this.setState({
      visitedBreweries: visitedArr
    }); 
  }

  render() {
    return (
      <div>
        <h3>Visited: places I have been to </h3><br/>
        <ul className = "breweryList">{this.state.visitedBreweries.map((item) => 
          <li key={item.id} className="brewery">
            {item.name} <br/>
            {item.street} <br/>
            {item.city}, {item.state} {item.postal_code}<br/>
            
            <button 
              className="deleteButton"
              onClick={() => this.deleteBrewery(item.id)}
            > Delete from Visited </button><br/>
            <br/>
          </li>)}
        </ul>
      </div>      
    );
  }
}

  export default Visited;