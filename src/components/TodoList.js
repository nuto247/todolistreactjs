import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const handleClick = id => dispatch({
        type: 'DELETE_TODO',
        payload: id,
    })

    if(!todos || !todos.length){
        return <p>No todos</p>
    }

    return (
        <>
            <ul>
                {todos.map(todo => <li onClick={() => handleClick(todo.id)}>{todo.label}</li>)}
            </ul>

        </>
    )
}