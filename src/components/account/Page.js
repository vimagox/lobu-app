import React from 'react'
import GeneralForm from './general/Form'
import ContactForm from './contact/Form'
import ProductForm from './products/Form'
import ServiceForm from './services/Form'
import ContactView from './contact/View'
import ProductsView from './products/View'
import ServicesView from './services/View'
import GeneralView from './general/View'
import {account} from '../../actions'

export default class Setup extends React.Component {

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
    account.setField(event.target.id, event.target.value)
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
    // const b = {color: 1, name: this.state.name || 'Rainbow',
    //     title: this.state.category || 'Face Painting',
    //     uid: this.state.uid || 'rainbow'}
    // const bgImg = 'url(/img-temp/400x270/img1.jpg)'
    // const option = 0
    // const product = this.state.product
    const menu = this.state.menu
    return (
<div>
<div className="row">
  <div className="col-sm-6">
    {menu === 0  && <GeneralView/>}
    {menu === 1  && <ContactView/>}
    {menu === 2  && <ProductsView/>}
    {menu === 3  && <ServicesView/>}
  </div>

  <div className="col-sm-6" style={{padding: '0 1em'}}>
    <div className="g-mb-20">

      <ul className="nav u-nav-v1-1 u-nav-primary u-nav-rounded-5 g-brd-bottom--md g-brd-primary g-mb-20" role="tablist" data-target="nav-1-1-default-hor-left-rounded-underline" data-tabs-mobile-type="slide-up-down" data-btn-classes="btn btn-md btn-block u-btn-outline-primary g-mb-20">
        <li className="nav-item" style={{display: 'inline-block'}}>
          <a className={"g-cursor-pointer nav-link g-rounded-bottom-0 " + (menu===0 && 'active')}
             onClick={this.setMenu.bind(this, 0)}>General</a>
        </li>
        <li className="nav-item" style={{display: 'inline-block'}}>
          <a className={"g-cursor-pointer nav-link g-rounded-bottom-0 " + (menu===1 && 'active')}
             onClick={this.setMenu.bind(this, 1)}>Contact</a>
        </li>
        <li className="nav-item" style={{display: 'inline-block'}}>
          <a className={"g-cursor-pointer nav-link g-rounded-bottom-0 " + (menu===2 && 'active')}
             onClick={this.setMenu.bind(this, 2)}>Products</a>
        </li>
        <li className="nav-item" style={{display: 'inline-block'}}>
          <a className={"g-cursor-pointer nav-link g-rounded-bottom-0 " + (menu===3 && 'active')}
             onClick={this.setMenu.bind(this, 3)}>Services</a>
        </li>
      </ul>

    </div>

    <div className="tab-content">
      {menu === 0 && <GeneralForm/>}
      {menu === 1 && <ContactForm/>}
      {menu === 2 && <ProductForm/>}
      {menu === 3 && <ServiceForm/>}
    </div>

  </div>
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



// <ul style={{
//       border: '2px solid '+colors[8],
//       borderBottom: '2px solid '+colors[8],
//       padding: '1em', borderRadius: '3px',
//       backgroundColor: '#fff'}}>
//   <li onClick={this.setMenu.bind(this, 0)}
//     style={{userSelect: 'none', color: menu === 0  ? colors[8] : '#999'}}
//     className="g-cursor-pointer d-inline-block">General</li>
//   <li onClick={this.setMenu.bind(this, 1)}
//     style={{userSelect: 'none', color: menu === 1  ? colors[8] : '#999'}}
//     className="g-cursor-pointer d-inline-block g-ml-10">Products</li>
//   <li onClick={this.setMenu.bind(this, 2)}
//     style={{userSelect: 'none', color: menu === 2  ? colors[8] : '#999'}}
//     className="g-cursor-pointer d-inline-block g-ml-10">Services</li>
// </ul>


// <div style={{border: '1px solid #ddd', padding: '1em', height: '14.75em', marginRight: 0}}>
//   <form>
//     <legend className="g-font-size-default">Title & Subtitle</legend>
//     <InputComponent id="servicesTitle"
//         field="servicesTitle" placeholder="Title"/>
//     <TextAreaComponent id="servicesSubtitle"
//         field="servicesSubtitle" placeholder="Subtitle"/>
//   </form>
// </div>
