import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Button } from 'react-bootstrap'

export default ({ isLoading, text, loadingText, disabled = false, ...props }) => (
  <Button className={props.className} disabled={ disabled || isLoading } {...props}>
    { ! isLoading ? text : loadingText }
    { isLoading && <FontAwesome name="refresh" spin/> }
  </Button>
)
