import React from 'react'
import {connect} from 'react-redux'
import SortableComponent from '../SortableComponent'


class ProductsView extends React.Component {
  render() {
    const title = this.props.title
    const subtitle = this.props.subtitle
    const description = this.props.description
    return (
      <div className="g-mt-10">
        <div className="text-info">
          <h4>{this.props.productsTitle || 'Products Title'}</h4>
          <p>{this.props.productsSubtitle || 'Products Subtitle'}</p>
        </div>
        <hr/>
        {[1].map((m,i) => (
          <div key={"blo"+i} className="g-pt-30 g-cursor-pointer">
            <div className="exprience">
              <div className="exprience-image" style={{position: 'relative'}}>
                <img className="img-responsive" src="/images/blog/1.jpg" alt="Image"/>
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
            <hr/>
          </div>
        ))}

        <SortableComponent/>
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
