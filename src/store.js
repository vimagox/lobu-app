import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import {reducers} from './reducers'

const middleware = applyMiddleware(
  createLogger(),
  routerMiddleware(),
  thunk
)

export const store = createStore(
  reducers,
  middleware
)
