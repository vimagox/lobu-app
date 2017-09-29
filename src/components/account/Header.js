import React from 'react'
// import {connect} from 'react-redux'
import Section from './HeaderSection'
import {upToSM} from '../../constants/Media'
import {StyleSheet,css} from 'aphrodite'

const sections = [
  {title: 'Card',    subtitle: 'Setup your lobu card'},
  {title: 'Site',    subtitle: 'Setup your lobu site'},
  {title: 'Preview', subtitle: 'Preview your lobu site'},
]

const styles = StyleSheet.create({
  section: {
    marginBottom: '30px',
    display: 'flex', flexFlow: 'row',
    justifyContent: 'flex-start', alignItems: 'center',
    paddingTop: '1em',
    backgroundColor: '#000',
    marginTop: '0',
    [upToSM]: {
      marginTop: '-.9em',
      width: '100%'
    }
  },
})

export default class Header extends React.Component {
  render() {
    return (
    <div className={css(styles.section)}>
      <div className="container d-flex">
        {sections.map((s,i) => (
          <Section
              key={"sec"+i}
              idx={i}
              title={s.title}
              subtitle={s.subtitle}/>
        ))}
      </div>
    </div>
    )
  }
}
