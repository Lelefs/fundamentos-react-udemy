import React from 'react';
import If, { Else } from './If';

export default ({ usuario }) => {
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong>!
        <Else>
          Seja bem vindo <strong>amigão</strong>!
        </Else>
      </If>
    </div>
  );
};
