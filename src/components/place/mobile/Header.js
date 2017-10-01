import React from 'react'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import {app} from '../../../actions'
import {colors} from '../../../constants/Colors'
import Breadcrumbs from './Breadcrumbs'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  header: {
    display:'flex', flexFlow: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid ' + colors[8],
  }
})

class Header extends React.Component {
  setMode(mode){
    app.loadMode(mode)
    window.scrollTo(0, 0)
  }

  render() {
    const mode = this.props.mode
    const region = this.props.region
    const city = this.props.city
    return (
      <div style={{ height: region ? '5.8em' : '2.8em'}}>
        {region && <Breadcrumbs region={region} city={city}/>}
        <div >
        <div className={css(styles.header)}>
          <div className="g-font-size-18 u-link-v5 g-color-primary g-pt-8">
            {mode === 'bizs' ? 'Local Businesses' :
                region ? 'Businesses by City' :
                  city ? '' : 'Businesses by State'}
          </div>
          <div>
            <img src="/favicon.jpg"
              alt="lobu"
              onClick={this.setMode.bind(this, 'bizs')}
              style={{ height: '2.2em',
                  marginTop: city ? 0 : '-.7em',
                  color: '#d6d6d6',
                  opacity: mode === 'regions' ? .25 : 1}}/>
            {!city && <FontAwesome name="map-pin"  size="2x"
              onClick={this.setMode.bind(this, 'regions')}
              style={{marginLeft: '.75em',
                color: colors[8],
                opacity: mode === 'bizs' ? .25 : 1}}/>}
          </div>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    mode: store.place.mode,
    region: store.place.region,
    city: store.place.city
  }
}

export default connect(mapStateToProps)(Header)
