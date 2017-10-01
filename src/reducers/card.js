import * as types from '../constants/ActionTypes'

export default (state={
  name: '',
  category: '',
  domain: '',
  color: 0,
  image: null,
  card: false,
  bitcoin: false,
  delivery: false,
  errors: {}
}, action) => {
  switch (action.type) {
    case types.SET_COLOR: return {...state, color: action.value}
    case types.SET_NAME: return {...state, name: action.value}
    case types.SET_CATEGORY: return {...state, category: action.value}
    case types.SET_DOMAIN: return {...state, domain: action.value}
    case types.SET_IMAGE: return {...state, image: action.value}
    case types.SET_CARD: return {...state, card: action.value}
    case types.SET_BITCOIN: return {...state, bitcoin: action.value}
    case types.SET_DELIVERY: return {...state, delivery: action.value}
    case types.SET_ERRORS: return {...state, errors: action.errors}
    default: return state
  }
}
