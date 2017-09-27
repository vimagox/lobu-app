import React from 'react'
import {connect} from 'react-redux'
import {colors} from '../../constants/Colors'
import {upToSM} from '../../constants/Media'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  section: {
    marginRight: '3em',
    marginTop: '-1.5em',
    [upToSM]: {
      // border: '1px solid red',
      // marginTop: '-2em',
    }
  },
  subtitle: {
    [upToSM]:{
      display: 'none'
    }
  }
})

class HeaderSection extends React.Component {
  render() {
    const active = this.props.stage === this.props.idx
    const style = {color: active ? '#fff' : '#666'}
    return (
    <div className={css(styles.section)}>
      <div className="u-heading-v2-1--bottom g-mb-0">
        <h2 style={style}
           className="u-heading-v2__title">
            {this.props.title}
        </h2>
        <div className={css(styles.subtitle)}>
        <h4 style={{marginTop:'-1em', color: active ? '#fff' : '#666'}}
            className="g-font-weight-200 g-font-size-14 g-">
            <span style={{fontSize: '2em'}}>{this.props.idx+1}.</span>
            {this.props.subtitle}
        </h4>
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

export default connect(mapStateToProps)(HeaderSection)
