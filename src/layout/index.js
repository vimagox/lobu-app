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
  main: {
    marginBottom: '5em'
  },
  mobile: {
    display: 'none',
    [upToSmall]:{
      display: 'block'
    }
  },
  desktop: {
    display: 'block',
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
        {showBanner && <div className={css(styles.mobile)}><MobileBanner/></div>}
        {showBanner && <div className={css(styles.desktop)}><DesktopBanner/></div>}
        {!showBanner && <div>
          <Navigation/>
          <div style={{height: '5em'}}/>
          <div id="main-content" className={css(styles.main)}>
            {this.props.children}
          </div>
        </div>}
        {!re.test(path) && <div className={(showBanner)? 'g-pos-fix g-bottom-0' : ''}>
          <Footer/>
        </div>}
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
