import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const miUserContext = useContext(UserContext);

    return (
        <div>
            <h1>Home</h1>
            <hr/>
            { JSON.stringify( miUserContext ) }
        </div>
    )
}
