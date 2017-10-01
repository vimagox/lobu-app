import React from 'react'
import {connect} from 'react-redux'
import RegionItem from '../RegionItem'
import BusinessList from '../../business/List'
import MobileHeader from './Header'
import Spinner from '../../Spinner'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  section: {
    width: '100%',
    padding: '0 1em'
  },
  header: {
    position: 'fixed',
    zIndex:999,
    marginTop: '-1em',
    backgroundColor: '#fff',
    width: '100%',
    right: 0,
    padding: '1em 1em 0 1em'
  }
})

class Home extends React.Component {  
  render() {
    const region = this.props.region
    const regions = this.props.regions
    const mode = this.props.mode
    return (
      <div className={css(styles.section)}>
        <div className={css(styles.header)}><MobileHeader/></div>
        <div style={{height: '4em'}}/>
        {!regions && <Spinner/>}
        {regions && mode === 'regions' &&
            <div style={{width: '100%',
                marginBottom: '3em',
                marginTop: region ? '3em' : 0}}>
              {Object.keys(regions).map((k,i) => (
                <RegionItem key={'region'+i} r={regions[k]}/>
              ))}
            </div>}
        { mode === 'bizs' &&
          <div style={{marginTop: region ? '3em' : 0}}>
            <BusinessList/>
          </div>}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    mode: store.place.mode,
    region: store.place.region
  }
}

export default connect(mapStateToProps)(Home)
