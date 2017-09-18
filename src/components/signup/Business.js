import React from 'react'
import {withRouter} from 'react-router-dom'

class BusinessSignup extends React.Component {

  signup() {
    this.props.history.push('/account')
  }

  render() {
    return (
      <div style={{flexGrow:1}}>
      <div className="row no-gutters g-mb-50">

      <div className="col-lg-offset-1 col-md-6 col-lg-5 d-flex g-bg-black-opacity-0_9 g-pa-40 g-min-height-450">
        <div className="align-self-center w-100" style={{marginTop: '-1em'}}>
          <h2 className="text-left g-color-white text-uppercase g-font-weight-700 g-mb-50"> Have a
            <span className="g-color-primary"> Business?</span>
          </h2>

          <form>
            <div className="form-group g-mb-10">
              <input className="form-control g-color-white g-bg-black-opacity-0_4 g-brd-black-opacity-0_4 g-brd-primary--focus rounded-0 g-pa-15" type="text" placeholder="Business Name"/>
            </div>
            <div className="form-group g-mb-10">
              <input className="form-control g-color-white g-bg-black-opacity-0_4 g-brd-black-opacity-0_4 g-brd-primary--focus rounded-0 g-pa-15" type="text" placeholder="Email"/>
            </div>
            <div className="form-group g-mb-10">
              <input className="form-control g-color-white g-bg-black-opacity-0_4 g-brd-black-opacity-0_4 g-brd-primary--focus rounded-0 g-pa-15" type="password" placeholder="Password"/>
            </div>
            <div className="form-group g-mb-10">
              <input className="form-control g-color-white g-bg-black-opacity-0_4 g-brd-black-opacity-0_4 g-brd-primary--focus rounded-0 g-pa-15" type="password" placeholder="Confirm Password"/>
            </div>

            <button
              onClick={this.signup()}
              className="btn btn-md g-rounded-2 g-mt-30 u-btn-primary g-font-size-22 text-uppercase rounded-0 g-py-11 g-px-30">Signup my business</button>

            <div className="g-hidden-sm-up g-pt-40 g-color-secondary">
              Target the right audience by exposing your business to customers looking for local products and services.
            </div>
          </form>



        </div>
      </div>


      <div className="col-md-6 col-lg-5 d-flex g-bg-primary g-pa-40 g-min-height-450 g-hidden-xs-down">
        <div className="text-left">
          <header className="u-heading-v8-2 g-mb-40">
            <h2 className="u-heading-v8__title g-color-white text-uppercase g-font-weight-700 g-mb-0">
              <span className="g-color-black-opacity-0_9">GAIN </span>
              Exposure
            </h2>
          </header>

          <div className="lead g-font-weight-400 g-mb-40">
            <p>Target the right audience by exposing your business to customers looking for local products and services.</p>
          </div>

        </div>
      </div>

      </div>
      </div>
    )
  }
}

export default withRouter(BusinessSignup)
