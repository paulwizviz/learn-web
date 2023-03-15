import React from 'react';
import PropTypes from 'prop-types';

import {
    Topbar,
    Sidebar
} from '../components';

const MainLayout = ({style, children}) =>{


    return(
        <div>
            <Topbar style={style}/>
            <Sidebar/>
            <main style={{paddingLeft:'100px'}}>{ children }</main>
        </div>
    );

};

MainLayout.propTypes = {
    children: PropTypes.element,
    style: PropTypes.object
};

export default MainLayout;