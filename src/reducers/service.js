export const serviceReducer =(state={
  servicesTitle: '',
  servicesSubtitle: '',
  serviceTitle: '',
  serviceSubtitle: '',
  serviceDescription: '',
  servicePrice: '',
  services: [],

}, action) => {
  switch (action.type) {
    case 'servicesTitle': return {...state, servicesTitle: action.value}
    case 'servicesSubtitle': return {...state, servicesSubtitle: action.value}
    case 'serviceTitle': return {...state, serviceTitle: action.value}
    case 'serviceSubtitle': return {...state, serviceSubtitle: action.value}
    case 'serviceDescription': return {...state, serviceDescription: action.value}
    case 'servicePrice': return {...state, servicePrice: action.value}
    case 'ADD_SERVICE': return {...state, services: [...state.services, action.service]}
    case 'REMOVE_SERVICE': return {...state, services: [...state.services.slice(0, action.idx)]}

    default: return state
  }
}
