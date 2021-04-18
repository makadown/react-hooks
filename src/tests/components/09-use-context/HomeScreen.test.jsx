import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-use-context/HomeScreen';
import { UserContext } from '../../../components/09-use-context/UserContext';

describe('Pruebas en <HomeScreen/>', () => {
    const user = {
        name: 'mayito_test',
        email: 'mayito@mayito.com'
    };
  const wrapper = mount(
    <UserContext.Provider value={{user}}>
      <HomeScreen />
    </UserContext.Provider>
  );
  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
