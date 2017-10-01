import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Place from '../components/place'
import {region} from '../actions'
import Spinner from '../components/Spinner'

class Region extends React.Component {

  async componentWillMount() {
    if(!this.props.region) {
      await region.load(this.props.location.pathname)
      if(!this.props.cities) {
        region.loadCities(this.props.location.pathname)
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
    region: store.place.region,
    cities: store.place.cities
  }
}

export default withRouter(connect(mapStateToProps)(Region))
