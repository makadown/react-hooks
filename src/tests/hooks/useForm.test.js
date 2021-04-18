import {renderHook, act} from '@testing-library/react-hooks';
import {useForm} from '../../hooks/useForm';

describe('Pruebas de hook useForm', () => {

    const initialForm = {
        name: 'fernando',
        email: 'fernando@gmail.com'
    };

    test('Debe retornar un formulario por defecto ', () => {
        
        const {result} = renderHook( () => useForm(initialForm) );
        expect(result.current.length).toBe(3);
        expect(result.current[0]).toBe(initialForm);
        const handleInputChange = result.current[1];
        expect(typeof handleInputChange).toBe('function');
        const reset = result.current[2];
        expect(typeof reset).toBe('function');
        
    });

    test('Debe cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook( () => useForm(initialForm) );
        const nuevoNombre = 'POPO';
        const handleInputChange = result.current[1];
        act( () => {
            const target = { name: 'name', value: nuevoNombre};
            const event = {target}
            handleInputChange(event);
        }); 
        expect(result.current[0].name).not.toBe(initialForm.name);
    });
    
    test('Debe re-establecer el valor del formulario (después de cambiar name)', () => {
        const {result} = renderHook( () => useForm(initialForm) );
        const nuevoNombre = 'POPO';
        const handleInputChange = result.current[1];
        const reset = result.current[2];
        act( () => {
            const target = { name: 'name', value: nuevoNombre};
            const event = {target}
            handleInputChange(event);
        }); 
        expect(result.current[0].name).not.toBe(initialForm.name);
        act( () => {
            reset();
        });
        expect(result.current[0].name).toBe(initialForm.name);
    });
    
});
