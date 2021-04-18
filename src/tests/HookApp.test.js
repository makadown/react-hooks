import React from 'react';
import { shallow } from 'enzyme';
import HookApp from '../HookApp';

describe('Tests Raices', () => {
    test('Debe cargar ', () => {
        
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
});
