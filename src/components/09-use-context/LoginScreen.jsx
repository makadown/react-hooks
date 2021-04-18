import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    // 1. obtener la referencia al userContext
    const {setUser} = useContext(UserContext);

    const userLogged = {
         name: 'mayito',
         email: 'mayito@mayito.com',
        id: 124
       };
       
    return (
        <div>
            <h1>Login</h1>
            <hr/>
            <button className="btn btn-primary"
                onClick={ () => setUser(userLogged) }>
LOGIN!
            </button>
        </div>
    )
}
