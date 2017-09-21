import React from 'react'
import {withRouter} from 'react-router-dom'
import {colors} from '../../constants/Colors'
import Template from './Template'
import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'
import {StyleSheet,css} from 'aphrodite'


const styles = StyleSheet.create({
  box: {
    cursor: 'pointer',
    height: '25em',
    border: '1px solid #ddd',
    maxWidth: '360px',
    [upToXL]: {
      height: '23em',
    },
    [upToLG]: {
      maxWidth: '220px',
      // border: '1px solid blue',
    },
    [upToMD]: {
      // border: '1px solid red',
      // maxWidth: '204px',
      maxWidth: '220px',
    },
    [upToSM]: {
      // border: '1px solid magenta',
      minWidth: '100%'
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
    [upToXL]: {
      minWidth: '290px',
      maxWidth: '100%', height:'140px',
    },
    [upToLG]: {
      minWidth: '220px', height: '140px'
    },
    [upToSM]: {
      width: '100%',
      height: '150px'
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
    paddingTop: '.5em',
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
    return (
      <Template>
      <div className={css(styles.box)}>
        <div onClick={this.selectBusiness.bind(this)}
            className="entry-post">
          <div className={css(styles.image)}
              style={{backgroundImage: bgImg}}>
            <div className="thumbnail-oberlay"></div>
          </div>
          <div className={css(styles.content)}>
            <div className={"time time"+this.props.time}>
              <a style={{backgroundColor: colors[b.color]}}>B <span>TX</span></a>
            </div>

            <div className="entry-title">
              <h2 className={css(styles.title)}>{b.name}</h2>
              <div className={css(styles.subtitle)}>{b.title}</div>
              <div className={css(styles.uri)} style={{color: colors[this.props.time]}}>/{b.uid}</div>
              <div className={css(styles.footer)}>El Paso, TX</div>
            </div>
          </div>
        </div>
      </div>
      </Template>
    )
  }
}

export default withRouter(Item)
