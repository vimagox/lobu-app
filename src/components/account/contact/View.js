import React from 'react'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'

class ContactView extends React.Component {
  render(){
    const name = this.props.name
    const email = this.props.email
    const phone = this.props.phone
    return (
      <div className="g-mt-0" style={{maxWidth: '30em'}}>

        <div className="widget widget_categories" style={{marginTop: '1em'}}>
          <h3 className="widget_title">Contact</h3>
          <div>
            <div>{name || 'Name'}</div>
            <div>
              <div>{email || 'Email'}</div>
              <div><a href={`tel:${phone}`}>{phone || 'Phone'}</a></div>
            </div>
          </div>
        </div>
        <div className="g-mt-30 widget widget_categories" style={{marginTop: '-1em'}}>
          <h3 className="widget_title">Social Networks</h3>
          <div>
            {this.props.twitter && <li className="list-inline-item g-mr-20"><FontAwesome name="twitter" size="2x"/></li>}
            {this.props.facebook && <li className="list-inline-item g-mr-20"><FontAwesome name="facebook" size="2x"/></li>}
            {this.props.instagram && <li className="list-inline-item g-mr-20"><FontAwesome name="instagram" size="2x"/></li>}
            {this.props.linkedin && <li className="list-inline-item g-mr-20"><FontAwesome name="linkedin" size="2x"/></li>}
            {this.props.youtube && <li className="list-inline-item g-mr-20"><FontAwesome name="youtube" size="2x"/></li>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    name: store.contact.name,
    email: store.contact.email,
    phone: store.contact.phone,
    twitter: store.contact.twitterNet,
    facebook: store.contact.facebookNet,
    instagram: store.contact.instagramNet,
    youtube: store.contact.youtubeNet,
    linkedin: store.contact.linkedinNet
  }
}

export default connect(mapStateToProps)(ContactView)
