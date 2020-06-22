import React from 'react';

export default ({ setInc, setDec }) => {
  return (
    <>
      <button onClick={setInc}>+</button>
      <button onClick={setDec}>-</button>
    </>
  );
};
