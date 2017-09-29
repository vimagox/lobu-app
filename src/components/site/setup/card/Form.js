import React from 'react'
import {connect} from 'react-redux'
// import FontAwesome from 'react-fontawesome'
import {StyleSheet,css} from 'aphrodite'
import Checkbox from '../../../form/Checkbox'
import InputComponent from '../../../form/InputComponent'
import {colors} from '../../../../constants/Colors'
import {upToSM, upToMD, upToLG, upToXL} from '../../../../constants/Media'
import {form} from '../../../../actions'
// import FileReaderInput, {uploadFile} from 'react-file-reader-input'


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
    form.setField(id, !this.props[id])
  }

  handleColor(id) {
    form.setField('color', id)
  }

  handleChange = (e, results) => {
    results.forEach(result => {
      const [e, file] = result
      console.log(e.target.result)
      //  this.props.dispatch(uploadFile(e.target.result));
      console.log(`Successfully uploaded ${file.name}!`);
    });
  }

  // <FileReaderInput as="binary" id="my-file-input"
  //                  onChange={this.handleChange}>
  //     <button>Select a filexxx</button>
  // </FileReaderInput>


  render() {
    const color = this.props.color
    return (
      <div style={{display: 'block',
        borderRadius: '3px',
        border: '1px solid #ddd',
        padding: '1em 1em 0 1em'}}>
      <div className="row g-px-10">
        <form>
          <legend className="g-font-size-default">Business Card</legend>
          <InputComponent
              id="name" field="name"
              value={this.props.name}
              placeholder={"Business Name. ie: Rainbow"}/>
          <div style={{fontWeight: 'bold', color: 'red', margin: '-.5em 0 .5em 0'}}>Enter your business name</div>
          <InputComponent
              id="category" field="category"
              value={this.props.category}
              placeholder={"Business Category. ie: Face Painting"}/>
          <div style={{fontWeight: 'bold', color: 'red', margin: '-.5em 0 .5em 0'}}>Enter your business category</div>
          <div>
            <div style={{display: 'flex', flexFlow: 'row', justifyContent: 'flex-start', marginLeft: '-1em'}}>
              <Checkbox id="card" field="card" label="Credit Cards Ok" handleCheck={this.handleCheck}/>
              <Checkbox id="bitcoin" field="bitcoin" label="Bitcoin Ok" handleCheck={this.handleCheck}/>
              <Checkbox id="delivery" field="delivery" label="Delivery Service" handleCheck={this.handleCheck}/>
            </div>
          </div>


          <div className="form-group g-mt-12">
              {[0,1,2,3,4,5,6,7,8,9,10].map((c, i) => (
                <div key={"color"+i}
                    onClick={this.handleColor.bind(this, i)}
                    className={css(styles.color)}
                    style={{backgroundColor: colors[i],
                    border: "4px solid " + (color === i ? '#000' : '#fff') }}/>
              ))}
          </div>
        </form>
      </div>
      </div>
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
    delivery: store.card.delivery
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
