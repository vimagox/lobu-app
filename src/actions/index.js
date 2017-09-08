import {store} from '../store'
import * as api from '../api/app'
import * as types from '../constants/ActionTypes'

const setRegions = regions => ({type: types.SET_REGIONS, regions: regions})
const setRegion = region => ({type: types.SET_REGION, region: region})
const setCities = cities => ({type: types.SET_CITIES, cities: cities})
const setCity = city => ({type: types.SET_CITY, city: city})
const setBusiness = (region, city, biz) => ({type: types.SET_BUSINESS, region: region, city: city, business: biz})

export async function resetCountry(){ store.dispatch({type: 'RESET_COUNTRY'}) }
export async function resetRegion(){ store.dispatch({type: 'RESET_REGION'}) }
export async function resetCity(){ store.dispatch({type: 'RESET_CITY'}) }
export async function resetBiz(){ store.dispatch({type: 'RESET_BUSINESS'}) }

export async function hideBanner() {
  store.dispatch({type: types.HIDE_BANNER})
}

export async function loadMode(mode) {
  store.dispatch({type: types.SET_MODE, mode: mode})
}

export async function loadRegions() {
  let regions = store.getState().regions
  if(!regions) {
    regions = (await api.getRegions())
    store.dispatch(setRegions(regions))
  }
  return regions
}

export async function loadRegion(path) {
  const region = (await api.getRegion(path))['state']
  store.dispatch(setRegion(region))
  return region
}

export async function loadCities(path) {
  let cities = await api.getCities(path)
  store.dispatch(setCities(cities))
  return cities
}

export async function loadCity(path, cityUid) {
  store.getState().region || (await loadRegion(path))
  const cities = store.getState().cities || (await loadCities(path))
  const city = cities[cityUid]
  store.dispatch(setCity(city))
  return city
}

export async function loadBusiness(biz) {
  const path = biz.location.region
  const region = store.getState().region || (await loadRegion(path))
  const cities = store.getState().cities || (await loadCities(path))
  const city = cities[biz.location.city]

  store.dispatch(setBusiness(region, city, biz))
}
