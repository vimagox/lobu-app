import React from 'react'
import {connect} from 'react-redux'
import FormComponent from '../../../form/FormComponent'
import InputComponent from '../../../form/InputComponent'
import TextAreaComponent from '../../../form/TextAreaComponent'
import PriceComponent from '../../../form/PriceComponent'
// import ImageComponent from '../../../form/ImageComponent'
import ButtonComponent from '../../../form/ButtonComponent'
import {account} from '../../../../actions'

class ProductForm extends React.Component {

  handleAddProduct() {
    account.addProduct({
      title: this.props.title,
      subtitle: this.props.subtitle,
      description: this.props.description,
      price: this.props.price
    })
  }

  render() {
    return (
<FormComponent legend="Add Product">
  <InputComponent id="title" placeholder="Title (optional)" field="productTitle"/>
  <InputComponent id="subtitle" placeholder="Subtitle (optional)" field="productSubtitle"/>
  <TextAreaComponent id="description" placeholder="Description (optional)" field="productDescription"/>
  <div className="d-flex justify-content-end">
    <PriceComponent id="price" placeholder="Price (optional)" field="productPrice"/>
  </div>
  <ButtonComponent onClick={this.handleAddProduct.bind(this)}
      text="Add Product"/>
</FormComponent>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    title: store.product.sectionTitle,
    subtitle: store.product.sectionSubtitle,
    description: store.product.description,
    price: store.product.price
  }
}

export default connect(mapStateToProps)(ProductForm)
