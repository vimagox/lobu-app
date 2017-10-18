import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home              from './containers/Home'
import Region            from './containers/Region'
import Business          from './containers/Business'
import Signup            from './containers/Signup'
import Login             from './containers/Login'
import Membership        from './containers/Membership'
import Faq               from './containers/Faq'
import {states}          from './constants/States'
import Account           from './containers/Account'
import Forgot            from './containers/Forgot'
import Terms             from './containers/Terms'


export default ( ) => (
  <Switch>
    <Route component={Home} path="/" exact/>
    { states.map((s, index) => (
        <Route key={'route'+index} component={Region} path={'/'+s.id} exact/>
    )) }
    <Route component={Terms} path="/terms" exact/>
    <Route component={Forgot} path="/forgot" exact/>
    <Route component={Signup} path="/signup" exact/>
    <Route component={Account} path="/business" exact/>
    <Route component={Membership} path="/customer" exact/>
    <Route component={Faq} path="/faq" exact/>
    <Route component={Account} path="/account" exact/>
    <Route component={Login} path="/login" exact/>
    <Route component={Business}/>
  </Switch>
)
