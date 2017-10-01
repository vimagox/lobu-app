import {store} from '../store'
import * as types from '../constants/ActionTypes'

const setProduct = (product) => ({type: types.ADD_PRODUCT, product: product})
const setService = (service) => ({type: types.ADD_SERVICE, service: service})
const setStage   = (stage)   => ({type: types.SET_STAGE, stage: stage})
const setErrors  = (errors)  => ({type: types.SET_ERRORS, errors: errors})

function loadErrors(errors)  {store.dispatch(setErrors(errors))}
function loadStage(stage)    {store.dispatch(setStage(stage))}
function addProduct(product) {store.dispatch(setProduct(product))}
function addService(service) {store.dispatch(setService(service))}

function setField(field, value) {
  store.dispatch({type: 'SET_'+field.toUpperCase(), value: value})
}

export default {
  setField, loadStage, loadErrors, addProduct, addService
}
