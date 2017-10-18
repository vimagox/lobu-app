import React from 'react'
import {connect} from 'react-redux'
import {default as UI} from '../../ui'
import {account} from '../../../actions'

class ServiceForm extends React.Component {

  handleAddService() {
    account.addService({
      title: this.props.title,
      subtitle: this.props.subtitle,
      description: this.props.description,
      price: this.props.price
    })
  }

  render() {
    return (
    <form>
      <legend className="g-font-size-default">Add Service</legend>
      <div style={{marginBottom: '.75em'}}>
        <label className="custom-file" style={{width: '100%'}}>
          <input type="file" id="file" className="custom-file-input"/>
          <span className="custom-file-control">
            Select service image...
          </span>
        </label>
      </div>

      <UI.Input id="serviceTitle" placeholder="Title" field="serviceTitle"/>
      <UI.Input id="serviceSubtitle" placeholder="Subtitle (optional)" field="serviceSubtitle"/>
      <UI.TextArea id="serviceDescription" placeholder="Description (optional)" field="serviceDescription"/>
      <div className="d-flex justify-content-end">
        <UI.Price id="servicePrice" placeholder="Price (optional)" field="servicePrice"/>
      </div>
      <UI.Button onClick={this.handleAddService.bind(this)}
        text="Add Service"/>
    </form>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    title: store.service.title,
    subtitle: store.service.subtitle,
    description: store.service.description,
    price: store.service.price
  }
}

export default connect(mapStateToProps)(ServiceForm)
