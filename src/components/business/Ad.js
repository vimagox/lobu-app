import React from 'react'
import {withRouter} from 'react-router-dom'
import {colors} from '../../constants/Colors'
import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  box: {
    cursor: 'pointer',
    overflow: 'hidden',
    padding: '2em 1em',
    opacity: .85,
    display: 'flex',
    flexGrow: 1,
    margin: '0 1em',
    maxWidth: '360px',
    height: '25em',
    [upToXL]: {
      maxWidth: '294px',
      height: '23em',
    },
    [upToLG]: {
      maxWidth: '220px',
    },
    [upToMD]: {
      maxWidth: '220px',
    },
    [upToSM]: {
      maxWidth: '100%',
      marginBottom: '2em'
    },
    ':hover': {
      opacity: 1
    }
  },
  title1: {
    paddingTop: '.25em',
    fontSize: '2em',
    textTransform: 'uppercase',
    lineHeight: '1em',
    textAlign: 'center',
    color: '#fff'
  },
  title2: {
    fontSize: '3em',
    textTransform: 'uppercase',
    lineHeight: '1em',
    textAlign: 'center',
    color: '#fff',
    paddingBottom: '.5em',
    [upToLG]: {
      fontSize: '2.5em'
    },
    [upToMD]: {
      fontSize: '2em'
    },
    [upToSM]: {
      fontSize: '3em'
    }
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1.4em',
    fontWeight: 'bold',
    color: '#000'
  },
  footer: {
    color: '#ddd',
    textAlign: 'center',
    paddingTop: '.5em',
  },
})

class Ad extends React.Component {
  signup() {
    this.props.history.push('/business')
  }
  render() {
    const color = colors[Math.floor((Math.random() * 10) + 1)]
    return (
      <div className={css(styles.box)}
          style={{backgroundColor: color}}
          onClick={this.signup.bind(this)}>

        <div className={css(styles.content)}>
          <div className="entry-title">
            <h2 className={css(styles.title1)}>Sign up your</h2>
            <h2 className={css(styles.title2)}>Local Business</h2>
            <div className={css(styles.subtitle)}>FREE TRIAL</div>
            <div className={css(styles.footer)} style={{color: colors[this.props.time]}}>No credit card needed</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Ad)
