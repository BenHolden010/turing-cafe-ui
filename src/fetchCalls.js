
export function fetchReservations(){
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(res=>res.json())
}

export function postReservation({name, date, time, number}){
  return fetch('http://localhost:3001/api/v1/reservations' , {
    method:'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      date,
      time,
      number
    })
  })
  .then(res=>res.json())
}

export function deleteReservation(id){
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
    method: 'DELETE'
  })
}