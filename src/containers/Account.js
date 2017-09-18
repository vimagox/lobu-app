import React from 'react'
import {connect} from 'react-redux'
import Modal from '../components/Modal'
import {loadModal} from '../actions'
import Popup from 'react-popup'
import Accordion from '../components/Accordion'
import Products from '../components/Products'
import Menu from '../components/Menu'
import AccountSettings from '../components/account/AccountSettings'
import BusinessSettings from '../components/account/BusinessSettings'
import SiteSettings from '../components/account/SiteSettings'
import SitePreview from '../components/account/SitePreview'



const menuItems = ['Contact', 'Products', 'Services',
    'Links', 'Preview']

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {option: 0}
  }

  setOption(value) {
    this.setState({option: value})
  }

  render() {
    const option = this.state.option
    return (
      <div id="exprience" className="exprience-section section-padding">

        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-4">
              <div className="g-pos-fix">
                <ul className="nav justify-content-center u-nav-v2-1 u-nav-rounded-3 g-mb-50" role="tablist" data-target="heading-07" data-tabs-mobile-type="slide-up-down" data-btn-classes="btn btn-md btn-block u-btn-outline-primary">
                <li onClick={this.setOption.bind(this, 0)}
                    className="nav-item g-cursor-pointer">
                  <a className={"nav-link "+ (0 === option && 'active')}
                    style={{minWidth: '20em'}}
                    data-toggle="tab">Account</a>
                </li>

                <li onClick={this.setOption.bind(this, 1)}
                    className="nav-item g-cursor-pointer">
                  <a className={"nav-link "+ (1 === option && 'active')}
                    style={{minWidth: '20em'}}
                    data-toggle="tab">Business</a>
                </li>

                <li onClick={this.setOption.bind(this, 2)}
                    className="nav-item g-cursor-pointer">
                  <a className={"nav-link "+ (2 === option && 'active')}
                    style={{minWidth: '20em'}}
                    data-toggle="tab">Site</a>
                </li>

                </ul>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12">
              {option === 0 && <AccountSettings/>}
              {option === 1 && <BusinessSettings/>}
              {option === 2 && <SiteSettings/>}
              {option === 3 && <SitePreview/>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Account
// <div className="section-title">
//   <h1>Products</h1>
// </div>
//
//
// <div className="g-mt-40">
//   <a className="btn u-btn-primary"
//      href="#modal1"
//      data-modal-target="#modal1"
//      data-modal-effect="fadein">Launch Modal
//   </a>
//   <Modal/>
// </div>

// {[0,1,2,3,4,5].map((item, i) => (
//   <li onClick={this.setOption.bind(this, i)}
//       className="nav-item g-cursor-pointer">
//     <a className={"nav-link "+ (i === option && 'active')}
//       style={{minWidth: '20em'}}
//       data-toggle="tab">{menuItems[i]}</a>
//   </li>
// ))}
