import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {store} from '../store'
import {StyleSheet,css} from 'aphrodite'
import {upToSmall, upToMedium, upToMediumBig} from '../constants/Media'

const styles = StyleSheet.create({
  section: {
    display: 'flex', flexFlow: 'row', justifyContent: 'flex-start', alignItems: 'center',
    padding: '.65em 2em 1em 0',
    backgroundColor: 'transparent',
    // border: '1px solid red',
    [upToSmall]:{
      // border: '1px solid blue',
      padding: '.12em 0 0 0',
      marginLeft: '-1em'
    },
    [upToMedium]: {
      // border: '1px solid green',
      padding: '0'
    },
    [upToMediumBig]: {
      // border: '1px solid cyan',
      padding: '.1em 0 0 0'
    }
  },
  logo: {
    color: '#fff',
    fontFamily: "Sacramento",
    fontSize: '1.75em',
    fontWeight: '600',
    paddingLeft: '.35em',
    minWidth: '7em',
    [upToSmall]: {
      paddingTop: '.17em'
    }
  },
  lobu: {
    marginTop: '-5px',
    backgroundColor: '#fff',
    width: '2.6em',
    height: '2.6em',
    borderRadius: '1.3em'
  }
})

class Logo extends React.Component {
  resetCountry() {
    store.dispatch({type: 'RESET_COUNTRY'})
    this.props.history.push('/')
  }

  render() {
    return (
      <div className={css(styles.section)}>
        <div onClick={this.resetCountry.bind(this)}
            className={css(styles.lobu)}>
          <div style={{fontWeight: '800', fontSize: '1.8em',
              color: '#3c70b4',
              padding: '.41em .38em'}}>B</div>
        </div>
        <div className={css(styles.logo)}>
          <div onClick={this.resetCountry.bind(this)}
              style={{color: '#fff'}}>
            Local Businesses
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Logo)
