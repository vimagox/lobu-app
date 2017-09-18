import React from 'react'
import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'
import {StyleSheet,css} from 'aphrodite'


const styles = StyleSheet.create({
  spacer: {
    border: '1px solid #ddd',
    minWidth: '361px',
    height: '26em',
    margin: '0 1em',
    [upToXL]: {
      marginRight: '5.5em',
      minWidth: '394px',
      border: '1px solid red'
    },
    [upToLG]: {
      border: '1px solid cyan'
    },
    [upToMD]: {
      border: '1px solid magenta'
    },
    [upToSM]: {
      border: '1px solid blue'
    },
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
