import React from 'react'

export default class Tabs extends React.Component {
  render() {
    return (
      <div className="shortcode-html">
        <ul className="nav u-nav-v1-2 u-nav-primary u-nav-rounded-5 g-brd-bottom--md g-brd-gray-light-v4 g-mb-20" role="tablist" data-target="nav-1-2-default-hor-left-rounded-underline" data-tabs-mobile-type="slide-up-down" data-btn-classes="btn btn-md btn-block u-btn-outline-primary g-mb-20">
          <li className="nav-item" style={{display: 'inline-block'}}>
            <a className="nav-link active g-rounded-bottom-0 g-brd-bottom-none" data-toggle="tab" href="#nav-1-2-default-hor-left-rounded-underline--1" role="tab">Info</a>
          </li>
          <li className="nav-item" style={{display: 'inline-block'}}>
            <a className="nav-link g-rounded-bottom-0 g-brd-bottom-none" data-toggle="tab" href="#nav-1-2-default-hor-left-rounded-underline--2" role="tab">Settings</a>
          </li>
        </ul>
        <div id="nav-1-2-default-hor-left-rounded-underline" className="tab-content">
          <div className="tab-pane fade show active" id="nav-1-2-default-hor-left-rounded-underline--1" role="tabpanel">
          </div>

          <div className="tab-pane fade" id="nav-1-2-default-hor-left-rounded-underline--2" role="tabpanel">
          </div>
        </div>
      </div>
    )
  }
}
