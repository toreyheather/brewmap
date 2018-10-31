import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Api from './Api.js'
import SearchForm from './SearchForm'
import BreweryList from './BreweryList.js'
import Wishlist from './Wishlist.js'
import Visited from './Visited.js'


import { Route, Switch } from "react-router-dom"


class App extends Component { 
  state = {
    isFilteredWishlist: true,
    isFilteredVisited: true,
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

  toggleWishlistAt = indexToChange => 
    this.setState({
      breweries: this.state.breweries.map((brewery, index) => {
        if (index === indexToChange){
          return {
            ...brewery,
            wishlist: !brewery.wishlist
          };
        }
        return brewery;
      })
    });

  toggleVisitedAt = indexToChange => 
    this.setState({
      breweries: this.state.breweries.map((brewery, index) => {
        if (index === indexToChange){
          return {
            ...brewery,
            visited: !brewery.visited
          };
        }
        return brewery;
      })
    });    

  toggleFilterWishlist = () =>
      this.setState({ isFilteredWishlist: !this.state.isFilteredWishlist});

  toggleFilterVisited = () =>
      this.setState({ isFilteredVisited: !this.state.isFilteredVisited});


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
                  toggleWishlistAt={this.toggleWishlistAt}
                  toggleVisitedAt={this.toggleVisitedAt}
                  isFilteredWishlist={this.state.isFilteredWishlist}
                  isFilteredVisited={this.state.isFilteredVisited} 
                />
              </div>}
          />
          <Route
            path="/wishlist"
            render={(props) => 
              <Wishlist {...props} 
                breweries={this.state.breweries} 
                toggleWishlistAt={this.toggleWishlistAt}
                isFilteredWishlist={this.state.isFilteredWishlist} 
              />} 
            /> 
          <Route 
            path="/visited"
            render={(props) => 
              <Visited {...props} 
                breweries={this.state.breweries} 
                toggleVisitedAt={this.toggleVisitedAt}
                isFilteredVisited={this.state.isFilteredVisited} 
              />} 
          />  
        </Switch> 
      </div>          
    );
  } 
} 


export default App;

