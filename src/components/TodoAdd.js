import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const AddTodo = () => {

    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState();
    const handleChange = event => setNewTodo(event.target.value);
    const handleClick  = () => dispatch({
        type: 'ADD_TODO',
        payload: {
            label: newTodo,
            id: Math.ceil(Math.random() * 100)
        }
    })

    return (
        <>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button onClick={handleClick}>ADD TODO </button>
        </>
    )
    
}

