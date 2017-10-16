import React from 'react'
import LoaderButton from '../components/LoaderButton'
import {app} from '../actions'

export default class SuggestionForm extends React.Component {

  state = {
    message: '',
    label: 'Send Message',
    sending: false
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value, label: 'Send Message'})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({sending: true})
    app.sendMessage(this.state.message)
    let that = this
    setTimeout(function() {
      that.setState({sending: false, message: '', label: 'Message Sent'})
    }, 1000);
  }

  validForm() {
    return this.state.message.length > 4
  }

  render(){
    return (
      <form onSubmit={e => this.handleSubmit(e)}
      style={{border: 'none', padding: 0, margin: 0, marginLeft: '-5px'}}>
        <div className="form-group g-mb-15">
          <textarea
              value={this.state.message}
              name="message"
              onChange={e => this.handleChange(e)}
              className="form-control g-bg-white g-color-black g-brd-white-opacity-0_1 g-brd-primary--focus g-resize-none rounded-0 g-py-12 g-px-15"
              rows="4"
              placeholder="Message"></textarea>
        </div>
        <LoaderButton
            type="submit"
            className="btn btn-lg btn-default text-uppercase g-font-size-14 rounded-0"
            disabled={ ! this.validForm() }
            isLoading={this.state.sending}
            text={this.state.label}
            loadingText='Sending Message ....' />
      </form>
    )
  }
}
