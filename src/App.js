import React, { Component } from 'react';
import './App.css';
import BreweryList from './BreweryList.js'
import Api from './Api.js'
import Header from './Header.js'
import Wishlist from './Wishlist.js'
import Visited from './Visited.js'
import Brewery from './Brewery.js'
import BrewBox from './BrewBox.js'
import SearchForm from './SearchForm'

import { Route, Switch } from "react-router-dom"

class App extends Component {
  state = {
    breweries: [],
  }
 
  componentDidMount () {
   this.performSearch();
  }

performSearch = (query) => {
  Api.getBreweries(query)
    .then(
      (results) => {
        this.setState({
          breweries: results
        });
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

  render() {
    return (
      <div>
        <div className='header'>
          <div className='inner'>
            <h1 className='mainTitle'>BrewMap</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="mainContent">
          <Switch>
            <Route
              exact path = "/"
              render={(props) => <BreweryList {...props} breweries={this.state.breweries} />}/>
            <Route
              path="/wishlist"
              component={Wishlist} />
            <Route 
              path="/visited"
              component={Visited} />
          </Switch> 
        </div>   
     </div>       
    );
  }
} 

export default App;

