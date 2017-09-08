import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet,css} from 'aphrodite'
import {colors} from '../../constants/Colors'
import RegionItem from './Item'
import BusinessList from '../business/List'

const styles = StyleSheet.create( {
  regions: {
    margin: '-2em 0 3em 0',
    display: 'flex',
    flexFlow: 'row'
  },
  title: {
    color: '#d6d6d6',
    fontSize: '2.4em',
    paddingBottom: '.5em',
    borderBottom: '1px solid #ddd'
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
      <div className="container" style={{padding: '2em 2em 0em 2em'}}>
        <div>
          {!city && regionKeys.length > 1 && <div className="section-title">
            <h1 className={css(styles.title)}>{title}</h1>
          </div> }

          {!city && regionKeys.length > 1 && <div className={css(styles.regions)}>
            <div className={css(styles.column)}>
              {regionKeys.map((k,i) => (
                <RegionItem key={'region'+i} r={regions[k]}/>
              ))}
            </div>
          </div>}

          <div className="section-title" style={{marginBottom: '2.5em'}}>
            <h1 className={css(styles.title)}>{title} Businesses</h1>
          </div>

          <BusinessList/>

        </div>
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
