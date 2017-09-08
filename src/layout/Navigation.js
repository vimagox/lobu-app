import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {store} from '../store'
import Logo from '../components/Logo'

const empty = () => {
  return (
    <a><div style={{width: '2em'}}>&nbsp;</div></a>
  )
}

class Navigation extends React.Component {
  resetCountry(){ store.dispatch({type: 'RESET_COUNTRY'}) }
  resetRegion(){ store.dispatch({type: 'RESET_REGION'}) }
  resetCity(){ store.dispatch({type: 'RESET_CITY'}) }
  resetBiz(){ store.dispatch({type: 'RESET_BUSINESS'}) }

  render() {
    const region = this.props.region
    const city = this.props.city
    const biz = this.props.business
    return (
      <div className="container">
          <div id="navigation" className="menu-two"
              style={{position: 'fixed', top:0, width: '100%', zIndex: 2000}}>
              <div className="navbar">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                       <div className="navbar-brand logo">
                        <Link to="/"><Logo/></Link>
                      </div>
                  </div>
                  <div className="collapse navbar-collapse">
                      <nav id="mainmenu" >
                        <ul className="nav navbar-nav">
                          <li className="scroll">
                            <Link onClick={this.resetCountry.bind(this)} to="/">United States</Link>
                          </li>

                          { region &&
                            <li className={"scroll "+ (city ? '' : 'current')}>
                              <Link onClick={this.resetCity.bind(this)}
                                 to={"/"+region.uid}>
                                {region.name}
                              </Link>
                            </li>
                          }
                          { city &&
                            <li className={"scroll "+ (biz ? '' : 'current')}>
                              <Link onClick={this.resetBiz.bind(this)}
                                 to={"/"+region.uid}>
                                {city.name}
                              </Link>
                            </li>
                          }
                        </ul>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    region: store.region,
    city: store.city,
    business: store.business
  }
}

export default withRouter(connect(mapStateToProps)(Navigation))

// <li className="scroll current" style={{backgroundColor: colors[biz.color]}}>
//   <Link onClick={this.resetBiz.bind(this)}
//      to={"/"+biz.id}>
//     {biz.name}
//   </Link>
// </li>
