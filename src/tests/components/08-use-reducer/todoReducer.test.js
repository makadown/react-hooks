import { todoReducer } from '../../../components/08-use-reducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en todoReducer', () => {

    test('Debe de retornar el estado por defecto', () =>{
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('Debe de agregar un todo', () =>{
        const nuevoTodo = {
            id: 3,
            desc: 'Aprender NodeJS',
            done: 'false'
        };
        const addAction = {
            type: 'add',
            payload: nuevoTodo
        };
        // demo
        const state = todoReducer(demoTodos, addAction);
        expect(state.length).toBe(3);
    });

    test('Debe de eliminar un todo', () =>{
        const todoEliminado = { ...demoTodos[0] };
        const deleteAction = {
            type: 'delete',
            payload: todoEliminado.id
        };
        // demo
        const state = todoReducer(demoTodos, deleteAction);
        expect(state.length).toBe(1);
    });

    test('Debe de togglear un todo', () =>{
        const todoDone = { ...demoTodos[0] };

        const toggleAction = {
            type: 'toggle',
            payload: todoDone.id
        };
        const state = todoReducer(demoTodos, toggleAction);
        const cambiado = state.find( f => todoDone.id === f.id);
        expect(cambiado.done).toBeTruthy();
    });

});
