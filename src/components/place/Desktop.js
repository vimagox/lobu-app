import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet,css} from 'aphrodite'
import BusinessList from '../business/List'
import RegionList  from './RegionList'
import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'
import {colors} from '../../constants/Colors'

const styles = StyleSheet.create( {
  page: {
    // border: '1px solid #ddd',
    marginTop: '0',
    [upToXL]: {
      marginTop: '-1.5em',
      // border: '1px solid blue',
    },
    [upToLG]: {
      // marginTop: '1.5em',
      border: '1px solid orange',
    },
    [upToMD]: {
      // marginTop: '1em',
      border: '1px solid cyan',
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
    const city = this.props.city

    return (
    <div className="container">
      <div className={css(styles.page)}>
        {!city && regionsLen > 1 && <RegionList regions={regions}/>}
        <div style={{marginTop: '1.75em'}}><BusinessList/></div>
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
    // const region = this.props.region
    // const title = city ? city.name + ', '+region.name : region ? region.name : 'United States'
// {(city || region) &&
//   <div className={css(styles.title)}
//     style={{borderBottom: city ? '1px solid #ddd' : 'none'}}>{title}</div>
// }
