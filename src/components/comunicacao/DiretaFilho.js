import React from 'react';

export default ({ nome, idade, nerd }) => {
  return (
    <div>
      <span>{nome} </span>
      <strong>{idade} </strong>
      <span>{nerd ? 'Verdadeiro' : 'Falso'}!</span>
    </div>
  );
};
