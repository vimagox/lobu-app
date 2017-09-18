import React from 'react'
import {connect} from 'react-redux'

export default class SitePreview extends React.Component {
  render() {
    return (
      <div className="tab-content" style={{marginTop: '-2em'}}>
        <div className="tab-pane show active">
          <div id="shortcode7-1">
            <div className="shortcode-html">
              <div className="u-heading-v2-1--bottom g-mb-30">
                <h2 className="u-heading-v2__title g-mb-10">Site Preview</h2>
                <h4 className="g-font-weight-200">Neque porro quisquam</h4>
              </div>

              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
              <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
                sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
