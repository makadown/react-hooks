import React, { useMemo, useState } from 'react';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

    const { state, increment } = useCounter(5000);
    const [show, setShow] = useState(true);
    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

    return (
        <div>
            <div>
                <h1>Memo Hook</h1>
                <h3>Counter:  <small>{state}</small> </h3>
                <hr />
                <p>{ memoProcesoPesado }</p>
                <button className="btn btn-primary me-3"
                    onClick={() => increment(1)}>+1</button>
                <button className="btn btn-outline-primary"
                    onClick={() => setShow(!show) }
                    >
                        show/hide {JSON.stringify(show)}
                    </button>
            </div>
            <div>
                
            </div>
        </div>
    )
}
