import React from 'react'
// import {connect} from 'react-redux'
// import FontAwesome from 'react-fontawesome'
// import Checkbox from '../form/Checkbox'
// import BusinessCover from '../business/Cover'
import {upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'
import {StyleSheet,css} from 'aphrodite'
// import {colors} from '../../constants/Colors'
// import Template from '../business/Template'
// import Modal from '../Modal'

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


export default class AccountSettings extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // name: localStorage.getItem('lobuname') || '',
      // category: localStorage.getItem('lobucat') || '',
      // domain: localStorage.getItem('lobudomain') || '',
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
    const option = 0

    return (
    <div className="tab-content" style={{minHeight: '58em', padding: '1em'}}>
      <div className="row">
        <div className="col-sm-6 g-mb-10">
        <div className="g-pos-fix--sm">


        <div className="g-pa-0" style={{marginTop: 0}}>
        <div className="u-heading-v2-1--bottom g-mb-30">
          <h2 className="u-heading-v2__title g-mb-10">Account Preferences</h2>
          <h4 className="g-font-weight-200">Your account</h4>
        </div>



          <div className={css(styles.template)}>
          </div>
          <div className="g-pt-10" style={{width: '364px'}}>
            <button className="g-cursor-pointer btn btn-block u-btn-primary g-mt-40 g-font-size-20 g-py-20">
              Save Account
            </button>
          </div>
        </div>
        </div>
        </div>



        <div className="g-mt-20 col-sm-6" style={{padding: '0 1em'}}>




        <div>
          <form className="g-brd-around g-brd-gray-light-v4 g-pa-30 g-mb-30">
            <div className="form-group g-mb-25">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control form-control-md rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
            </div>

            <div className="form-group g-mb-25">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control form-control-md rounded-0" id="exampleInputPassword1" placeholder="Password"/>
            </div>

            <div className="form-group g-mb-25">
              <label for="exampleSelect1">Example select</label>
              <select className="form-control rounded-0" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className="form-group g-mb-25">
              <label for="exampleSelect2">Example multiple select</label>
              <select multiple className="form-control rounded-0" id="exampleSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className="form-group g-mb-25">
              <label for="exampleTextarea">Example textarea</label>
              <textarea className="form-control form-control-md rounded-0" id="exampleTextarea" rows="6"></textarea>
            </div>

            <div className="form-group g-mb-25">
              <label for="exampleInputFile">File input</label>
              <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
              <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. Its a bit lighter and easily wraps to a new line.</small>
            </div>

            <fieldset className="form-group g-mb-25">
              <legend className="g-font-size-default">Radio buttons</legend>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="radio" className="form-check-input mr-1" name="optionsRadios" id="optionsRadios1" value="option1" checked/>Option one is this and that&mdash;be sure to include why its great
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="radio" className="form-check-input mr-1" name="optionsRadios" id="optionsRadios2" value="option2"/>Option two can be something else and selecting it will deselect option one
                </label>
              </div>
              <div className="form-check disabled">
                <label className="form-check-label">
                  <input type="radio" className="form-check-input mr-1" name="optionsRadios" id="optionsRadios3" value="option3" disabled/>Option three is disabled
                </label>
              </div>
            </fieldset>

            <div className="form-check">
              <label className="form-check-label g-mb-20">
                <input type="checkbox" className="form-check-input mr-1"/>Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-md u-btn-primary rounded-0">Submit</button>
          </form>

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
