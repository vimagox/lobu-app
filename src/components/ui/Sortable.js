import React from 'react'
import FontAwesome from 'react-fontawesome'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  item: {
    border: '1px solid #ddd',
    padding: '1em',
    listStyle: 'none'
  }
})

const SortableItem = SortableElement(({value}) =>
  <li className={css(styles.item)}>
    <FontAwesome name="bars" style={{paddingRight: '1em'}}/>{value}
  </li>
)

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  )
})

export default class Sortable extends React.Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}
