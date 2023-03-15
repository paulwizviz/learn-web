import React, { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

let nextId = 3;
const initialTasks = [
    {id: 0, text: 'Hello'}
];

const tasksReducer = (tasks, action) => {
    switch(action.type) {
    case 'add': {
        {console.log(...tasks);}
        return [...tasks, {
            id: action.id,
            text: action.text
        }];
    }
    default: {
        throw Error('Unknown action');
    }
    }
};

const Tasks = () => {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    const handleAddTask = (text) => {
        dispatch({
            type: 'add',
            id: nextId++,
            text: text
        });
    };

    return (
        <>
            <h2>Tasks</h2>
            <AddTask onAddTask={handleAddTask}/>
            <TaskList tasks={tasks}/>
        </>
    );
};

export default Tasks;