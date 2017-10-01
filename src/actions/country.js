import {store} from '../store'
import * as api from '../api/app'
import * as types from '../constants/ActionTypes'

const setRegions = regions => ({type: types.SET_REGIONS, regions: regions})

function reset(){ store.dispatch({type: types.RESET_COUNTRY}) }

async function loadRegions() {
  let regions = store.getState().place.regions
  if(!regions) {
    regions = (await api.getRegions())
    store.dispatch(setRegions(regions))
  }
  return regions
}

export default {
  reset,
  loadRegions
}
