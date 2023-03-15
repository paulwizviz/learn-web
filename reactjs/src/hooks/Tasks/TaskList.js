import React from 'react';
import PropTypes from 'prop-types';

const Task = ({task}) => {
    return(
        <label>{task.text}</label>
    );
};

Task.propTypes = {
    task: PropTypes.object
};

const TaskList = ({tasks}) =>{
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task}/>
                </li>
            ))}
        </ul>
    );
};


TaskList.propTypes = {
    tasks: PropTypes.array
};

export default TaskList;