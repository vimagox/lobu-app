import {store} from '../store'
import * as types from '../constants/ActionTypes'
import config from '../config'
import {post} from './core'

const setModal = (value) => ({type: types.SET_MODAL, modal: value})
const setMode  = (mode)  => ({type: types.SET_MOBILE_MODE, mode: mode})
const removeBanner =         {type: types.HIDE_BANNER}

function hideBanner() { store.dispatch(removeBanner) }
function loadModal(value) { store.dispatch(setModal(value)) }
function loadMode(mode) { store.dispatch(setMode(mode)) }

async function sendMessage(msg) {
  try {
    const url = config.messages
    await post(url, {
      app: 'lobu',
      message: msg,
      messageType: 'suggestion'})
  } catch(e) {
    //ignore
    console.log(e.message)
  }
}

async function signup(fields) {
  const url = config.api
  await post(url, fields)
}

async function login(fields) {
  const url = config.api
  await post(url, fields)
}

async function resetPassword(email) {
  const url = config.api
  await post(url, email)
}

export default {
  loadModal,
  hideBanner,
  loadMode,
  sendMessage,
  signup,
  login,
  resetPassword
}
