import React from 'react';

import { styled } from '@mui/material/styles';
import { Toolbar, AppBar } from '@mui/material';

import PropTypes from 'prop-types';

const MuiAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open' 
})(({theme, open}) => ({
    color: 'blue',
    [theme.breakpoints.up('sm')]: {
        background: 'red',
        height: '50px',
    },
    ...(
        open && {
            width: '${width}'
        }
    )
}));

const Topbar = ({width}) => {
    const w = width;
    return (
        <MuiAppBar sx={{width: w}}>
            <Toolbar>Hello</Toolbar>
        </MuiAppBar>
        
    );
};


Topbar.propTypes = {
    width: PropTypes.sting,
};

export default Topbar;