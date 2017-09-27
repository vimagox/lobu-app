import { combineReducers } from 'redux'

import {appReducer} from './app'
import {cardReducer} from './card'
import {locationReducer} from './location'
import {productReducer} from './product'
import {serviceReducer} from './service'
import {contactReducer} from './contact'
import {accountReducer} from './account'


export const reducers = combineReducers({
  app: appReducer,
  location: locationReducer,
  card: cardReducer,
  contact: contactReducer,
  product: productReducer,
  service: serviceReducer,
  account: accountReducer
})
