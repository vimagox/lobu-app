import React from 'react'

export default class FormComponent extends React.Component {

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    localStorage.setItem('lobu'+event.target.id, event.target.value)
  }

}
