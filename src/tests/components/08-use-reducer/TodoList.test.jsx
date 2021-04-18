import { TodoList } from '../../../components/08-use-reducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';
import {shallow} from 'enzyme';

describe('Pruebas en <TodoList/>', () => {
    
    let handleDelete = jest.fn();
    let handleToggle = jest.fn();
    const wrapper = shallow(<TodoList todos={demoTodos}
        handleDelete={handleDelete} handleToggle={handleToggle}>
            </TodoList>);

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe tener los elementos de demoTodos en <TodoListItem/>', () => {
        expect( wrapper.find('TodoListItem').length ).toBe(demoTodos.length);
        expect( wrapper.find('TodoListItem').at(0)
                        .prop('handleDelete') ).toEqual(expect.any(Function));
    })
    
});
