import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {colors} from '../constants/Colors'

const re = /^(\/account|\/signup|\/login|\/forgot)$/

class Footer extends React.Component {
  render() {
    const showMain = !re.test(this.props.location.pathname)

    return (
    <section className="g-z-index-minus-1 g-bottom-0 g-width-100vw">
      <footer className="g-bg-black g-color-white-opacity-0_8">

      {showMain && <div className="container g-pt-40 g-pb-20">
        <div className="row">
        <div className="col-md-12 col-lg-4 g-mb-40">
          <h2 className="h6 g-color-white text-uppercase g-font-weight-700 g-mb-20">About Us</h2>
          <p className="mb-0">Lobu is made by a small team of local business owners with a simple purpose <span style={{fontSize:'1.2em', color: colors[4]}}> - promote local products and services -</span>. The promotion of a single business with a <span style={{fontSize: '1.2em', color: colors[2]}}>LOBU SITE</span> brings exposure for other businesses in the community and viceversa.</p>
        </div>

        <div className="col-md-6 col-lg-4">
          <h2 className="h6 g-color-white text-uppercase g-font-weight-700 g-mb-20">Useful Links</h2>
          <div className="row">
            <div className="col-sm-12">
              <ul className="list-unstyled g-mb-30 g-mb-0--md">
                <li className="d-flex g-mb-10">
                  <i className="fa fa-circle g-color-primary g-font-size-5 g-mt-10 g-mr-8"></i>
                  <a href="https://xmunicipio.com" target="_blank" rel="noopener noreferrer"
                      className="g-color-white-opacity-0_8 g-color-primary--hover">Find Local Businesses in Latin America</a>
                </li>
                <li className="d-flex g-mb-10">
                  <i className="fa fa-circle g-color-primary g-font-size-5 g-mt-10 g-mr-8"></i>
                  <a target="_blank" href="https://sustainableconnections.org/why-buy-local/" className="g-color-white-opacity-0_8 g-color-primary--hover"
                            rel="noopener noreferrer">Why buy local?</a>
                </li>
                <li className="d-flex g-mb-10">
                  <i className="fa fa-circle g-color-primary g-font-size-5 g-mt-10 g-mr-8"></i>
                  <Link to="/faq" className="g-color-white-opacity-0_8 g-color-primary--hover">{"FAQ's"}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <h2 className="h6 g-color-white text-uppercase g-font-weight-700 g-mb-20">Have a Question or Suggestion?</h2>
            <form style={{border: 'none', padding: 0, margin: 0, marginLeft: '-5px'}}>
              <div className="form-group g-mb-15">
                <textarea className="form-control g-bg-white g-color-black g-brd-white-opacity-0_1 g-brd-primary--focus g-resize-none rounded-0 g-py-12 g-px-15" rows="4" placeholder="Message"></textarea>
              </div>
              <button className="btn btn-lg u-btn-indigo text-uppercase g-font-size-14 rounded-0" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div> }

        <hr className="g-brd-white-opacity-0_1 g-mt-70 g-mb-30"/>

        <div className="container g-pt-10 g-pb-40">
          <div className="row align-items-center">
            <div className="col-md-6 g-mb-15 g-mb-0--md">
              © <a className="g-color-orange g-color-orange--hover" href="https://1910.io" rel="noopener noreferrer" target="_blank">1910 Inc.</a> All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </section>
    )
  }
}
export default withRouter(Footer)


// <li className="d-flex g-mb-10">
//   <i className="fa fa-circle g-color-primary g-font-size-5 g-mt-10 g-mr-8"></i>
//   <Link to="/business" className="g-color-white-opacity-0_8 g-color-primary--hover">Sign up your Business</Link>
// </li>
// <li className="d-flex g-mb-10">
//   <i className="fa fa-circle g-color-primary g-font-size-5 g-mt-10 g-mr-8"></i>
//   <Link to="/customer" className="g-color-white-opacity-0_8 g-color-primary--hover">Create Lobu Profile</Link>
// </li>
