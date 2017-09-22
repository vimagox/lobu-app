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
  option2: {
    border: '1px solid #eee',
    padding: '.5em 1em',
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
    },
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
  },
  checkAvailability: {
    cursor: 'pointer',
    padding: '0 1em',
    textAlign: 'center',
    border: '1px solid #ddd',
    ':hover': {
      color: '#444'
    }
  }
})


export default class BusinessSettings extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      category: '',
      domain: '',
      location: '',
      state: '',
      color: 0,
      bitcoin: false,
      delivery: false,
      card: false
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

  render() {
    const b = {color: 1, name: this.state.name || 'Rainbow',
        title: this.state.category || 'Face Painting',
        uid: this.state.uid || 'rainbow'}
    const bgImg = 'url(/img-temp/400x270/img1.jpg)'
    const option = 0

    return (
    <div className="tab-content">
      <div className="row">
        <div className="col-sm-6 g-mb-10">
        <div className="g-pos-fix--sm">

        <div className="g-pa-0" style={{marginTop: 0}}>
        <div className="u-heading-v2-1--bottom g-mb-30">
          <h2 className="u-heading-v2__title g-mb-10">Business Card</h2>
          <h4 className="g-font-weight-200">Setup your business card</h4>
        </div>

          <div className={css(styles.template)}>
            <div className={css(styles.box)}>
              <div className="entry-post">
                <div className={css(styles.image)}
                  style={{backgroundImage: bgImg}}>
                  <div className="thumbnail-oberlay"></div>
                </div>
                <div className={css(styles.content)}>

                  <div style={{position:'absolute', left: '1em', bottom: '1em'}}>
                    {this.state.delivery && <FontAwesome name="truck" style={{transform: 'scaleX(-1)', marginRight: '1em', color: '#999'}}/>}
                    {this.state.bitcoin && <FontAwesome name="bitcoin" style={{marginRight: '1em', color: '#999'}}/>}
                    {this.state.card && <FontAwesome name="credit-card" style={{marginRight: '1em', color: '#999'}}/>}
                  </div>

                  <div className={"time time"+this.props.time}>
                    <a style={{backgroundColor: colors[this.state.color]}}>B <span>{this.props.state || 'STATE'}</span></a>
                  </div>
                  <div className="entry-title">
                    <h2 className={css(styles.title)}>{this.state.name || 'Business Name'}</h2>
                    <div className={css(styles.subtitle)}>{this.state.category || 'Business Category'}</div>
                    <div className={css(styles.uri)} style={{color: colors[this.state.color]}}>/{this.state.domain || 'your-lobu-domain'}</div>
                    <div className={css(styles.footer)}>{this.state.location || 'Your City'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>



        <div className="g-mt-20 col-sm-6" style={{padding: '0 1em'}}>

          <div className="w-100" style={{border: '1px solid #ddd', padding: '1em', height: '22.5em'}}>
            <form>
            <div className="form-group g-mb-10">
              <input
                id='name'
                onChange={this.handleChange}
                className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15" type="text"
                style={{color: this.state.name ? '#000' : '#aaa', fontWeight: this.state.name ? 'bold' : 'regular'}}
                placeholder={this.state.name || "Business Name. ie: Rainbow"}/>
            </div>
            <div className="form-group g-mb-10">
              <input
                id='category'
                onChange={this.handleChange}
                className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15" type="text"
                style={{color: this.state.category ? '#222' : '#aaa', fontWeight: this.state.category ? 'bold' : 'regular'}}
                placeholder={this.state.category || "Business Category. ie: Face Painting"}/>
            </div>
            <div style={{display: 'flex', flexFlow: 'row', justifyContent: 'stretch', padding: 0, margin: 0, height: '3.5em'}}>
              <div style={{flexGrow:0, lineHeight: '3.4em', fontSize: '1.1em', marginRight: '.25em'}}>{"https://lobu.us/"}</div>
              <div className="form-group g-mb-10" style={{flexGrow: 1}}>
                <input
                  id='domain'
                  onChange={this.handleChange}
                  className="form-control g-bg-gray-light-v5 g-brd-gray-light-v4 g-brd-secondary--focus rounded-0 g-pa-15" type="text"
                  style={{color: this.state.domain ? '#222' : '#aaa', fontWeight: this.state.domain ? 'bold' : 'regular'}}
                  placeholder={this.state.domain || "Lobu Domain. ie: rainbow"}/>
              </div>
              <div className={css(styles.checkAvailability)}>
                <div><FontAwesome name="check" size="2x"/></div>
                <div style={{marginTop: '-1em'}}>
                  <a className="" style={{
                    lineHeight: '3.4em',
                    fontSize: '.75em',
                    textDecoration: 'underline !important',
                    color: '#222'}}>Check Availability</a></div>
              </div>
            </div>

            <div>
              <div style={{display: 'flex', flexFlow: 'row', justifyContent: 'stretch'}}>
                <Checkbox id="card" label="Credit Cards Accepted" handleCheck={this.handleCheck}/>
                <div style={{flexGrow: 1, marginLeft: '.8em'}}>
                  <Checkbox id="bitcoin" label="Bitcoin Accepted" handleCheck={this.handleCheck}/>
                </div>
              </div>
              <Checkbox id="delivery" label="Delivery Service Offered" handleCheck={this.handleCheck}/>
            </div>

            </form>
          </div>


          <div className="w-100 g-mt-20" style={{border: '1px solid #ddd', padding: '1em', display: 'block'}}>
            <div className="row">
            <div className="col-sm-12">
              <div className="form-group g-mt-0">
                <label for="exampleInputFile">Business Image</label>
                <div className={css(styles.option)} style={{height: '6em', display: 'flex', justifyContent: 'center'}}>
                  <input type="file" className="form-control-file g-mt-20" id="exampleInputFile" aria-describedby="fileHelp"/>
                  <small id="fileHelp" className="form-text text-muted">Upload any image that best represents your business. ie: store front, logo, main product, etc.</small>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group g-mt-10">
                <label for="exampleInputFile">Business Theme Color</label>
                <div className={css(styles.option2)}>
                {[0,1,2,3,4,5,6,7,8,9,10].map((c, i) => (
                  <div onClick={this.handleColor.bind(this, i)}
                    className={css(styles.color)}
                    style={{backgroundColor: colors[i],
                    border: "4px solid " + (this.state.color === i ? '#000' : '#fff') }}
                    ></div>
                ))}
                </div>
              </div>
            </div>
          </div>
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

// <div className="g-pt-10" style={{width: '364px'}}>
//   <button className="g-cursor-pointer btn btn-block u-btn-primary g-mt-40 g-font-size-20 g-py-20">
//     Save Business Cover
//   </button>
// </div>


// <div className="col-sm-12">
//   <div className="form-group g-mt-10">
//     <label for="exampleInputFile">Business Location</label>
//     <div>
//       <a className="btn u-btn-black btn-block g-py-7"
//           href="#modal1"
//           data-modal-target="#modal1"
//           data-modal-effect="fadein">Select your City
//       </a>
//       <Modal title={"Select your city"}>
//         <input type="select"/>
//         <input type="select"/>
//         <input type="select"/>
//       </Modal>
//     </div>
//   </div>
// </div>
