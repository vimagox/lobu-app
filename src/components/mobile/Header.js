import React from 'react'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import {loadMode} from '../../actions'
import {colors} from '../../constants/Colors'
import Breadcrumbs from './Breadcrumbs'


class Header extends React.Component {
  setMode(mode){
    loadMode(mode)
  }

  render() {
    const mode = this.props.mode
    const region = this.props.region
    const city = this.props.city
    return (
      <div className="section-title">
        {region && <Breadcrumbs region={region} city={city}/>}
        <div style={{display:'flex', flexFlow: 'row', justifyContent: 'space-between',
            borderBottom: '1px solid #3c70b4', height: '2.8em'}}>
          <div className="g-font-size-25 u-link-v5 g-color-primary g-pt-8">
            {mode === 'bizs' ? 'Local Businesses' : region ? 'Businesses by City' : city ? '' : 'Businesses by State'}
          </div>
          <div>
          <img src="/favicon.jpg"
              alt="lobu"
              onClick={this.setMode.bind(this, 'bizs')}
              style={{ height: '2.2em',
                    marginTop: '-.7em',
                    color: '#d6d6d6',
                    opacity: mode === 'regions' ? .25 : 1}}/>
          <FontAwesome name="map-pin"  size="2x"
              onClick={this.setMode.bind(this, 'regions')}
              style={{marginLeft: '.75em',
                color: colors[8], opacity: mode === 'bizs' ? .25 : 1}}/>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (store) => {
  return {
    mode: store.mode,
    region: store.region,
    city: store.city
  }
}

export default connect(mapStateToProps)(Header)
