import React from 'react';
import { useState } from 'react';

import './Input.css';

export default () => {
  const [valor, setValor] = useState('Inicial');

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div>
        <input value={valor} onChange={e => setValor(e.target.value)} />
        <input value={valor} readOnly />
      </div>
    </div>
  );
};
