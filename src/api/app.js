import * as core from './core'


export async function getApp() {
  return await core.app()
}

export async function getRegions() { return await core.regions() }
export async function getRegion(path) { return await core.region(path) }
export async function getCities(path) { return core.cities(path) }
// export async function getCity(path) { return core.city(path) }
