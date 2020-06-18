import React from 'react';
import If from './If';

export default ({ usuario }) => {
  return (
    <If test={usuario && usuario.nome}>
      Seja bem vindo <strong>{usuario.nome}</strong>!
    </If>
  );
};
