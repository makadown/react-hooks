import React, { memo } from 'react';

export const TodoListItem = memo((props) => {
  // console.log('props de todolistitem', props);
  const { todo, index, handleDelete, handleToggle } = props;

  let nombreClase = 'none';
  
  if (todo.done && todo.done === true) {
    nombreClase = 'complete disabled';
  }

  return (
    <li
      key={todo.id}
      className="list-group-item list-group-item-dark d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          <p
            className={nombreClase}
            onClick={() => handleToggle(todo.id)}
          >
            {index + 1}.- {todo.desc}
          </p>
        </div>
        { todo.done ? 'Finalizado' : 'Pendiente'}
      </div>
      <span>
        <button disabled={!todo.done}
          className="btn btn-danger"
          onClick={() => handleDelete(todo.id)}
        >
          Borrar
        </button>
      </span>
    </li>
  );
});
