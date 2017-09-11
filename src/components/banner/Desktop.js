import React from 'react'
import {StyleSheet,css} from 'aphrodite'
import {colors} from '../../constants/Colors'
import {hideBanner} from '../../actions'

const styles = StyleSheet.create({
  sphere: {
    backgroundColor: colors[8],
    width: '30em',
    height: '29.4em',
    borderRadius: '15em',
    marginTop: '25%',
    marginLeft: '15%',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: colors[2]
    }
  },
  text: {
    color: '#fff',
    position: 'absolute',
    top: '.37em', left: '.28em',
    fontSize: '20em',
    fontWeight: 'bold',
    lineHeight: '.78em',
    letterSpacing: '-24px',
  },
  b: {
    marginTop: '-4px',
    paddingLeft: '.12em'
  },
})

export default class Desktop extends React.Component {

  removeBanner() {
    hideBanner()
  }

  render() {
    return (
      <div id="home-banner-wrapper" className="main-wrapper g-bg-white home-two g-z-index-1"
            style={{overflow: 'hidden', marginBottom:0,paddingBottom:0}}>
        <div id="home-banner">
          <div className="container" style={{height: '100%'}}>
            <div className="row" style={{height: '100%'}}>
              <div className="col-sm-12 col-md-6">
                <div className="banner-content">
                  <div className="banner-info">
                    <h1>Welcome to</h1>
                    <h2>Lo<span style={{color: colors[8]}}>B</span>u.<span style={{color:colors[2]}}>us</span></h2>
                    <button
                      onClick={this.removeBanner.bind(this)}
                      className="btn btn-primary"
                      style={{letterSpacing: '9px',
                          padding: '1em 2em',
                          marginTop: '.75em'}}>SUPPORT LOCAL BUSINESSES</button>
                  </div>
                </div>
              </div>
              <div className="hidden-xs hidden-sm col-md-6 "
              style={{height: '100%'}}>
                <div onClick={this.removeBanner.bind(this)}
                    className={css(styles.sphere)}>
                  <div className={css(styles.text)}>
                    <div className={css(styles.b)}>B</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
