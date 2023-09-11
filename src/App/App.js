import './App.css';
import React, { useEffect, useState } from 'react';
import Form from '../Form'
import Reservations from '../Reservations';
import {fetchReservations, postReservation }  from '../fetchCalls';

function App() {

  const [reservations,setReservations] = useState([])
  
  useEffect(()=>{
    fetchReservations()
    .then(data=>setReservations(data))
    .catch(err=>console.log(err))
  },[reservations])

  function addReservation(newReservation){
    // setReservations([...reservations, newReservation]);
    postReservation(newReservation)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      <Form addReservation={addReservation}/>
      </div>
      <div className='resy-container'>
      <Reservations reservations={reservations} />
      </div>
    </div>
  );
}

export default App; 