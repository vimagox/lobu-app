import React from 'react'

export default class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {collapse: true}
  }

  toggleCollapse() {
    this.setState({collapse: !this.state.collapse})
  }

  render() {
    const collapse = this.state.collapse
    return (
      <div onClick={this.toggleCollapse.bind(this)}
          className="card g-brd-none rounded g-mb-20">
        <div id="accordion-heading-01" className="g-pa-0" role="tab">
          <h5 className="mb-0">
              <a className={"d-flex justify-content-between u-shadow-v19 g-color-main g-text-underline--none--hover rounded g-px-30 g-py-20 "+ (collapse ? 'collapsed' : '')}
                  href="#accordion-body-01"
                  data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="accordion-body-01">
                {this.props.q}
                <span className="u-accordion__control-icon g-color-primary">
                  <i className="fa fa-angle-down"></i>
                  <i className="fa fa-angle-up"></i>
                </span>
              </a>
            </h5>
        </div>
        <div id="accordion-body-01"
            className={collapse ? 'collapse' : ''} role="tabpanel" aria-labelledby="accordion-heading-01">
          <div className="u-accordion__body g-color-gray-dark-v4 g-pa-30">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
            raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    )
  }
}
