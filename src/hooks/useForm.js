import React, { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        // los [] ayudan para encontrar dinamicamente 
        // el campo del state a modificar
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    return [values, handleInputChange];
}
