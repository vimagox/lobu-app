import React from 'react'

export default class ImageComponent extends React.Component {
  render() {
    return (
      <div className="form-group g-mt-0">
        <label for="exampleInputFile">Image</label>
        <div style={{
            border: '1px solid #ddd',
            height: '5em', display: 'flex',
            justifyContent: 'center', alignItems: 'center'}}>
          <input style={{paddingLeft: '1em', width: '15em'}} type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
          <small id="fileHelp" className="form-text text-muted">
            {this.props.text}
          </small>
        </div>
      </div>
    )
  }
}
