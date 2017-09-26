export const businessReducer = (state={
  businessName: '',
  businessCategory: '',
  businessDomain: '',
  businessColor: 0,
}, action) => {
  switch (action.type) {
    case 'businessColor': return {...state, businessColor: action.value}
    case 'businessName': return {...state, businessName: action.value}
    case 'businessCategory': return {...state, businessCategory: action.value}
    case 'businessDomain': return {...state, businessDomain: action.value}

    default: return state
  }
}
