import React from 'react'
import {StyleSheet,css} from 'aphrodite'
import {colors} from '../../constants/Colors'
import {hideBanner} from '../../actions'

const styles = StyleSheet.create({
  sphere: {
    backgroundColor: colors[8],
    width: '15em',
    height: '15em',
    borderRadius: '7.5em',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    margin: '4em auto',
    ':hover': {
      backgroundColor: colors[2]
    }
  },
  text: {
    color: '#fff',
    position: 'absolute',
    top: '.37em', left: '.28em',
    fontSize: '10em',
    fontWeight: 'bold',
    lineHeight: '.78em',
    letterSpacing: '-24px',
  },
  b: {
    marginTop: '-4px',
    paddingLeft: '.12em'
  },
})

export default class Mobile extends React.Component {

  removeBanner() {
    hideBanner()
  }

  render() {
    return (
    <div id="home-banner-wrapper" className="main-wrapper home-two g-pt-40">
      <div className="container">
        <div className="row">
          <div className="col-sm-12"
            style={{textAlign: 'center'}}>
            <div onClick={this.removeBanner.bind(this)}
                  className={css(styles.sphere)}>
              <div className={css(styles.text)}>
                <div className={css(styles.b)}>B</div>
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div style={{margin: '0 auto'}}>
              <div className="banner-info" style={{xborder: '1px solid red', textAlign: 'center', xwidth: '20.5em', margin: '4em 0 0 0'}}>
                <h2>Lo<span style={{color: colors[8]}}>B</span>u.<span style={{color:colors[2]}}>us</span></h2>
                <h3 style={{margin:'2.25em 0 0 -.25em', padding: 0}}>LOCAL BUSINESSES</h3>

                <button
                  onClick={this.removeBanner.bind(this)}
                  className="btn btn-primary"
                  style={{letterSpacing: '2px',
                      padding: '1em 2em',
                      width: '20em',
                      margin: '2em 0 0 -1em'}}>United States</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
