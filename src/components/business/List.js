import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet,css} from 'aphrodite'
import Item from './Item'
import ItemSpacer from './ItemSpacer'
import Ad from './Ad'

const styles = StyleSheet.create({
  regions: {
    display: 'flex', flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 0
  },
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
        uid: 'casa',
        name: 'Casa Furniture',
        title: 'Wholesale Bedroom Sets',
        site: 'casafurniture.com',
        phone: '(915) 320 2836',
        pic: '1.jpg',
        color: 1
      },
      {
        uid: 'rainbow',
        name: 'Rainbow',
        title: 'Face Painting',
        phone: '(915) 320 2811',
        pic: 'rainbow2.jpg',
        color: 5
      },
    ]
}

class Businesses extends React.Component {
  render() {
    const city = this.props.city
    const region = this.props.region
    const bizs = businesses(region, city)
    const more = false
    return (

    <div className="bizs-section section-padding"
      style={{marginTop: 0, paddingTop: 0}}>
        <div className={css(styles.regions)}>
          <Ad/>
          <Item time={1} b={bizs[0]}/>
          <Item time={2} b={bizs[1]}/>
          <Item time={1} b={bizs[0]}/>
          <Item time={2} b={bizs[1]}/>
          <Item time={1} b={bizs[0]}/>
          <Item time={2} b={bizs[1]}/>
          <Item time={2} b={bizs[1]}/>
          <ItemSpacer/>
          <ItemSpacer/>
          <ItemSpacer/>
          <ItemSpacer/>
        </div>

        {more && <button className="btn btn-primary btn-block"
            style={{padding: '1em 0'}}>View More Businesses</button> }
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
// {bizs.map((b,i) => (
//   <Item time={1} b={b}/>
//   <Item time={1} b={b}/>
//   <Item time={1} b={b}/>
// // ))}
