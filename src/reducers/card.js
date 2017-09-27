export const cardReducer = (state={
  name: '',
  category: '',
  domain: '',
  color: 0,
  image: null,
  card: false,
  bitcoin: false,
  delivery: false
}, action) => {
  switch (action.type) {
    case 'SET_COLOR': return {...state, color: action.value}
    case 'SET_NAME': return {...state, name: action.value}
    case 'SET_CATEGORY': return {...state, category: action.value}
    case 'SET_DOMAIN': return {...state, domain: action.value}
    case 'SET_IMAGE': return {...state, image: action.value}
    case 'SET_CARD': return {...state, card: action.value}
    case 'SET_BITCOIN': return {...state, bitcoin: action.value}
    case 'SET_DELIVERY': return {...state, delivery: action.value}
    default: return state
  }
}
