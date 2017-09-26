export const productReducer =(state={
  productsTitle: '',
  productsSubtitle: '',
  productTitle: '',
  productSubtitle: '',
  productDescription: '',
  productPrice: '',
  products: [],
}, action) => {
  switch (action.type) {
    case 'productsTitle': return {...state, productsTitle: action.value}
    case 'productsSubtitle': return {...state, productsSubtitle: action.value}
    case 'productTitle': return {...state, productTitle: action.value}
    case 'productSubtitle': return {...state, productSubtitle: action.value}
    case 'productDescription': return {...state, productDescription: action.value}
    case 'productPrice': return {...state, productPrice: action.value}
    case 'ADD_PRODUCT': return {...state, products: [...state.products, action.product]}
    case 'REMOVE_PRODUCT': return {...state, products: [...state.products.slice(0, action.idx)]}

    default: return state
  }
}
