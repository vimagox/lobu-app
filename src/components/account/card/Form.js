import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet,css} from 'aphrodite'
import {default as UI} from '../../ui'
import {colors} from '../../../constants/Colors'
import {upToSM, upToMD, upToLG, upToXL} from '../../../constants/Media'
import {account} from '../../../actions'


const styles = StyleSheet.create({
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

class CardForm extends React.Component {

  handleCheck = (id, value) => {
    account.setField(id, !this.props[id])
  }

  handleColor(id) {
    account.setField('color', id)
  }

  handleChange = (field, value) => {
    account.setField(field, value)
  }

  // handleChange2 = (e, results) => {
  //   results.forEach(result => {
  //     const [e, file] = result
  //     console.log(e.target.result)
  //     //  this.props.dispatch(uploadFile(e.target.result));
  //     // console.log(`Successfully uploaded ${file.name}!`);
  //   });
  // }

  render() {
    const color = this.props.color
    const errors = this.props.errors || {}
    console.log(errors)
    return (
      <form>
        <legend className="g-font-size-default">Business Card</legend>
        <div style={{marginBottom: '.75em'}}>
          <label className="custom-file" style={{width: '100%'}}>
            <input type="file" id="file" className="custom-file-input"/>
            <span className="custom-file-control">
              Select business card image...
            </span>
          </label>
        </div>
        <UI.Input
            id="name"
            field="name"
            handleChange={this.handleChange}
            value={this.props.name}
            placeholder={"Business Name. ie: Rainbow"}/>
        {errors.name && <UI.Error text={errors.name}/>}
        <UI.Input
            id="category"
            field="category"
            handleChange={this.handleChange}
            value={this.props.category}
            placeholder={"Business Category. ie: Face Painting"}/>
        {errors.category && <UI.Error text={errors.category}/>}
        <div>
          <div style={{display: 'flex', flexFlow: 'row', justifyContent: 'flex-start', marginLeft: '-1em'}}>
            <UI.Checkbox id="cards" field="cards" label="Credit Cards Ok" handleCheck={this.handleCheck}/>
            <UI.Checkbox id="bitcoin" field="bitcoin" label="Bitcoin Ok" handleCheck={this.handleCheck}/>
            <UI.Checkbox id="delivery" field="delivery" label="Delivery Service" handleCheck={this.handleCheck}/>
          </div>
        </div>

        <div className="form-group g-mt-12">
          <div style={{color: '#000'}}><strong>Main Business Color</strong></div>
          <div style={{marginLeft: '-.5em'}}>
          {[0,1,2,3,4,5,6,7,8,9,10].map((c, i) => (
            <div key={"color"+i}
                onClick={this.handleColor.bind(this, i)}
                className={css(styles.color)}
                style={{
                    backgroundColor: colors[i],
                    border: "4px solid " + (color === i ? '#000' : '#fff')
                }}/>
          ))}
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    name: store.card.name,
    category: store.card.category,
    domain: store.card.domain,
    color: store.card.color,
    card: store.card.card,
    bitcoin: store.card.bitcoin,
    delivery: store.card.delivery,
    errors: store.card.errors
  }
}

export default connect(mapStateToProps)(CardForm)


// <div className="col-sm-12">
//   <div className="form-group g-mt-0">
//     <label>Business Image</label>
//     <div className={css(styles.option)} style={{height: '6em', display: 'flex', justifyContent: 'center'}}>
//       <input type="file" className="form-control-file g-mt-20" id="exampleInputFile" aria-describedby="fileHelp"/>
//       <small id="fileHelp" className="form-text text-muted">Upload any image that best represents your business. ie: store front, logo, main product, etc.</small>
//     </div>
//   </div>
// </div>


// <FileReaderInput as="binary" id="my-file-input"
//                  onChange={this.handleChange}>
//     <button>Select a filexxx</button>
// </FileReaderInput>
