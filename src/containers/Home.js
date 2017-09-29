import React from 'react'
import {connect} from 'react-redux'
import Place from '../components/place'
import Spinner from '../components/Spinner'
import {country} from '../actions'

class Home extends React.Component {
  componentWillMount() {
    country.loadRegions()
  }

  render() {
    const regions = this.props.regions
    return (
      <div>
        {!regions && <Spinner/>}
        {regions && <Place regions={regions}/>}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    regions: store.location.regions,
  }
}

export default connect(mapStateToProps)(Home)
