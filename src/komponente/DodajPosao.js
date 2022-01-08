import React, { useRef } from 'react';

import classes from './DodajPosao.module.css';

function DodajPosao(props) {
  const naslovRef = useRef('');
  const opisRef = useRef('');
  const rokRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const posao = {
      naslov: naslovRef.current.value,
      opis: opisRef.current.value,
      rok: rokRef.current.value,
    };

    props.onDodajPosao(posao);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='naslov'>Naslov</label>
        <input type='text' id='naslov' ref={naslovRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opis'>Opis</label>
        <textarea rows='5' id='opis' ref={opisRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='rok'>Rok</label>
        <input type='text' id='rok' ref={rokRef} />
      </div>
      <button>Dodaj posao</button>
    </form>
  );
}

export default DodajPosao;