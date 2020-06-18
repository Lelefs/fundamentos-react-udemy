import React from "react";

const ComParametro = ({ titulo, aluno, nota }) => {
    const status = nota >= 7 ? 'aprovado' : 'reprovado'
    return (
        <div>
            <h2>{titulo}</h2>
            <p>
                <strong>{aluno} </strong>
                tem nota
                <strong> {nota} </strong>
                e está
                <strong> {status}</strong>!
            </p>
        </div>
    );
};

export default ComParametro;
