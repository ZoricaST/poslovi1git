import React from 'react';

import classes from './Posao.module.css';

const Posao = (props) => {
  return (
    <li className={classes.posao}>
      <h2>Naziv posla:{props.naslov}</h2>
      <hr/>
      <h3>Rok izvrsenja:{props.rok}</h3>
      <p>Opis posla:{props.opis}</p>
      <hr/><hr/>
    </li>
  );
};

export default Posao;
