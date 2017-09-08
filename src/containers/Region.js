import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import RegionList from '../components/region/List'
import RegionItem from '../components/region/Item'
import BusinessList from '../components/business/List'
import {loadRegion, loadCities} from '../actions'
import {colors} from '../constants/Colors'
import MobileHeader from '../components/mobile/Header'
import {upToSmall} from '../constants/Media'
import {StyleSheet,css} from 'aphrodite'


const styles = StyleSheet.create({
  mobile: {
    display: 'none',
    [upToSmall]: {
      display: 'block',
      padding: '1em 0'
    }
  },
  desktop: {
    display: 'block',
    [upToSmall]: {
      display: 'none',
    }
  }
})

class Region extends React.Component {

  async componentWillMount() {
    if(!this.props.region) {
      await loadRegion(this.props.location.pathname)
      if(!this.props.cities) {
        loadCities(this.props.location.pathname)
      }
    }
  }

  render() {
    const region = this.props.region
    const city = this.props.city
    const cities = this.props.cities
    const mode = this.props.mode
    return (
      <div className="container">
        <div className={css(styles.desktop)}>
          {region && cities && <RegionList list={cities} color={colors[0]}/>}
        </div>

        <div className={css(styles.mobile)}>
          <MobileHeader/>
          {cities && <div className={css(styles.regions)}>
            { mode === 'regions' && <div className={css(styles.column)}>
              {Object.keys(cities).map((k,i) => (
                <RegionItem key={'region'+i} r={cities[k]}/>
              ))}
            </div> }
          </div> }
          { mode === 'bizs' && <BusinessList/>}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    mode: store.mode,
    region: store.region,
    cities: store.cities,
    city: store.city
  }
}

export default withRouter(connect(mapStateToProps)(Region))
// <div className="container" style={{padding: 0}}>
//   { !city && region && <Cities region={region}/> }
//   {  city && <Businesses/> }
// </div>
