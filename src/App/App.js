import './App.css';
import React, { useEffect, useState } from 'react';
import Form from '../Form'
import Reservations from '../Reservations';
import {fetchReservations, postReservation, deleteReservation }  from '../fetchCalls';

function App() {

  const [reservations,setReservations] = useState([])
  
  useEffect(()=>{
    fetchReservations()
    .then(data=>setReservations(data))
    .catch(err=>console.log(err))
  },[])

  function addReservation(newReservation){
    setReservations([...reservations, newReservation]);
    postReservation(newReservation)
  }

  function cancelReservation(id){
    const filteredReservations = reservations.filter(reservation => reservation.id !== id);
    setReservations(filteredReservations)
    deleteReservation(id)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      <Form addReservation={addReservation}/>
      </div>
      <div className='resy-container'>
      <Reservations reservations={reservations} cancelReservation={cancelReservation} />
      </div>
    </div>
  );
}

export default App; 