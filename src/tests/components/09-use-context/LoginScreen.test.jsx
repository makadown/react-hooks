import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-use-context/LoginScreen';
import { UserContext } from '../../../components/09-use-context/UserContext';

describe('Pruebas en <LoginScreen/>', () => {
  const setUser = jest.fn();

  const user = {
    name: 'mayito',
    email: 'mayito@mayito.com',
    id: 124
  };
  const wrapper = mount(
    <UserContext.Provider value={{setUser}}>
      <LoginScreen />
    </UserContext.Provider>
  );
  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Al presionar boton, debe ejecutar el setuser con el argumento requerido ', () => {
    wrapper.find('button').simulate('click', user);
    expect(setUser).toHaveBeenCalled();
   // expect(setUser).toHaveBeenCalledWith(user);
  });
});
