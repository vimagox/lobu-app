import React from 'react'


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
  }

  render() {
    const checked = this.state.checked
    return (
      <div onClick={this.toggle.bind(this)}
        className="g-cursor-pointer g-mt-10 g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus"
        style={{
          flexGrow: 1,
          padding: '.25em', height: '3.5em', overflow: 'hidden'}}>
        <label className="custom-control custom-checkbox mb-0" style={{verticalAlign: 'bottom'}}>
          {checked && <input type="checkbox" className="g-ml-10 custom-control-input g-font-size-36" checked/>}
          {!checked && <input type="checkbox" className="g-ml-10 custom-control-input g-font-size-36"/>}
          <span className="custom-control-indicator"></span>
          <span style={{userSelect: 'none', lineHeight: '3em'}} className="custom-control-description g-ml-10"> {this.props.label}</span>
        </label>
      </div>
    )
  }
}
