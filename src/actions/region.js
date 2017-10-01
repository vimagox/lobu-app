import {store} from '../store'
import * as api from '../api/app'
import * as types from '../constants/ActionTypes'


const setRegion = region => ({type: types.SET_REGION, region: region})
const setCities = cities => ({type: types.SET_CITIES, cities: cities})

function reset(){
  // hideBanner()
  store.dispatch({type: types.RESET_REGION})
}

async function load(path) {
  const region = (await api.getRegion(path))['state']
  store.dispatch(setRegion(region))
  return region
}

async function loadCities(path) {
  let cities = await api.getCities(path)
  store.dispatch(setCities(cities))
  return cities
}

export default {
  reset, load, loadCities
}
