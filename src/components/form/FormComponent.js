import React from 'react'


export default class FormComponent extends React.Component {
  render() {
    return (
      <div style={{marginTop: '1em', border: '1px solid #ddd',
          borderRadius: '3px', padding: '1em', marginRight: 0}}>
        <form>
          <legend className="g-font-size-default">{this.props.legend}</legend>
          {this.props.children}
        </form>
      </div>
    )
  }
}
