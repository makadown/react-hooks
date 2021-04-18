import React from 'react';
import {shallow, mount} from 'enzyme';
import { TodoAdd } from '../../../components/08-use-reducer/TodoAdd';

describe('Pruebas en <TodoAdd/>', () => {
    const handleAddTodo = jest.fn();
    const handleInputChange = jest.fn();
    const wrapper = shallow(
            <TodoAdd 
                handleAddTodo={handleAddTodo}
            />);

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar addTodo al presionar submit sin texto en input', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar addTodo al presionar submit con texto en input', () => {
        // Esto aplica solo el mugre React.memo!
        const localWrapper = mount(
            <TodoAdd 
                handleAddTodo={handleAddTodo}
            />);

        const value = 'Aprender unit test';
        
        localWrapper.find('input').simulate('change', {
            target: {
                value, name:'description'
            }
        });
        // formSubmit
        localWrapper.find('form').simulate( 'submit', {preventDefault(){}});
        // Expects
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        // Obligo a saber que el metodo todo ha sido enviado con la estructura siguiente
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number)
        });
        // No voy a evaluar el reset, sino que voy a evaluar el efecto del reset,
        // que en este caso es, verificar que la descripcion del input regrese a ''
        expect(localWrapper.find('input').prop('value')).toBe('');
    });
});
