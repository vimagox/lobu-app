import React from 'react'

export default class ButtonComponent extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'right'}}>
        <a className="g-cursor-pointer btn btn-primary g-mt-10"
         style={{textDecoration: 'underline'}}>
         {this.props.text}
        </a>
      </div>
    )
  }
}
