import React, { memo } from 'react';
import { useForm } from '../../hooks/useForm';

/**
 * Este es un fragmento que captura un texto y manda generar
 * un nuevo Todo
 */
export const TodoAdd = memo((props) => {
  const { handleAddTodo } = props;

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    // invoco la referencia de la funcion para que en el papa se 
    // agregue el todo
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4> Agregar Todo </h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="d-grid gap-2">
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Aprender..."
            autoComplete="off"
            value={description}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn-outline-warning mt-1">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
});

// Para que en los tests no se haga bolas con el memo
TodoAdd.displayName='TodoAdd';