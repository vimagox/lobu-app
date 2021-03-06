import React from 'react'

export default class CustomerSignup extends React.Component {
  render() {
    return (
      <div className="row no-gutters">

      <div className="col-lg-offset-1 col-md-6 col-lg-5 d-flex g-bg-primary"
            style={{height: '34em', padding: '0 30px'}}>
        <div className="align-self-center w-100" style={{marginTop: '-2em'}}>
          <h2 className="text-left g-color-black text-uppercase g-font-weight-700 g-mb-30 g-font-size-40--xs">WANT A
            <span className="g-color-white"> LOBU PROFILE?</span>
          </h2>

          <form style={{border: 'none', padding: 0, margin: 0}}>
            <div className="form-group g-mb-10">
              <div className="row">
                <div className="col-sm-6"><input className="form-control g-color-white g-bg-black-opacity-0_4 g-brd-black-opacity-0_4 g-brd-primary--focus rounded-0 g-pa-15" type="email" placeholder="First Name"/></div>
                <div className="col-sm-6"><input className="g-mt-10--xs form-control g-color-white g-bg-black-opacity-0_4 g-brd-black-opacity-0_4 g-brd-primary--focus rounded-0 g-pa-15" type="email" placeholder="Last Name"/></div>
              </div>
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
            <button className="btn btn-md g-rounded-2 g-mt-30 u-btn-primary g-font-size-22 text-uppercase rounded-0 g-py-11 g-px-30">Create Profile</button>

            <div className="g-hidden-sm-up g-pt-30">
              Create your lobu profile to have an online presence as a potential customer in one or multiple communities. Receive notifications about events, new products and special offers by subscribing to your favorite businesses.
            </div>
          </form>
        </div>
      </div>


      <div className="g-hidden-xs-down col-md-6 col-lg-5 d-flex g-bg-black-opacity-0_9"
          style={{height: '34em', padding: '20px 34px'}}>
        <div className="text-left">
          <header className="u-heading-v8-2 g-mb-25">
            <h2 className="u-heading-v8__title g-color-primary text-uppercase g-font-weight-700 g-mb-0">
              <span className="g-color-white">Gain </span>
              Benefits
            </h2>
          </header>

          <div className="lead g-font-weight-400 g-mb-40">
            <p>Create your lobu profile to have an online presence as a potential customer in one or multiple communities. Receive notifications about events, new products and special offers by subscribing to your favorite businesses.</p>
          </div>

        </div>
      </div>

      </div>
    )
  }
}
