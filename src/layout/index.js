import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Banner from './banner'
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
  footer: {
    flexGrow: 0,
    [upToSmall]: {
      display: 'none'
    }
  }
})

class Layout extends React.Component {
  render() {
    const path = this.props.location.pathname
    const showBanner = path === '/' && this.props.banner
    return (
      <div className="main-wrapper home-two">
        <div className={css(styles.section)}>
          {showBanner && <div style={{flexGrow: 1}}><Banner/></div>}

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
    banner: store.app.banner
  }
}

export default withRouter(connect(mapStateToProps)(Layout))
