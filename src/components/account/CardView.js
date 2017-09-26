import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet,css} from 'aphrodite'
import {colors} from '../../constants/Colors'
import FontAwesome from 'react-fontawesome'
import {upToXS, upToSM, upToMD, upToLG, upToXL} from '../../constants/Media'
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react'

const styles = StyleSheet.create({
  template: {
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
    height: '25em',
    border: '1px solid #ddd',
    maxWidth: '360px',
    overflow: 'hidden',
    [upToXL]: {
      height: '25em',
    },
    [upToLG]: {
      maxWidth: '400px',
      // border: '1px solid blue',
    },
    [upToMD]: {
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

class CardView extends React.Component {
  render() {
    const name = this.props.name
    const category = this.props.category
    const domain = this.props.domain
    const color = this.props.color
    const bgImg = this.props.image || '/images/test/4.jpg'// 'url(/img-temp/400x270/img1.jpg)'
    return (
    <div className="g-pos-fix--sm">
      <div className="g-pa-0" style={{marginTop: 0}}>
        <div className={css(styles.template)}>
          <div className={css(styles.box)}>
            <div className="entry-post">

            <div style={{height: '170px', overflow: 'hidden', cursor: 'pointer', position: 'relative',
                backgroundColor: '#000'}}>
              <div style={{position: 'absolute', top: '1em', left: '1em', color: '#fff', fontSize: '1.2em'}}>
                Click here to upload an image that best describes your business.
                ie: store front, logo, main product, etc.
              </div>
              <div style={{position: 'absolute', bottom: '1em', right: '1em', cursor: 'pointer'}}>
                <FontAwesome name="upload" size="3x" style={{color: '#fff', backgroundColor: '#000', padding: '.25em', borderRadius: '4px'}}/>
              </div>
            </div>




              <div className={css(styles.content)}>
                <div style={{position:'absolute', left: '1em', bottom: '1em'}}>
                  <FontAwesome name="truck" style={{transform: 'scaleX(-1)', marginRight: '1em', color: '#999'}}/>
                  <FontAwesome name="bitcoin" style={{marginRight: '1em', color: '#999'}}/>
                  <FontAwesome name="credit-card" style={{marginRight: '1em', color: '#999'}}/>
                </div>
                <div className={"time time"+this.props.time}>
                  <a style={{backgroundColor: colors[color]}}>B <span>{'STATE'}</span></a>
                </div>
                <div className="entry-title">
                  <h2 className={css(styles.title)}>{name || 'Business Name'}</h2>
                  <div className={css(styles.subtitle)}>{category || 'Business Category'}</div>
                  <div className={css(styles.uri)} style={{color: colors[color]}}>/
                    {domain || 'your-lobu-domain'}
                  </div>
                  <div className={css(styles.footer)}>{'Your City'}</div>
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

const mapStateToProps = (store) => {
  return {
    image: store.cardImage,
    name: store.businessName,
    category: store.businessCategory,
    domain: store.businessDomain,
    color: store.businessColor
  }
}

export default connect(mapStateToProps)(CardView)

// <div className={css(styles.image)}
//   style={{backgroundImage: bgImg}}>
// </div>


// <div style={{height: '170px', overflow: 'hidden'}}>
// <CloudinaryContext cloudName="demo">
//   <Image publicId="sample">
//     <Transformation width="400" height="270" crop="scale"/>
//   </Image>
// </CloudinaryContext>
// </div>


// <CloudinaryContext cloudName="demo">
//   <Image publicId="black">
//     <Transformation width="400" height="270" crop="scale"/>
//   </Image>
// </CloudinaryContext>
