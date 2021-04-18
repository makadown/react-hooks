import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-use-context/AppRouter';
import { UserContext } from '../../../components/09-use-context/UserContext';

describe('Pruebas <AppRouter/>', () => {
  const setUser = jest.fn();
  const user = {
    name: 'mayito_test',
    email: 'mayito@mayito.com',
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
