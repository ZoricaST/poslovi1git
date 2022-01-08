import React from 'react';

import Posao from './Posao';
import classes from './PosloviLista.module.css';

const PosloviLista = (props) => {
  return (
    <ul className={classes['poslovi-list']}>
      {props.poslovi.map((posao) => (
        <Posao
          key={posao.id}
          naslov={posao.naslov}
          rok={posao.rok}
          opis={posao.opis}
        />
      ))}
    </ul>
  );
};

export default PosloviLista;
