import React from 'react'
import {withRouter} from 'react-router-dom'
import {colors} from '../../constants/Colors'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
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
  }
})

class Ad extends React.Component {
  signup() {
    this.props.history.push('/signup')
  }
  render() {
    const  color = colors[Math.floor((Math.random() * 10) + 1)]
    return (
      <div className="col-sm-4">
          <div onClick={this.signup.bind(this)}
              className="entry-post" style={{cursor: 'pointer',
                backgroundColor: color}}>
              <div className="post-content"
                  style={{maxWidth: '360px', height: '301px', padding: '0 1em 1em 1em',
                  }}>
                  <div className="entry-title">
                     <h2 className={css(styles.title1)}>Sign up</h2>
                     <h2 className={css(styles.title2)}>your Business</h2>
                     <div className={css(styles.subtitle)}>FREE TRIAL</div>
                     <div className={css(styles.footer)} style={{color: colors[this.props.time]}}>No credit card neeeded</div>
                 </div>
              </div>
          </div>
      </div>
    )
  }
}

export default withRouter(Ad)
