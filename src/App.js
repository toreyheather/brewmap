import React, { Component } from 'react';
import './App.css';
import BreweryList from './BreweryList.js'
import Api from './Api.js'
import Header from './Header.js'
import Discover from './Discover.js'
import Wishlist from './Wishlist.js'
import Visited from './Visited.js'
import Brewery from './Brewery.js'

import { Route, Switch } from "react-router-dom"

class App extends Component {
  state = {
    breweries: [],
  }

  componentDidMount () {
    fetch("https://api.openbrewerydb.org/breweries/")
    .then(res => res.json())
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
    );
  }
} 

export default App;

