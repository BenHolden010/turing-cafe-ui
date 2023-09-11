import './Card.css';

const Card = ({ name, date, time, number, id, cancelReservation }) => {
    return (
      <div className='card'>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{time} pm</p>
        <p>{number}</p>
        <button onClick={()=>{cancelReservation(id)}}>Cancel Reservation</button>
      </div>
    )
  }
  export default Card;