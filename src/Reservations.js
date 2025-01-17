import './Reservations.css';
import Card from "./Card"
function Reservations({ reservations, cancelReservation}){

  const reservationCards = reservations.map(reservation => {
    return (
      <Card
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        id={reservation.id}
        key={reservation.id}
        cancelReservation={cancelReservation}
      />
    )
  })

  return (
    <div className='reservations-container'>
      {reservationCards}
    </div>
  )
}
export default Reservations;