import {store} from '../store'
import config from '../config'
import * as types from '../constants/ActionTypes'


const REGIONS_KEY = 'regions'
const REGION_KEY = 'region'

async function api() {
  let app = store.getState().app.app
  if (!app) {
    app = (await fetch(config.api)).json()
    store.dispatch({type: types.SET_APP, app: app})
  }
  return await app
}

const applinks = async () => {
  return (await api()).links
}

const load = async (key, uri) => {
  console.log(await applinks())
  const url = (await applinks())[key] + (uri || '')
  console.log('=============================')
  console.log(url)
  console.log('=============================')
  const response = await fetch(url)
  return await response.json()
}

export async function app() {
  return await api()
}

export async function regions() {
  return await load(REGIONS_KEY) //TODO Cache states?
}

export async function region(path) {
  return await load(REGION_KEY, path)
}

export async function cities(path) {
  return await load(REGIONS_KEY, path) //TODO Cache cities?
}
