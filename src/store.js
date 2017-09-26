import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import * as types from './constants/ActionTypes'


const businessReducer = (state, actions) => {

}

const reducer = (state = {
    banner: false,
    modal: true,
    country: {id: 'us', name: 'United States'},
    regions: null,
    region: null,
    cities: null,
    city: null,
    business: null,
    tempImage: null,
    step: 1,
    mode: 'bizs',
    businessName: '',
    businessCategory: '',
    businessDomain: '',
    businessColor: 0,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    linkedinNet: '',
    facebookNet: '',
    twitterNet: '',
    instagramNet: '',
    youtubeNet: '',
    pinterestNet: '',
    productsTitle: '',
    productsSubtitle: '',
    productTitle: '',
    productSubtitle: '',
    productDescription: '',
    productPrice: '',
    servicesTitle: '',
    servicesSubtitle: '',
    serviceTitle: '',
    serviceSubtitle: '',
    serviceDescription: '',
    servicePrice: '',
    products: [],
    services: [],
    cardImage: null,
    accountStage: 0
  }, action) => {
  switch (action.type) {
    case 'SET_ACCOUNT_STAGE': return {...state, accountStage: action.stage}
    case 'ADD_PRODUCT': return {...state, products: [...state.products, action.product]}
    case 'REMOVE_PRODUCT': return {...state, products: [...state.products.slice(0, action.idx)]}
    case 'ADD_SERVICE': return {...state, services: [...state.services, action.service]}
    case 'REMOVE_SERVICE': return {...state, services: [...state.services.slice(0, action.idx)]}
    case 'cardImage': return {...state, cardImage: action.value}
    case 'businessColor': return {...state, businessColor: action.value}
    case 'businessName': return {...state, businessName: action.value}
    case 'businessCategory': return {...state, businessCategory: action.value}
    case 'businessDomain': return {...state, businessDomain: action.value}
    case 'servicesTitle': return {...state, servicesTitle: action.value}
    case 'servicesSubtitle': return {...state, servicesSubtitle: action.value}
    case 'serviceTitle': return {...state, serviceTitle: action.value}
    case 'serviceSubtitle': return {...state, serviceSubtitle: action.value}
    case 'serviceDescription': return {...state, serviceDescription: action.value}
    case 'servicePrice': return {...state, servicePrice: action.value}
    case 'productsTitle': return {...state, productsTitle: action.value}
    case 'productsSubtitle': return {...state, productsSubtitle: action.value}
    case 'productTitle': return {...state, productTitle: action.value}
    case 'productSubtitle': return {...state, productSubtitle: action.value}
    case 'productDescription': return {...state, productDescription: action.value}
    case 'productPrice': return {...state, productPrice: action.value}
    case 'contactName': return {...state, contactName: action.value}
    case 'contactPhone': return {...state, contactPhone: action.value}
    case 'contactEmail': return {...state, contactEmail: action.value}
    case 'facebookNet': return {...state, facebookNet: action.value}
    case 'twitterNet': return {...state, twitterNet: action.value}
    case 'instagramNet': return {...state, instagramNet: action.value}
    case 'youtubeNet': return {...state, youtubeNet: action.value}
    case 'linkedinNet': return {...state, linkedinNet: action.value}
    case 'pinterestNet': return {...state, pinterestNet: action.value}
    case types.HIDE_BANNER: return {...state, banner: false, region: null, city: null, business: null}
    case types.RESET_COUNTRY: return { ...state, region: null, cities: null, city: null, businesses: null, business: null}
    case types.RESET_REGION: return { ...state, region: null, city: null, businesses: null, business: null}
    case types.RESET_CITY: return { ...state, city: null, businesses: null, business: null}
    case types.RESET_BUSINESS: return { ...state, businesses: null, business: null}
    case types.SET_TEMP_IMAGE: return { ...state, tempImage: action.image }
    case types.SET_STEP: return { ...state, step: action.step }
    case types.SET_MODE: return { ...state, mode: action.mode }
    case types.SET_MODAL: return { ...state, modal: action.modal }
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

const reducers = combineReducers({

})

const middleware = applyMiddleware(
  createLogger(),
  routerMiddleware(),
  thunk
)

export const store = createStore(
  reducer,
  middleware
)
