import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    const handleSubmit = (e) => {
            e.preventDefault();
            console.log( formValues );
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form + custom Hook</h1>
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
            <div className="form-group">
              <label htmlFor="password"></label>
              <input type="password" name="password" id="password" 
                    className="form-control" placeholder="**************"
                    value={password}
                    onChange={ handleInputChange }
                    aria-describedby="password"/>
              <small id="password" className="text-muted">Password</small>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary"> 
                        Aceptar
               </button>
            </div>
        </form>
    )
}
