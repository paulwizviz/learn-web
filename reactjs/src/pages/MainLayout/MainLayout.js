// Copyright 2020 Paul Sitoh
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// React
import React from 'react';

// Others
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Material ui
import { 
    makeStyles,
    useTheme
} from '@material-ui/core/styles';

import {
    useMediaQuery
} from '@material-ui/core';

// Projects
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 56,
        height: '100%',
        [theme.breakpoints.up('sm')]:{
            paddingTop: 64
        }
    },
    shiftContent:{
        paddingLeft: '100px'
    },
    content:{
        height: '100%',
        paddingLeft: 300
    }
}));


const MainLayout = (props) =>{
    const classes = useStyles();
    const { children } = props;
    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true
    });

    console.log(isDesktop);

    return (
        <div 
            className={clsx({
                [classes.root]: true,
                [classes.shiftContest]: isDesktop
            })}
        >
            <Topbar/>
            <Sidebar />
            <main className={classes.shiftContent}>{ children }</main>
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.element
};

export default MainLayout;