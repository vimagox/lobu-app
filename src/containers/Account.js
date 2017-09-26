import React from 'react'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import Modal from '../components/Modal'
import {loadStage, loadModal} from '../actions'
import {colors} from '../constants/Colors'
import Popup from 'react-popup'
import Accordion from '../components/Accordion'
import Products from '../components/Products'
import Menu from '../components/Menu'
import Spinner from '../components/Spinner'
import AccountSettings from '../components/account/AccountSettings'
import BusinessSettings from '../components/account/BusinessSettings'
import SiteSettings from '../components/account/SiteSettings'
import SitePreview from '../components/account/SitePreview'
import AccountNav from '../components/account/Nav'
import {StyleSheet,css} from 'aphrodite'
import AccountHeader from '../components/account/Header'
import BusinessPage from '../components/business/Page'
import {upToSM} from '../constants/Media'
import {loadBusiness, loadRegion, loadCity} from '../actions'


const biz1 = {
  name: 'Casa Furniture',
  title: 'Wholesale Bedroom Sets',
  subtitle: 'High quality and modern bedroom sets at wholesale prices. Contact us today with your business inquiries.',
  logo: 'cf.png',
  imgHeight: '11em',
  contact: {
    name: "Victor Gómez",
    // address: "123 West 12th Street, Suite 456",
    city: "El Paso, TX",
    // zipcode:  "79922",
    phone: "(915) 320 2836",
    email: "sales@casafurniture.co"
  },
  location: {
    region: '/tx',
    city: 'el',
  },
  color: 1,
  links: {
    website: 'casafurniture.co'
  },
  services: {
    freeDelivery: true,
    bitcoin: true,
  },
  products: [
    {category: 'Bedroom Sets', name: 'Suzy', img: '1.jpg'},
    {category: 'Bedroom Sets', name: 'Sandra', img: '2.jpg'},
    {category: 'Bedroom Sets', name: 'Sarah', img: '3.jpg'},
    {category: 'Bedroom Sets', name: 'Samantha', img: '4.jpg'},
    {category: 'Bedroom Sets', name: 'Shannon', img: '5.jpg'},
    {category: 'Bedroom Sets', name: 'Scarlett', img: '6.jpg'},
    {category: 'Bedroom Sets', name: 'Sabrina', img: '7.jpg'},
    {category: 'Bedroom Sets', name: 'Sofia', img: '8.jpg'},
    {category: 'Bedroom Sets', name: 'Susan', img: '9.jpg'},
    {category: 'Bedroom Sets', name: 'Sue', img: '10.jpg'},
    {category: 'Bedroom Sets', name: 'Syvia', img: '11.jpg'},
  ]
}


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
  },
  header: {
    [upToSM]: {
      zIndex: 999,
      width: '100%',
      position: 'fixed'
    }
  },
  spacer: {
    [upToSM]: {
      height: '4.5em'
    }
  }
})


const menuItems = ['Business', 'Site', 'Account']

class Account extends React.Component {

  async setStage(value) {
    if(value===2) {
      loadBusiness(biz1)
    }
    loadStage(value)
  }

  render() {
    const stage = this.props.stage
    return (
      <div className="exprience-section g-mt-0">

        <div className={css(styles.header)}><AccountHeader/></div>
        <div className={css(styles.spacer)}/>

        <div>
          <div className="row">
            <div className="col-xs-12">
              { stage === 0 &&
                <div>
                  <div className="container">
                    <BusinessSettings/>
                  </div>
                  <div className="text-right" style={{
                        marginTop: '2em',
                        backgroundColor: '#000',
                      }}>
                    <div className="container">
                      <div style={{
                        float: 'right',
                        position: 'relative',
                        border: '1px solid #fff',
                        padding: '.5em 1em',
                        margin: '1.25em 0 1.25em 0',
                        height: '3em',
                        width: '9em'}}
                        onClick={this.setStage.bind(this, 1)}
                        className="g-cursor-pointer g-color-white">
                          <div style={{display: 'inline-block', padding: '0 2em 0 0'}}>Setup Site</div>
                          <FontAwesome name="arrow-right" size="2x"
                            style={{position: 'absolute', right: '7px', top: '5px'}}/>
                      </div>
                    </div>
                  </div>
                </div>
              }
              { stage === 1 &&
                <div>
                  <div className="container">
                    <SiteSettings/>
                  </div>
                  <div className="text-right" style={{
                        backgroundColor: '#000'
                      }}>
                    <div className="container g-mt-30">
                      <div style={{
                        float: 'right',
                        position: 'relative',
                        border: '1px solid #fff',
                        padding: '.5em 1em',
                        margin: '1.25em 0 1.25em 0',
                        height: '3em',
                        width: '10em'}}
                        onClick={this.setStage.bind(this, 2)}
                        className="g-cursor-pointer g-color-white">
                          <div style={{display: 'inline-block', padding: '0 2em 0 0'}}>Preview Site</div>
                          <FontAwesome name="arrow-right" size="2x"
                            style={{position: 'absolute', right: '7px', top: '5px'}}/>
                      </div>
                      <div style={{
                        float: 'left',
                        position: 'relative',
                        border: '1px solid #fff',
                        padding: '.5em 1em',
                        margin: '1.25em 0 1.25em 0',
                        height: '3em',
                        width: '10em'}}
                        onClick={this.setStage.bind(this, 0)}
                        className="g-cursor-pointer g-color-white">
                          <div style={{display: 'inline-block', padding: '0 0 0 2em'}}>Setup Card</div>
                          <FontAwesome name="arrow-left" size="2x"
                            style={{position: 'absolute', left: '7px', top: '5px'}}/>
                      </div>
                    </div>
                  </div>
                </div>
              }
              { stage === 2 &&
                <div>
                  <div className="container">
                    {!this.props.b && <Spinner/>}
                    {this.props.b && <BusinessPage/>}
                  </div>
                  <div className="text-right" style={{
                        backgroundColor: '#000'
                      }}>
                    <div className="container">
                      <div style={{
                          float: 'right',
                          position: 'relative',
                          margin: '1.25em 0 1.25em 0',
                        }}
                        onClick={this.setStage.bind(this, 2)}
                        className="btn btn-primary g-cursor-pointer text-center">
                          <div style={{display: 'inline-block'}}>Publish Site</div>
                      </div>
                      <div style={{
                        float: 'left',
                        position: 'relative',
                        border: '1px solid #fff',
                        padding: '.5em 1em',
                        margin: '1.25em 0 1.25em 0',
                        height: '3em',
                        width: '9em'}}
                        onClick={this.setStage.bind(this, 1)}
                        className="g-cursor-pointer g-color-white">
                          <div style={{display: 'inline-block', padding: '0 0 0 2em'}}>Setup Site</div>
                          <FontAwesome name="arrow-left" size="2x"
                            style={{position: 'absolute', left: '7px', top: '5px'}}/>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    stage: store.accountStage,
    b: store.business
  }
}

export default connect(mapStateToProps)(Account)
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


// <div className="g-bg-black g-pt-30 g-mb-10"
//     style={{ zIndex: 200, margin: '-.75em auto'}}>
//   <div className="container">
//   <ul className={css(styles.menu)}>
//     {menuItems.map((item, i) => (
//       <li
//           onClick={this.setOption.bind(this, i)}
//          className={css(styles.item)}>
//          <h2 style={{color: option === i ? '#fff' : '#888'}}
//           className="g-font-size-22 u-heading-v2__title g-mb-0">{menuItems[i]}</h2>
//       </li>
//     ))}
//   </ul>
//   </div>
// </div>
