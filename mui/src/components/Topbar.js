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

// Material-UI
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography
} from '@material-ui/core';

// Others
import PropTypes from 'prop-types';

const Topbar = () => {

    //const {className} = props;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src="./assets/logos/hamburger.png" width="20px" height="20px"/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

Topbar.propTypes = {
    className: PropTypes.string,
};

export default Topbar;