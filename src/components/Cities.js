import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {store} from '../store'
import RegionList from './region/List'
import Container from './Container'
import {color2} from '../constants/Colors'
import {loadCities} from '../actions'


class Cities extends React.Component {
  showCity(city){
    store.dispatch({type: 'SET_CITY', city: city})
  }

  componentWillMount() {
    if(!this.props.cities) {
      loadCities(this.props.location.pathname)
    }
  }

  render() {
    const region = this.props.region
    const cities = this.props.cities
    return region &&
      <div className="container">
        {cities && <RegionList list={cities} color={color2}/>}
      </div>
  }
}

const mapStateToProps = store => {
  return {
    region: store.region,
    cities: store.cities
  }
}

export default withRouter(connect(mapStateToProps)(Cities))
