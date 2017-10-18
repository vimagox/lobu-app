import React from 'react'

export default class GeneralForm extends React.Component {
  render() {
    return (
    <div>
      <form>
        <legend className="g-font-size-default">Business Site</legend>
        <div style={{marginBottom: '.75em'}}>
          <label className="custom-file" style={{width: '100%'}}>
            <input type="file" id="file" className="custom-file-input"/>
            <span className="custom-file-control">
              Select business site image...
            </span>
          </label>
        </div>
      </form>
    </div>
    )
  }
}
