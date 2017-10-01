import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import CardSettings from './card'
import SiteSettings from './SiteSettings'
import SitePreview from './SitePreview'
import {upToSM} from '../../constants/Media'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  menu: {
    display: 'flex', flexFlow: 'row',
    margin: '-2em 0 2em 0'
  },
  item: {
    userSelect: 'none',
    cursor: 'pointer',
    fontSize: '1.2em',
    padding: '1.4em 1.8em 0 0',
  },
  header: {
    [upToSM]: {
      zIndex: 999,
      width: '100%',
      position: 'fixed'
    }
  },
  spacer: {
    [upToSM]: {
      height: '4.5em'
    }
  }
})

class Home extends React.Component {
  render() {
    const stage = this.props.stage
    return (
      <div className="exprience-section g-mt-0">
        <div className={css(styles.header)}>
          <Header/>
        </div>
        <div className={css(styles.spacer)}/>
        <div>
          <div className="row g-mt-60">
            <div className="col-xs-12">
              {stage === 0 && <CardSettings/>}
              {stage === 1 && <SiteSettings/>}
              {stage === 2 && <SitePreview/>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    stage: store.account.stage
  }
}

export default connect(mapStateToProps)(Home)
