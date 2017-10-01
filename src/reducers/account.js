import * as types from '../constants/ActionTypes'

export default (state={
  stage: 0,
  errors: {}
}, action) => {
  switch (action.type) {
    case types.SET_STAGE: return {...state, stage: action.stage}
    case types.SET_ERRORS: return {...state, errors: action.errors}

    default: return state
  }
}
