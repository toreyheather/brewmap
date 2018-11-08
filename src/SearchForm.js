import React, { Component } from 'react';

//creates the seach feature to search the open brewery database
class SearchForm extends Component {

  state= {
    searchText: ''
  }

  onSearchChange = e => {
    this.setState ({searchText: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="search">Search for a brewery by name or location.  </label><br/><br/>
        <input type="search"
            onChange={this.onSearchChange}
            name="search"
            ref={(input)=> this.query = input}
            placeholder="Search..." />
        <button type = "submit" id="submit" >Enter</button>
      </form>      
    );
  }
}

export default SearchForm;