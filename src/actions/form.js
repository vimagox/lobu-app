import {store} from '../store'
// import * as types from '../constants/ActionTypes'


export async function loadField(field, value) {
  store.dispatch({type: field, value: value})
}

export async function setField(field, value) {
  store.dispatch({type: 'SET_'+field.toUpperCase(), value: value})
}

export async function fieldValue(field) {
  return await store.getState()[field]
}
