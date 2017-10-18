import React from 'react'
import {connect} from 'react-redux'
// import FontAwesome from 'react-fontawesome'
import {StyleSheet,css} from 'aphrodite'
import {colors} from '../../../constants/Colors'
import {upToSM, upToMD} from '../../../constants/Media'
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react'

const styles = StyleSheet.create({
  title: {
    fontSize: '3em',
    [upToMD]: {
      fontSize:  '2em'
    },
    [upToSM]: {
      textAlign: 'center',
      fontSize:  '2.25em'
    }
  },
  subtitle: {
    fontWeight: 'normal',
    color: '#ccc',
    marginTop: '-.5em',
    [upToSM]: {
      display: 'none'
    }
  },
  mobileSubtitle: {
    fontWeight: 'normal',
    color: '#ccc',
    display: 'none',
    textAlign: 'center',
    [upToSM]: {
      display: 'block',
      marginBottom: '2em'
    }
  }
})

class GeneralView extends React.Component {
  render(){
    return (
      <div className="g-mt-0" style={{maxWidth: '30em'}}>

      <div style={{height: '170px', overflow: 'hidden', cursor: 'pointer', position: 'relative'}}>

      <div style={{height: '170px', overflow: 'hidden', cursor: 'pointer', position: 'relative',
          backgroundColor: '#000'}}>
      </div>

      </div>

      <div className="g-pt-0">
        <h1 className={css(styles.title)} style={{color: colors[0]}}>Casa Furniture</h1>
        <h4 className={css(styles.subtitle)}>El Paso, TX</h4>
        <h4 className={css(styles.mobileSubtitle)}>Casa Furniture</h4>
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

// <span style={{fontSize: '1.4em'}}>Business Site Image.</span><br/>
// Click here to update or keep the same as your business card.

// <CloudinaryContext cloudName="demo">
//   <Image publicId="sample">
//     <Transformation width="400" height="270" crop="scale"/>
//   </Image>
// </CloudinaryContext>
// <div style={{position: 'absolute', top: 0, left: 0,
//     backgroundColor: '#000',
//     color: '#fff', opacity:  1, fontWeight: 'bold',
//     fontSize: '.85em', padding: '1em'}}>
// </div>
