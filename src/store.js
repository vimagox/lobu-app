import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import * as types from './constants/ActionTypes'
import {businessReducer} from './reducers/business'
import {locationReducer} from './reducers/location'
import {productReducer} from './reducers/product'
import {serviceReducer} from './reducers/service'
import {contactReducer} from './reducers/contact'


// const contactReducer = (state = {
// }, action) => {
//   switch (action.type) {
//
//     default: return state
//   }
// }

const reducer = (state = {
    banner: false,
    modal: true,
    business: null,
    tempImage: null,
    step: 1,
    mode: 'bizs',
    cardImage: null,
    accountStage: 0
  }, action) => {
  switch (action.type) {
    case 'SET_ACCOUNT_STAGE': return {...state, accountStage: action.stage}
    case 'cardImage': return {...state, cardImage: action.value}
    case types.HIDE_BANNER: return {...state, banner: false, region: null, city: null, business: null}
    case types.SET_TEMP_IMAGE: return { ...state, tempImage: action.image }
    case types.SET_STEP: return { ...state, step: action.step }
    case types.SET_MODE: return { ...state, mode: action.mode }
    case types.SET_MODAL: return { ...state, modal: action.modal }
    case types.SET_LOCATION: return { ...state,
        business: action.business,
        scrolled: true
    }
    case types.RESET_BUSINESS: return { ...state, businesses: null, business: null}
    case types.SET_BUSINESS: return { ...state,
        business: action.business,
        region: action.region,
        city: action.city}
    default: return state
  }
}

const reducers = combineReducers({
  business: businessReducer,
  contact: contactReducer,
  root: reducer,
  product: productReducer,
  service: serviceReducer,
  location: locationReducer
})

const middleware = applyMiddleware(
  createLogger(),
  routerMiddleware(),
  thunk
)

export const store = createStore(
  reducers,
  middleware
)
