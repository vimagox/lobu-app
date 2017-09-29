import {store} from '../store'
import * as api from '../api/app'
import * as types from '../constants/ActionTypes'


const setRegions = regions => ({type: types.SET_REGIONS, regions: regions})

function resetCountry(){ store.dispatch({type: 'RESET_COUNTRY'}) }

async function loadRegions() {
  let regions = store.getState().location.regions
  if(!regions) {
    regions = (await api.getRegions())
    store.dispatch(setRegions(regions))
  }
  return regions
}

export default {
  resetCountry,
  loadRegions
}
