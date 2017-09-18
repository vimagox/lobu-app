import React from 'react'
import {connect} from 'react-redux'

export default class SiteSettings extends React.Component {
  render() {
    return (
      <div className="tab-content" style={{marginTop: '-2em'}}>
        <div className="tab-pane show active">
          <div id="shortcode7-1">
            <div className="shortcode-html">
              <div className="u-heading-v2-1--bottom g-mb-30">
                <h2 className="u-heading-v2__title g-mb-10">Site</h2>
                <h4 className="g-font-weight-200">Site Settings</h4>
              </div>

              <p>Here is where you describe your products and/or services.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
