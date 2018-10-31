

export default {
  getBreweries(query = "40206"){
    return fetch (`https://api.openbrewerydb.org/breweries/search?query=${query}`)
      .then(res =>res.json());
  }
}