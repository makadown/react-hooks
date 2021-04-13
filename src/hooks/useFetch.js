import { useRef, useEffect, useState } from 'react'

export const useFetch = (url) => {
    const isMountedRef = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        // este metodo dentro del return  se dispara cuando el 
        // efecto se desmonte
        return () => {
            isMountedRef.current = false;
        }
    }, []);

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null
        });
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMountedRef.current) {
                    setState({
                        data,
                        loading: false,
                        error: null
                    });
                } else {
                    console.log('%c Set state no se llamó!',
                        'color: orange; font-weight: bold;')
                }

            });

    }, [url]);

    return state;
}
