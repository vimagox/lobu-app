import React from 'react'
import FontAwesome from 'react-fontawesome'
import SitePage from './Page'
import {account} from '../../actions'

export default class SiteSettings extends React.Component {
  setStage(value) {
    account.loadStage(value)
  }

  render() {
    return (
      <div>
        <div className="container">
          <SitePage/>
        </div>
        <div className="text-right" style={{
              backgroundColor: '#333'
            }}>
          <div className="container g-mt-30">
            <div style={{
              float: 'right',
              position: 'relative',
              border: '1px solid #fff',
              padding: '.5em 1em',
              margin: '1.25em 0 1.25em 0',
              height: '3em',
              width: '11em'}}
              onClick={this.setStage.bind(this, 2)}
              className="g-cursor-pointer g-color-white">
                <div style={{display: 'inline-block', padding: '0 2em 0 0'}}>3. Preview Site</div>
                <FontAwesome name="arrow-right" size="2x"
                  style={{position: 'absolute', right: '7px', top: '5px'}}/>
            </div>
            <div style={{
              float: 'left',
              position: 'relative',
              border: '1px solid #fff',
              padding: '.5em 1em',
              margin: '1.25em 0 1.25em 0',
              height: '3em',
              width: '11em'}}
              onClick={this.setStage.bind(this, 0)}
              className="g-cursor-pointer g-color-white">
                <div style={{display: 'inline-block', padding: '0 0 0 2em'}}>1. Setup Card</div>
                <FontAwesome name="arrow-left" size="2x"
                  style={{position: 'absolute', left: '7px', top: '5px'}}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
