import React from 'react'
import {connect} from 'react-redux'
import InputComponent from '../../../form/InputComponent'
import FormComponent from '../../../form/FormComponent'

class ContactForm extends React.Component {
  render() {
    return (
      <FormComponent legend="Business Contact">
        <InputComponent id="name"
            value={this.props.name}
            placeholder="Contact Name"
            field="contactName"/>
        <div className="d-flex">
          <InputComponent id="email"
            value={this.props.email}
            placeholder="Contact Email"
            field="contactEmail"/>
          <InputComponent id="phone"
            value={this.props.phone}
            placeholder="Contact Phone"
            field="contactPhone"/>
        </div>
        <div className="d-flex" style={{justifyContent: 'space-between'}}>
          <InputComponent id="twitter" placeholder="Twitter" field="twitterNet"/>
          <InputComponent id="facebook" placeholder="Facebook" field="facebookNet"/>
          <InputComponent id="instagram" placeholder="Instagram" field="instagramNet"/>
        </div>
        <div className="d-flex" style={{justifyContent: 'space-between'}}>
          <InputComponent id="linkedin" placeholder="LinkedIn" field="linkedinNet"/>
          <InputComponent id="youtube" placeholder="Youtube" field="youtubeNet"/>
          <InputComponent id="pinterest" placeholder="Pinterest" field="pinterestNet"/>
        </div>

      </FormComponent>
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
