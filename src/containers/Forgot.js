import React from 'react'
import {Link} from 'react-router-dom'

export default class Login extends React.Component {
  render() {
    return (
      <section className="container g-py-60">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-lg-4 col-sm-offset-3 col-lg-offset-4">
            <div className="g-brd-around g-brd-gray-light-v4 rounded g-py-0 g-px-30 g-pb-20">
              <header className="text-center mb-4">
                <h2 className="h2 g-color-black g-font-weight-600">Forgot Password?</h2>
              </header>

              <form className="g-py-15" style={{border: 'none'}}>
                <div className="mb-4">
                  <input className="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" type="email" placeholder="Email"/>
                </div>

                <div className="g-mt-20 g-mb-20">
                  <button className="btn btn-md btn-block u-btn-primary g-py-13" type="button">Reset Password</button>
                </div>
              </form>

              <footer className="text-center">
                <p className="g-color-gray-dark-v5 g-font-size-13 mb-0">Already have an account? <Link to="/login" className="g-font-weight-600">login</Link></p>
                <p className="g-color-gray-dark-v5 g-font-size-13 mb-0">{"Don't have an account?"} <Link to="/signup" className="g-font-weight-600">signup</Link></p>
              </footer>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
