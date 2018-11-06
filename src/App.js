import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Api from './Api.js'
import SearchForm from './SearchForm';
import BreweryList from './BreweryList.js';
import Wishlist from './Wishlist.js';
import Visited from './Visited.js';
import { DB_CONFIG } from './Config.js';
import firebase from 'firebase/app';
import 'firebase/database';


import { Route, Switch } from "react-router-dom"


class App extends Component { 
  
  state = {
    breweries: []
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
      <div className="mainContent">
        <Header/>
        <Switch>
          <Route
            exact path = "/"
            render={(props) =>
              <div>
                <SearchForm 
                  onSearch={this.performSearch} 
                /> 
                <BreweryList {...props} 
                  breweries={this.state.breweries}  
                />
              </div>}
          />
          <Route
            path="/wishlist"
            render={(props) => 
            <Wishlist {...props}
              breweriesWishlist={this.state.breweriesWishlist}
            /> } 
          />
          <Route 
            path="/visited"
            render={(props) => 
            <Visited {...props}
            />}  
          />  
        </Switch> 
      </div>          
    );
  } 
} 


export default App;

