import React, {useState,useEffect, useCallback} from 'react';
import PosloviLista from './komponente/PosloviLista';
import DodajPosao from './komponente/DodajPosao';
import './App.css';

function App() {

  const [poslovi, setPoslovi] = useState([]);
  const [ucitavaSe, setUcitavaSe] = useState(false);
  const [error,  setError]= useState(null);
  const izvuciPosloveHandler = useCallback(async()=>{
    
    setUcitavaSe(true);
    setError(null);
   
   try{const response=await fetch('https://poslovi-1b3cc-default-rtdb.firebaseio.com/poslovi.json');
   if(!response.ok){
     throw new Error('Nesto nije u redu')
   }

   const data = await response.json();

    const ucitaniPoslovi = [];
    for (const key in data){
      ucitaniPoslovi.push({
        id:key,
        naslov:data[key].naslov,
        opis: data[key].opis,
        rok: data[key].rok,
      })
    }
 

  setPoslovi(ucitaniPoslovi);
  setUcitavaSe(false);
} catch (error){
  setError(error.message);
}

setUcitavaSe(false);
},[]);

useEffect(() => {
  izvuciPosloveHandler();
  }, [izvuciPosloveHandler]);

  async function dodajPosaoHandler(posao){
   const response = await fetch('https://poslovi-1b3cc-default-rtdb.firebaseio.com/poslovi.json',{
     method: 'POST',
     body : JSON.stringify(posao),
     headers: {
       'Content-Type': 'application/json'
     }
   });
   const data = await response.json();
   console.log(data);
  }

  let sadrzaj = <p>Nisu nadjeni poslovi</p>
if(poslovi.length >0){
  sadrzaj = <PosloviLista poslovi={poslovi} />
}
if(error){
  sadrzaj =<p>{error}</p>
}
if(ucitavaSe){
  sadrzaj =<p>Ucitava se ...</p>
}
  return (
    <React.Fragment>
      <section>
<DodajPosao onDodajPosao={dodajPosaoHandler}/>
      </section>

      <section>
        <button onClick={izvuciPosloveHandler}>Prikaz poslova</button>
      </section>

      <section>
    {sadrzaj} 
      </section>

    </React.Fragment>
  );
}

export default App;
