import React from 'react'
import FontAwesome from 'react-fontawesome'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  component: {
    maxWidth: '12em'
  }
})


export default class SubscribeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {subHover: false}
  }

  onHover(){ this.setState({subHover: true}) }
  onOut(){ this.setState({subHover: false}) }

  render() {
    const subscribed = false
    const hover = this.state.subHover
    return (
      <div className={css(styles.component)}
          onMouseOver={this.onHover.bind(this)}
          onMouseOut={this.onOut.bind(this)}>
      {!subscribed && <button className="btn btn-primary btn-block"
          style={{margin: "-2.5em 0 1em 0", backgroundColor: '#000'}}>
        Subscribe
      </button>}
      {subscribed && !hover && <button className="btn btn-default btn-block"
          style={{margin: "-2.5em 0 1em 0", minWidth: '16em'}}>
        Subscribed <FontAwesome name="check"/>
        </button>}
      {subscribed && hover && <button className="btn btn-default btn-block"
          style={{margin: "-2.5em 0 1em 0", minWidth: '16em'}}>
        Unsubscribe
      </button>}
      </div>
    )
  }
}
