import React from 'react'
import FontAwesome from 'react-fontawesome'

export default class Steps extends React.Component {
  render() {
    return (
      <div id="shortcode6">
  <div className="shortcode-html">
    <div className="g-bg-white g-color-black text-center g-py-100">
      <div className="container">

        <address className="row g-color-white-opacity-0_8 mb-0">
          <div className="col-sm-6 col-md-3 g-brd-right--md g-brd-white-opacity-0_3 g-mb-60 g-mb-0--md">
            <FontAwesome name="map-pin" size="2x" className="d-inline-block display-5 g-color-orange g-mb-25"/>
            <h4 className="small text-uppercase g-mb-5">City</h4>
            <strong className="g-color-gray-dark-v5">Select your City</strong>
          </div>

          <div className="col-sm-6 col-md-3 g-brd-right--md g-brd-white-opacity-0_3 g-mb-60 g-mb-0--md">
            <FontAwesome name="user" size="2x" className="d-inline-block display-5 g-color-orange g-mb-25"/>
            <h4 className="small text-uppercase g-mb-5">Account</h4>
            <strong className="g-color-gray-dark-v5">Define username/password</strong>
          </div>

          <div className="col-sm-6 col-md-3 g-brd-right--md g-brd-white-opacity-0_3 g-mb-60 g-mb-0--md">
            <FontAwesome name="circle" size="2x" className="d-inline-block display-5 g-color-orange g-mb-25"/>
            <h4 className="small text-uppercase g-mb-5">Business Info</h4>
            <strong className="g-color-gray-dark-v5">Enter business name, etc</strong>
          </div>

          <div className="col-sm-6 col-md-3">
            <FontAwesome name="th" size="2x" className="d-inline-block display-5 g-color-orange g-mb-25"/>
            <h4 className="small text-uppercase g-mb-5">Products/Services</h4>
            <strong className="g-color-gray-dark-v5">Add products/services</strong>
          </div>
        </address>
      </div>
    </div>

  </div>
</div>

    )
  }
}
