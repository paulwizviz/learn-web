import React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Inbox = () =>{
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <h1>Inbox</h1>
            <Item>This is an example of the content of inbox</Item>
        </Box>
    );
};

export default Inbox;