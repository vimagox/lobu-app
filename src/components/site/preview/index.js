import React from 'react'
import FontAwesome from 'react-fontawesome'
import Business from '../../business/Page'
import Spinner from '../../Spinner'
import {form} from '../../../actions'

export default class Preview extends React.Component {
  setStage(stage) {
    form.setField('stage', stage)
  }

  render() {
    return (
      <div>
        <div className="container">
          {!this.props.b && <Spinner/>}
          {this.props.b && <Business/>}
        </div>
        <div className="text-right" style={{
              backgroundColor: '#000'
            }}>
          <div className="container">
            <div style={{
                float: 'right',
                position: 'relative',
                margin: '1.25em 0 1.25em 0',
              }}
              onClick={this.setStage.bind(this, 2)}
              className="btn btn-primary g-cursor-pointer text-center">
                <div style={{display: 'inline-block'}}>Publish Site</div>
            </div>
            <div style={{
              float: 'left',
              position: 'relative',
              border: '1px solid #fff',
              padding: '.5em 1em',
              margin: '1.25em 0 1.25em 0',
              height: '3em',
              width: '9em'}}
              onClick={this.setStage.bind(this, 1)}
              className="g-cursor-pointer g-color-white">
                <div style={{display: 'inline-block', padding: '0 0 0 2em'}}>Setup Site</div>
                <FontAwesome name="arrow-left" size="2x"
                  style={{position: 'absolute', left: '7px', top: '5px'}}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
