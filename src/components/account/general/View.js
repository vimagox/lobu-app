import React from 'react'
import {connect} from 'react-redux'
// import FontAwesome from 'react-fontawesome'
// import {StyleSheet,css} from 'aphrodite'
// import {upToSM} from '../../../../constants/Media'
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react'

// const styles = StyleSheet.create({
//   logo: {
//     [upToSM]: {
//       textAlign: 'center',
//       margin: '0 auto'
//     }
//   }
// })

class GeneralView extends React.Component {
  render(){
    return (
      <div className="g-mt-0" style={{maxWidth: '30em'}}>

      <div style={{height: '170px', overflow: 'hidden', cursor: 'pointer', position: 'relative'}}>
        <CloudinaryContext cloudName="demo">
          <Image publicId="sample">
            <Transformation width="400" height="270" crop="scale"/>
          </Image>
        </CloudinaryContext>
        <div style={{position: 'absolute', top: 0, left: 0,
            backgroundColor: '#000',
            color: '#fff', opacity:  1, fontWeight: 'bold',
            fontSize: '.85em', padding: '1em'}}>
          <span style={{fontSize: '1.4em'}}>Business Site Image.</span><br/>
          Click here to update or keep the same as your business card.
        </div>
      </div>


      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    logo: store.app.logo
  }
}

export default connect(mapStateToProps)(GeneralView)
