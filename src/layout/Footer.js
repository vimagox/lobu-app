import React from 'react'
import {StyleSheet, css} from 'aphrodite'
// import {colors} from '../constants/Colors'

const styles = StyleSheet.create({
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
  }
})

export default class Footer extends React.Component {
  render() {
    return (
      <div className={css(styles.footer)}>
        <div id="footer">
          <div className="container text-left">
              <div className="footer">
                  <p> &copy; <a href="http://1910.io" target="_blank" rel="noopener noreferrer">
                    1910 Inc.</a><br/>All Rights Reserved</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
