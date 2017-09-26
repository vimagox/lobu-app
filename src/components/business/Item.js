import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {colors} from '../../constants/Colors'
import Template from './Template'
import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'
import {StyleSheet,css} from 'aphrodite'


const styles = StyleSheet.create({
  box: {
    cursor: 'pointer',
    border: '1px solid #ddd',
    maxWidth: '220px',
    marginBottom: '.5em',
    [upToSM]: {
      minWidth: '100%',
      marginBottom: '1em',
    }
  },
  image: {
    position: 'relative',
    zIndex: -1,
    overflow: 'hidden',
    backgroundSize: 'cover',
    overflow: 'hidden',
    minWidth: '390px',
    height:'170px',
    [upToMD]: {
      width: '100%',
    }
  },
  content: {
    padding: '1em',
  },
  title: {
    fontSize: '1.4em',
    lineHeight: '.5em'
  },
  subtitle: {
    color: '#888'
  },
  footer: {
    paddingTop: 0,
    textAlign: 'right',
  }
})

class Item extends React.Component {
  selectBusiness() {
    this.props.history.push(this.props.b.uid)
  }

  render() {
    const b = this.props.b
    const bgImg = 'url(/images/test/'+b.pic+')'
    const region = this.props.region
    return (
      <div className={css(styles.box)}
           style={{height: region ? '22.5em' : '24.5em'}}>
        <div onClick={this.selectBusiness.bind(this)}
            className="entry-post">
          <div className={css(styles.image)}
              style={{backgroundImage: bgImg}}>
            <div className="thumbnail-oberlay"></div>
          </div>
          <div className={css(styles.content)}>
            {!region && <div className={"time time"+this.props.time}>
              <a style={{backgroundColor: colors[b.color]}}>B <span>TX</span></a>
            </div> }

            <div className="entry-title">
              <h2 className={css(styles.title)}>{b.name}</h2>
              <div className={css(styles.subtitle)}>{b.title}</div>
              <div className={css(styles.uri)} style={{color: colors[this.props.time]}}>/{b.uid}</div>
              <div className={css(styles.footer)}>El Paso, TX</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    region: store.region
  }
}

export default withRouter(connect(mapStateToProps)(Item))
