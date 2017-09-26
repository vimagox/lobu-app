import React from 'react'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import Checkbox from '../form/Checkbox'
import BusinessCover from '../business/Cover'
import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'
import {StyleSheet,css} from 'aphrodite'
import {colors} from '../../constants/Colors'
import Template from '../business/Template'
import Modal from '../Modal'
import {loadStage} from '../../actions'
import CardView from './CardView'
import CardForm from './CardForm'
import ImageUpload from '../form/ImageUpload'
// import cloudinary from 'cloudinary'
// import CloudinaryField from 'cloudinary.models'
// import cloudinary from 'cloudinary.models'
import {cloudinary} from 'cloudinary-core'
// import {Image, CloudinaryContext, Transformation} from 'cloudinary-react'


const styles = StyleSheet.create({
  template: {
    // display: 'flex',
    // flexGrow: 1,
    // width: '100%',
    // height: '24.5em',
    // margin: '0 auto',
    // border: '1px solid red',
    overflow: 'hidden',
    [upToXL]: {
      // border: '1px solid cyan',
      width: '380px',
    },
    [upToLG]: {
      // border: '1px solid magenta',
      width: '280px',
    },
    [upToMD]: {
      // border: '1px solid red',
      width: '300px',
    },
    [upToSM]: {
      width: '100%',
    }
  },
  box: {
    height: '25em',
    border: '1px solid #ddd',
    maxWidth: '360px',
    overflow: 'hidden',
    [upToXL]: {
      height: '23em',
    },
    [upToLG]: {
      maxWidth: '400px',
      // border: '1px solid blue',
    },
    [upToMD]: {
      // border: '3px solid red',
      // maxWidth: '204px',
      // maxWidth: '220px',
      // width: '100%'
    },
    [upToSM]: {
      width: '100%',
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
      maxWidth: '100%',
      height:'140px',
    },
    [upToLG]: {
      minWidth: '280px', height: '140px'
    },
    [upToMD]: {
      // minWidth: '280px',
      // height: '270px'
    },
    [upToSM]: {
      width: '100%',
      height: '150px'
    }
  },
  content: {
    position: 'relative',
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
  },
  color: {
    cursor: 'pointer',
    height: '2em',
    width: '2em',
    display: 'inline-block',
    margin: '.5em .5em 0 .5em'
  },
  option2: {
    border: '1px solid #eee',
    padding: '.5em 1em',
  },
  option: {
    border: '1px solid #eee',
    padding: '.5em 1em',
    // minHeight: '8em',
    [upToXL]: {
      // minHeight: '11em'
    },
    [upToLG]: {
      // minHeight: '12em'
    },
    [upToMD]: {
      // minHeight: '5em',
      // height: '2em'
    },
    [upToSM]: {
      // height: '2em',
      // minHeight: '8em'
    },
  },
  thirdCol: {
    // paddingLeft: '1em',
    margin: 0,
    [upToMD]: {
      padding: 0,
      margin: '0 -1em',
      // border: '1px solid red'
    },
    [upToSM]: {
      padding: 0,
      // border: '1px solid blue'
    }
  },
  menu: {
    display: 'flex', flexFlow: 'row',
    borderBottom: '3px solid #222',
    margin: '-3em 0 2em 0'
  },
  item: {
    userSelect: 'none',
    cursor: 'pointer',
    fontSize: '1.2em',
    padding: '1em',
  },
  checkAvailability: {
    cursor: 'pointer',
    padding: '0 1em',
    textAlign: 'center',
    border: '1px solid #ddd',
    ':hover': {
      color: '#444'
    }
  }
})


class BusinessSettings extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      category: '',
      domain: '',
      location: '',
      state: '',
      color: 0,
      bitcoin: false,
      delivery: false,
      card: false
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    localStorage.setItem('lobu'+event.target.id, event.target.value)
  }

  handleCheck = (id, value) => {
    this.setState({[id]: value})
  }

  handleColor(id) {
    this.setState({color: id})
  }

  uploadWidget() {
    cloudinary.openUploadWidget({
      cloud_name: 'vimago',
      upload_preset: 'PRESET',
      tags:['xmas']},
      function(error, result) {
          console.log(result);
      });
  }


  render() {
    const b = {
      color: 1,
      name: this.state.name || 'Rainbow',
      title: this.state.category || 'Face Painting',
      uid: this.state.uid || 'rainbow'
    }
    const option = 0
    return (
      <div className="tab-content">
        <div className="row">

          <div className="col-sm-6 g-mb-10">
            <CardView/>
          </div>
          <div className="col-sm-6" style={{padding: '0 1em'}}>
            <CardForm/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    name: store.businessName,
    category: store.businessCategory,
    domain: store.businessDomain
  }
}

export default connect(mapStateToProps)(BusinessSettings)

// <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
//   type specimen book.</p>
// <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
//   more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

// <div className="g-pt-10" style={{width: '364px'}}>
//   <button className="g-cursor-pointer btn btn-block u-btn-primary g-mt-40 g-font-size-20 g-py-20">
//     Save Business Cover
//   </button>
// </div>


// <div className="col-sm-12">
//   <div className="form-group g-mt-10">
//     <label for="exampleInputFile">Business Location</label>
//     <div>
//       <a className="btn u-btn-black btn-block g-py-7"
//           href="#modal1"
//           data-modal-target="#modal1"
//           data-modal-effect="fadein">Select your City
//       </a>
//       <Modal title={"Select your city"}>
//         <input type="select"/>
//         <input type="select"/>
//         <input type="select"/>
//       </Modal>
//     </div>
//   </div>
// </div>

// <div className="upload">
//   <button onClick={this.uploadWidget.bind(this)} className="upload-button">
//     Add Image
//   </button>
// </div>
// <ImageUpload/>
