import React from 'react'

const style = {
  fontWeight: 'bold',
  color: 'red',
  margin: '-.5em 0 .5em 0'
}

export default class Error extends React.Component {
  render() {
    return (
      <div style={style}>
        {this.props.text}
      </div>
    )
  }
}
