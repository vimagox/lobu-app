import React from 'react'
import {withRouter} from 'react-router-dom'
import {colors} from '../../constants/Colors'
import {StyleSheet,css} from 'aphrodite'

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

class Single extends React.Component {
  selectBusiness() {
    this.props.history.push(this.props.b.uid)
  }

  render() {
    return (
      <div className="col-sm-4">
          <div onClick={this.selectBusiness.bind(this)}
              className="entry-post" style={{cursor: 'pointer'}}>
              <div className="entry-thumbnail">
                  <div className="thumbnail-oberlay"></div>
                  <img className="img-responsive" src="images/test/1.jpg" alt="Image"/>
              </div>
              <div className="post-content"
                  style={{maxWidth: '360px', padding: '0 1em 1em 1em',
                  }}>
                  <div className={"time time"+this.props.time}>
                    <a href="#" style={{backgroundColor: colors[this.props.time]}}>B <span>TX</span></a>
                  </div>

                  <div className="entry-title">
                     <h2 className={css(styles.title)}>Online Bedroom Sets</h2>
                     <div className={css(styles.subtitle)}>Home Furniture</div>
                     <div className={css(styles.uri)} style={{color: colors[this.props.time]}}>/bedroomsets</div>
                     <div className={css(styles.footer)}>El Paso, TX</div>
                 </div>
              </div>
          </div>
      </div>
    )
  }
}

export default withRouter(Single)
