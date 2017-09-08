import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  section: {
    marginTop: '-1em',
    paddingTop: 0, paddingBottom: '2em',
    height: '5em',
    // border: '1px solid red'
  }
})

export default class Container extends React.Component {
  render() {
    return (
      <div className={css(styles.section)}>
        <div className="section-content" style={{padding: '1.5em 0 0 1em'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
