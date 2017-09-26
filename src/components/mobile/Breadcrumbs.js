import React from 'react'
import {Link} from 'react-router-dom'
import {resetRegion, resetCity} from '../../actions'

export default class Breadcrumbs extends React.Component {
  unloadCity(){ resetCity() }
  unloadRegion(){ resetRegion() }

  render() {
    const region = this.props.region
    const city = this.props.city
    return (
      <div className="d-sm-flex g-pb-20 g-pt-0">
        <div className="align-self-center ml-auto">
          <ul className="u-list-inline">
            <li className="list-inline-item g-mr-10">
              <Link to="/"
                onClick={this.unloadRegion.bind(this)}
                className={"g-font-size-20 u-link-v5 g-color-"+ (region ? 'main' : 'primary')}>
                US
              </Link>
              {region && <i className="fa fa-angle-right g-ml-10"></i>}
            </li>
            {region && <li className="list-inline-item g-mr-10">
              <Link to={region.uid}
                  onClick={this.unloadCity.bind(this)}
                  className={"u-link-v5 g-color-"+ (city ? 'main' : 'primary')}>
                  {region.name}
              </Link>
              {city && <i className="fa fa-angle-right g-ml-10"></i>}
            </li> }
            {city && <li className="list-inline-item">
              <Link to={region.uid} className="u-link-v5 g-color-primary">{city.name}</Link>
            </li>}
          </ul>
        </div>
      </div>

    )
  }
}
