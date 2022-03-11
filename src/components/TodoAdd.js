import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddTodo = () => {

    //const notify = () => toast("Wow so easy!");

    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState();

    const handleChange = event => setNewTodo(event.target.value);

    const handleClick = () => {

        dispatch({
            type: 'ADD_TODO',
            payload: {
                label: newTodo,
                id: Math.ceil(Math.random() * 100)
            }
        })

        toast(newTodo + " has been added to your todo list");

    }

    return (
        <>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button onClick={handleClick}>ADD TODO </button>
        <ToastContainer />
        </>
    )
    
}

