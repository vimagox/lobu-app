import React from 'react'
import FontAwesome from 'react-fontawesome'
import {withRouter, Link} from 'react-router-dom'
import {colors} from '../constants/Colors'

class Footer extends React.Component {
  render() {
    return (
      <section className="g-pt-50 g-z-index-minus-1 g-bottom-0 g-width-100vw">

        <div id="shortcode7">
          <div className="shortcode-html">
            <footer className="g-bg-black-opacity-0_9 g-color-white-opacity-0_8 g-py-30">
              <div className="container">

                <div className="row">
                  <div className="col-md-12 col-lg-4 g-mb-40">
                    <h2 className="h6 g-color-white text-uppercase g-font-weight-700 g-mb-20">About Us</h2>
                    <p className="mb-0">Lobu is made by a small and talented team with monetization in mind but also with the best intention to: <span style={{fontSize:'1.2em', color: colors[4]}}><br/>Improve communities by promoting local products and services</span>.<br/> The promotion of any single business with a <span style={{fontSize: '1.2em', color: colors[2]}}>lobu site</span> brings potential customers that will also be exposed to all other local businesses in the community. Hence, benefiting the community itself.</p>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <h2 className="h6 g-color-white text-uppercase g-font-weight-700 g-mb-20">Useful Links</h2>
                    <div className="row">
                      <div className="col-sm-12">
                        <ul className="list-unstyled g-mb-30 g-mb-0--md">
                          <li className="d-flex g-mb-10">
                            <i className="fa fa-circle g-color-primary g-font-size-5 g-mt-10 g-mr-8"></i>
                            <Link to="/business" className="g-color-white-opacity-0_8 g-color-primary--hover">Sign up your Business</Link>
                          </li>
                          <li className="d-flex g-mb-10">
                            <i className="fa fa-circle g-color-primary g-font-size-5 g-mt-10 g-mr-8"></i>
                            <Link to="/customer" className="g-color-white-opacity-0_8 g-color-primary--hover">Sign up as a Potential Customer</Link>
                          </li>
                          <li className="d-flex g-mb-10">
                            <i className="fa fa-circle g-color-primary g-font-size-5 g-mt-10 g-mr-8"></i>
                            <Link to="/faq" className="g-color-white-opacity-0_8 g-color-primary--hover">FAQ</Link>
                          </li>
                          <li className="d-flex g-mb-10">
                            <i className="fa fa-circle g-color-primary g-font-size-5 g-mt-10 g-mr-8"></i>
                            <a href="https://xmunicipio.com" target="_blank"
                               className="g-color-white-opacity-0_8 g-color-primary--hover">Find Local Businesses in Latin America</a>
                          </li>                          
                          <li className="d-flex g-mb-10">
                            <i className="fa fa-circle g-color-primary g-font-size-5 g-mt-10 g-mr-8"></i>
                            <a target="_blank" href="https://sustainableconnections.org/why-buy-local/" className="g-color-white-opacity-0_8 g-color-primary--hover">Why buy local?</a>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <h2 className="h6 g-color-white text-uppercase g-font-weight-700 g-mb-20">Have a Question or Suggestion?</h2>
                    <form>
                      <div className="form-group g-mb-15">
                        <textarea className="form-control g-bg-black g-bg-black--focus g-color-white g-brd-white-opacity-0_1 g-brd-primary--focus g-resize-none rounded-0 g-py-12 g-px-15" rows="4" placeholder="Message"></textarea>
                      </div>
                      <button className="btn btn-lg u-btn-primary text-uppercase g-font-size-14 rounded-0" type="submit" role="button">Send Message</button>
                    </form>
                  </div>
                </div>
              </div>

              <hr className="g-brd-white-opacity-0_1 g-mt-70 g-mb-30"/>

              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6 g-mb-15 g-mb-0--md">
                    © <a className="g-color-orange g-color-orange--hover" href="https://1910.io" target="_blank">1910 Inc.</a> All rights reserved.
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>

      </section>

    )
  }
}
export default withRouter(Footer)
