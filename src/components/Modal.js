import React from 'react'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import {loadModal} from '../actions'


export default class Modal extends React.Component {

  render() {
    return (
      <div id="modal1" className="text-left g-max-width-600 g-bg-white g-overflow-y-auto g-pa-20"
          style={{display: "none", maxWidth: '40em'}}>
        <button id="modal1Button" type="button" className="close">
          <i className="hs-icon hs-icon-close"></i>
        </button>
        <h4 className="g-mb-20">Modal title</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
          type specimen book.</p>
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
   )
  }
}
