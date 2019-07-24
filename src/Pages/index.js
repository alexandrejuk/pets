import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './Home'
import Login from './Login'

const Pages = () => (
  <Switch>
    <Route path='/home' component={Home}/>
    <Route path='/pet/new' component={() => <h1>I'm a new pet page!</h1>}/>
    <Route path='/login' component={Login}/>
    <Redirect from='/' to='/home'/>
  </Switch>
) 

export default Pages