import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { shallow } from 'enzyme';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
// se usa jest.mock debido a que como ya se hizo test, 
// ya no es de interes volverlo a usar para pruebas. Bueno, eso entendí...
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            state: 10,
            increment: () => {},
            decrement: () => {},
            reset: () => {}
        });
    });
    
    test('MultipleCustomHooks debe mostrarse correctamente', () => {
        // Esto solo se hace cuando se hace jest.mock
        useFetch.mockReturnValue({
            data:null,
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks></MultipleCustomHooks>);
        expect(wrapper).toMatchSnapshot();
    });

    test('MultipleCustomHooks debe mostrar la info ya obtenida', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Mayito',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks></MultipleCustomHooks>);
        expect(wrapper.find('.alert').exists()).toBeFalsy();
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Mayito');
    });
    
});
