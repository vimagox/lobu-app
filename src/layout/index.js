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

class Layout extends React.Component {
  render() {
    const banner = this.props.banner
    const root = this.props.location.pathname === '/'
    return (
      <div className="main-wrapper home-two">
        {root && banner && <div className={css(styles.mobile)}><MobileBanner/></div>}
        {root && banner && <div className={css(styles.desktop)}><DesktopBanner/></div>}
        {!(root && banner) && <div>
          <Navigation/>
          <div style={{height: '5em'}}/>
          <div id="main-content" className={css(styles.main)}>
            {this.props.children}
          </div>
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
