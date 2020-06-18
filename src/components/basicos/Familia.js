import { cloneElement } from 'react';

export default ({ sobrenome, children }) => {
  return children.map((child, i) => cloneElement(child, { sobrenome, key: i }));
};
