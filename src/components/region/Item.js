import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {loadCity} from '../../actions'
import {StyleSheet,css} from 'aphrodite'
import {colors} from '../../constants/Colors'

const styles = StyleSheet.create({
  label: {
    cursor: 'pointer',
    fontWeight:'normal',
    lineHeight: '1em',
    ':hover': {
      color: colors[8]
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
  }

  hasLobus(r) {
    return r.name === 'Texas' || r.name === 'El Paso'
  }

  render() {
    const r = this.props.r
    return (
      <div className="col-sm-12 col-md-3" style={{padding: '5px'}}>
        <div onClick={this.selectRegion.bind(this, r)}
          className={css(styles.label)}>{r.name}</div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    region: store.region
  }
}

export default withRouter(connect(mapStateToProps)(RegionItem))
