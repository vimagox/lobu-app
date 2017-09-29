import React from 'react'
import {StyleSheet,css} from 'aphrodite'
import MobileBanner from './Mobile'
import DesktopBanner from './Desktop'
import {upToSmall} from '../../constants/Media'

const styles = StyleSheet.create({
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
})

export default class Banner extends React.Component {
  render() {
    return (
      <div>
         <div className={css(styles.mobile)}>
            <MobileBanner/>
          </div>
         <div className={css(styles.desktop)}>
            <DesktopBanner/>
          </div>
      </div>
    )
  }
}
