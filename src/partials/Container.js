import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Excercise from '../pages/Excercise';
import Registration from '../pages/Registration';
import Login from '../pages/Login';

//
function Container()
{
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/registration' component={Registration} />
            <Route path='/login' component={Login} />
            <Route path='/excercise' component={Excercise} />
        </Switch>
    );
}

export default Container;