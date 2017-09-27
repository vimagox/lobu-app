export const serviceReducer =(state={
  sectionTitle: '',
  sectionSubtitle: '',
  title: '',
  subtitle: '',
  description: '',
  price: '',
  services: [],

}, action) => {
  switch (action.type) {
    case 'SET_SECTIONTITLE': return {...state, sectionTitle: action.value}
    case 'SET_SECTIONSUBTITLE': return {...state, sectionSubtitle: action.value}
    case 'SET_TITLE': return {...state, title: action.value}
    case 'SET_SUBTITLE': return {...state, subtitle: action.value}
    case 'SET_DESCRIPTION': return {...state, description: action.value}
    case 'SET_PRICE': return {...state, price: action.value}
    case 'ADD_SERVICE': return {...state, services: [...state.services, action.service]}
    case 'REMOVE_SERVICE': return {...state, services: [...state.services.slice(0, action.idx)]}

    default: return state
  }
}
