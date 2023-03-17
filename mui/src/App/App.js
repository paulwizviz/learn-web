import React from 'react';

import { ThemeProvider} from '@mui/material/styles';
import Route from './Routes';

import theme from './theme';
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Route/>
        </ThemeProvider>
    );
};

export default App;