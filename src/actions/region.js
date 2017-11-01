import {store} from '../store'
import * as api from '../api/app'
import * as types from '../constants/ActionTypes'


const setRegion = region => ({type: types.SET_REGION, region: region})
const setCities = cities => ({type: types.SET_CITIES, cities: cities})

function reset(){
  // hideBanner()
  store.dispatch({type: types.RESET_REGION})
}

async function load(regionUid) {
  const region = (await api.getRegion('/'+regionUid))['state']
  console.log('--------------------')
  console.log(regionUid)
  console.log(region)
  console.log('--------------------')
  store.dispatch(setRegion(region))
  return region
}

async function loadCities(region) {
  let cities = await api.getCities('/'+region.uid)
  store.dispatch(setCities(cities))
  return cities
}

export default {
  reset, load, loadCities
}
