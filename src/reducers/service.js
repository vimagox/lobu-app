import * as types from '../constants/ActionTypes'

export default(state={
  sectionTitle: '',
  sectionSubtitle: '',
  title: '',
  subtitle: '',
  description: '',
  price: '',
  services: [],
}, action) => {
  switch (action.type) {
    case types.SET_SECTION_TITLE: return {...state, sectionTitle: action.value}
    case types.SET_SECTION_SUBTITLE: return {...state, sectionSubtitle: action.value}
    case types.SET_TITLE: return {...state, title: action.value}
    case types.SET_SUBTITLE: return {...state, subtitle: action.value}
    case types.SET_DESCRIPTION: return {...state, description: action.value}
    case types.SET_PRICE: return {...state, price: action.value}
    case types.ADD_ITEM: return {...state, services: [...state.services, action.service]}
    case types.REMOVE_ITEM: return {...state, services: [...state.services.slice(0, action.idx)]}

    default: return state
  }
}
