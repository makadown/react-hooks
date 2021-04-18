import { renderHook } from '@testing-library/react-hooks';
import {useFetch} from '../../hooks/useFetch';


describe('Pruebas sobre hook de useFetch', () => {
    test('Debe retornar la información del fetch por defecto', () => {
        const {result} = renderHook( () => 
                useFetch(`https://www.breakingbadapi.com/api/quotes/1`) );

        const {data, loading, error} = result.current;
        expect(data).toBeNull();
        expect(loading).toBeTruthy();
        expect(error).toBeNull();
    });

    test('Debe retornar la información del fetch, loading false, error false', async() => {
        const {result, waitForNextUpdate} = renderHook( () => 
                useFetch(`https://www.breakingbadapi.com/api/quotes/1`) );
        
        await waitForNextUpdate();
        const {data, loading, error} = result.current;
        
        expect(data.length).toBe(1);
        expect(loading).toBeFalsy();
        expect(error).toBeNull();
    });

    test('Debe manejar error', async() => {
        const {result, waitForNextUpdate} = renderHook( () => 
                useFetch(`https://reqres.in/papi/users?page=2`) );
        
        await waitForNextUpdate();
        const {data, loading, error} = result.current;
        
        expect(data).toBeNull;
        expect(loading).toBeFalsy();
        expect(typeof error).toBe('string');
    });
    
});
