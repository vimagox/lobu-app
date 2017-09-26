import React from 'react'
import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'
import {StyleSheet,css} from 'aphrodite'


const styles = StyleSheet.create({
  spacer: {
    // border: '1px solid #ddd',
    minWidth: '220px',
    maxWidth: '220px',
    height: '1em',
    // margin: '0 1em',
    // [upToXL]: {
    //   minWidth: '300px',
    // },
    // [upToLG]: {
    //   minWidth: '220px',
    // },
  }
})

export default class ItemSpacer extends React.Component {
  render() {
    return (
      <div className={css(styles.spacer)}>

      </div>
    )
  }
}
