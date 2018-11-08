import firebase from './Config.js'
import Brewery from './Brewery.js'

//api pull from open brewery database
export default {
  getBreweries(query = "louisville"){
    return fetch (`https://api.openbrewerydb.org/breweries/search?query=${query}`)
      .then(res =>res.json());
  }
}

