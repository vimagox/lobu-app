import React from 'react'
import {connect} from 'react-redux'
import {default as UI} from '../../ui'
import {account} from '../../../actions'

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
      <form>
        <legend className="g-font-size-default">Add Product</legend>
        <UI.Input id="title" placeholder="Title (optional)" field="productTitle"/>
        <UI.Input id="subtitle" placeholder="Subtitle (optional)" field="productSubtitle"/>
        <UI.TextArea id="description" placeholder="Description (optional)" field="productDescription"/>
        <div className="d-flex justify-content-end">
          <UI.Price id="price" placeholder="Price (optional)" field="productPrice"/>
        </div>
        <UI.Button onClick={this.handleAddProduct.bind(this)}
          text="Add Product"/>
      </form>
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
