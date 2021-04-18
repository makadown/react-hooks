import {shallow} from 'enzyme';
import { TodoListItem } from '../../../components/08-use-reducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en componente TodoListItem', () => {
    
    const singleTodo = demoTodos[0];
    const index = 0;
    let handleDelete = jest.fn();
    let handleToggle = jest.fn();
    
    let wrapper = shallow(<TodoListItem todo={singleTodo} index={index}
                    handleDelete={handleDelete} handleToggle={handleToggle}>
                        </TodoListItem>);

    beforeEach(() => {
        wrapper = shallow(<TodoListItem todo={singleTodo} index={index}
            handleDelete={handleDelete} handleToggle={handleToggle}>
                </TodoListItem>);
    });

    test('Debe de mostrar TodoListItem correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('TodoListItem debe llamar la funcion handleDelete', () => {
        wrapper.find('button').simulate('click');
        // expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(singleTodo.id);
    });
   
    test('TodoListItem debe llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        // expect(handleToggle).toHaveBeenCalled();
        expect(handleToggle).toHaveBeenCalledWith(singleTodo.id);
    });
     
    test('TodoListItem debe mostrar el texto correctamente', () => {
        const contenido = wrapper.find('p').text();
        expect(contenido.trim().length).toBeGreaterThan(5);
        expect(contenido).toContain('1.-');
        expect(contenido).toContain(singleTodo.desc);
    });

    test('Debe tener la clase complete si el todo es done!', () => {
        let singleTodoDone = {...singleTodo};
        singleTodoDone.done = true;
        const otroWrapper = 
                shallow(<TodoListItem todo={singleTodoDone}></TodoListItem>);
        expect(otroWrapper.find('.complete').exists()).toBeTruthy();        
    });
});
