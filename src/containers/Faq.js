import React from 'react'
import Question from '../components/Question'

export default class Faq extends React.Component {
  render() {
    return (

      <section className="g-bg-gray-gradient-opacity-v1">
        <div className="container g-py-100">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-lg-offset-1">

              <div className="text-center g-mb-60">
                <h2 className="g-color-black g-font-weight-600 mb-2">Frequently Asked Questions</h2>
                <p className="lead g-width-60x--md mx-auto">We aim high at being focused on building relationships with our clients and community.</p>
              </div>


              <div id="accordion" className="u-accordion u-accordion-color-primary" role="tablist" aria-multiselectable="true">

                <Question q={"What is the price to sign up my business?"}/>
                <Question q={"What is the price to sign up as a potential customer?"}/>
                <Question q={"Why should I sign up as a potential customer?"}/>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
