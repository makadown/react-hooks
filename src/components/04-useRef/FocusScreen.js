import React, { useRef } from 'react';
import '../02-useEffect/effects.css';


export const FocusScreen = () => {

    const miRef = useRef();

    const handleClick = () => {
        // tmb se puede usar .select()
        // document.querySelector('input').focus();
        miRef.current.select();
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={miRef}
                type="text" className="form-control"
                placeholder="Su nombre" />

            <button className="btn btn-primary mt-2"
                onClick={handleClick}>
                Focus
                </button>
        </div>
    )
}
