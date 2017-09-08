import React from 'react'
import {colors} from '../../constants/Colors'

export default class PageSidebar extends React.Component {
  render() {
    const b = this.props.b
    // const address = b.address +' '+b.city+' '+b.zipcode
    return (
      <div id="sidebar" className="col-sm-12" style={{padding: 0}}>
        <aside id="sidebar" className="widget-area" style={{}}>
          <div className="widget widget_categories" style={{marginTop: '2em'}}>
            <h3 className="widget_title">Contact</h3>
            <div xclassName="section-title">
              <div>{b.contact.name}</div>
              <div>
                <div>{b.contact.email}</div>
                <div><a href={`tel:${b.contact.phone}`}>{b.contact.phone}</a></div>
              </div>
            </div>
          </div>
          {b.services && <div className="widget widget_categories" style={{marginTop: '4em'}}>
            <h3 className="widget_title">Services</h3>
            {b.services.freeDelivery && <div>
              <i style={{transform: 'scale(-1, 1)', padding: '0 0 0 1em'}} className="fa fa-truck" aria-hidden="true"></i>
              Free delivery
            </div>}
            {b.services.bitcoin && <div>
              <i style={{padding: '0 1.22em 0 0'}} className="fa fa-bitcoin" aria-hidden="true"></i>
              Bitcoin Accepted
            </div>}
          </div> }
          {b.links && <div className="widget widget_categories" style={{marginTop: '4em'}}>
            <h3 className="widget_title">Links</h3>
            {b.links.website && <div style={{marginTop: '1em'}}>
              <a style={{color: colors[b.color]}} className="xlink2" target="_blank" href={'http://'+b.contact.website}>
                {b.links.website}
              </a>
            </div> }
          </div>}
        </aside>
      </div>
    )
  }
}
// <div><a style={{color: colors[7]}} href={`sms:${b.contact.phone}`}>Send Text Message</a></div>

// <div style={{xmarginTop: '1em'}}>
//   <a target="_blank" xstyle={{color: colors[6]}}
//     href={"https://maps.google.com/maps?q=" + address}>
//     <div>{b.contact.address}</div>
//     <div>{b.contact.city} {b.contact.zipcode}</div>
//   </a>
// </div>
