import React from 'react'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexGrow: 1,
    width: '320px',
    margin: '0 1em',
    overflow: 'hidden'
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
