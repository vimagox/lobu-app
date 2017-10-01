import React from 'react'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import CardView from './View'
import CardForm from './Form'
import {account} from '../../../actions'

function empty(value) {
  return !value || value.trim.length <= 0
}


class CardSetup extends React.Component {
  setStage(value) {
    let errors = {}
    if(empty(this.props.name)){
      errors.name = 'Enter your business name'
    }
    if(empty(this.props.category)){
      errors.category = 'Enter your business category'
    }
    if(!errors) {
      account.loadStage(value)
    }else {
      account.loadErrors(errors)
    }
  }

  render() {
    return (
      <div>
        <div className="container g-min-height-500">
          <div className="tab-content">
            <div className="row">
              <div className="col-sm-6 g-mb-10">
                <CardView/>
              </div>
              <div className="col-sm-6" style={{padding: '0 1em'}}>
                <CardForm/>
              </div>
            </div>
          </div>
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

const mapStateToProps = (store) => {
  return {
    name: store.card.name,
    category: store.card.category
  }
}

export default connect(mapStateToProps)(CardSetup)
