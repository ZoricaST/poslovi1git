import React, {useState,useEffect, useCallback} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './komponente/Footer';
import PosloviLista from './komponente/PosloviLista';
import DodajPosao from './komponente/DodajPosao';
import Neka from './stranice/Neka';
import Kontakt from './stranice/Kontakt';
import Onama from './stranice/Onama';
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
    <Router>
       
     <div className="container">
     <Routes>
     <Route 
     path='/' 
     element={ 

     
    <React.Fragment>
      
      <section>
<DodajPosao onDodajPosao={dodajPosaoHandler}/>
      </section>

      <section>
        <button onClick={izvuciPosloveHandler}>Prikaži zadate poslove</button>
      </section>

      <section>
    {sadrzaj} 
      </section>

    </React.Fragment>
    
  }  />
    <Route 
     path='/nesto' 
     element={ 
<p>Nesto</p>
      }
     
     />
    <Route path='/neka' element={<Neka />} />
    <Route path='/kontakt' element={<Kontakt />} />
    <Route path='/onama' element={<Onama />} />
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
