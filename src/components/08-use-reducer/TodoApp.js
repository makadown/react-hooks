import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

export const TodoApp = () => {
    const [ todo ] = useReducer(todoReducer, initialState);
    console.log(todo);
    return (
        <div>
            <h1>Todo App</h1>
            <hr />
            <ul>
                <li>Hola</li>
                <li>Mundo</li>
            </ul>
        </div>
    );
}
