import React from 'react'
import {connect} from 'react-redux'
// import FontAwesome from 'react-fontawesome'
// import BusinessCover from '../business/Cover'
// import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../../../constants/Media'
// import {StyleSheet,css} from 'aphrodite'
// import {colors} from '../../../../constants/Colors'
// import Template from '../business/Template'
// import Modal from '../../../Modal'
// import {loadStage} from '../../../../actions'
import CardView from './View'
import CardForm from './Form'
// import ImageUpload from '../form/ImageUpload'
// import cloudinary from 'cloudinary'
// import CloudinaryField from 'cloudinary.models'
// import cloudinary from 'cloudinary.models'
import {cloudinary} from 'cloudinary-core'
// import {Image, CloudinaryContext, Transformation} from 'cloudinary-react'



class Page extends React.Component {

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
    // const b = {
    //   color: 1,
    //   name: this.state.name || 'Rainbow',
    //   title: this.state.category || 'Face Painting',
    //   uid: this.state.uid || 'rainbow'
    // }
    // const option = 0
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
    name: store.card.name,
    category: store.card.category,
    domain: store.card.domain
  }
}

export default connect(mapStateToProps)(Page)

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
