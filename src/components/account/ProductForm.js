import React from 'react'
import {connect} from 'react-redux'
import FormComponent from '../form/FormComponent'
import InputComponent from '../form/InputComponent'
import TextAreaComponent from '../form/TextAreaComponent'
import PriceComponent from '../form/PriceComponent'
import ImageComponent from '../form/ImageComponent'
import ButtonComponent from '../form/ButtonComponent'
import {addProduct} from '../../actions'

class ProductForm extends React.Component {

  handleAddProduct() {
    addProduct({
      title: this.props.title,
      subtitle: this.props.subtitle,
      description: this.props.description,
      price: this.props.price
    })
  }

  render() {
    return (
<div>
<legend className="g-font-size-default">Add Product</legend>
  <InputComponent id="title" placeholder="Title (optional)" field="productTitle"/>
  <InputComponent id="subtitle" placeholder="Subtitle (optional)" field="productSubtitle"/>
  <TextAreaComponent id="description" placeholder="Description (optional)" field="productDescription"/>
  <div className="d-flex justify-content-end">
    <PriceComponent id="price" placeholder="Price (optional)" field="productPrice"/>
  </div>
  <ButtonComponent onClick={this.handleAddProduct.bind(this)}
      text="Add Product"/>
</div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    title: store.productTitle,
    subtitle: store.productSubtitle,
    description: store.productDescription,
    price: store.productPrice
  }
}

export default connect(mapStateToProps)(ProductForm)
