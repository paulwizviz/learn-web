import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({onAddTask}) => {
    const [text, setText] = useState('');
    return (
        <>
            <input 
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                setText('');
                onAddTask(text);
            }}>Add</button>
        </>
    );
};

AddTask.propTypes = {
    onAddTask: PropTypes.func
};

export default AddTask;