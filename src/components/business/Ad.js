import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {colors} from '../../constants/Colors'
import {upToMD} from '../../constants/Media'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  box: {
    cursor: 'pointer',
    overflow: 'hidden',
    padding: '1em',
    opacity: .85,
    display: 'flex',
    flexGrow: 1,
    margin: '0',
    maxWidth: '220px',
    [upToMD]: {
      width: '100%',
      minWidth: '100%',
      marginBottom: '1em'
    },
    ':hover': {
      opacity: 1
    }
  },
  content: {
    width: '100%'
  },
  title1: {
    paddingTop: '.25em',
    fontSize: '1.5em',
    textTransform: 'uppercase',
    lineHeight: '1em',
    textAlign: 'center',
    color: '#fff',
    [upToMD]: {
      fontSize: '2em'
    }
  },
  title2: {
    fontSize: '2em',
    textTransform: 'uppercase',
    lineHeight: '1em',
    textAlign: 'center',
    color: '#fff',
    paddingBottom: '.5em',
    // [upToLG]: {
    //   fontSize: '2.5em'
    // },
    [upToMD]: {
      fontSize: '3em'
    },
    // [upToSM]: {
    //   fontSize: '3em'
    // }
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
    const region = this.props.region
    return (
      <div className={css(styles.box)}
          style={{backgroundColor: color, height: region ? '22.5em' : '24.5em'}}
          onClick={this.signup.bind(this)}>

        <div className={css(styles.content)}>
          <div className="entry-title g-mt-50">
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

const mapStateToProps = (store) => {
  return {
    region: store.place.region
  }
}

export default withRouter(connect(mapStateToProps)(Ad))
