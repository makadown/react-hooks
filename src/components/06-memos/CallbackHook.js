import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
   /* const increment = () => {
        setCounter(counter+1);
    };*/

    const increment = useCallback(
        (num) => {
            // Unicamente con useCallback se necesita usar asi el setCounter
            // con el c=> c  y no con counter + 1
            setCounter(c => c+num);
        },
        [setCounter],
    );
    
    return (
        <div>
            <h1>Callback Hook {counter}</h1>
            <hr/>
            <ShowIncrement increment={ increment }/>
        </div>
    )
}
