import React from 'react'

export default class Products extends React.Component {
  render() {
    return (
    <div>
      <div className="text-info">
        <h4>Wholesale bedroom sets</h4>
        <p>Find the best selection of bedroom furniture sets here at casa furniture.</p>
      </div>
      <hr/>
      {[1,2,3,4].map((m,i) => (
        <div key={"blo"+i} className="g-pt-40 g-cursor-pointer">
          <div className="exprience">
            <div className="exprience-image">
              <img className="img-responsive" src="/images/blog/1.jpg" alt="Image"/>
            </div>
            <div className="exprience-info">
              <h3>London</h3>
              <h5>King/Queen</h5>
              <p>Modern simple bedroom sets available in different colors and patterns.</p>
            </div>
          </div>
          <hr/>
        </div>
      ))}
    </div>
    )
  }
}
