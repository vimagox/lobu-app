import React from 'react'
import FontAwesome from 'react-fontawesome'
import CardPage from './Page'


export default class CardSetup extends React.Component {
  setStage(value){

  }

  render() {
    return (
      <div>
        <div className="container">
          <CardPage/>
        </div>
        <div className="text-right" style={{
              marginTop: '2em',
              backgroundColor: '#000',
            }}>
          <div className="container">
            <div style={{
              float: 'right',
              position: 'relative',
              border: '1px solid #fff',
              padding: '.5em 1em',
              margin: '1.25em 0 1.25em 0',
              height: '3em',
              width: '9em'}}
              onClick={this.setStage.bind(this, 1)}
              className="g-cursor-pointer g-color-white">
                <div style={{display: 'inline-block', padding: '0 2em 0 0'}}>Setup Site</div>
                <FontAwesome name="arrow-right" size="2x"
                  style={{position: 'absolute', right: '7px', top: '5px'}}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
