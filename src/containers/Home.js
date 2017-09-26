import React from 'react'
import {connect} from 'react-redux'
import {colors} from '../constants/Colors'
import {loadRegions} from '../actions'
import RegionList from '../components/region/List'
import RegionItem from '../components/region/Item'
import BusinessList from '../components/business/List'
import MobileHeader from '../components/mobile/Header'
import {upToSmall} from '../constants/Media'
import {StyleSheet,css} from 'aphrodite'
import Spinner from '../components/Spinner'

const styles = StyleSheet.create({
  mobile: {
    display: 'none',
    [upToSmall]: {
      display: 'block',
      width: '100%',
      overflowX: 'hidden'
      // padding: '1em 0'
    }
  },
  desktop: {
    display: 'block',
    minHeight: '100vh',
    [upToSmall]: {
      display: 'none',
    }
  }
})

class Home extends React.Component {
  componentWillMount() {
    loadRegions()
  }

  render() {
    const regions = this.props.regions
    const mode = this.props.mode
    return (
    <div>
      <div className="container">
        <div className={css(styles.desktop)}>
          {!regions && <Spinner/>}
          {regions && <RegionList list={regions} color={colors[0]}/>}
        </div>

        <div className={css(styles.mobile)}>
          <div style={{position: 'fixed',zIndex:999,
            marginTop: '-1em',
              backgroundColor: '#fff', width: '100%', right: 0, padding: '1em 1em 0 1em'}}><MobileHeader/></div>
          <div style={{height: '4em'}}/>
          {!regions && <Spinner/>}
          {regions && <div className={css(styles.regions)}>
            { mode === 'regions' && <div className={css(styles.column)}>
              {Object.keys(regions).map((k,i) => (
                <RegionItem key={'region'+i} r={regions[k]}/>
              ))}
            </div> }
          </div> }
          { mode === 'bizs' && <BusinessList/>}
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    regions: store.location.regions,
    mode: store.root.mode
  }
}

export default connect(mapStateToProps)(Home)
