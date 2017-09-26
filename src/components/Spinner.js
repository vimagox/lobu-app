import React from 'react'
import FontAwesome from 'react-fontawesome'
import {colors} from '../constants/Colors'

export default class Spinner extends React.Component {
  render() {
    return (
      <div className="g-mt-100 text-center" style={{minHeight: '400px'}}>
        <FontAwesome name="spinner" size="3x" spin
            style={{color: colors[4]}}/>
      </div>
    )
  }
}
