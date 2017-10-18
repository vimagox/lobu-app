import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import Logo from '../components/Logo'
import {StyleSheet,css} from 'aphrodite'
import {upToSmall} from '../constants/Media'
import {place} from '../actions'

const styles = StyleSheet.create({
  section: {
    paddingLeft: 0,
    margin: '0 auto',
    [upToSmall]: {
      paddingLeft: '1em'
    }
  }
})

const re = /^(\/account|\/login|\/signup|\/forgot)$/

class Navigation extends React.Component {

  render() {
    const region = this.props.region
    const city = this.props.city
    const biz = this.props.business
    const account = this.props.location.pathname === '/account'
    const loginPath = re.test(this.props.location.pathname)
    const loggedIn = false
    return (
    <div className="container">
      <div className={css(styles.section)}>

        {loggedIn && <div style={{float:'right', color: '#fff', margin: '1.25em 0'}}>
          <div style={{position: 'fixed', zIndex:9999}}><FontAwesome name="user" size="2x"/></div>
        </div>}
        {!loggedIn && !loginPath && <div style={{float:'right', color: '#fff', margin: '1.5em 3em'}}>
          <Link to="/login" style={{color: '#fff', zIndex:9999, position: 'fixed', cursor: 'pointer'}}>
            Login
          </Link>
        </div>}

        <div id="navigation"
              className="menu-two g-pos-fix g-width-100vw"
              style={{zIndex: 1}}>


              <div className="navbar">
                <div className="navbar-header">
                  <button style={{display: 'none'}} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <div className="navbar-brand logo" style={{paddingLeft:0, marginLeft:0}}>
                    <Link to="/"><Logo/></Link>
                  </div>
                </div>
                {!account && <div className="collapse navbar-collapse">
                  <nav id="mainmenu" >
                    <ul className="nav navbar-nav">
                      <li className="scroll">
                        <Link onClick={place.resetRegion} to="/">United States</Link>
                      </li>
                      { region &&
                      <li className={"scroll "+ (city ? '' : 'current')}>
                        <Link onClick={place.resetCity}
                              to={"/"+region.uid}>
                              {region.name}
                        </Link>
                      </li>}
                      { city &&
                      <li className={"scroll "+ (biz ? '' : 'current')}>
                        <Link onClick={place.resetBusiness}
                              to={"/"+region.uid}>
                          {city.name}
                        </Link>
                      </li>}
                    </ul>
                  </nav>
                </div>}
              </div>











        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    region: store.place.region,
    city: store.place.city,
    business: store.app.business
  }
}

export default withRouter(connect(mapStateToProps)(Navigation))

// <li className="scroll current" style={{backgroundColor: colors[biz.color]}}>
//   <Link onClick={this.resetBiz.bind(this)}
//      to={"/"+biz.id}>
//     {biz.name}
//   </Link>
// </li>
