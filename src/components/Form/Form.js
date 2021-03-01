import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../actions/TaskActions';

function Form() {
    const dispatch = useDispatch();
    let id = useSelector(state => state.task.list.length + 1);
    const [task, setTask] = useState({ id });

    const submit = e => {
        e.preventDefault();
        setTask({...task, id: id+1});
        dispatch(addTask(task));
    }

    return (
        <form className="add-task">
            <input
                type="text"
                placeholder="Title"
                onChange={(e) => setTask({ ...task, title: e.target.value })} />
            <input
                type="text"
                placeholder="Detail"
                onChange={(e) => setTask({ ...task, info: e.target.value })} />
            <button onClick={submit}>Add</button>
        </form>
    );
}

export default Form;
