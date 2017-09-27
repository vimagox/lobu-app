import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {StyleSheet,css} from 'aphrodite'
import {colors} from '../../constants/Colors'
import {upToSM} from '../../constants/Media'
import {loadCity} from '../../actions'

const styles = StyleSheet.create({
  item: {
    minWidth: '12em',
    marginBottom: '3px',
    [upToSM]: {
      width: '100%'
    }
  },
  label: {
    cursor: 'pointer',
    fontWeight:'normal',
    lineHeight: '1em',
    ':hover': {
      color: colors[8]
    },
    [upToSM]: {
      width: '100%',
      border: '1px solid #ddd',
      lineHeight: '2em',
      padding: '.5em 1em'
    }
  }
})

class RegionItem extends React.Component {
  selectRegion(r) {
    if(!this.props.region) {
      this.props.history.push('/'+r.uid)
    } else {
      loadCity('/'+this.props.region.uid, r.uid)
    }
    window.scrollTo(0, 0)
  }

  render() {
    const r = this.props.r
    return (
      <div className={css(styles.item)}>
        <div onClick={this.selectRegion.bind(this, r)}
          className={css(styles.label)}>{r.name}</div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    region: store.location.region
  }
}

export default withRouter(connect(mapStateToProps)(RegionItem))
