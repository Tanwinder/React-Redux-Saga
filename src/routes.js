import React from 'react';

import { Switch, Route } from 'react-router-dom'
import Todo from './container/Todo'

export default function() {
    return(
        <Switch>
            <Route path="/todo" render={()=> <Todo />} />
            <Route path="/login" render={()=> <div> LoggedIn </div>} />
            <Route path="/" render={()=> <div> Home </div>} />
        </Switch>
    )
}