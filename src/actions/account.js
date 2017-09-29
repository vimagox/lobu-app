import {store} from '../store'
import * as types from '../constants/ActionTypes'

const setProduct = (product) => ({type: types.ADD_PRODUCT, product: product})
const setService = (service) => ({type: types.ADD_SERVICE, service: service})


function loadStage(stage) {
  store.dispatch({type: 'SET_ACCOUNT_STAGE', stage: stage})
}

function addProduct(product) {
  store.dispatch(setProduct(product))
}

function addService(service) {
  store.dispatch(setService(service))
}

export default {
  loadStage, addProduct, addService
}
