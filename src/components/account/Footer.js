import React from 'react'
import {connect} from 'react-redux'

class Footer extends React.Component {

}

const mapStateToProps = (store) => {
  return {
    stage: store.stage
  }
}

export default connect(mapStateToProps)(Footer)
