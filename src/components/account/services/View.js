import React from 'react'
import {connect} from 'react-redux'
import {default as UI} from '../../ui'


class ServicesView extends React.Component {
  render() {
    const title = this.props.title
    const subtitle = this.props.subtitle
    const description = this.props.description
    return (
      <div className="g-pt-10">
        <div className="exprience" style={{margin: 0, padding: 0}}>
          <div className="exprience-image">
            <img className="img-responsive" src="/images/blog/1.jpg" alt="service"/>
          </div>
          <div className="exprience-info">
            <h3>{title || 'Service Title'}</h3>
            <h5>{subtitle || 'Service Subtitle'}</h5>
            <p>{description || 'Service Description.'}</p>
          </div>
        </div>
        <hr style={{marginTop: 0}}/>
        <h4>Services</h4>
        <UI.Sortable/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    servicesTitle: store.service.sectionTitle,
    servicesSubtitle: store.service.sectionSubtitle,
    title: store.service.title,
    subtitle: store.service.subtitle,
    description: store.service.description
  }
}

export default connect(mapStateToProps)(ServicesView)

// <div className="text-info">
//   <h4>{this.props.servicesTitle || 'Services Title'}</h4>
//   <p>{this.props.servicesSubtitle || 'Services Subtitle'}</p>
// </div>
