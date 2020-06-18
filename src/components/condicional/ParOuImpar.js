import React from 'react';

export default ({ numero }) => {
    const isPar = numero % 2 === 0;

    return (
        <div>
            {numero} é {isPar ? <span>par</span> : <span>ímpar</span>}
        </div>
    );
};
