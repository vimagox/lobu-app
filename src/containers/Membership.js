import React from 'react'
import CustomerSignup from '../components/signup/Customer'

export default class Membership extends React.Component {
  render() {
    return (
    <div className="container g-py-100--md">
      <div className="container-fluid text-center g-color-white-opacity-0_8 px-0">
        <CustomerSignup/>
      </div>
    </div>
    )
  }
}
