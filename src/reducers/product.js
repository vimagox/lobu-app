import * as types from '../constants/ActionTypes'

export default(state={
  sectionTitle: '',
  sectionSubtitle: '',
  title: '',
  subtitle: '',
  description: '',
  price: '',
  products: [],
}, action) => {
  switch (action.type) {
    case types.SET_SECTION_TITLE: return {...state, sectionTitle: action.value}
    case types.SET_SECTION_SUBTITLE: return {...state, sectionSubtitle: action.value}
    case types.SET_TITLE: return {...state, productTitle: action.value}
    case types.SET_SUBTITLE: return {...state, productSubtitle: action.value}
    case types.SET_DESCRIPTION: return {...state, productDescription: action.value}
    case types.SET_PRICE: return {...state, productPrice: action.value}
    case types.ADD_ITEM: return {...state, products: [...state.products, action.product]}
    case types.REMOVE_ITEM: return {...state, products: [...state.products.slice(0, action.idx)]}

    default: return state
  }
}
