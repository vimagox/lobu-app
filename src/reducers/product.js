export const productReducer =(state={
  sectionTitle: '',
  sectionSubtitle: '',
  title: '',
  subtitle: '',
  description: '',
  price: '',
  products: [],
}, action) => {
  switch (action.type) {
    case 'SET_SECTIONTITLE': return {...state, productsTitle: action.value}
    case 'SET_SECTIONSUBTITLE': return {...state, productsSubtitle: action.value}
    case 'SET_TITLE': return {...state, productTitle: action.value}
    case 'SET_SUBTITLE': return {...state, productSubtitle: action.value}
    case 'SET_DESCRIPTION': return {...state, productDescription: action.value}
    case 'SET_PRICE': return {...state, productPrice: action.value}
    case 'ADD_PRODUCT': return {...state, products: [...state.products, action.product]}
    case 'REMOVE_PRODUCT': return {...state, products: [...state.products.slice(0, action.idx)]}

    default: return state
  }
}
