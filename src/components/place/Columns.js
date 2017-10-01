import React from 'react'
import {StyleSheet,css} from 'aphrodite'
import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'


const styles = StyleSheet.create({
  columns: {
    columnCount: 6,
    // border: '1px solid black',
    [upToXL]: {
      // border: '1px solid yellow',
      columnCount: 5
    },
    [upToLG]: {
      // border: '1px solid cyan',
      columnCount: 4
    },
    [upToMD]: {
      marginTop: '1em',
      // border: '1px solid magenta',
      columnCount: 4
    },
    [upToSM]: {
      // border: '1px solid red',
    },
    [upToXS]: {
      // border: '1px solid blue',
    },
  }
})

export default class Columns extends React.Component {
  render() {
    const items = this.props.totalItems
    return (
      <div>
        {items < 10 && <div style={{columnCount: 1}}>
          {this.props.children}
        </div>}
        {items >= 10 && items < 21 && <div style={{columnCount: 2}}>
          {this.props.children}
        </div>}
        {items >= 22 && <div className={css(styles.columns)}>
          {this.props.children}
        </div>}
      </div>
    )
  }
}
