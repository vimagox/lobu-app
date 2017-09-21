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
import AccountNav from '../components/account/Nav'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  menu: {
    display: 'flex', flexFlow: 'row',
    margin: '-2em 0 2em 0'
  },
  item: {
    userSelect: 'none',
    cursor: 'pointer',
    fontSize: '1.2em',
    padding: '1.4em 1.8em 0 0',
  }
})


const menuItems = ['Business', 'Site', 'Account']

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
      <div className="exprience-section g-mt-0">
        <div className="g-bg-black g-pt-30 g-mb-10"
            style={{ zIndex: 200,
                     margin: '-.5em auto', height: '7.5em'}}>
          <div className="container">
          <ul className={css(styles.menu)}>
            {menuItems.map((item, i) => (
              <li
                  onClick={this.setOption.bind(this, i)}
                 className={css(styles.item)}>
                 <h2 style={{color: option === i ? '#fff' : '#888'}}
                  className="g-font-size-22 u-heading-v2__title g-mb-0">{menuItems[i]}</h2>
              </li>
            ))}
          </ul>
          </div>
        </div>

        <div className="container g-mt-0">
          <div className="row">
            <div className="col-xs-12">
              {option === 0 && <BusinessSettings/>}
              {option === 1 && <SiteSettings/>}
              {option === 2 && <AccountSettings/>}
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


// <div className="col-md-4 col-sm-12 col-xs-4">
//   <div className="g-pos-fix">
//     <ul className="nav justify-content-center u-nav-v2-1 u-nav-rounded-3 g-mb-50" role="tablist" data-target="heading-07" data-tabs-mobile-type="slide-up-down" data-btn-classes="btn btn-md btn-block u-btn-outline-primary">
//     <li onClick={this.setOption.bind(this, 0)}
//         className="nav-item g-cursor-pointer">
//       <a className={"nav-link "+ (0 === option && 'active')}
//         style={{minWidth: '20em'}}
//         data-toggle="tab">Account</a>
//     </li>
//
//     <li onClick={this.setOption.bind(this, 1)}
//         className="nav-item g-cursor-pointer">
//       <a className={"nav-link "+ (1 === option && 'active')}
//         style={{minWidth: '20em'}}
//         data-toggle="tab">Business</a>
//     </li>
//
//     <li onClick={this.setOption.bind(this, 2)}
//         className="nav-item g-cursor-pointer">
//       <a className={"nav-link "+ (2 === option && 'active')}
//         style={{minWidth: '20em'}}
//         data-toggle="tab">Site</a>
//     </li>
//
//     </ul>
//   </div>
// </div>
