import React from 'react';

import {
    Route,
    Switch,
} from 'react-router-dom';

import {
    Tasks
} from '../hooks';

const Dashboard = () => {
    const style={
        root:{
            backgroundColor:'LightBlue'
        }
    };
    return (
        <div style={style.root}>
            <h1>Dashboard</h1>
            <p>This is the content.</p>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <h1 style={{color:'green'}}>About</h1>
                </Route>
                <Route path="/users">
                    <h1 style={{color:'#00008B'}}>Users</h1>
                </Route>
                <Route path="/">
                    <h1 style={{color:'red'}}>Home</h1>
                </Route>
            </Switch>

            <Tasks/>

        </div>
    );
};

export default Dashboard;