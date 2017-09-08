import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import * as types from './constants/ActionTypes'


export const reducer = (state = {
    banner: false,
    country: {id: 'us', name: 'United States'},
    regions: null,
    region: null,
    cities: null,
    city: null,
    business: null,
    tempImage: null,
    step: 1
  }, action) => {
  switch (action.type) {
    case types.HIDE_BANNER: return {...state, banner: false, region: null, city: null, business: null}
    case types.RESET_COUNTRY: return { ...state, region: null, cities: null, city: null, businesses: null, business: null}
    case types.RESET_REGION: return { ...state, region: null, city: null, businesses: null, business: null}
    case types.RESET_CITY: return { ...state, city: null, businesses: null, business: null}
    case types.RESET_BUSINESS: return { ...state, businesses: null, business: null}
    case types.SET_TEMP_IMAGE: return { ...state, tempImage: action.image }
    case types.SET_STEP: return { ...state, step: action.step }
    case types.SET_COUNTRY: return { ...state,
      country: {id: 'us', name: 'United States'},
      region: null,
      city: null,
      business: null,
      scrolled: true
    }
    case types.SET_REGIONS: return { ...state, regions: action.regions}
    case types.SET_CITIES: return { ...state, cities: action.cities}
    case types.SET_REGION: return { ...state,
      country: {id: 'us', name: 'United States'},
      region: action.region,
      city: null,
      business: null
    }
    case types.SET_CITY: return { ...state,
      country: {id: 'us', name: 'United States'},
      city: action.city,
      business: null
    }
    case types.SET_LOCATION: return { ...state,
        business: action.business,
        scrolled: true
    }
    case types.SET_BUSINESS: return { ...state,
        business: action.business,
        region: action.region,
        city: action.city}
    default: return state

  }
}

const middleware = applyMiddleware(
  createLogger(),
  routerMiddleware(),
  thunk
)

export const store = createStore(
  reducer,
  middleware
)
