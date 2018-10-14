
export default {
  getBreweries(){
    return fetch ('https://api.openbrewerydb.org/breweries/')
      .then(res =>res.json());
  }
}