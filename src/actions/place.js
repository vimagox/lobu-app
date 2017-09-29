import {store} from '../store'
import * as types from '../constants/ActionTypes'
import {default as region} from './region'

const setBusiness = (region, city, biz) => ({type: types.SET_BUSINESS, region: region, city: city, business: biz})

function resetBiz(){ store.dispatch({type: 'RESET_BUSINESS'}) }

async function loadBusiness(biz) {
  const path = biz.location.region
  const xregion = store.getState().location.region || (await region.load(path))
  const xcities = store.getState().location.cities || (await region.loadCities(path))
  const xcity = xcities[biz.location.city]

  store.dispatch(setBusiness(xregion, xcity, biz))
}


function loadBusinesses(place) {

}


export default {
  resetBiz, loadBusiness, loadBusinesses
}
