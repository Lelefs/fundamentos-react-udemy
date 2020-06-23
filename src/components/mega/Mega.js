import React, { useState } from 'react';
import './Mega.css';

export default ({ qtd }) => {
  const [qtde, setQtde] = useState(qtd || 6);
  const numerosIniciais = gerarNumeros(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtd) {
    const numeros = Array(qtd)
      .fill(0)
      .reduce(nums => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(' ')}</h3>
      <div>
        <label>Qtd de números:</label>
        <input
          min="6"
          max="12"
          type="number"
          value={qtde}
          onChange={e => setQtde(+e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          setNumeros(gerarNumeros(qtde));
        }}
      >
        Gerar números
      </button>
    </div>
  );
};
