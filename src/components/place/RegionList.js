import React from 'react'
import RegionItem from './RegionItem'
import Columns from './Columns'
import {StyleSheet,css} from 'aphrodite'
import {upToXS} from '../../constants/Media'


const styles = StyleSheet.create({
  section: {
    border: '1px solid #ddd',
    padding: '.5em'
  },
  regions: {
    display: 'flex',
    flexFlow: 'row',
    backgroundColor: '#eee',
    padding: '.5em 1em',
    [upToXS]: {
      display: 'none'
    }
  }
})

export default class RegionList extends React.Component {
  render() {
    const regions = this.props.regions
    const regionKeys = Object.keys(regions)

    return (
    <div className={css(styles.section)}>
      <div className={css(styles.regions)}>
        <Columns totalItems={regionKeys.length}>
          {regionKeys.map((k,i) => (
            <RegionItem key={'region'+i} r={regions[k]}/>
          ))}
        </Columns>
      </div>
    </div>
    )
  }
}
