import React from 'react'
import {StyleSheet,css} from 'aphrodite'
import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'


const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexGrow: 1,
    // width: '200px',
    margin: '0 1em 2em 1em',
    // border: '1px solid red',
    overflow: 'hidden',
    [upToXL]: {
      width: '230px',
    },
    [upToLG]: {
      width: '180px',
    },
    [upToMD]: {
      // border: '1px solid red',
      // width: '100%',
    },
    [upToSM]: {
      // border: '1px solid blue',
      width: '100%',
    }
  }
})

export default class Template extends React.Component {
  render() {
    return (
      <div className={css(styles.box)}>
        {this.props.children}
      </div>
    )
  }
}
