import React from 'react'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import Checkbox from '../Checkbox'
import BusinessCover from '../business/Cover'
import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'
import {StyleSheet,css} from 'aphrodite'
import {colors} from '../../constants/Colors'
import Template from '../business/Template'
import Tabs from './Tabs'
import Products from '../Products'
import Modal from '../Modal'

const styles = StyleSheet.create({
  template: {
    // display: 'flex',
    // flexGrow: 1,
    // width: '100%',
    // height: '24.5em',
    // margin: '0 auto',
    // border: '1px solid red',
    overflow: 'hidden',
    [upToXL]: {
      // border: '1px solid cyan',
      width: '380px',
    },
    [upToLG]: {
      // border: '1px solid magenta',
      width: '280px',
    },
    [upToMD]: {
      // border: '1px solid red',
      width: '300px',
    },
    [upToSM]: {
      width: '100%',
    }
  },
  box: {
    cursor: 'pointer',
    height: '25em',
    border: '1px solid #ddd',
    maxWidth: '360px',
    overflow: 'hidden',
    [upToXL]: {
      height: '23em',
    },
    [upToLG]: {
      maxWidth: '400px',
      // border: '1px solid blue',
    },
    [upToMD]: {
      // border: '3px solid red',
      // maxWidth: '204px',
      // maxWidth: '220px',
      // width: '100%'
    },
    [upToSM]: {
      width: '100%',
      // border: '1px solid magenta',
      minWidth: '100%'
    }
  },
  image: {
    position: 'relative',
    zIndex: -1,
    overflow: 'hidden',
    backgroundSize: 'cover',
    overflow: 'hidden',
    minWidth: '390px',
    height:'170px',
    [upToXL]: {
      minWidth: '290px',
      maxWidth: '100%',
      height:'140px',
    },
    [upToLG]: {
      minWidth: '280px', height: '140px'
    },
    [upToMD]: {
      // minWidth: '280px',
      // height: '270px'
    },
    [upToSM]: {
      width: '100%',
      height: '150px'
    }
  },
  content: {
    position: 'relative',
    padding: '1em',
  },
  title: {
    fontSize: '1.4em',
    lineHeight: '.5em'
  },
  subtitle: {
    color: '#888'
  },
  footer: {
    paddingTop: '.5em',
    textAlign: 'right',
  },
  color: {
    cursor: 'pointer',
    height: '2em',
    width: '2em',
    display: 'inline-block',
    margin: '.5em .5em 0 .5em'
  },
  option: {
    border: '1px solid #eee',
    padding: '.5em 1em',
    // minHeight: '8em',
    [upToXL]: {
      // minHeight: '11em'
    },
    [upToLG]: {
      // minHeight: '12em'
    },
    [upToMD]: {
      // minHeight: '5em',
      // height: '2em'
    },
    [upToSM]: {
      // height: '2em',
      // minHeight: '8em'
    }
  },
  thirdCol: {
    // paddingLeft: '1em',
    margin: 0,
    [upToMD]: {
      padding: 0,
      margin: '0 -1em',
      // border: '1px solid red'
    },
    [upToSM]: {
      padding: 0,
      // border: '1px solid blue'
    }
  },
  menu: {
    display: 'flex', flexFlow: 'row',
    borderBottom: '3px solid #222',
    margin: '-3em 0 2em 0'
  },
  item: {
    userSelect: 'none',
    cursor: 'pointer',
    fontSize: '1.2em',
    padding: '1em',
  }
})


