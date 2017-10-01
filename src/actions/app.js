import {store} from '../store'
import * as types from '../constants/ActionTypes'

const setModal = (value) => ({type: types.SET_MODAL, modal: value})
const setMode  = (mode)  => ({type: types.SET_MOBILE_MODE, mode: mode})
const removeBanner =         {type: types.HIDE_BANNER}

function hideBanner() { store.dispatch(removeBanner) }
function loadModal(value) { store.dispatch(setModal(value)) }
function loadMode(mode) { store.dispatch(setMode(mode)) }

export default {
  loadModal,
  hideBanner,
  loadMode
}
