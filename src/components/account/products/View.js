import React from 'react'
import {connect} from 'react-redux'
import {default as UI} from '../../ui'


class ProductsView extends React.Component {
  render() {
    const title = this.props.title
    const subtitle = this.props.subtitle
    const description = this.props.description
    return (
      <div className="g-pt-10">
        <div className="exprience" style={{margin: 0, padding: 0}}>
            <div className="exprience-image" style={{position: 'relative'}}>
              <img className="img-responsive" src="/images/blog/1.jpg" alt="product"/>
              <div style={{position: 'absolute', top: 0, left: 0,
                    backgroundColor: '#000',
                    color: '#fff', opacity:  1, fontWeight: 'bold',
                    fontSize: '.85em', padding: '1em'}}>
                    <span style={{fontSize: '1.4em'}}>Product Image.</span><br/>
                    Click here to upload.
              </div>
            </div>
            <div className="exprience-info">
                <h3>{title || 'Product Title'}</h3>
                <h5>{subtitle || 'Product Subtitle'}</h5>
                <p>{description || 'Product Description.'}</p>
              </div>
        </div>
        <hr style={{marginTop: 0}}/>
        <h4>Products</h4>
        <UI.Sortable/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    productsTitle: store.product.sectionTitle,
    productsSubtitle: store.product.sectionSubtitle,
    title: store.product.title,
    subtitle: store.product.subtitle,
    description: store.product.description
  }
}

export default connect(mapStateToProps)(ProductsView)

//
// <div className="text-info">
//   <h4>{this.props.productsTitle || 'Products Title'}</h4>
//   <p>{this.props.productsSubtitle || 'Products Subtitle'}</p>
// </div>
// <hr/>
