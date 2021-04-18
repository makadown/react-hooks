import {renderHook, act} from '@testing-library/react-hooks';
import {useCounter} from '../../hooks/useCounter';

describe('Tests en Hook de useCounter', () => {
    
    test('Debe retornar valores por defecto ', () => {
        
        const {result} = renderHook( () => useCounter() );
        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
        
    });

    test('Debe tener counter en 100 ', () => {
        const {result} = renderHook( () => useCounter(100) );
        expect(result.current.state).toBe(100);
    });


    test('Debe incrementar counter en 1', () => {
        const {result} = renderHook( () => useCounter(100) );
        const {increment} = result.current;
        act( () => {
            increment(1);
        });
        expect(result.current.state).toBe(101);
    });
    
    test('Debe decrementar counter en 1', () => {
        const {result} = renderHook( () => useCounter(100) );
        const {decrement} = result.current;
        act( () => {
            decrement(1);
        });
        expect(result.current.state).toBe(99);
    });

    test('Debe resetear counter en predeterminado (100)', () => {
        const {result} = renderHook( () => useCounter(100) );
        const {increment, reset} = result.current;
        act( () => {
            // aqui solo puedo invocar cada metodo 1 sola vez!
            // es decir, no puedo invocar aqui 2 veces el increment.
            // ver documentación oficial!
            increment(4);
            reset();
        });
        expect(result.current.state).toBe(100);
    });

    
});
