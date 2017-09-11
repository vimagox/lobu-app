import React from 'react'

export default class Steps extends React.Component {
  render() {
    return (
    <ul className="nav justify-content-center u-nav-v2-1 u-nav-rounded-3 g-mb-50"
        role="tablist"
        data-target="hero-01"
        data-tabs-mobile-type="slide-up-down"
        data-btn-classes="btn btn-md u-btn-outline-primary">
      <li className="nav-item">
        <a className="nav-link active" data-toggle="tab" href="#hero-01-1" role="tab">Example 1</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#hero-01-2" role="tab">Example 2</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#hero-01-3" role="tab">Example 3</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#hero-01-4" role="tab">Example 4</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#hero-01-5" role="tab">Example 5</a>
      </li>
    </ul>
    )
  }
}
