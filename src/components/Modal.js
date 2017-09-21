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
        <h4 className="g-mb-20">{this.props.title}</h4>
        <div>
          {this.props.children}
        </div>
      </div>
   )
  }
}
