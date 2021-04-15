import React, {memo} from 'react';

export const Small = memo(({value}) => {
    console.log('Componente Small se ha llamado papu!');
    return (
        <small>
            {value}
        </small>
    )
});
