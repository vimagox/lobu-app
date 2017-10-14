import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet,css} from 'aphrodite'
import RegionItem from './RegionItem'
import BusinessList from '../business/List'
import Columns from './Columns'
import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'
import {colors} from '../../constants/Colors'

const styles = StyleSheet.create( {
  page: {
    // border: '1px solid #ddd',
    marginTop: '1em',
    [upToXL]: {
      marginTop: '1em',
      // border: '1px solid blue',
    },
    [upToLG]: {
      marginTop: '1.5em',
      // border: '1px solid orange',
    },
    [upToMD]: {
      marginTop: '1em',
      // border: '1px solid cyan',
    },
    [upToSM]: {
      // border: '1px solid magenta',
      display: 'none',
    },
    [upToXS]: {
      width: '100%',
      padding: 0
    }
  },
  regions: {
    display: 'flex',
    flexFlow: 'row',
    backgroundColor: '#eee',
    padding: '.5em 1em',
    [upToXS]: {
      display: 'none'
    }
  },
  title: {
    fontSize: '1.4em',
    color: colors[1],
    margin: '-1em 0 0 0',
    [upToXS]: {
      display: 'none'
    }
  }
})

class DesktopPlace extends React.Component {

  render() {
    const regions = this.props.regions
    const regionKeys = Object.keys(regions)
    const regionsLen = regionKeys.length
    const region = this.props.region
    const city = this.props.city
    const title = city ? city.name + ', '+region.name : region ? region.name : 'United States'
    return (
    <div className="container">
      <div className={css(styles.page)}>

        {(city || region) &&
          <div className={css(styles.title)}
            style={{borderBottom: city ? '1px solid #ddd' : 'none'}}>{title}</div>
        }

        {!city && regionsLen > 1 && <div className={css(styles.regions)}>
            <Columns totalItems={regionsLen}>
              {regionKeys.map((k,i) => (
                <RegionItem key={'region'+i} r={regions[k]}/>
              ))}
            </Columns>
          </div>}
        <div style={{marginTop: '1.5em'}}>
          <BusinessList/>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    region: store.place.region,
    city: store.place.city
  }
}
export default connect(mapStateToProps)(DesktopPlace)

// <div className={css(styles.title)}>{title} Businesses</div>
