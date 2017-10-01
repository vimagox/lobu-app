import { combineReducers } from 'redux'

import {default as appReducer} from './app'
import {default as cardReducer} from './card'
import {default as placeReducer} from './place'
import {default as productReducer} from './product'
import {default as serviceReducer} from './service'
import {default as contactReducer} from './contact'
import {default as accountReducer} from './account'


export const reducers = combineReducers({
  app: appReducer,
  place: placeReducer,
  card: cardReducer,
  contact: contactReducer,
  product: productReducer,
  service: serviceReducer,
  account: accountReducer
})
