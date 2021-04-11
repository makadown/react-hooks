import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});
    const {x , y} = coords;

    useEffect(() => {

        const mouseMoveListener = (e) =>  {
            const localCords = {x: e.x, y: e.y};
            setCoords( localCords );
        };

        window.addEventListener('mousemove', mouseMoveListener );
        return () => {
            window.removeEventListener('mousemove', mouseMoveListener)
        }
    }, []);

    return (
        <div>
            <h3>Eres Genial!</h3>
            <p>
                x: {x}, y: {y}
            </p>
        </div>
    )
}
