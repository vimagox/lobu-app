import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet,css} from 'aphrodite'
import {colors} from '../constants/Colors'
import {loadRegions} from '../actions'
import Container from '../components/Container'
import RegionList from '../components/region/List'

const styles = StyleSheet.create({
})

class Home extends React.Component {
  componentWillMount() {
    loadRegions()
  }

  render() {
    const regions = this.props.regions
    return (
      <div className="container">
        {regions && <RegionList list={regions} color={colors[0]}/>}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    regions: store.regions
  }
}

export default connect(mapStateToProps)(Home)
