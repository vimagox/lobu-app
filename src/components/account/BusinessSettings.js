import React from 'react'
import {connect} from 'react-redux'

export default class BusinessSettings extends React.Component {
  render() {
    return (
      <div className="tab-content" style={{marginTop: '-2em'}}>
        <div className="show active">
            <div className="shortcode-html">
              <div className="u-heading-v2-1--bottom g-mb-30">
                <h2 className="u-heading-v2__title g-mb-10">Business</h2>
                <h4 className="g-font-weight-200">Business Settings</h4>
              </div>

              <div className="col-md-6 col-lg-6 d-flex" style={{padding: 0, margin: 0}}>
                <div className="align-self-center w-100" style={{marginTop: 0}}>
                  <form>

                  <div className="form-group g-mb-20">
                    <label for="exampleInputFile">Business Image</label>
                    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                    <small id="fileHelp" className="form-text text-muted">Upload any image that best represents your business. It can be your store front, logo or main product.</small>
                  </div>



                    <div className="form-group g-mb-10">
                      <input className="form-control g-color-white g-bg-black-opacity-0_9 g-brd-black-opacity-0_4 g-brd-primary--focus rounded-0 g-pa-15" type="text" placeholder="Business Name"/>
                    </div>
                    <div className="form-group g-mb-10">
                      <input className="form-control g-color-white g-bg-black-opacity-0_9 g-brd-black-opacity-0_4 g-brd-primary--focus rounded-0 g-pa-15" type="text" placeholder="Business Category"/>
                    </div>

                    <div className="g-mt-10">
                      <label className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input"/>
                      <span className="custom-control-indicator"></span>
                      <span className="custom-control-description"> We Offer Delivery</span>
                      </label>
                    </div>
                    <div>
                      <label className="custom-control custom-checkbox mb-0">
                                <input type="checkbox" className="custom-control-input"/>
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description"> We Accept Bitcoin</span>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 d-flex">
                <div style={{border: '1px solid #ddd', height: '20em', width: '100%'}}>
                </div>
              </div>

          </div>
        </div>
      </div>
    )
  }
}
