import React from 'react'
import BusinessSignup from '../components/signup/Business'
import {StyleSheet,css} from 'aphrodite'
import {upToSmall} from '../constants/Media'

const styles = StyleSheet.create({
  section: {
    height: '720px',
    overflow: 'hidden'
  }
})

export default class Signup extends React.Component {
  render() {
    return (
    <div className={css(styles.section)}>
      <div className="container g-py-100--md g-py-0">
        <div className="container-fluid text-center g-color-white-opacity-0_8 px-0">
          <BusinessSignup/>
        </div>
      </div>
    </div>
    )
  }
}
