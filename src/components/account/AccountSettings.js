import React from 'react'
import {connect} from 'react-redux'

export default class Account extends React.Component {
  render() {
    return (
      <div className="tab-content" style={{marginTop: '-2em'}}>
        <div className="show active">
            <div className="shortcode-html">
              <div className="u-heading-v2-1--bottom g-mb-30">
                <h2 className="u-heading-v2__title g-mb-10">Account</h2>
                <h4 className="g-font-weight-200">Account Settings</h4>
              </div>

              <form className="g-brd-around g-brd-gray-light-v4 g-pa-30 g-mb-30">
                <div className="form-group g-mb-25">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control form-control-md rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
                </div>

                <div className="form-group g-mb-25">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control form-control-md rounded-0" id="exampleInputPassword1" placeholder="Password"/>
                </div>

                <div className="form-group g-mb-25">
                  <label for="exampleSelect1">Example select</label>
                  <select className="form-control rounded-0" id="exampleSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div className="form-group g-mb-25">
                  <label for="exampleSelect2">Example multiple select</label>
                  <select multiple className="form-control rounded-0" id="exampleSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div className="form-group g-mb-25">
                  <label for="exampleTextarea">Example textarea</label>
                  <textarea className="form-control form-control-md rounded-0" id="exampleTextarea" rows="6"></textarea>
                </div>

                <div className="form-group g-mb-25">
                  <label for="exampleInputFile">File input</label>
                  <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                  <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. Its a bit lighter and easily wraps to a new line.</small>
                </div>

                <fieldset className="form-group g-mb-25">
                  <legend className="g-font-size-default">Radio buttons</legend>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input mr-1" name="optionsRadios" id="optionsRadios1" value="option1" checked/>Option one is this and that&mdash;be sure to include why its great
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input mr-1" name="optionsRadios" id="optionsRadios2" value="option2"/>Option two can be something else and selecting it will deselect option one
                    </label>
                  </div>
                  <div className="form-check disabled">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input mr-1" name="optionsRadios" id="optionsRadios3" value="option3" disabled/>Option three is disabled
                    </label>
                  </div>
                </fieldset>

                <div className="form-check">
                  <label className="form-check-label g-mb-20">
                    <input type="checkbox" className="form-check-input mr-1"/>Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-md u-btn-primary rounded-0">Submit</button>
              </form>





          </div>
        </div>
      </div>
    )
  }
}

// <div className="show active">
//     <div className="shortcode-html">
//       <div className="u-heading-v2-1--bottom g-mb-30">
//         <h2 className="u-heading-v2__title g-mb-10">Account Settings</h2>
//         <h4 className="g-font-weight-200">Neque porro quisquam</h4>
//       </div>
//     </div>
// </div>
//
