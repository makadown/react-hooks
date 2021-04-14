import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css';

export const Layout = () => {
    const { state, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    const { quote } = !!data && data[0];

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Breaking Bad Quotes (Layout Effect)</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p className="mb-0" ref={pTag}> {quote} </p>
            </blockquote>

            <pre>{ JSON.stringify(boxSize) }</pre>

            <button className="btn btn-primary"
                onClick={() => increment(1)}>
                Siguiente Quote
                </button>

        </div>
    )
}