export default class SiteSettings extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: 0,
      title: '',
      subtitle: '',
      product: true,
      productPrice: null,
      productTitle: '',
      productSubtitle: '',
      productDescription: '',
      contactName: '',
      contactEmail: '',
      contactPhone: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    localStorage.setItem('lobu'+event.target.id, event.target.value)
  }

  handleCheck = (id, value) => {
    this.setState({[id]: value})
  }

  handleColor(id) {
    this.setState({color: id})
  }

  setProduct(value) {
    this.setState({product: value})
  }

  setMenu(value) {
    this.setState({menu: value})
  }

  render() {
    const b = {color: 1, name: this.state.name || 'Rainbow',
        title: this.state.category || 'Face Painting',
        uid: this.state.uid || 'rainbow'}
    const bgImg = 'url(/img-temp/400x270/img1.jpg)'
    const option = 0
    const product = this.state.product
    const menu = this.state.menu
    return (
<div className="row">
  <div className="col-sm-7 g-mb-10">
    <div className="g-pos-fix--sm">
      <div className="g-pa-0" style={{marginTop: 0}}>
        <div className="u-heading-v2-1--bottom g-mb-30">
          <h2 className="u-heading-v2__title g-mb-10">Business Site</h2>
          <h4 className="g-font-weight-200">Setup your business site</h4>
        </div>
      </div>
    </div>

    {menu === 0  && <div className="g-mt-60" style={{maxWidth: '30em'}}>

      <div className="g-mb-30">
        <img src="/img-temp/200x100/img1.png"/>
      </div>


      <div className="widget widget_categories" style={{marginTop: '1em'}}>
        <h3 className="widget_title">Contact</h3>
        <div>
          <div>{this.state.contactName || 'Name'}</div>
          <div>
            <div>{this.state.contactEmail || 'Email'}</div>
            <div><a href={`tel:${this.state.contactPhone}`}>{this.state.contactPhone || 'Phone'}</a></div>
          </div>
        </div>
      </div>
      <div className="g-mt-30 widget widget_categories" style={{marginTop: '-1em'}}>
        <h3 className="widget_title">Social Networks</h3>

      </div>
    </div> }



    {menu === 1  && <div className="g-mt-60">
      <div className="text-info">
        <h4>{this.state.title || 'Products Title'}</h4>
        <p>{this.state.subtitle || 'Products Subtitle'}</p>
      </div>
      <hr/>
      {[1].map((m,i) => (
        <div key={"blo"+i} className="g-pt-40 g-cursor-pointer">
          <div className="exprience">
            <div className="exprience-image">
              <img className="img-responsive" src="/images/blog/1.jpg" alt="Image"/>
            </div>
            <div className="exprience-info">
              <h3>{this.state.productTitle || 'Product Title'}</h3>
              <h5>{this.state.productSubtitle || 'Product Subtitle'}</h5>
              <p>{this.state.productDescription || 'Product Description.'}</p>
            </div>
          </div>
          <hr/>
        </div>
      ))}
    </div> }

    {menu === 2  && <div className="g-mt-60">
      <div className="text-info">
        <h4>{this.state.title || 'Services Title'}</h4>
        <p>{this.state.subtitle || 'Services Subtitle'}</p>
      </div>
      <hr/>
      {[1].map((m,i) => (
        <div key={"blo"+i} className="g-pt-40 g-cursor-pointer">
          <div className="exprience">
            <div className="exprience-image">
              <img className="img-responsive" src="/images/blog/1.jpg" alt="Image"/>
            </div>
            <div className="exprience-info">
              <h3>{this.state.productTitle || 'Service Title'}</h3>
              <h5>{this.state.productSubtitle || 'Service Subtitle'}</h5>
              <p>{this.state.productDescription || 'Service Description.'}</p>
            </div>
          </div>
          <hr/>
        </div>
      ))}
    </div> }
  </div>

  <div className="g-mt-20 col-sm-5" style={{padding: '0 1em'}}>
    <div className="g-mb-20">
      <ul style={{borderBottom: '2px solid '+colors[8]}}>
        <li onClick={this.setMenu.bind(this, 0)}
          style={{userSelect: 'none', color: menu === 0  ? colors[8] : '#999'}}
          className="g-cursor-pointer d-inline-block">General</li>
        <li onClick={this.setMenu.bind(this, 1)}
          style={{userSelect: 'none', color: menu === 1  ? colors[8] : '#999'}}
          className="g-cursor-pointer d-inline-block g-ml-10">Products</li>
        <li onClick={this.setMenu.bind(this, 2)}
          style={{userSelect: 'none', color: menu === 2  ? colors[8] : '#999'}}
          className="g-cursor-pointer d-inline-block g-ml-10">Services</li>
      </ul>
    </div>

    {menu === 0 && <div>


        <div>
          <div className="form-group g-mt-0">
            <label for="exampleInputFile">Business Logo</label>
            <div className={css(styles.option)} style={{height: '5em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <input style={{width: '15em'}} type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
              <small id="fileHelp" className="form-text text-muted">Upload your logo or keep the image from your business card.</small>
            </div>
          </div>
        </div>


      <div style={{marginTop: '1em', border: '1px solid #ddd', padding: '1em', height: '17.5em', marginRight: 0}}>
        <form>
          <legend className="g-font-size-default">Business Contact</legend>
          <div className="form-group g-mb-10">
          <input
            id='name'
            onChange={this.handleChange}
            className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
            style={{resize: 'none', color: this.state.title ? '#000' : '#aaa', fontWeight: this.state.title ? 'bold' : 'regular'}}
            placeholder={this.state.title || "Contact Name"}/>
          </div>
        <div className="form-group g-mb-10">
          <input
            id='phone'
            onChange={this.handleChange}
            className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
            style={{resize: 'none', color: this.state.subtitle ? '#222' : '#aaa', fontWeight: this.state.subtitle ? 'bold' : 'regular'}}
            placeholder={this.state.subtitle || "Contact Phone"}/>
        </div>
        <div className="form-group g-mb-10">
          <input
            id='email'
            onChange={this.handleChange}
            className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
            style={{resize: 'none', color: this.state.subtitle ? '#222' : '#aaa', fontWeight: this.state.subtitle ? 'bold' : 'regular'}}
            placeholder={this.state.subtitle || "Contact Email"}/>
        </div>

        </form>
      </div>

      <div style={{marginTop: '1em', border: '1px solid #ddd', padding: '1em', height: '21.5em', marginRight: 0}}>
        <form>
          <legend className="g-font-size-default">Social Networks</legend>
          <div className="form-group g-mb-10">
          <input
            id='twitter'
            onChange={this.handleChange}
            className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
            style={{resize: 'none', color: this.state.twitter ? '#000' : '#aaa', fontWeight: this.state.twitter ? 'bold' : 'regular'}}
            placeholder={this.state.twitter || "Twitter"}/>
          </div>
        <div className="form-group g-mb-10">
          <input
            id='facebook'
            onChange={this.handleChange}
            className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
            style={{resize: 'none', color: this.state.facebook ? '#222' : '#aaa', fontWeight: this.state.facebook ? 'bold' : 'regular'}}
            placeholder={this.state.facebook || "Facebook"}/>
        </div>
        <div className="form-group g-mb-10">
          <input
            id='instagram'
            onChange={this.handleChange}
            className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
            style={{resize: 'none', color: this.state.instagram ? '#222' : '#aaa', fontWeight: this.state.instagram ? 'bold' : 'regular'}}
            placeholder={this.state.instagram || "Instagram"}/>
        </div>
        <div className="form-group g-mb-10">
          <input
            id='youtube'
            onChange={this.handleChange}
            className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
            style={{resize: 'none', color: this.state.youtube ? '#222' : '#aaa', fontWeight: this.state.youtube ? 'bold' : 'regular'}}
            placeholder={this.state.youtube || "Youtube"}/>
        </div>

        </form>
      </div>


      </div> }


      {menu > 0 &&
        <div>



        <div style={{border: '1px solid #ddd', padding: '1em', height: '14.75em', marginRight: 0}}>
          <form>
          <legend className="g-font-size-default">Title & Subtitle</legend>
          <div className="form-group g-mb-10">
            <input
              id='title'
              onChange={this.handleChange}
              className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
              style={{resize: 'none', color: this.state.title ? '#000' : '#aaa', fontWeight: this.state.title ? 'bold' : 'regular'}}
              placeholder={this.state.title || "Title"}/>
          </div>
          <div className="form-group g-mb-10">
            <textarea
              id='subtitle'
              onChange={this.handleChange}
              className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
              style={{resize: 'none', color: this.state.subtitle ? '#222' : '#aaa', fontWeight: this.state.subtitle ? 'bold' : 'regular'}}
              placeholder={this.state.subtitle || "Subtitle"}/>
          </div>

          </form>
          </div>




        <div style={{marginTop: '1em', border: '1px solid #ddd', padding: '1em', height: '35.75em', marginRight: 0}}>
        <form>
        <fieldset className="form-group g-mb-0">
          <legend className="g-font-size-default">Add {menu === 1 ? 'Product' : 'Service'}</legend>
        </fieldset>

        <div className="form-group g-mb-10">
          <input
            id='productTitle'
            onChange={this.handleChange}
            className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
            type="text"
            style={{resize: 'none', color: this.state.productTitle ? '#000' : '#aaa', fontWeight: this.state.productTitle ? 'bold' : 'regular'}}
            placeholder={this.state.productTitle || "Title (Optional)"}/>
        </div>
        <div className="form-group g-mb-10">
          <input
            id='productSubtitle'
            onChange={this.handleChange}
            className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
            style={{resize: 'none', color: this.state.productSubtitle ? '#222' : '#aaa', fontWeight: this.state.productSubtitle ? 'bold' : 'regular'}}
            placeholder={this.state.productSubtitle || "Subtitle (Optional)"}/>
        </div>
        <div className="form-group g-mb-10">
          <textarea
            id='productDescription'
            onChange={this.handleChange}
            className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
            style={{resize: 'none', color: this.state.productDescription ? '#222' : '#aaa', fontWeight: this.state.productDescription ? 'bold' : 'regular'}}
            placeholder={this.state.productDescription || "Description (Optional)"}/>
        </div>
        <div className="form-group g-mb-10">
          <div style={{display: 'flex'}}>
            <div style={{fontSize: '1.2em', padding: '.75em .5em', lineHeight: '1.2em',
              border: '1px solid #ddd', backgroundColor: '#efefef'}}>$</div>
            <div><input
            id='productPrice'
            onChange={this.handleChange}
            className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15"
            style={{resize: 'none', color: this.state.productPrice ? '#222' : '#aaa', fontWeight: this.state.productPrice ? 'bold' : 'regular'}}
            placeholder={this.state.productPrice || "Price (Optional)"}/>
            </div>
          </div>
        </div>
        <div className="form-group g-mt-0">
          <label for="exampleInputFile">Image</label>
          <div className={css(styles.option)} style={{height: '5em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <input style={{width: '15em'}} type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
            <small id="fileHelp" className="form-text text-muted">Upload any image that best represents your {product ?  "product" : "service"}.</small>
          </div>
        </div>
        <div style={{textAlign: 'right'}}>
          <a className="g-cursor-pointer btn btn-primary g-mt-10"
             style={{textDecoration: 'underline'}}>
             Add {menu === 1 ?  "Product" : "Service"}
          </a>
        </div>
        </form>
        </div>
      </div>
      }
  </div>
</div>
    )
  }
}

// <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
//   type specimen book.</p>
// <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
//   more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

// <div className="g-pt-10" style={{width: '100%'}}>
//   <button className="g-cursor-pointer btn btn-block u-btn-primary g-mt-40 g-font-size-20 g-py-20">
//     Save Site
//   </button>
// </div>


// <div className="form-check" style={{display: 'inline-block'}}>
//   <label className="form-check-label">
//     <input type="radio"
//        onChange={this.setProduct.bind(this, true)}
//        className="form-check-input mr-1" name="optionsRadios"
//        id="optionsRadios1" value="option1"
//        checked={this.state.product}/> Product
//   </label>
// </div>
// <div className="form-check" style={{display: 'inline-block', marginLeft: '1em'}}>
//   <label className="form-check-label">
//     <input type="radio"
//       onChange={this.setProduct.bind(this, false)}
//       className="form-check-input mr-1" name="optionsRadios"
//       id="optionsRadios2" value="option2"
//       checked={!this.state.product}/> Service
//   </label>
// </div>
