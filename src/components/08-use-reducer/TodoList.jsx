import React, { memo } from 'react'
import { TodoListItem } from './TodoListItem';

export const TodoList = memo((props) => {
    const { todos, handleDelete, handleToggle } = props;

    return (
        <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, index) => (
                                <TodoListItem todo={todo} 
                                        key={todo.id}
                                        index={index} 
                                        handleDelete={handleDelete} 
                                        handleToggle={handleToggle}>

                                </TodoListItem>
                            ))
                        }
        </ul>
    )
}
);
// Para que en los tests no se haga bolas con el memo
TodoList.displayName='TodoList';