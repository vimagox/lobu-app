import React from 'react'
import {connect} from 'react-redux'
import {upToSM} from '../../constants/Media'
import {colors} from '../../constants/Colors'
import {StyleSheet,css} from 'aphrodite'

const DFT_COLOR = colors[8]
const ACTIVE_COLOR = '#fff'

const sections = [
  {title: 'Setup Card',    subtitle: 'Setup card'},
  {title: 'Setup Site',    subtitle: 'Setup site'},
  {title: 'Preview Site', subtitle: 'Preview site'},
]

const styles = StyleSheet.create({
  page: {
    marginBottom: '30px',
    display: 'flex', flexFlow: 'row',
    justifyContent: 'flex-start', alignItems: 'center',
    paddingTop: '1em',
    backgroundColor: '#333',
    marginTop: '-3.5em',
    [upToSM]: {
      marginTop: '-.9em',
      width: '100%'
    }
  },
  section: {
    margin: '0 30px 30px 0',
    display: 'flex', flexFlow: 'row',
    justifyContent: 'flex-start', alignItems: 'center',
    padding: '1em',
    [upToSM]: {
      marginTop: '-.9em',
      width: '100%'
    }
  },
})

class HeaderSection extends React.Component {
  render() {
    const active = parseInt(this.props.stage, 0) === parseInt(this.props.idx, 0)
    const color = active ? ACTIVE_COLOR : DFT_COLOR
    return (
    <div className={css(styles.section)}>
      <div style={{display: 'flex', alignItems: 'flex-start'}}>
        <div className="badge g-mt-20 g-mr-10 g-px-10"
            style={{fontSize: '2em',
              backgroundColor: (!active ? colors[8] : '#fff'),
              color: (active ? colors[8] : '#fff'),
            }}>
          {this.props.idx+1}
        </div>
        <div className="u-heading-v2-1--bottom g-mb-0">
          <h2 style={{
              color: color,
              fontSize: '1.4em',
              borderBottom: '2px solid '+(active ? ACTIVE_COLOR : colors[8])
            }}
           className="u-heading-v2__title">
            {this.props.title}
          </h2>
        </div>
      </div>
    </div>
    )
  }
}


class Header extends React.Component {
  render() {
    const stage = this.props.stage
    return (
    <div className={css(styles.page)}>
      <div className="container">
        <h2 style={{
            color: '#fff',
            margin: '2em 0 0 0',
            fontSize: '1.5em',
            fontWeight: 'normal'
          }}>
          Publish your lobu site with these simple steps:
        </h2>
        <div className="d-flex" style={{marginLeft: '-1em'}}>
        {sections.map((s,i) => (
          <HeaderSection
              key={"sec"+i+stage}
              idx={i}
              stage={stage}
              title={s.title}
              subtitle={s.subtitle}/>
        ))}
      </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    stage: store.account.stage
  }
}

export default connect(mapStateToProps)(Header)

// <div className={css(styles.subtitle)}>
//   <h4 style={{marginTop:'-.5em', color: color}}
//     className="g-font-weight-200 g-font-size-14 g-">
//     {this.props.subtitle}
//   </h4>
// </div>
