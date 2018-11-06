import React, { Component } from 'react';

//pulls data from the firebase visited api
class Visited extends Component {
  
  state = {
    breweriesVisited: []
  }

  async componentDidMount() {
    const visitedBreweries = await fetch(
      "https://brewmap-d8faf.firebaseio.com/visited.json"
    ).then(r => r.json());
    
    const visitedArr = Object.entries(visitedBreweries)
      .map(([id, attrs]) => 
      ({id, ...attrs,}));  

    this.setState({
      breweriesVisited: visitedArr
    }); 
  }

  render() {
    return (
      <div>
        <h3>Visited: places I have been to </h3><br/>
        <ul className = "breweryList">{this.state.breweriesVisited.map((item) => 
          <li key={item.id} className="brewery">
            {item.name} <br/>
            {item.street} <br/>
            {item.city}, {item.state} {item.postal_code}<br/>
            
            <button 
              className="deleteButton"
              onClick={item.visitedDelete}
            > Delete from Visited </button><br/>
            <br/>
          </li>)}
        </ul>
      </div>      
    );
  }
}

  export default Visited;