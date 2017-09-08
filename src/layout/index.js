import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Banner from './Banner'
import Navigation from './Navigation'
import Footer from './Footer'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  main: {
    marginBottom: '5em'
  }
})

class Layout extends React.Component {
  render() {
    const banner = this.props.banner
    return (
      <div className="main-wrapper home-two">
        {banner && <Banner/>}
        {!banner && <div>
          <Navigation/>
          <div style={{height: '5em'}}/>
          <div id="main-content" className={css(styles.main)}>
            {this.props.children}
          </div>
        </div>}
        <Footer/>
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
