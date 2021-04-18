import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';
import {shallow} from 'enzyme';

describe('Pruebas en <RealExampleRef/>', () => {
    test('Debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<RealExampleRef></RealExampleRef>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBeFalsy();
    });

    test('Debe mostrar el componente <MultipleCustomHooks/>', () => {
        const wrapper = shallow(<RealExampleRef></RealExampleRef>);
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();
    });
    
});
