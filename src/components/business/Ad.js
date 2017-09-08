import React from 'react'
import {withRouter} from 'react-router-dom'
import {colors} from '../../constants/Colors'
import {StyleSheet,css} from 'aphrodite'
import Template from './Template'
import {atLeastSmall, atLeastMediumBig, atLeastBig, atLeastHuge} from '../../constants/Media'

const styles = StyleSheet.create({
  box: {
    width: '100%',
    cursor: 'pointer',
    height: '364px',
    paddingTop: '3em',
    margin: '0 1em',
    marginBottom: '30px',
    // border: '3px solid blue',
    [atLeastSmall]: {
      // border: '3px solid cyan',
      height: '324px',
    },
    [atLeastMediumBig]: {
      // border: '3px solid magenta',
      height: '324px',
    },
    [atLeastHuge]: {
      display: 'flex',
      flexGrow: 1,
      width: '320px',
      height: '340px',
      margin: '0 1em',
      overflow: 'hidden',
      // border: '3px solid red',
    }
  },
  title1: {
    paddingTop: '.5em',
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
    paddingBottom: '.5em'
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
    this.props.history.push('/signup')
  }
  render() {
    const color = colors[Math.floor((Math.random() * 10) + 1)]
    return (
      <div className={css(styles.box)}
          style={{backgroundColor: color}}
          onClick={this.signup.bind(this)}>

        <div className={css(styles.content)}>
          <div className="entry-title">
            <h2 className={css(styles.title1)}>Sign up</h2>
            <h2 className={css(styles.title2)}>your Business</h2>
            <div className={css(styles.subtitle)}>FREE TRIAL</div>
            <div className={css(styles.footer)} style={{color: colors[this.props.time]}}>No credit card needed</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Ad)
