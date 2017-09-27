export const accountReducer =(state={
  stage: 0
}, action) => {
  switch (action.type) {
    case 'SET_STAGE': return {...state, stage: action.value}

    default: return state
  }
}
