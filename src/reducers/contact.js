import * as types from '../constants/ActionTypes'

export default (state={
  name: '',
  email: '',
  phone: '',
  linkedin: '',
  facebook: '',
  twitter: '',
  instagram: '',
  youtube: '',
  pinterest: '',
}, action) => {
  switch (action.type) {
    case types.SET_NAME: return {...state, name: action.value}
    case types.SET_PHONE: return {...state, phone: action.value}
    case types.SET_EMAIL: return {...state, email: action.value}
    case types.SET_FACEBOOK: return {...state, facebook: action.value}
    case types.SET_TWITTER: return {...state, twitter: action.value}
    case types.SET_INSTAGRAM: return {...state, instagram: action.value}
    case types.SET_YOUTUBE: return {...state, youtube: action.value}
    case types.SET_LINKEDIN: return {...state, linkedin: action.value}
    case types.SET_PINTEREST: return {...state, pinterest: action.value}

    default: return state
  }
}
