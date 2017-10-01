import * as types from '../constants/ActionTypes'

export default (state = {
    banner: true,
    modal: true,
    tempImage: null,
    step: 1,
  }, action) => {
  switch (action.type) {
    case types.HIDE_BANNER: return {...state,
        banner: false,
        region: null,
        city: null,
        business: null}
    case types.SET_TEMP_IMAGE: return { ...state, tempImage: action.image }
    case types.SET_STEP: return { ...state, step: action.step }
    case types.SET_MODAL: return { ...state, modal: action.modal }
    default: return state
  }
}
