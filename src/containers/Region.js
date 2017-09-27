import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Place from '../components/place'
import MobilePlace from '../components/mobile/Place'
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
    [upToSM]: {display: 'block', width: '100vw', overflowX: 'hidden'}
  },
  desktop: {
    display: 'block', minHeight: '100vh',
    [upToSM]: {display: 'none'}
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
    return (
      <div>
        {!(region && cities) && <Spinner/>}
        {region && cities && <Place regions={cities}/>}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    region: store.location.region,
    cities: store.location.cities
  }
}

export default withRouter(connect(mapStateToProps)(Region))
