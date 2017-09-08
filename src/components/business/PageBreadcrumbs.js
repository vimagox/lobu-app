import React from 'react'
import {Link} from 'react-router-dom'

export default class Breadcrumbs extends React.Component {
  render() {
    const region = this.props.region
    const city = this.props.city
    return (
      <div className="d-sm-flex text-right g-brd-bottom g-brd-gray-light-v4 g-py-20">
        <div className="align-self-center ml-auto">
          <ul className="u-list-inline">
            <li className="list-inline-item">
              <Link to={region.uid} className="u-link-v5 g-color-primary">{city.name}, {region.name}</Link>
            </li>
          </ul>
        </div>
      </div>

    )
  }
}
// <li className="list-inline-item g-mr-7">
//   <Link to="/" className="u-link-v5 g-color-main">U.S.</Link>
//   <i className="fa fa-angle-right g-ml-7"></i>
// </li>
// <li className="list-inline-item g-mr-7">
//   <Link to={region.uid} className="u-link-v5 g-color-main">{region.name}</Link>
//   <i className="fa fa-angle-right g-ml-7"></i>
// </li>
