

export default {
  getBreweries(query = "louisville"){
    return fetch (`https://api.openbrewerydb.org/breweries/search?query=${query}`)
      .then(res =>res.json());
  }
}