import React from 'react'
import {connect} from 'react-redux'
import {default as UI} from '../../ui'

class ContactForm extends React.Component {
  render() {
    return (
      <form>
        <legend className="g-font-size-default">Business Contact</legend>
        <UI.Input id="name"
            value={this.props.name}
            placeholder="Contact Name"
            field="contactName"/>
        <div className="d-flex">
          <UI.Input id="email"
            value={this.props.email}
            placeholder="Contact Email"
            field="contactEmail"/>
          <UI.Input id="phone"
            value={this.props.phone}
            placeholder="Contact Phone"
            field="contactPhone"/>
        </div>
        <div className="d-flex" style={{justifyContent: 'space-between'}}>
          <UI.Input id="twitter" placeholder="Twitter" field="twitterNet"/>
          <UI.Input id="facebook" placeholder="Facebook" field="facebookNet"/>
          <UI.Input id="instagram" placeholder="Instagram" field="instagramNet"/>
        </div>
        <div className="d-flex" style={{justifyContent: 'space-between'}}>
          <UI.Input id="linkedin" placeholder="LinkedIn" field="linkedinNet"/>
          <UI.Input id="youtube" placeholder="Youtube" field="youtubeNet"/>
          <UI.Input id="pinterest" placeholder="Pinterest" field="pinterestNet"/>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    name: store.contact.name,
    email: store.contact.email,
    phone: store.contact.phone
  }
}

export default connect(mapStateToProps)(ContactForm)
