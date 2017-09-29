import {store} from '../store'
import * as types from '../constants/ActionTypes'


function loadModal(value) {
  store.dispatch({type: types.SET_MODAL, modal: value})
}

function hideBanner() {
  store.dispatch({type: types.HIDE_BANNER})
}

function loadMode(mode) {
  store.dispatch({type: types.SET_MOBILE_MODE, mode: mode})
}

export default {
  loadModal,
  hideBanner,
  loadMode
}
