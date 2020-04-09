import React, { useState, useEffect } from 'react';
import api from '../../service/api';
import { FaTrashAlt, FaCheck } from 'react-icons/fa'
import './style.css';
function List() {
    const [todos, setTodos] = useState([]);


    useEffect(() => {

        api.get('/todos?sort=-createdAt').then(res => {
            setTodos(res.data);
        })
    })


    async function HandleDelete(id) {
        try {
            await api.delete(`/todos/${id}`)

        }
        catch (err) { alert('error') }

    }

    async function taskCheck(todo) {
        try {
            await api.put(`/todos/${todo._id}`, { ...todo, done: true })
        } catch (err) {

        }
    }

    return (
       <div className="container">
       <div className="option">
                <button className="finish btn-optn">task accomplished</button>
                <button className="pedding btn-optn">task to be performed</button>
        
        </div>
        <ul className="list-group">
            {todos.map(t => (
                <div className={t.done == true ? 'finish' : ''}>
                    <div className="card todos">
                        <div className={t.done == true ? ' card-body finish' : 'card-body pedding'}>
                            <li key={t._id}>
                                <strong >Description : </strong>
                                <p>{t.description}</p>
                                <hr />
                                <div >
                                    <button className="btn-trash" onClick={() => HandleDelete(t._id)}><FaTrashAlt color="white" /></button>
                                    <button onClick={() => taskCheck(t)} className={"btn-check"}><FaCheck color="green" /></button>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            ))}
        </ul>
        </div>
    )
}

export default List;