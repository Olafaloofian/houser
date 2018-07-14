import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './component/dashboard/Dashboard'
import Wizard from './component/wizard/Wizard'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/wizard' component={Wizard} />
    </Switch>
)