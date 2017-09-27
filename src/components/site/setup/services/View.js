import React from 'react'
import {connect} from 'react-redux'
import SortableComponent from '../SortableComponent'


class ServicesView extends React.Component {
  render() {
    const title = this.props.title
    const subtitle = this.props.subtitle
    const description = this.props.description
    return (
      <div className="g-mt-10">
        <div className="text-info">
          <h4>{this.props.servicesTitle || 'Services Title'}</h4>
          <p>{this.props.servicesSubtitle || 'Services Subtitle'}</p>
        </div>
        <hr/>
        {[1].map((m,i) => (
          <div key={"blo"+i} className="g-pt-30 g-cursor-pointer">
            <div className="exprience">
              <div className="exprience-image">
                <img className="img-responsive" src="/images/blog/1.jpg" alt="Image"/>
              </div>
              <div className="exprience-info">
                <h3>{title || 'Service Title'}</h3>
                <h5>{subtitle || 'Service Subtitle'}</h5>
                <p>{description || 'Service Description.'}</p>
              </div>
            </div>
            <hr/>
          </div>
        ))}

        <SortableComponent/>
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
