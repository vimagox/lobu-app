import {store} from '../store'
import * as types from '../constants/ActionTypes'
import {default as region} from './region'

const setCity = city => ({type: types.SET_CITY, city: city})

function reset(){
  store.dispatch({type: 'RESET_CITY'})
}

async function load(path, cityUid) {
  store.getState().location.region || (await region.load(path))
  const cities = store.getState().location.cities || (await region.loadCities(path))
  const city = cities[cityUid]
  store.dispatch(setCity(city))
  return city
}

export default {
  load, reset
}
