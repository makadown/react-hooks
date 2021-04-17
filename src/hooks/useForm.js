import { useState } from 'react'

/**
 * Hook auxiliar para manejo de valores de formularios
 * @param {*} initialState 
 * @returns 
 */
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    };

    const handleInputChange = ({ target }) => {
        // los [] ayudan para encontrar dinamicamente 
        // el campo del state a modificar
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    return [values, handleInputChange, reset];
}
