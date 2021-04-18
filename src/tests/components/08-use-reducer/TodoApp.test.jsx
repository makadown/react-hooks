import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-use-reducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas de <TodoApp/>', () => {
  Storage.prototype.setItem = jest.fn(() => {});

  test('Debe mostrarse correctamente ', () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe agregar dos todos', () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });
    expect(wrapper.find('h1').text().trim()).toBe(`Todo App ( 2 )`);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('Debe eliminar un todo', () => {
    const wrapper = mount(<TodoApp />);

    act(() => {

      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    });

    expect(wrapper.find('h1').text().trim()).toBe('Todo App ( 1 )');

    act(() => {
      wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
    });

    expect(wrapper.find('h1').text().trim()).toBe('Todo App ( 0 )');
  });
});
