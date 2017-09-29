import React from 'react'
import {form} from '../../actions'


export default class TextAreaComponent extends React.Component {
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
      form.loadField(this.props.field, event.target.value)
    }
  }

  render() {
    const value = this.state[this.props.id]
    return (
      <div className="form-group g-mb-10">
        <textarea
          id={this.props.id}
          onChange={this.handleChange}
          className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
          style={{resize: 'none', color: value ? '#222' : '#aaa',
            fontWeight: value ? 'bold' : 'regular'}}
          placeholder={this.props.placeholder}/>
      </div>
    )
  }
}
