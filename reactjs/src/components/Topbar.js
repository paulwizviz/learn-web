import React from 'react';
import PropTypes from 'prop-types';

const Topbar = ({ style }) => {

    return (
        <div style={style.root}>
            <h1>Topbar</h1>
        </div>
    );
};

Topbar.propTypes = {
    style: PropTypes.object
};

export default Topbar;