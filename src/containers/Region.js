import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import RegionList from '../components/region/List'
import {loadRegion, loadCities} from '../actions'
import {colors} from '../constants/Colors'


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
    return (
      <div className="container">
        {region && cities && <RegionList list={cities} color={colors[0]}/>}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
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
