import React from 'react'
import {withRouter} from 'react-router-dom'
import {colors} from '../../constants/Colors'
import {StyleSheet,css} from 'aphrodite'
import Template from './Template'

const styles = StyleSheet.create({
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
        <div onClick={this.selectBusiness.bind(this)}
              className="entry-post"
              style={{cursor: 'pointer', border: '1px solid #ddd'}}>
          <div className="entry-thumbnail"
              style={{backgroundColor: 'red',
                  backgroundImage: bgImg,
                  backgroundSize: 'cover',
                  overflow: 'hidden',
                  minWidth: '390px', height:'161px'}}>
            <div className="thumbnail-oberlay"></div>
          </div>
          <div className="post-content">
            <div className={"time time"+this.props.time}>
              <a href="#" style={{backgroundColor: colors[b.color]}}>B <span>TX</span></a>
            </div>

            <div className="entry-title">
              <h2 className={css(styles.title)}>{b.name}</h2>
              <div className={css(styles.subtitle)}>{b.title}</div>
              <div className={css(styles.uri)} style={{color: colors[this.props.time]}}>/{b.uid}</div>
              <div className={css(styles.footer)}>El Paso, TX</div>
            </div>
          </div>
        </div>
      </Template>
    )
  }
}

export default withRouter(Item)
