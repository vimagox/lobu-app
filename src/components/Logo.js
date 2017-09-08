import React from 'react'
import {Link} from 'react-router-dom'
import {store} from '../store'
import {StyleSheet,css} from 'aphrodite'
import {upToSmall, upToMedium, upToMediumBig} from '../constants/Media'

// Damion|Homemade+Apple|Lobster|Lobster+Two|Pacifico|Playball|Sacramento

const styles = StyleSheet.create({
  section: {
    display: 'flex', flexFlow: 'row', justifyContent: 'flex-start', alignItems: 'center',
    padding: '.65em 2em 1em 0',
    backgroundColor: 'transparent',
    // border: '1px solid red',
    [upToSmall]:{
      // border: '1px solid blue',
      padding: '.12em 0 0 0'
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
  },
  lobu: {
    marginTop: '-5px',
    backgroundColor: '#fff',
    width: '2.6em',
    height: '2.6em',
    borderRadius: '1.3em'
  }
})

export default class Logo extends React.Component {
  resetCountry() {
    store.dispatch({type: 'RESET_COUNTRY'})
  }

  render() {
    return (
      <div className={css(styles.section)}>
        <div className={css(styles.lobu)}>
          <div style={{fontWeight: '800', fontSize: '1.8em',
              padding: '.41em .38em'}}>B</div>
        </div>
        <div className={css(styles.logo)}>
          <Link onClick={this.resetCountry.bind(this)}
                to="/" style={{color: '#fff'}}>
            Local Businesses
          </Link>
        </div>
      </div>
    )
  }
}
