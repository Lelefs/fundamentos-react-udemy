import React from "react";

export default ({ min, max }) => {
    const random = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Número aleatório</h2>
            <p>
                <strong>Número mínimo: </strong> {min}
            </p>
            <p>
                <strong>Número máximo: </strong> {max}
            </p>
            <p>
                <strong>Número aleatório: </strong> {random}
            </p>
        </div>
    );
};
