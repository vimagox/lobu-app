import React from 'react'
import {connect} from 'react-redux'
import FormComponent from '../form/FormComponent'
import InputComponent from '../form/InputComponent'
import TextAreaComponent from '../form/TextAreaComponent'
import PriceComponent from '../form/PriceComponent'
import ImageComponent from '../form/ImageComponent'
import ButtonComponent from '../form/ButtonComponent'
import {addService} from '../../actions'

class ServiceForm extends React.Component {

  handleAddService() {
    addService({
      title: this.props.title,
      subtitle: this.props.subtitle,
      description: this.props.description,
      price: this.props.price
    })
  }

  render() {
    return (
<FormComponent legend="Add Service">
  <InputComponent id="serviceTitle" placeholder="Title (optional)" field="serviceTitle"/>
  <InputComponent id="serviceSubtitle" placeholder="Subtitle (optional)" field="serviceSubtitle"/>
  <TextAreaComponent id="serviceDescription" placeholder="Description (optional)" field="serviceDescription"/>
  <div className="d-flex justify-content-end">
    <PriceComponent id="servicePrice" placeholder="Price (optional)" field="servicePrice"/>
  </div>
  <ButtonComponent onClick={this.handleAddService.bind(this)}
      text="Add Service"/>
</FormComponent>
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
