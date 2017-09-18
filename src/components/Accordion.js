import React from 'react'

export default class Accordion extends React.Component {
  render() {
    return (
    <div id="accordion-07" className="u-accordion u-accordion-color-primary" role="tablist" aria-multiselectable="true">
      <div className="card rounded-0 g-brd-none" style={{marginBottom: '.5em'}}>
        <div id="accordion-07-heading-01" className="u-accordion__header g-pa-0" role="tab"
            style={{border: '1px solid #ddd', margin: 0, padding: 0}}>
          <h5 className="mb-0 text-uppercase g-font-size-default g-font-weight-700 g-pa-20a mb-0">
            <a className="d-block g-color-main g-text-underline--none--hover"
               href="#accordion-07-body-01"
               data-toggle="collapse"
               data-parent="#accordion-07"
               aria-expanded="true"
               aria-controls="accordion-07-body-01">
              <span className="u-accordion__control-icon d-inline-block g-brd-right g-brd-gray-light-v4 g-color-primary text-center g-px-20">
                <i className="fa fa-plus"></i>
                <i className="fa fa-minus"></i>
              </span>
              <span className="d-inline-block g-pa-5 g-ml-10">
                Account
              </span>
            </a>
          </h5>
        </div>
        <div id="accordion-07-body-01" className="collapse show" role="tabpanel" aria-labelledby="accordion-07-heading-01">
          <div className="u-accordion__body g-bg-gray-light-v5 g-px-50 g-py-30">
            This is where we sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key. Now that we've aligned the details, it's time to get things mapped out and organized. This part is really crucial
            in keeping the project in line to completion.
          </div>
        </div>
      </div>

      <div className="card rounded-0 g-brd-none"  style={{marginBottom: '.5em'}}>
        <div id="accordion-07-heading-02" className="u-accordion__header g-pa-0" role="tab"
          style={{border: '1px solid #ddd', margin: 0, padding: 0}}>
          <h5 className="mb-0 text-uppercase g-font-size-default g-font-weight-700 g-pa-20a mb-0">
            <a className="collapsed d-block g-color-main g-text-underline--none--hover" href="#accordion-07-body-02"
               data-toggle="collapse"
               data-parent="#accordion-07"
               aria-expanded="false"
               aria-controls="accordion-07-body-02">
              <span className="u-accordion__control-icon d-inline-block g-brd-right g-brd-gray-light-v4 g-color-primary text-center g-px-20">
                <i className="fa fa-plus"></i>
                <i className="fa fa-minus"></i>
              </span>
              <span className="d-inline-block g-pa-5 g-ml-10">
                Products
              </span>
            </a>
          </h5>
        </div>
        <div id="accordion-07-body-02" className="collapse" role="tabpanel" aria-labelledby="accordion-07-heading-02">
          <div className="u-accordion__body g-bg-gray-light-v5 g-px-50 g-py-30">
            This is where we sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key. Now that we've aligned the details, it's time to get things mapped out and organized. This part is really crucial
            in keeping the project in line to completion.
          </div>
        </div>
      </div>

      <div className="card rounded-0 g-brd-none">
        <div id="accordion-07-heading-03" className="u-accordion__header g-pa-0" role="tab"
          style={{border: '1px solid #ddd', margin: 0, padding: 0}}>
          <h5 className="mb-0 text-uppercase g-font-size-default g-font-weight-700 g-pa-20a mb-0">
            <a className="collapsed d-block g-color-main g-text-underline--none--hover" href="#accordion-07-body-03"
               data-toggle="collapse"
               data-parent="#accordion-07"
               aria-expanded="false"
               aria-controls="accordion-07-body-03">
              <span className="u-accordion__control-icon d-inline-block g-brd-right g-brd-gray-light-v4 g-color-primary text-center g-px-20">
                <i className="fa fa-plus"></i>
                <i className="fa fa-minus"></i>
              </span>
              <span className="d-inline-block g-pa-5 g-ml-10">
                Services
              </span>
            </a>
          </h5>
        </div>
        <div id="accordion-07-body-03" className="collapse" role="tabpanel" aria-labelledby="accordion-07-heading-03">
          <div className="u-accordion__body g-bg-gray-light-v5 g-px-50 g-py-30">
            This is where we sit down, grab a cup of coffee and dial in the details. Understanding the task at hand and ironing out the wrinkles is key. Now that we've aligned the details, it's time to get things mapped out and organized. This part is really crucial
            in keeping the project in line to completion.
          </div>
        </div>
      </div>
    </div>
    )
  }
}
