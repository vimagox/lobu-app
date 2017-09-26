import React from 'react'

export default class PriceComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {[props.id]: ''}
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    localStorage.setItem('lobu'+event.target.id, event.target.value)
  }

  render() {
    const value = this.state[this.props.id]
    return (
      <div className="form-group g-mb-10">
        <div style={{display: 'flex'}}>
          <div style={{fontSize: '1.2em', padding: '.75em .5em', lineHeight: '1.2em',
            border: '1px solid #ddd', backgroundColor: '#efefef'}}>$</div>
          <div><input
          id='productPrice'
          onChange={this.handleChange}
          className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
          style={{resize: 'none', color: value ? '#222' : '#aaa',
            fontWeight: value ? 'bold' : 'regular'}}
          placeholder={this.props.placeholder}/>
          </div>
        </div>
      </div>
    )
  }
}
