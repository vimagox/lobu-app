import React from 'react'

export default class Menu extends React.Component {
  render() {
    return (
  <div className="container">

    <ul className="nav justify-content-center u-nav-v2-1 u-nav-rounded-3 g-mb-50" role="tablist" data-target="heading-07" data-tabs-mobile-type="slide-up-down" data-btn-classes="btn btn-md btn-block u-btn-outline-primary">
      <li className="nav-item">
        <a className="nav-link active"
           style={{minWidth: '20em'}}
          data-toggle="tab">Account</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"
         style={{minWidth: '20em'}}
          data-toggle="tab">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"
         style={{minWidth: '20em'}}
          data-toggle="tab">Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"
          style={{minWidth: '20em'}}
          data-toggle="tab">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"
          style={{minWidth: '20em'}}
          data-toggle="tab">Links</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"
           style={{minWidth: '20em'}}
          data-toggle="tab">Preview</a>
      </li>
    </ul>

  </div>

    )
  }
}
