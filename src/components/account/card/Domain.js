import React from 'react'

export default class Domain extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flexFlow: 'row', justifyContent: 'stretch', padding: 0, margin: 0, height: '3.5em'}}>
        <div style={{flexGrow:0, lineHeight: '3.4em', fontSize: '1.1em', marginRight: '.25em'}}>{"https://lobu.us/"}</div>
          <InputComponent
              id="domain" field="domain"
              value={this.props.domain}
              placeholder={"Lobu Domain. ie: rainbow"}
              style={{flexGrow: 1}}/>
          <div className={css(styles.checkAvailability)}>
            <div><FontAwesome name="check" size="2x"/></div>
            <div style={{marginTop: '-1em'}}>
              <a className="" style={{
                lineHeight: '3.4em',
                fontSize: '.75em',
                textDecoration: 'underline !important',
                color: '#222'}}>Check Availability</a>
            </div>
        </div>
      </div>
    )
  }
}
