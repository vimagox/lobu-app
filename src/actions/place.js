import {store} from '../store'
import * as types from '../constants/ActionTypes'
import {default as region} from './region'
import {default as app} from './app'

const setBusiness = (region, city, biz) => ({type: types.SET_BUSINESS, region: region, city: city, business: biz})

function resetBiz(){ store.dispatch({type: types.RESET_BUSINESS}) }

async function loadBusiness(biz) {
  const path = biz.location.region
  const xregion = store.getState().place.region || (await region.load(path))
  const xcities = store.getState().place.cities || (await region.loadCities(path))
  const xcity = xcities[biz.location.city]

  store.dispatch(setBusiness(xregion, xcity, biz))
}

function resetCountry(){ store.dispatch({type: types.RESET_COUNTRY}) }
function resetRegion(){
  app.hideBanner()
  store.dispatch({type: types.RESET_REGION})
}
function resetCity(){ store.dispatch({type: types.RESET_CITY}) }
function resetBusiness(){ store.dispatch({type: types.RESET_BUSINESS}) }


function loadBusinesses(place) {

}


export default {
  resetBiz, loadBusiness, loadBusinesses,
  resetCountry, resetRegion, resetCity, resetBusiness
}
