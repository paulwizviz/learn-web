import React from 'react';
import { BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

import {
    Inbox,
    Dashboard as DashboardComponent,
    MainLayout,
} from '../pages';

import RouteWithLayout from './RouteWithLayout';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/main"/>
                <RouteWithLayout component={DashboardComponent} exact layout={MainLayout} path="/main"/>
                <RouteWithLayout component={Inbox} exact layout={MainLayout} path="/all"/>
            </Switch>
        </Router>
    );
};

export default Routes;