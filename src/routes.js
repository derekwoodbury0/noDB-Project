import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main2 from './Components2/Main2'
import Main from './Components/Main'

export default (
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/hello" component={Main2}/>
    </Switch>
)