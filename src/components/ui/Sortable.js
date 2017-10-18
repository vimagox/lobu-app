import React from 'react'
import FontAwesome from 'react-fontawesome'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  item: {
    border: '1px solid #ddd',
    padding: '1em',
    listStyle: 'none',
    height: '3.8em'
  },
  trash: {
    fontSize:'1.2em',
    color: '#ccc',
    verticalAlign: 'bottom',
    cursor: 'pointer',
    ':hover': {
      color: 'red'
    }
  },
  edit: {
    marginLeft: '1em',
    fontSize:'1.2em',
    verticalAlign: 'bottom',
    color: '#ccc',
    cursor: 'pointer',
    ':hover': {
      color: 'orange'
    }
  }
})

const SortableItem = SortableElement(({value}) =>
  <li className={css(styles.item)}>
    <FontAwesome name="bars" style={{paddingRight: '1em'}}/>{value.name}
    <div style={{float: 'right'}}>
      <FontAwesome name="trash" className={css(styles.trash)}/>
      <FontAwesome name="edit" className={css(styles.edit)}/>
    </div>
  </li>
)

const DeletableItem = SortableElement(({value}) =>
  <li className={css(styles.item)}
      style={{border: '1px solid red', backgroundColor: 'red', color: '#fff'}}>
    <FontAwesome name="bars" style={{paddingRight: '1em'}}/>{value.name}
    <button className="btn" style={{float:'right', backgroundColor: '#fff', color: 'red', margin: '-.35em 0 0 0'}}>
      <FontAwesome name="trash" style={{paddingRight: '.5em'}}/>Remove
    </button>
    <button className="btn" style={{float:'right', margin: '-.35em 1em 0 0', backgroundColor: '#000'}}>Cancel</button>
  </li>
)

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        value.delete ?
        <DeletableItem
            key={`item-${index}`}
            index={index}
            value={value} /> :
        <SortableItem
            key={`item-${index}`}
            index={index}
            value={value} />
      ))}
    </ul>
  )
})

export default class Sortable extends React.Component {
  state = {
    items: [{name: 'Item 1', delete: true}, {name: 'Item 2'}],
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    })
  }

  handleOnClick = e => {
    alert('simon')
  }

  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd}/>
  }
}
