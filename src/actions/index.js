import {store} from '../store'
import * as api from '../api/app'
import * as types from '../constants/ActionTypes'

const setRegions = regions => ({type: types.SET_REGIONS, regions: regions})
const setRegion = region => ({type: types.SET_REGION, region: region})
const setCities = cities => ({type: types.SET_CITIES, cities: cities})
const setCity = city => ({type: types.SET_CITY, city: city})
const setBusiness = (region, city, biz) => ({type: types.SET_BUSINESS, region: region, city: city, business: biz})
const setProduct = (product) => ({type: types.ADD_PRODUCT, product: product})
const setService = (service) => ({type: types.ADD_SERVICE, service: service})

export async function resetCountry(){ store.dispatch({type: 'RESET_COUNTRY'}) }
export async function resetRegion(){
  hideBanner()
  store.dispatch({type: 'RESET_REGION'})
}
export async function resetCity(){ store.dispatch({type: 'RESET_CITY'}) }
export async function resetBiz(){ store.dispatch({type: 'RESET_BUSINESS'}) }

export async function loadField(field, value) {
  store.dispatch({type: field, value: value})
}

export async function setField(field, value) {
  store.dispatch({type: 'SET_'+field.toUpperCase(), value: value})
}

export async function fieldValue(field) {
  return await store.getState()[field]
}

export async function loadStage(stage) {
  store.dispatch({type: 'SET_ACCOUNT_STAGE', stage: stage})
}

export async function loadModal(value) {
  store.dispatch({type: types.SET_MODAL, modal: value})
}

export async function hideBanner() {
  store.dispatch({type: types.HIDE_BANNER})
}

export async function loadMode(mode) {
  store.dispatch({type: types.SET_MOBILE_MODE, mode: mode})
}

export async function loadRegions() {
  let regions = store.getState().location.regions
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
  store.getState().location.region || (await loadRegion(path))
  const cities = store.getState().location.cities || (await loadCities(path))
  const city = cities[cityUid]
  store.dispatch(setCity(city))
  return city
}

export async function loadBusiness(biz) {
  const path = biz.location.region
  const region = store.getState().location.region || (await loadRegion(path))
  const cities = store.getState().location.cities || (await loadCities(path))
  console.log(biz.location.city)
  const city = cities[biz.location.city]

  store.dispatch(setBusiness(region, city, biz))
}

export async function addProduct(product) {
  store.dispatch(setProduct(product))
}

export async function addService(service) {
  store.dispatch(setService(service))
}
