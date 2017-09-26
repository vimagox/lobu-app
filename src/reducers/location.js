import * as types from '../constants/ActionTypes'

export const locationReducer = (state = {
  country: {id: 'us', name: 'United States'},
  regions: null,
  region: null,
  cities: null,
  city: null,
}, action) => {
  switch (action.type) {
    case types.RESET_COUNTRY: return { ...state, region: null, cities: null, city: null, businesses: null, business: null}
    case types.RESET_REGION: return { ...state, region: null, city: null, businesses: null, business: null}
    case types.RESET_CITY: return { ...state, city: null, businesses: null, business: null}
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
      business: null,
      mode: 'bizs'
    }
    case types.SET_CITY: return { ...state,
      country: {id: 'us', name: 'United States'},
      city: action.city,
      business: null,
      mode: 'bizs'
    }

    default: return state
  }
}
