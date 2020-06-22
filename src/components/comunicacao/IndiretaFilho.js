import React from 'react';

export default ({ quandoClicar }) => {
  const gerarIdade = () => parseInt(Math.random() * 20) + 50;
  const gerarNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={() => {
          quandoClicar('João', gerarIdade(), gerarNerd());
        }}
      >
        Fornecer informações
      </button>
    </div>
  );
};
