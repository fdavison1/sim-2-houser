import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dash from './components/Dash'
import Wiz from './components/Wiz'


export default (
    <Switch>
        <Route exact path='/' component={Dash}></Route>
        <Route path='/wizard' component={Wiz}></Route>
    </Switch>
    )
    
    
