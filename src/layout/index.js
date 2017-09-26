import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import DesktopBanner from '../components/banner/Desktop'
import MobileBanner from '../components/banner/Mobile'
import Navigation from './Navigation'
import Footer from './Footer'
import {StyleSheet,css} from 'aphrodite'
import {upToSmall} from '../constants/Media'

const styles = StyleSheet.create({
  section: {
    display:'flex', flexFlow: 'column', justifyContent: 'stretch',
    minHeight: '100vh'
  },
  main: {
    flexGrow: 1,
    display: 'flex', flexFlow: 'column', justifyContent: 'stretch'
  },
  mobile: {
    display: 'none',
    [upToSmall]:{
      display: 'block',
    }
  },
  desktop: {
    display: 'block',
    flexGrow: 1,
    [upToSmall]: {
      display: 'none'
    }
  },
  footer: {
    flexGrow: 0,
    [upToSmall]: {
      display: 'none'
    }
  }
})

const re = /(\/business|\/customer|\/faq)/

class Layout extends React.Component {
  render() {
    const path = this.props.location.pathname
    const showBanner = path === '/' && this.props.banner
    return (
      <div className="main-wrapper home-two">
        <div className={css(styles.section)}>
          {showBanner && <div className={css(styles.mobile)}><MobileBanner/></div>}
          {showBanner && <div className={css(styles.desktop)}><DesktopBanner/></div>}

          {!showBanner && <div style={{flexGrow: 1}}>
            <Navigation/>
            <div style={{height: '5em'}}/>
            <div id="main-content" className={css(styles.main)}>
              {this.props.children}
            </div>
            </div>}
          {path !== '/account' && <div className={css(styles.footer)}>
            <Footer/>
          </div> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    banner: store.banner
  }
}

export default withRouter(connect(mapStateToProps)(Layout))
