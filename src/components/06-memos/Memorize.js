import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const { state, increment } = useCounter(10);
    
    const [show, setShow] = useState(true);

    return (
        <div>
            <div>
                <h1>Memorize:  <Small value={state}></Small> </h1>
                <hr />
                <button className="btn btn-primary mb-3"
                    onClick={() => increment(1)}>+1</button>
            </div>
            <div>
                <button className="btn btn-outline-primary"
                onClick={() => setShow(!show) }
                >
                    show/hide {JSON.stringify(show)}
                </button>
            </div>
        </div>
    )
}
