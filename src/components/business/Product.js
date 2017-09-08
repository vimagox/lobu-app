import React from 'react'
import {colors} from '../../constants/Colors'

export default class Product extends React.Component {
  render() {
    const b = this.props.b
    const p = this.props.p
    const bgImg = 'url(images/test/'+p.img+')'
    return (
      <div className="col-sm-6">
          <div className="portfolio-item">
              <div style={{height: b.imgHeight, overflow: 'hidden',
                  backgroundImage: bgImg,
                  backgroundSize: 'cover'}}>
              </div>
              <div className="portfolio-overlay" style={{backgroundColor: colors[b.color]}}>
                  <div className="portfolio-info">
                      <h3>{p.name}</h3>
                      <p>{p.category}</p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
