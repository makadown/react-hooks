import React, { useEffect, useState } from 'react';
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(() => {
        
    }, []); // si no le pongo el [], este useEffect correra siempre, 
    // es decir, cada que presione boton en input

    // Este se trigeará cada que cambie el valor de todo el formulario
    useEffect(() => {
        
    }, [formState]);

    useEffect(() => {
        
    }, [email]);

    const handleInputChange = ({target}) => {
        // los [] ayudan para encontrar dinamicamente 
        // el campo del state a modificar
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>Simple Form (useEffect)</h1>
            <hr/>
            <div className="form-group">
              <label htmlFor="name"></label>
              <input type="text" name="name" id="name" 
                    className="form-control" placeholder="Escribe tu nombre"
                    value={name}
                    onChange={ handleInputChange }
                    aria-describedby="name"/>
              <small id="name" className="text-muted">Nombre</small>
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input type="email" name="email" id="email" 
                    className="form-control" placeholder="Escribe tu email"
                    value={email}
                    onChange={ handleInputChange }
                    aria-describedby="email"/>
              <small id="email" className="text-muted">Email</small>
            </div>

            {
               (name === '123') && <Message />
            }
        </>
    )
}
