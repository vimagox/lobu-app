import React from 'react'
import {store} from '../../store'
import {withRouter} from 'react-router-dom'

class BusinessBanner extends React.Component {
  selectBusiness() {
    store.dispatch({type: 'SET_BUSINESS', business: this.props.business})
    this.props.history.push('/'+this.props.business.id)
  }
  render() {
    const biz = this.props.business
    return (
      <div onClick={this.selectBusiness.bind(this)}
           className="col-sm-6 col-md-4 col-lg-3"
           style={{userSelect: 'none', cursor: 'pointer', marginBottom: '2em'}}>
        <div className="entry-post">
          <div className="entry-thumbnail"
              style={{width: '100%', height: '13em',
              backgroundImage: `url(images/test/${biz.pic})`,
              backgroundSize: 'cover'}}>
            <div className="thumbnail-oberlay"></div>
            </div>
            <div className="post-content" style={{padding: '0 1em .5em 1em'}}>
              <div className="entry-title" style={{}}>
                <h2 style={{fontSize: '1.4em'}}>{biz.name}</h2>
                <h4 style={{fontSize: '1em', color: '#ddd'}}>{biz.title}</h4>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default withRouter(BusinessBanner)
