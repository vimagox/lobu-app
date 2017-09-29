import React from 'react'
import {StyleSheet,css} from 'aphrodite'
import {upToSmall} from '../../constants/Media'
import DesktopPlace from './Desktop'
import MobilePlace from './mobile'

const styles = StyleSheet.create({
  desktop: {
    display: 'block', minHeight: '100vh',
    [upToSmall]: { display: 'none' }
  },
  mobile: {
    display: 'none',
    [upToSmall]: { display: 'block', width: '100vw', overflowX: 'hidden' }
  }
})

export default class Place extends React.Component {
  render() {
    const regions = this.props.regions
    return (
      <div>
        <div className={css(styles.desktop)}>
          <DesktopPlace regions={regions} />
        </div>
        <div className={css(styles.mobile)}>
          <MobilePlace regions={regions}/>
        </div>
      </div>
    )
  }
}
