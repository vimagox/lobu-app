import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home              from './containers/Home'
import Region            from './containers/Region'
import Business          from './containers/Business'
import {states}          from './constants/States'

export default ( ) => (
  <Switch>
    <Route component={Home} path="/" exact/>
    { states.map((s, index) => (
        <Route key={'route'+index} component={Region} path={'/'+s.id} exact/>
    )) }
    <Route component={Business}/>
  </Switch>
)
