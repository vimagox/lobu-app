import React from 'react'
import {fieldValue, loadField} from '../../actions'

export default class InputComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {[props.id]: ''}
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    localStorage.setItem('lobu'+event.target.id, event.target.value)
    if(this.props.field) {
      loadField(this.props.field, event.target.value)
    }
  }

  render() {
    const id = this.props.id
    const value = this.props.value || this.state[this.props.id]
    return (
      <div className="form-group g-mb-10" style={{flexGrow:1}}>
        <input
          type="text"
          id={id}
          onChange={this.handleChange}
          className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
          style={{
            resize: 'none',
            color: value ? '#000' : '#aaa',
            fontWeight: value ? 'bold' : 'regular'
          }}
          value={value}
          placeholder={this.props.placeholder}/>
      </div>
    )
  }
}
