import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="title">BrewMap</h1>
        <ul className="nav">
          <li className=" link"><NavLink to = '/'> Home </NavLink></li>
          <li className=" link"><NavLink to = '/wishlist'> Wishlist </NavLink></li>
          <li className=" link"><NavLink to = '/visited'> Visited </NavLink></li>
       </ul>
      </header>   
    );
  }
 }
 
    

export default Header;