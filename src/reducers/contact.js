export const contactReducer =(state={
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  linkedinNet: '',
  facebookNet: '',
  twitterNet: '',
  instagramNet: '',
  youtubeNet: '',
  pinterestNet: '',
}, action) => {
  switch (action.type) {
    case 'contactName': return {...state, contactName: action.value}
    case 'contactPhone': return {...state, contactPhone: action.value}
    case 'contactEmail': return {...state, contactEmail: action.value}
    case 'facebookNet': return {...state, facebookNet: action.value}
    case 'twitterNet': return {...state, twitterNet: action.value}
    case 'instagramNet': return {...state, instagramNet: action.value}
    case 'youtubeNet': return {...state, youtubeNet: action.value}
    case 'linkedinNet': return {...state, linkedinNet: action.value}
    case 'pinterestNet': return {...state, pinterestNet: action.value}

    default: return state
  }
}
