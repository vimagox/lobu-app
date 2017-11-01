import {store} from '../store'
import * as types from '../constants/ActionTypes'
import {default as region} from './region'
import {default as app} from './app'
import config from '../config'
import {get} from './core'

const setBusiness = (region, city, biz) => ({type: types.SET_BUSINESS, region: region, city: city, business: biz})
const setBusinesses = (bizs) => ({type: types.SET_BUSINESSES, businesses: bizs})

function resetBiz(){ store.dispatch({type: types.RESET_BUSINESS}) }

async function loadBusinesses(region, city) {
  // const url = config.businesses
  // return await get(url + path)
  console.log('>>>>>>>>>>>>>>>>>')
  console.log(region)
  console.log(city)
  if( (!region && !city) ||
      (region.uid === 'tx' && !city) ||
      (region.uid === 'tx' && city.uid === 'ep')) {
      store.dispatch(setBusinesses([
        {
          uid: 'casa',
          name: 'Casa Furniture',
          title: 'Wholesale Bedroom Sets',
          site: 'casafurniture.com',
          phone: '(915) 320 2836',
          pic: '1.jpg',
          color: 1
        },
        {
          uid: 'rainbow',
          name: 'Rainbow',
          title: 'Face Painting',
          phone: '(915) 320 2811',
          pic: 'rainbow2.jpg',
          color: 5
        },
      ]))
  }
  return []
}

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


export default {
  resetBiz, loadBusiness, loadBusinesses,
  resetCountry, resetRegion, resetCity, resetBusiness
}
