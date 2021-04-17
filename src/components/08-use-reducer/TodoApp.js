import React, { memo, useEffect, useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    // Si no hay localstorage (null), regresa un arreglo vacío
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = memo(() => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    // Este useEffect me ayudará a almacenar en localstore cada que se 
    // detecte un cambio en el arreglo de todos!
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = (todoId) => {
        console.log(todoId);
        // crear la action para borrar
        const action = {
            type: 'delete',
            payload: todoId
        };
        // dispatch
        dispatch(action);
    };

    const handleToggle = (todoId) => {
        console.log(todoId);
        // crear la action para borrar
        const action = {
            type: 'toggle',
            payload: todoId
        };
        // dispatch
        dispatch(action);
    };

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    };

    return (
        <div>
            <h1>Todo App ( {todos.length} )</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* Crear componente TodoList requiriendo 
                        todos, handleDelete, handleToggle
                    */}
                    <TodoList todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}>
                    </TodoList>
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}></TodoAdd>
                    <hr />
                    {
                        todos.length > 0 &&
                        <small>Haz click en cada tarea para darla como hecha.</small>
                    }
                </div>
            </div>
        </div>
    );
});
