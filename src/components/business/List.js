import React from 'react'
import {connect} from 'react-redux'
import BusinessBanner from './Single'
import Container from '../Container'
import {color3} from '../../constants/Colors'
import {StyleSheet,css} from 'aphrodite'
import Single from './Single'
import Ad from './Ad'

const styles = StyleSheet.create({
  businesses: {
    margin: '-2em 0 3em 0',
    display: 'flex',
    flexFlow: 'row'
  },
  title: {
    borderBottom: '1px solid #ddd'
  }
})

const businesses = (region, city) => {
  // if(region.uid === 'tx' && city.uid === 'el') {
    return [
      {
        uid: 'bedroomsets',
        name: 'Online Bedroom Sets',
        title: 'Home Furniture',
        site: 'onlinebedroomsets.com',
        phone: '(480) 282 1786',
        pic: '4.jpg'
      },
      {
        uid: 'bedroomsets',
        name: 'Online Bedroom Sets',
        title: 'Home Furniture',
        site: 'onlinebedroomsets.com',
        phone: '(480) 282 1786',
        pic: '4.jpg'
      },
      {
        id: 'bedroomsets',
        name: 'Online Bedroom Sets',
        title: 'Home Furniture',
        site: 'onlinebedroomsets.com',
        phone: '(480) 282 1786',
        pic: '4.jpg'
      },
      {
        id: 'bedroomsets',
        name: 'Online Bedroom Sets',
        title: 'Home Furniture',
        site: 'onlinebedroomsets.com',
        phone: '(480) 282 1786',
        pic: '4.jpg'
      },
      {
        id: 'bedroomsets',
        name: 'Online Bedroom Sets',
        title: 'Home Furniture',
        site: 'onlinebedroomsets.com',
        phone: '(480) 282 1786',
        pic: '4.jpg'
      },
      {
        id: 'bedroomsets',
        name: 'Online Bedroom Sets',
        title: 'Home Furniture',
        site: 'onlinebedroomsets.com',
        phone: '(480) 282 1786',
        pic: '4.jpg'
      },
    ]
  // }else {
  //   return []
  // }
}

class Businesses extends React.Component {
  render() {
    const city = this.props.city
    const region = this.props.region
    const bizs = businesses(region, city)
    return (

<div>
<div id="blog" className="blog-section section-padding"
      style={{marginTop: 0, paddingTop: 0, xborder: '1px solid red'}}>
        <div className="row">
            <div className="col-sm-12" style={{margin: 0, padding: 0}}>
                <div className="row">
                    <Ad/>
                    <Single time={1} b={bizs[0]}/>
                </div>
            </div>
            </div>
    </div>
</div>

    )
  }
}

const mapStateToProps = store => {
  return {
    region: store.region,
    city: store.city
  }
}

export default connect(mapStateToProps)(Businesses)

// <div className="container" style={{margin: '-1.5em 0 2em 0'}}>
//   <div className="row" style={{padding: '0'}}>
//     { bizs.map((b,i) => (
//       <BusinessBanner key={'bb'+i} business={b}/>
//     ))}
//   </div>
// </div>
// <div className="text-info">
//     <h4>News & Update</h4>
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
// </div>
