import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import RegionList from '../components/region/List'
import RegionItem from '../components/region/Item'
import BusinessList from '../components/business/List'
import {loadRegion, loadCities} from '../actions'
import {colors} from '../constants/Colors'
import MobileHeader from '../components/mobile/Header'
import {upToXS,upToSM, upToMD, upToLG, upToXL} from '../constants/Media'
import {StyleSheet,css} from 'aphrodite'
import Spinner from '../components/Spinner'


const styles = StyleSheet.create({
  mobile: {
    display: 'none',
    [upToSM]: {
      display: 'block',
      width: '100%',
      overflowX: 'hidden'
      // padding: '1em 0'
    }
  },
  desktop: {
    display: 'block',
    minHeight: '100vh',
    [upToSM]: {
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
    const cities = this.props.cities
    const mode = this.props.mode
    console.log(mode)
    console.log(region)
    console.log(cities)
    return (
      <div className="container">
        { !(region && cities) && <Spinner/> }
        {region && cities && <div>
          <div className={css(styles.desktop)}>
            <RegionList list={cities} color={colors[0]}/>
          </div>

          <div className={css(styles.mobile)}>
            <div style={{position: 'fixed',zIndex:999,
              marginTop: '-1em',
                backgroundColor: '#fff', width: '100%', right: 0, padding: '1em 1em 0 1em'}}><MobileHeader/></div>
            <div style={{height: '4em'}}/>
            {!region && <Spinner/>}
            {region && <div className={css(styles.regions)}>
              { mode === 'regions' && <div className={css(styles.column)}>
                {Object.keys(cities).map((k,i) => (
                  <RegionItem key={'city'+i} r={cities[k]}/>
                ))}
              </div> }
            </div> }
            { mode === 'bizs' && <BusinessList/>}
          </div>

        </div>}

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
