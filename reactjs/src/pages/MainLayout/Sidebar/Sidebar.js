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
import { withRouter } from 'react-router';

// Others
import PropTypes from 'prop-types';

// Materials UI core
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Material-ui icon
import AccessTimeIcon from '@material-ui/icons/AccessTime';

// Material UI styles
import {makeStyles} from '@material-ui/core/styles';

// Body code
const useStyles = makeStyles(()=> ({
    drawer: {
        width: '100px',
        flexShrink: 0,
    },
    drawerPaper: {
        width: '100px',
    },
}));

const navigationItems = [
    {
        text: 'access',
        icon: <AccessTimeIcon/>
    }
];


const SideBar = () => {

    const classes = useStyles();
    return (
        <Drawer className={classes.drawer} 
            // classes={{
            //     paper: classes.drawerPaper,
            // }} 
            variant='permanent'>
            <List>
                {
                    navigationItems.map((item,index)=>{
                        return(
                            <ListItem key={index}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.text}</ListItemText>
                            </ListItem>
                        );
                    })
                }
            </List>
            <Divider/>
        </Drawer>
    );
    
};

SideBar.propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool
};

export default withRouter(SideBar);