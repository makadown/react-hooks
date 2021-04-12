import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
    const state = useFetch( `https://www.breakingbadapi.com/api/quotes/69`);
    console.log(state);
    return (
        <div>
            <h1>Multiple Custom hooks!!</h1>
        </div>
    )
}
