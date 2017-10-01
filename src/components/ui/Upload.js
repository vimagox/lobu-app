import React from 'react'
import {setField} from '../../actions'

export default class Upload extends React.Component {

  constructor(props) {
    super(props)
    this.state = {file: '', imagePreviewUrl: ''}
  }

  _handleImageChange(e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
                   file: file,
        imagePreviewUrl: reader.result
      })
      // console.log(this.state.imagePreviewUrl)
      setField('image', this.state.imagePreviewUrl)
    }
    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e)=>this._handleImageChange(e)} />
        </form>
      </div>
    )
  }
}

// <button className="submitButton"
//   type="submit"
//   onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>

// _handleSubmit(e) {
//   e.preventDefault()
//   // TODO: do something with -> this.state.file
//   console.log('handle uploading-', this.state.file);
// }


// <div className="imgPreview">
//   {$imagePreview}
// </div>
