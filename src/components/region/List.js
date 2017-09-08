import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet,css} from 'aphrodite'
import {colors} from '../../constants/Colors'
import RegionItem from './Item'
import BusinessList from '../business/List'
import {upToSmall} from '../../constants/Media'

const styles = StyleSheet.create( {
  page: {
    padding: '2em 2em 0em 2em',
    [upToSmall]: {
      width: '100%',
      padding: 0
    }
  },
  regions: {
    margin: '-2em 0 3em 0',
    display: 'flex',
    flexFlow: 'row',
    [upToSmall]: {
      display: 'none'
    }
  },
  title: {
    color: '#d6d6d6',
    fontSize: '2.4em',
    paddingBottom: '.5em',
    borderBottom: '1px solid #ddd',
  },
  bizstitle: {
    [upToSmall]: {
      display: 'none'
    }
  }
})

class RegionList extends React.Component {

  render() {
    const regions = this.props.list
    const regionKeys = Object.keys(regions)
    const region = this.props.region
    const city = this.props.city
    const title = city ? city.name + ', '+region.name : region ? region.name : 'United States'
    return (
        <div className={css(styles.page)}>

          {!city && regionKeys.length > 1 &&
            <div className={css(styles.bizstitle)}>
              <div className="section-title">
            <h1 className={css(styles.title)}>{title}</h1>
          </div></div> }

          {!city && regionKeys.length > 1 && <div className={css(styles.regions)}>
            <div className={css(styles.column)}>
              {regionKeys.map((k,i) => (
                <RegionItem key={'region'+i} r={regions[k]}/>
              ))}
            </div>
          </div>}

          <div className={css(styles.bizstitle)}>
            <div className="section-title" style={{marginBottom: '2.5em'}}>
              <h1 className={css(styles.title)}>{title} Businesses</h1>
            </div>
          </div>
           
          <BusinessList/>
        </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    region: store.region,
    city: store.city
  }
}
export default connect(mapStateToProps)(RegionList)
