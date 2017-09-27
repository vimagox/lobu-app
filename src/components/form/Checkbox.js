import React from 'react'
import {setField} from '../../actions'


export default class Checkbox extends React.Component{
  constructor(props){
    super(props)
    this.state = {checked: false}
  }

  toggle(event) {
    event.preventDefault()
    const value = !this.state.checked
    this.setState({checked: value})
    this.props.handleCheck(this.props.id, value)
    if(this.props.field) {
      setField(this.props.field, value)
    }
  }

  render() {
    const checked = this.state.checked
    return (
      <div onClick={this.toggle.bind(this)}
        className="g-cursor-pointer g-mt-10"
        style={{
          padding: '.25em', height: '3.5em', overflow: 'hidden'}}>
        <label className="custom-control custom-checkbox mb-0" style={{verticalAlign: 'bottom'}}>
          {checked && <input type="checkbox" className="g-ml-15 custom-control-input g-font-size-24" checked/>}
          {!checked && <input type="checkbox" className="g-ml-15 custom-control-input g-font-size-24"/>}
          <span className="custom-control-indicator"></span>
          <span style={{userSelect: 'none', lineHeight: '3em'}} className="custom-control-description g-ml-0"> {this.props.label}</span>
        </label>
      </div>
    )
  }
}
