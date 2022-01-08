import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../komponente/UI/Button'

const Neka = () => {
    return (
        <React.Fragment>
           
           <section>
           <p>Ja sam neka stranica</p>
           <Link to='/'><Button color="blue" text='Nazad'/></Link>
      </section> 
        </React.Fragment>
    )
}

export default Neka