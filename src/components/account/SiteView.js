import React from 'react'
import InputComponent from '../form/InputComponent'
import TextAreaComponent from '../form/TextAreaComponent'

export default class SiteView extends React.Component {
  render() {
    return (
      <div>
        <legend className="g-font-size-default">Title & Subtitle</legend>
        <InputComponent id="productsTitle"
          field="productsTitle" placeholder="Title"/>
        <TextAreaComponent id="productsSubtitle"
          field="productsSubtitle" placeholder="Subtitle"/>
      </div>
    )
  }
}
